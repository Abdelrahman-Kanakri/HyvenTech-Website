import { ReactNode, useRef, useState, MouseEvent } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
}

export function SpotlightCard({ 
  children, 
  className = "",
  spotlightColor = "rgba(59, 130, 246, 0.15)" // Blue spotlight
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const isMobile = useIsMobile();

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (isMobile || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    setMousePosition({ x, y });
  };

  return (
    <div
      ref={cardRef}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      style={{
        ...((!isMobile) && {
          background: `radial-gradient(circle 400px at ${mousePosition.x}% ${mousePosition.y}%, ${spotlightColor}, transparent 40%)`,
        }),
      }}
    >
      {children}
    </div>
  );
}
