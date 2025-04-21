
import { useEffect, useRef, useState, useMemo } from "react";
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

  // Memoize connection distance based on screen size
  const adaptiveConnectionDistance = useMemo(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768 ? connectionDistance * 0.7 : connectionDistance;
    }
    return connectionDistance;
  }, [connectionDistance]);

  const {
    pointsRef,
    pathwaysRef,
    mouseRef,
    initPoints,
    handleMouseMove,
    handleMouseLeave,
    addActiveMousePathways,
    applyMouseMagnet,
    frameCountRef,
  } = useNeuralNetworkBg({
    canvas: canvasRef.current,
    numPoints,
    connectionDistance: adaptiveConnectionDistance,
    pointSpeed,
    pointSize,
  });

  // Mount with animation frame optimization
  useEffect(() => {
    const timeoutId = setTimeout(() => setMounted(true), 300);
    return () => clearTimeout(timeoutId);
  }, []);

  // Fit canvas to parent with throttled resize
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let resizeTimeout: number;
    const resize = () => {
      if (resizeTimeout) {
        window.clearTimeout(resizeTimeout);
      }
      
      resizeTimeout = window.setTimeout(() => {
        if (!canvas.parentElement) return;
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
        initPoints();
      }, 200); // Debounce resize events
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
      window.clearTimeout(resizeTimeout);
    };
  }, [
    interactive,
    initPoints,
    handleMouseMove,
    handleMouseLeave,
  ]);

  // Optimized rendering loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let skipFrame = false;
    const animate = () => {
      frameCountRef.current++;
      
      // Skip every other frame on mobile devices
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        skipFrame = !skipFrame;
        if (skipFrame) {
          animationRef.current = requestAnimationFrame(animate);
          return;
        }
      }
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const points = pointsRef.current;

      // 1. Draw static connections - only every Nth connection for performance
      const connectionFrequency = isMobile ? 3 : 2; // Check fewer connections
      for (let i = 0; i < points.length; i++) {
        for (let j = i + connectionFrequency; j < points.length; j += connectionFrequency) {
          const p1 = points[i], p2 = points[j];
          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < adaptiveConnectionDistance) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = PRIMARY_COLOR;
            ctx.globalAlpha = 0.25 * (1 - dist / adaptiveConnectionDistance) + 0.1;
            ctx.lineWidth = 1;
            
            // Reduce shadow effects for better performance
            if (!isMobile && frameCountRef.current % 3 === 0) {
              ctx.shadowBlur = 4;
              ctx.shadowColor = PRIMARY_COLOR;
            } else {
              ctx.shadowBlur = 0;
            }
            
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }

      // Stronger mouse effect: optimize by checking frame count
      if (interactive) {
        addActiveMousePathways();
        applyMouseMagnet();
      }

      // 3. Animate points - process them in batches for efficiency
      const pointUpdateFrequency = isMobile ? 2 : 1;
      for (let i = 0; i < points.length; i++) {
        const point = points[i];
        
        // Update position
        point.x += point.vx;
        point.y += point.vy;

        // Apply smaller random walk only to some points
        if (i % pointUpdateFrequency === 0) {
          point.vx += (Math.random() - 0.5) * 0.02;
          point.vy += (Math.random() - 0.5) * 0.02;
        }

        // Apply lighter damping
        point.vx *= 0.995; 
        point.vy *= 0.995;

        // Bounce off edges
        if (point.x < 0) { point.x = 0; point.vx *= -1; }
        if (point.y < 0) { point.y = 0; point.vy *= -1; }
        if (point.x > canvas.width) { point.x = canvas.width; point.vx *= -1; }
        if (point.y > canvas.height) { point.y = canvas.height; point.vy *= -1; }

        // Draw more efficiently
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
        ctx.fillStyle = PRIMARY_COLOR;
        
        // Only add shadow effects occasionally
        if (!isMobile && i % 5 === 0) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = PRIMARY_COLOR;
        } else {
          ctx.shadowBlur = 0;
        }
        
        ctx.fill();
      }

      // 4. Draw mouse pathway effects with reduced shadows
      if (pathwaysRef.current.length > 0) {
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = PRIMARY_COLOR;
        
        pathwaysRef.current.forEach((p) => {
          ctx.beginPath();
          ctx.moveTo(p.x1, p.y1);
          ctx.lineTo(p.x2, p.y2);
          ctx.globalAlpha = p.opacity;
          
          // Limit shadow effects
          if (!isMobile && frameCountRef.current % 4 === 0) {
            ctx.shadowBlur = 8;
            ctx.shadowColor = PRIMARY_COLOR;
          } else {
            ctx.shadowBlur = 0;
          }
          
          ctx.stroke();
        });
        
        ctx.globalAlpha = 1;
      }

      // 5. Update & filter pathways - more aggressive cleanup
      if (pathwaysRef.current.length > 0) {
        pathwaysRef.current = pathwaysRef.current.filter((p) => {
          p.lifetime -= isMobile ? 2 : 1;
          p.opacity *= 0.85;
          return p.lifetime > 0 && p.opacity > 0.1;
        });
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationRef.current);
  }, [
    pointsRef,
    pathwaysRef,
    mouseRef,
    adaptiveConnectionDistance,
    pointSize,
    addActiveMousePathways,
    applyMouseMagnet,
    interactive,
    frameCountRef,
  ]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: mounted ? 0.9 : 0 }}
      transition={{ duration: 0.8 }}
      className="w-full h-full"
      style={{ pointerEvents: "none" }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        aria-hidden="true"
        tabIndex={-1}
        style={{
          filter: "brightness(1.05)",
          pointerEvents: "auto",
          userSelect: "none",
        }}
      />
    </motion.div>
  );
}
