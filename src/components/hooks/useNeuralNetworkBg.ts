
import { useRef, useCallback } from "react";

export interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
}

export interface Pathway {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color: string;
  opacity: number;
  lifetime: number;
}

const PRIMARY_COLOR = "#6e74af";

export function useNeuralNetworkBg({
  canvas,
  numPoints,
  connectionDistance,
  pointSpeed,
  pointSize,
}: {
  canvas: HTMLCanvasElement | null;
  numPoints: number;
  connectionDistance: number;
  pointSpeed: number;
  pointSize: number;
}) {
  const pointsRef = useRef<Point[]>([]);
  const pathwaysRef = useRef<Pathway[]>([]);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: 0, y: 0, active: false });
  const frameCountRef = useRef(0);

  // Use only the primary color
  const getColor = useCallback(() => PRIMARY_COLOR, []);

  // Initialize points: all use same color
  const initPoints = useCallback(() => {
    if (!canvas) return;
    // Create fewer points on mobile
    const isMobile = window.innerWidth < 768;
    const actualNumPoints = isMobile ? Math.floor(numPoints * 0.6) : numPoints;
    
    pointsRef.current = Array.from({ length: actualNumPoints }).map((_) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * pointSpeed,
      vy: (Math.random() - 0.5) * pointSpeed,
      size: Math.random() * pointSize + 1,
      color: getColor(),
    }));
  }, [canvas, numPoints, pointSpeed, pointSize, getColor]);

  // Mouse control - throttled for performance
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!canvas) return;
    
    // Throttle mouse events
    if (frameCountRef.current % 2 !== 0) {
      frameCountRef.current++;
      return;
    }
    frameCountRef.current++;
    
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseRef.current = { x, y, active: true };
  }, [canvas]);

  const handleMouseLeave = useCallback(() => {
    mouseRef.current.active = false;
  }, []);

  // Add new function to add mouse pathways - optimized
  const addActiveMousePathways = useCallback(() => {
    if (!canvas || !mouseRef.current.active) return;
    
    // Only run this function every 3 frames for performance
    if (frameCountRef.current % 3 !== 0) return;
    
    const { x, y } = mouseRef.current;
    
    // More efficient approach: limit connections
    const isMobile = window.innerWidth < 768;
    const maxConnections = isMobile ? 3 : 5;
    let count = 0;
    
    // Find closest points for connection rather than checking all
    for (let i = 0; i < pointsRef.current.length && count < maxConnections; i++) {
      const point = pointsRef.current[i];
      const dx = point.x - x;
      const dy = point.y - y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist < connectionDistance * 1.5) {
        pathwaysRef.current.push({
          x1: point.x,
          y1: point.y,
          x2: x,
          y2: y,
          color: PRIMARY_COLOR,
          opacity: 0.8, // slightly reduced
          lifetime: 16, // reduced lifetime
        });
        count++;
      }
    }
    
    // Draw fewer burst lines
    const burstCount = isMobile ? 2 : 3;
    for (let i = 0; i < burstCount; i++) {
      const idx = Math.floor(Math.random() * pointsRef.current.length);
      const p = pointsRef.current[idx];
      pathwaysRef.current.push({
        x1: p.x,
        y1: p.y,
        x2: x,
        y2: y,
        color: PRIMARY_COLOR,
        opacity: 0.6,
        lifetime: 12,
      });
    }
  }, [canvas, connectionDistance]);

  // Mouse magnet: optimized version
  const applyMouseMagnet = useCallback(() => {
    if (!canvas || !mouseRef.current.active) return;
    
    // Only run magnet effect every 2 frames
    if (frameCountRef.current % 2 !== 0) return;
    
    const { x, y } = mouseRef.current;
    
    // Process fewer points for magnet effect
    const maxPoints = Math.min(pointsRef.current.length, 15);
    for (let i = 0; i < maxPoints; i++) {
      const point = pointsRef.current[i];
      const dx = x - point.x;
      const dy = y - point.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist < connectionDistance * 1.5) {
        // Reduced attraction strength
        const strength = 0.03 * (1 - dist / (connectionDistance * 1.5));
        point.vx += dx * strength;
        point.vy += dy * strength;
      }
    }
  }, [canvas, connectionDistance]);

  return {
    pointsRef,
    pathwaysRef,
    mouseRef,
    initPoints,
    handleMouseMove,
    handleMouseLeave,
    addActiveMousePathways,
    applyMouseMagnet,
    frameCountRef,
  };
}
