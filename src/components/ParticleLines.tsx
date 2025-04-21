
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNeuralNetworkBg } from "./hooks/useNeuralNetworkBg";

const PRIMARY_COLOR = "#6e74af";

interface ParticleLinesProps {
  numPoints?: number;
  connectionDistance?: number;
  pointSpeed?: number;
  pointSize?: number;
  interactive?: boolean;
}

export default function ParticleLines({
  numPoints = 80,
  connectionDistance = 150,
  pointSpeed = 0.5,
  pointSize = 1.5,
  interactive = true,
}: ParticleLinesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const [mounted, setMounted] = useState(false);

  const {
    pointsRef,
    pathwaysRef,
    mouseRef,
    initPoints,
    handleMouseMove,
    handleMouseLeave,
    addActiveMousePathways,
    applyMouseMagnet,
  } = useNeuralNetworkBg({
    canvas: canvasRef.current,
    numPoints,
    connectionDistance,
    pointSpeed,
    pointSize,
  });

  // Fit canvas to parent
  useEffect(() => {
    setMounted(true);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      if (!canvas.parentElement) return;
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
      initPoints();
    };

    resize();
    window.addEventListener("resize", resize);

    if (interactive) {
      canvas.addEventListener("mousemove", handleMouseMove);
      canvas.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      window.removeEventListener("resize", resize);
      if (interactive) {
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseleave", handleMouseLeave);
      }
      cancelAnimationFrame(animationRef.current);
    };
  }, [
    interactive,
    initPoints,
    handleMouseMove,
    handleMouseLeave,
  ]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const points = pointsRef.current;

      // 1. Static connections in primary color
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const p1 = points[i], p2 = points[j];
          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDistance) {
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = PRIMARY_COLOR;
            ctx.globalAlpha = 0.30 * (1 - dist / connectionDistance) + 0.13;
            ctx.lineWidth = 1.28;
            ctx.shadowBlur = 7;
            ctx.shadowColor = PRIMARY_COLOR;
            ctx.stroke();
            ctx.restore();
            ctx.globalAlpha = 1;
          }
        }
      }

      // Dynamic mouse connections
      addActiveMousePathways();

      // Mouse-as-magnet
      applyMouseMagnet();

      // Move points and render them
      pointsRef.current.forEach((point) => {
        point.x += point.vx;
        point.y += point.vy;
        // Gentle random jitter
        point.vx += (Math.random() - 0.5) * 0.022;
        point.vy += (Math.random() - 0.5) * 0.022;
        // Speed damp for stability
        point.vx *= 0.994;
        point.vy *= 0.994;
        // Bounce at edges
        if (point.x < 0) { point.x = 0; point.vx *= -1; }
        if (point.y < 0) { point.y = 0; point.vy *= -1; }
        if (point.x > canvas.width) { point.x = canvas.width; point.vx *= -1; }
        if (point.y > canvas.height) { point.y = canvas.height; point.vy *= -1; }
        // Glow dot
        ctx.save();
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.size + 1.15, 0, Math.PI * 2);
        ctx.fillStyle = "#6e74af31";
        ctx.shadowBlur = 18;
        ctx.shadowColor = PRIMARY_COLOR;
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
        ctx.fillStyle = PRIMARY_COLOR;
        ctx.shadowBlur = 28;
        ctx.shadowColor = PRIMARY_COLOR;
        ctx.globalAlpha = 0.93;
        ctx.fill();
        ctx.restore();
        ctx.globalAlpha = 1;
      });

      // Draw active mouse pathways in primary only
      pathwaysRef.current.forEach((p) => {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(p.x1, p.y1);
        ctx.lineTo(p.x2, p.y2);
        ctx.strokeStyle = PRIMARY_COLOR;
        ctx.globalAlpha = p.opacity;
        ctx.lineWidth = 2.7;
        ctx.shadowBlur = 20;
        ctx.shadowColor = PRIMARY_COLOR;
        ctx.stroke();
        ctx.restore();
        ctx.globalAlpha = 1;
      });

      // Decay and filter
      pathwaysRef.current = pathwaysRef.current.filter((p) => {
        p.lifetime--;
        p.opacity *= 0.86;
        return p.lifetime > 0 && p.opacity > 0.08;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationRef.current);
  }, [
    pointsRef,
    pathwaysRef,
    mouseRef,
    connectionDistance,
    pointSize,
    addActiveMousePathways,
    applyMouseMagnet,
  ]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: mounted ? 1 : 0 }}
      transition={{ duration: 1.1 }}
      className="w-full h-full"
      style={{ pointerEvents: "none" }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        aria-hidden="true"
        tabIndex={-1}
        style={{
          filter: "brightness(1.10)",
          pointerEvents: "auto",
          userSelect: "none",
        }}
      />
    </motion.div>
  );
}
