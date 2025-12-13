import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

interface HorizontalScrollSectionProps {
  children: ReactNode;
  title?: ReactNode;
  className?: string;
  height?: string;
}

export function HorizontalScrollSection({ 
  children, 
  title,
  className = "",
  height = "300vh" // Controls scroll distance
}: HorizontalScrollSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Transform vertical scroll to horizontal movement
  // Adjust the output range based on content width
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  // On mobile, use regular layout instead of horizontal scroll
  if (isMobile) {
    return (
      <div className={className}>
        {title}
        <div className="container mx-auto px-4">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef} 
      className={`relative ${className}`}
      style={{ height }}
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8 items-center">
            {/* Sticky Title on Left */}
            {title && (
              <div className="flex-shrink-0 w-64 lg:w-80">
                {title}
              </div>
            )}
            
            {/* Horizontally Scrolling Content */}
            <motion.div 
              style={{ x }}
              className="flex gap-6 flex-shrink-0"
            >
              {children}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
