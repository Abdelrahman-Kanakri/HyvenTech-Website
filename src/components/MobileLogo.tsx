import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MobileLogo = () => {


  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-4 z-40 lg:hidden"
    >
      <Link
        to="/"
        state={{ scrollTo: "home" }}
        className="flex items-center gap-2 bg-background/80 backdrop-blur-md border border-border/50 px-3 py-2 rounded-xl shadow-lg active:scale-95 transition-transform"
      >
        <div className="w-6 h-6 rounded-md bg-gradient-glow flex items-center justify-center flex-shrink-0">
          <span className="text-primary font-bold text-xs">HT</span>
        </div>
        <span className="text-sm font-bold text-foreground">
          <span className="text-primary">Hyven</span>Tech
        </span>
      </Link>
    </motion.div>
  );
};

export default MobileLogo;
