
import { useEffect, useState } from "react";

interface Position {
  x: number;
  y: number;
}

export default function CursorGlow() {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Only add mouse events if not on mobile
    if (!isMobile) {
      const updatePosition = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };

      const handleMouseEnter = () => setVisible(true);
      const handleMouseLeave = () => setVisible(false);

      document.addEventListener("mousemove", updatePosition);
      document.addEventListener("mouseenter", handleMouseEnter);
      document.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        document.removeEventListener("mousemove", updatePosition);
        document.removeEventListener("mouseenter", handleMouseEnter);
        document.removeEventListener("mouseleave", handleMouseLeave);
        window.removeEventListener("resize", checkMobile);
      };
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, [isMobile]);

  // Don't render on mobile
  if (isMobile) return null;

  return (
    <div
      className={`pointer-events-none fixed left-0 top-0 z-50 h-8 w-8 rounded-full bg-primary/40 mix-blend-screen backdrop-blur-sm transition-opacity duration-300 ease-out ${
        visible ? "opacity-100" : "opacity-0"
      } animate-cursor-pulse`}
      style={{
        transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
        transition: "transform 0.15s ease-out",
      }}
      aria-hidden="true"
    />
  );
}
