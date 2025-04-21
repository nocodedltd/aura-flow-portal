
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
}

interface ParticleLinesProps {
  numPoints?: number;
  lineColor?: string;
  pointColor?: string;
  connectionDistance?: number;
  pointSpeed?: number;
  pointSize?: number;
  interactive?: boolean;
}

export default function ParticleLines({
  numPoints = 80,
  lineColor = "#6e74af",
  pointColor = "#6e74af",
  connectionDistance = 150,
  pointSpeed = 0.5,
  pointSize = 1.5,
  interactive = true,
}: ParticleLinesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<Point[]>([]);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: 0, y: 0, active: false });
  const [mounted, setMounted] = useState(false);

  // Generate a color gradient for particles
  const generateColor = (index: number, total: number) => {
    const hue = (index / total) * 60 + 220; // Shift to blue/purple range
    return `hsla(${hue}, 70%, 60%, 0.8)`;
  };

  useEffect(() => {
    setMounted(true);
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

    // Initialize points with varied sizes and colors
    const initPoints = () => {
      const points: Point[] = [];
      for (let i = 0; i < numPoints; i++) {
        points.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * pointSpeed,
          vy: (Math.random() - 0.5) * pointSpeed,
          size: Math.random() * pointSize + 0.5,
          color: generateColor(i, numPoints)
        });
      }
      pointsRef.current = points;
    };

    // Mouse interaction handlers
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    if (interactive) {
      canvas.addEventListener("mousemove", handleMouseMove);
      canvas.addEventListener("mouseleave", handleMouseLeave);
    }

    // Animation loop
    const animate = () => {
      if (!ctx) return;
      
      // Create subtle gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, "rgba(30, 30, 50, 0.01)");
      gradient.addColorStop(1, "rgba(20, 20, 40, 0.01)");
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update points position
      pointsRef.current.forEach((point, index) => {
        // Apply mouse attraction if active
        if (interactive && mouseRef.current.active) {
          const dx = mouseRef.current.x - point.x;
          const dy = mouseRef.current.y - point.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            const force = 0.2 * (1 - distance / 120);
            point.vx += (dx / distance) * force;
            point.vy += (dy / distance) * force;
          }
        }

        // Apply velocity with limits
        const speed = Math.sqrt(point.vx * point.vx + point.vy * point.vy);
        if (speed > 2) {
          point.vx = (point.vx / speed) * 2;
          point.vy = (point.vy / speed) * 2;
        }

        point.x += point.vx;
        point.y += point.vy;

        // Add slight random movement
        point.vx += (Math.random() - 0.5) * 0.05;
        point.vy += (Math.random() - 0.5) * 0.05;

        // Apply friction
        point.vx *= 0.99;
        point.vy *= 0.99;

        // Bounce on edges
        if (point.x < 0) {
          point.x = 0;
          point.vx *= -1;
        } else if (point.x > canvas.width) {
          point.x = canvas.width;
          point.vx *= -1;
        }
        
        if (point.y < 0) {
          point.y = 0;
          point.vy *= -1;
        } else if (point.y > canvas.height) {
          point.y = canvas.height;
          point.vy *= -1;
        }

        // Draw points with glow effect
        ctx.save();
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
        ctx.fillStyle = point.color;
        ctx.shadowColor = point.color;
        ctx.shadowBlur = 5;
        ctx.fill();
        ctx.restore();
      });

      // Draw connections with gradient opacity
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
            
            // Create gradient line
            const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            gradient.addColorStop(0, p1.color.replace('0.8)', `${opacity * 0.5})`));
            gradient.addColorStop(1, p2.color.replace('0.8)', `${opacity * 0.5})`));
            
            ctx.beginPath();
            ctx.strokeStyle = gradient;
            ctx.lineWidth = opacity * 0.8;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Mouse pointer effect
      if (interactive && mouseRef.current.active) {
        ctx.beginPath();
        ctx.arc(mouseRef.current.x, mouseRef.current.y, 60, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(
          mouseRef.current.x, mouseRef.current.y, 0,
          mouseRef.current.x, mouseRef.current.y, 60
        );
        gradient.addColorStop(0, "rgba(110, 116, 175, 0.2)");
        gradient.addColorStop(1, "rgba(110, 116, 175, 0)");
        ctx.fillStyle = gradient;
        ctx.fill();
      }

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
      if (interactive) {
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseleave", handleMouseLeave);
      }
      cancelAnimationFrame(animationRef.current);
    };
  }, [numPoints, lineColor, pointColor, connectionDistance, pointSpeed, pointSize, interactive]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: mounted ? 1 : 0 }}
      transition={{ duration: 1.5 }}
      className="absolute inset-0 w-full h-full -z-10"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        aria-hidden="true"
      />
    </motion.div>
  );
}
