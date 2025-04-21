
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNeuralNetworkBg, Point, Pathway } from "./hooks/useNeuralNetworkBg";

// Neon/bright palette from project context
const neuralPalette = [
  "#fff",
  "#1EAEDB", // Bright Blue
  "#0FA0CE",
  "#8B5CF6", // Vivid Purple
  "#D946EF", // Magenta Pink
  "#F97316", // Bright Orange
  "#33C3F0", // Sky Blue
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

  // Separate hook manages all point/pathway logic
  const {
    pointsRef,
    pathwaysRef,
    mouseRef,
    initPoints,
    handleMouseMove,
    handleMouseLeave,
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

    // Interactivity
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

  // Animation logic ‒ brighter neural connections that react to mouse
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Animate particles
      pointsRef.current.forEach((point) => {
        point.x += point.vx;
        point.y += point.vy;

        // Random walk
        point.vx += (Math.random() - 0.5) * 0.03;
        point.vy += (Math.random() - 0.5) * 0.03;

        // Slow down a bit over time
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
        ctx.arc(point.x, point.y, point.size * 2.5, 0, Math.PI * 2); // Make point much larger
        ctx.shadowColor = point.color;
        ctx.shadowBlur = 18;
        ctx.fillStyle = point.color;
        ctx.globalAlpha = 0.97;
        ctx.fill();
        ctx.restore();
      });

      // Draw static connections
      const points = pointsRef.current;
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const p1 = points[i], p2 = points[j];
          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDistance) {
            // Bolder, neon lines
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p1.color;
            ctx.lineWidth = 2.3 - dist / (connectionDistance * 0.9) * 2; // Thicker when close
            ctx.shadowColor = p1.color;
            ctx.shadowBlur = 10;
            ctx.globalAlpha = 0.57 + 0.38 * (1 - dist / connectionDistance);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      // Draw dynamic mouse-driven pathways, fade them quickly
      pathwaysRef.current.forEach((p) => {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(p.x1, p.y1);
        ctx.lineTo(p.x2, p.y2);
        ctx.strokeStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 18;
        ctx.lineWidth = 3.2;
        ctx.globalAlpha = p.opacity;
        ctx.stroke();
        ctx.restore();
      });
      // Decrease lifetime and opacity of fresh pathways, remove if gone
      pathwaysRef.current = pathwaysRef.current.filter((p) => {
        p.lifetime--;
        p.opacity *= 0.79;
        return p.lifetime > 0 && p.opacity > 0.05;
      });

      animationRef.current = requestAnimationFrame(animate);
    };
    animate();

    // no overlay/gradient/fade effect anymore

    return () => cancelAnimationFrame(animationRef.current);
  }, [
    pointsRef,
    pathwaysRef,
    mouseRef,
    connectionDistance,
    pointSize,
  ]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: mounted ? 1 : 0 }}
      transition={{ duration: 1.1 }}
      className="w-full h-full"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        aria-hidden="true"
      />
    </motion.div>
  );
}
