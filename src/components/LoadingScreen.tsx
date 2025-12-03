import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const isMobile = useIsMobile();
  const [text, setText] = useState(isMobile ? "HyvenTech" : "");
  const [arabicText, setArabicText] = useState(isMobile ? "هايفن التقنية" : "");
  const fullText = "HyvenTech";
  const fullArabicText = "هايفن التقنية";

  useEffect(() => {
    // On mobile: show instant text, faster completion
    if (isMobile) {
      setText(fullText);
      setArabicText(fullArabicText);
      const timer = setTimeout(() => {
        onComplete();
      }, 400); // Much faster on mobile
      return () => clearTimeout(timer);
    }

    // On desktop: keep typewriter effect
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      setArabicText(fullArabicText.slice(0, index + 1));
      index++;
      if (index >= Math.max(fullText.length, fullArabicText.length)) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 600);
      }
    }, 35);

    return () => clearInterval(interval);
  }, [onComplete, isMobile]);

  // Simplified mobile version - no animations
  if (isMobile) {
    return (
      <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
        <div className="relative flex flex-col items-center gap-2">
          <div className="text-4xl font-bold tracking-tighter text-primary">
            {text}
          </div>
          <div className="text-3xl font-bold tracking-tighter text-primary font-poppins">
            {arabicText}
          </div>
        </div>
      </div>
    );
  }

  // Desktop version with animations
  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
      <div className="relative flex flex-col items-center gap-2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-4xl md:text-6xl font-bold tracking-tighter text-primary flex items-center"
        >
          {text}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-1 h-8 md:h-12 bg-primary ml-1"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-3xl md:text-5xl font-bold tracking-tighter text-primary font-poppins flex items-center"
        >
          {arabicText}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-1 h-6 md:h-10 bg-primary ml-1"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingScreen;
