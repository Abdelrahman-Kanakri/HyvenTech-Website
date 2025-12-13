import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const logoLight = "/Logo/Assets-03.png";
const logoDark = "/Logo/Assets-04.png";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Track theme changes
  useEffect(() => {
    const checkTheme = () => {
      const currentTheme = document.documentElement.classList.contains('light') ? 'light' : 'dark';
      setTheme(currentTheme);
    };
    
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          // Start exit animation
          setTimeout(() => {
            setIsExiting(true);
            // Complete after exit animation
            setTimeout(() => {
              onComplete();
            }, 1000);
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 25);

    return () => {
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
        >
          {/* Animated background gradient */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>

          <div className="relative flex flex-col items-center gap-12 w-full max-w-md px-8">
            {/* Logo Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                ease: "easeOut"
              }}
              className="relative"
            >
              {/* Glow effect behind logo */}
              <motion.div
                className="absolute inset-0 blur-3xl bg-primary/30 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Logo */}
              <motion.img
                src={theme === 'light' ? logoLight : logoDark}
                alt="HyvenTech"
                className="w-64 md:w-80 h-auto object-contain relative z-10"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full max-w-xs"
            >
              <div className="relative">
                {/* Background bar */}
                <div className="h-2 bg-muted/50 rounded-full overflow-hidden border border-border/20 shadow-inner">
                  {/* Progress fill */}
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary via-primary to-primary/90 rounded-full relative shadow-lg"
                    style={{ width: `${progress}%` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                      animate={{
                        x: ["-100%", "200%"],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </motion.div>
                </div>

                {/* Progress percentage */}
                <motion.div
                  className="mt-4 text-center text-sm text-muted-foreground font-medium tabular-nums"
                  key={progress}
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {Math.round(progress)}%
                </motion.div>
              </div>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center space-y-2"
            >
              <p className="text-sm text-muted-foreground">
                Custom Software Solutions
              </p>
              <motion.div
                className="flex items-center justify-center gap-1 text-primary/60"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
