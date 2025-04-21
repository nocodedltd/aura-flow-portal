
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

  // Use only the primary color
  const getColor = useCallback(() => PRIMARY_COLOR, []);

  // Initialize points: all use same color
  const initPoints = useCallback(() => {
    if (!canvas) return;
    pointsRef.current = Array.from({ length: numPoints }).map((_) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * pointSpeed,
      vy: (Math.random() - 0.5) * pointSpeed,
      size: Math.random() * pointSize + 1,
      color: getColor(),
    }));
  }, [canvas, numPoints, pointSpeed, pointSize, getColor]);

  // Mouse control
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseRef.current = { x, y, active: true };
  }, [canvas]);

  const handleMouseLeave = useCallback(() => {
    mouseRef.current.active = false;
  }, []);

  // Add new function to add mouse pathways every frame, at a higher rate/amount
  const addActiveMousePathways = useCallback(() => {
    if (!canvas) return;
    if (!mouseRef.current.active) return;
    const { x, y } = mouseRef.current;
    // Create more connections: connect points within 1.5x the connectionDistance
    let count = 0;
    pointsRef.current.forEach((point) => {
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
          opacity: 0.95,
          lifetime: 22, // longer visible
        });
        count++;
      }
    });
    // Draw a "burst" of extra lines every frame
    for (let i = 0; i < 5; i++) {
      const idx = Math.floor(Math.random() * pointsRef.current.length);
      const p = pointsRef.current[idx];
      pathwaysRef.current.push({
        x1: p.x,
        y1: p.y,
        x2: x,
        y2: y,
        color: PRIMARY_COLOR,
        opacity: 0.7,
        lifetime: 16,
      });
    }
  }, [canvas, connectionDistance]);

  // Mouse magnet: strongly pull points toward mouse if within 1.8x connectDistance
  const applyMouseMagnet = useCallback(() => {
    if (!canvas) return;
    if (!mouseRef.current.active) return;
    const { x, y } = mouseRef.current;
    pointsRef.current.forEach((point) => {
      const dx = x - point.x;
      const dy = y - point.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < connectionDistance * 1.8) {
        // Much stronger attraction - increased from 0.014 to 0.05
        const strength = 0.05 * (1 - dist / (connectionDistance * 1.8));
        point.vx += dx * strength;
        point.vy += dy * strength;
      }
    });
  }, [canvas, connectionDistance]);

  return {
    pointsRef,
    pathwaysRef,
    mouseRef,
    initPoints,
    handleMouseMove,
    handleMouseLeave,
    addActiveMousePathways,
    applyMouseMagnet, // make sure to call this in animation loop!
  };
}
