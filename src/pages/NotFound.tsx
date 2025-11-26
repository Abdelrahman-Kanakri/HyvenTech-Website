import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#0c2b4e] flex items-center justify-center relative overflow-hidden font-sans text-white">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#4cc9f0]/10 via-[#0c2b4e]/50 to-[#0c2b4e]" />
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#4cc9f0_1px,transparent_1px),linear-gradient(to_bottom,#4cc9f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Icon */}
          <div className="mx-auto mb-6 w-20 h-20 rounded-2xl bg-[#4cc9f0]/10 flex items-center justify-center border border-[#4cc9f0]/20 shadow-[0_0_30px_-5px_rgba(76,201,240,0.3)]">
            <AlertTriangle className="w-10 h-10 text-[#4cc9f0]" />
          </div>

          {/* Typography */}
          <h1 className="text-8xl md:text-9xl font-bold tracking-tighter mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
            404
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#4cc9f0] tracking-wide uppercase">
            System Malfunction
          </h2>
          
          <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-md mx-auto">
            The requested path could not be resolved. The resource you are looking for may have been moved, deleted, or never existed.
          </p>

          {/* CTA */}
          <Button 
            asChild 
            size="lg" 
            className="bg-transparent border border-[#4cc9f0]/50 text-[#4cc9f0] hover:bg-[#4cc9f0]/10 hover:text-[#4cc9f0] hover:border-[#4cc9f0] transition-all duration-300 shadow-[0_0_20px_-5px_rgba(76,201,240,0.2)] hover:shadow-[0_0_30px_-5px_rgba(76,201,240,0.4)]"
          >
            <Link to="/" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              Return to Home
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
