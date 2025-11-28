import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from "framer-motion";
import { Home, Briefcase, Layers, Mail, Users } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Services", href: "/services", icon: Briefcase },
  { name: "Key Sectors", href: "/key-sectors", icon: Layers },
  { name: "Company", href: "/about", icon: Users, additionalMatches: ["/company"] },
  { name: "Contact", href: "/contact", icon: Mail },
];

function DockItem({ mouseX, item }: { mouseX: MotionValue; item: typeof navItems[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 60, 40]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  const isActive = 
    (item.href === "/" && location.pathname === "/") ||
    (item.href !== "/" && location.pathname.startsWith(item.href)) ||
    (item.additionalMatches?.some(match => location.pathname.startsWith(match))) ||
    (item.href.startsWith("/#") && location.hash === item.href.substring(1));

  return (
    <Link to={item.href} className="relative group">
      <motion.div
        ref={ref}
        style={{ width, height: width }}
        className={`aspect-square rounded-2xl flex items-center justify-center mb-1 transition-colors ${
          isActive 
            ? "bg-primary/20 border-primary/50 shadow-[0_0_20px_rgba(76,201,240,0.3)]" 
            : "bg-white/5 border-white/10 hover:bg-white/10"
        } backdrop-blur-md border`}
      >
        <motion.div
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="w-full h-full flex items-center justify-center"
        >
          <item.icon className={`w-1/2 h-1/2 ${isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"}`} />
        </motion.div>
      </motion.div>
      {isActive && (
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary shadow-[0_0_10px_rgba(76,201,240,0.8)]" />
      )}
    </Link>
  );
}

const BottomNavigation = () => {
  const mouseX = useMotionValue(Infinity);

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[95vw] lg:hidden">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex items-end gap-2 px-3 py-2 rounded-2xl glass border border-white/10 shadow-2xl bg-black/40 backdrop-blur-xl"
      >
        {navItems.map((item) => (
          <DockItem key={item.name} mouseX={mouseX} item={item} />
        ))}
      </motion.div>
    </div>
  );
};

export default BottomNavigation;
