
import { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface ParticleLinesProps {
  numPoints?: number;
  lineColor?: string;
  pointColor?: string;
  connectionDistance?: number;
  pointSpeed?: number;
  pointSize?: number;
}

export default function ParticleLines({
  numPoints = 60,
  lineColor = "#6e74af",
  pointColor = "#6e74af",
  connectionDistance = 150,
  pointSpeed = 0.5,
  pointSize = 1,
}: ParticleLinesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<Point[]>([]);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resize canvas to match parent size
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };

    // Initialize points
    const initPoints = () => {
      const points: Point[] = [];
      for (let i = 0; i < numPoints; i++) {
        points.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * pointSpeed,
          vy: (Math.random() - 0.5) * pointSpeed,
        });
      }
      pointsRef.current = points;
    };

    // Animation loop
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update points position
      pointsRef.current.forEach((point) => {
        point.x += point.vx;
        point.y += point.vy;

        // Bounce on edges
        if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1;

        // Draw points
        ctx.beginPath();
        ctx.arc(point.x, point.y, pointSize, 0, Math.PI * 2);
        ctx.fillStyle = pointColor;
        ctx.fill();
      });

      // Draw connections
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 0.5;

      for (let i = 0; i < pointsRef.current.length; i++) {
        for (let j = i + 1; j < pointsRef.current.length; j++) {
          const p1 = pointsRef.current[i];
          const p2 = pointsRef.current[j];
          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            // Opacity based on distance
            const opacity = 1 - distance / connectionDistance;
            ctx.globalAlpha = opacity * 0.5;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    // Initialize
    resizeCanvas();
    initPoints();
    animate();

    window.addEventListener("resize", () => {
      resizeCanvas();
      initPoints();
    });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationRef.current);
    };
  }, [numPoints, lineColor, pointColor, connectionDistance, pointSpeed, pointSize]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full -z-10"
      aria-hidden="true"
    />
  );
}
