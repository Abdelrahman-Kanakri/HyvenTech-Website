import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-background flex flex-col items-center justify-center z-50">
      <div className="relative w-32 h-32 mb-8">
        {/* Outer Ring */}
        <motion.div
          className="absolute inset-0 border-4 border-primary/30 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 3, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        
        {/* Middle Ring */}
        <motion.div
          className="absolute inset-2 border-4 border-primary/50 rounded-full border-t-transparent border-l-transparent"
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Inner Core */}
        <motion.div
          className="absolute inset-8 bg-primary rounded-full shadow-[0_0_20px_rgba(12,43,78,0.5)]"
          animate={{
            scale: [1, 0.8, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-2xl font-bold text-primary tracking-wider mb-2">
          FUSION INNOVATION IT
        </h1>
        <motion.div 
          className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent w-48 mx-auto"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        />
        <p className="text-sm text-muted-foreground mt-2 tracking-widest uppercase">
          Initializing Core Systems
        </p>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
