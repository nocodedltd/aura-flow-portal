
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNeuralNetworkBg, Point, Pathway } from "./hooks/useNeuralNetworkBg";

// Neon/bright palette from project context
const neuralPalette = [
  "#fff",
  "#1EAEDB",
  "#0FA0CE",
  "#8B5CF6",
  "#D946EF",
  "#F97316",
  "#33C3F0",
];

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
  } = useNeuralNetworkBg({
    canvas: canvasRef.current,
    numPoints,
    connectionDistance,
    pointSpeed,
    pointSize,
    palette: neuralPalette,
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

  // Animation: force mouse-to-point connections every frame around mouse
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Draw static connections
      const points = pointsRef.current;
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
            ctx.strokeStyle = p1.color;
            ctx.globalAlpha = 0.22 * (1 - dist / connectionDistance) + 0.08;
            ctx.lineWidth = 1.1;
            ctx.shadowBlur = 6; // Stronger glow for contrast
            ctx.shadowColor = p1.color;
            ctx.stroke();
            ctx.restore();
            ctx.globalAlpha = 1;
          }
        }
      }

      // 2. Add fresh mouse-to-point connection lines if mouse is active
      addActiveMousePathways();

      // 3. Animate & draw the moving points ("neurons")
      pointsRef.current.forEach((point) => {
        point.x += point.vx;
        point.y += point.vy;

        // Random walk
        point.vx += (Math.random() - 0.5) * 0.03;
        point.vy += (Math.random() - 0.5) * 0.03;

        // Inertia/friction
        point.vx *= 0.995;
        point.vy *= 0.995;

        // Bounce off edges
        if (point.x < 0) { point.x = 0; point.vx *= -1; }
        if (point.y < 0) { point.y = 0; point.vy *= -1; }
        if (point.x > canvas.width) { point.x = canvas.width; point.vx *= -1; }
        if (point.y > canvas.height) { point.y = canvas.height; point.vy *= -1; }

        // Draw point (neuron)
        ctx.save();
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.size + 0.6, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff11"; // halo outer
        ctx.shadowBlur = 12;
        ctx.shadowColor = point.color;
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
        ctx.fillStyle = point.color;
        ctx.shadowBlur = 26;
        ctx.shadowColor = point.color;
        ctx.globalAlpha = 0.87;
        ctx.fill();
        ctx.restore();
        ctx.globalAlpha = 1;
      });

      // 4. Draw dynamic mouse-to-point pathways with glow and quick fade
      pathwaysRef.current.forEach((p) => {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(p.x1, p.y1);
        ctx.lineTo(p.x2, p.y2);
        ctx.strokeStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.lineWidth = 2.8;
        ctx.shadowBlur = 18;
        ctx.shadowColor = p.color;
        ctx.stroke();
        ctx.restore();
        ctx.globalAlpha = 1;
      });

      // 5. Update and filter out faded pathways
      pathwaysRef.current = pathwaysRef.current.filter((p) => {
        p.lifetime--;
        p.opacity *= 0.85;
        return p.lifetime > 0 && p.opacity > 0.10;
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
          filter: "brightness(1.1)",
          pointerEvents: "auto",
          userSelect: "none",
        }}
      />
    </motion.div>
  );
}
