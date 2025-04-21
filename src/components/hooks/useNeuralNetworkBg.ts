
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

export function useNeuralNetworkBg({
  canvas,
  numPoints,
  connectionDistance,
  pointSpeed,
  pointSize,
  palette,
}: {
  canvas: HTMLCanvasElement | null;
  numPoints: number;
  connectionDistance: number;
  pointSpeed: number;
  pointSize: number;
  palette: string[];
}) {
  const pointsRef = useRef<Point[]>([]);
  const pathwaysRef = useRef<Pathway[]>([]);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: 0, y: 0, active: false });

  // Generate point color from palette
  const getColor = useCallback((index: number) => palette[index % palette.length], [palette]);

  // Initialize points
  const initPoints = useCallback(() => {
    if (!canvas) return;
    pointsRef.current = Array.from({ length: numPoints }).map((_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * pointSpeed,
      vy: (Math.random() - 0.5) * pointSpeed,
      size: Math.random() * pointSize + 1,
      color: getColor(i),
    }));
    // console.log(`Generated ${pointsRef.current.length} points`);
  }, [canvas, numPoints, pointSpeed, pointSize, getColor]);

  // Store mouse position and activation only
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

  // Add new function to add mouse pathways every frame
  const addActiveMousePathways = useCallback(() => {
    if (!canvas) return;
    if (!mouseRef.current.active) return;
    const { x, y } = mouseRef.current;
    pointsRef.current.forEach((point) => {
      const dx = point.x - x;
      const dy = point.y - y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < connectionDistance * 0.7) {
        pathwaysRef.current.push({
          x1: point.x,
          y1: point.y,
          x2: x,
          y2: y,
          color: point.color,
          opacity: 0.85,
          lifetime: 15, // frames to remain, slightly shorter for rapid flux
        });
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
  };
}

