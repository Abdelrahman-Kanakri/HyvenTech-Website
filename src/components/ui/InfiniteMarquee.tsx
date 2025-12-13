import { motion } from "framer-motion";
import { ReactNode, useState } from "react";

interface InfiniteMarqueeProps {
  children: ReactNode;
  duration?: number;
  reverse?: boolean;
}

export function InfiniteMarquee({ 
  children, 
  duration = 40,
  reverse = false 
}: InfiniteMarqueeProps) {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div 
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        className="flex gap-8"
        animate={{
          x: reverse ? [0, "50%"] : ["0%", "-50%"],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          ...(isPaused && { duration: 0 }),
        }}
      >
        {/* First set of items */}
        <div className="flex gap-8 shrink-0">
          {children}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="flex gap-8 shrink-0">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
