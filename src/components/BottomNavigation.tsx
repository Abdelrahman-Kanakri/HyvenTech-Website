import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from "framer-motion";
import { Home, Briefcase, Layers, Mail, Users, Bot } from "lucide-react";
import { useLocation } from "react-router-dom";
import { ROUTES } from "@/router/constants";
import { useSmoothNav } from "@/hooks/useSmoothNav";

const navItems = [
  { name: "Home", href: ROUTES.HOME, icon: Home, sectionId: "hero" },
  { name: "Services", href: ROUTES.SERVICES, icon: Briefcase, sectionId: "services" },
  { name: "Company", href: ROUTES.ABOUT, icon: Users, sectionId: "about", additionalMatches: ["/company"] },
  { name: "Contact", href: ROUTES.CONTACT, icon: Mail, sectionId: "contact" },
  { name: "Chat", href: "#", icon: Bot, isChat: true },
];

function DockItem({ mouseX, item, onChatClick, onNavigate }: { 
  mouseX: MotionValue; 
  item: typeof navItems[0]; 
  onChatClick?: () => void;
  onNavigate?: (path: string, sectionId?: string) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 60, 40]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  // Check if this item is active based on current path
  const isActive = 
    item.isChat ||
    (item.href === "/" && location.pathname === "/") ||
    (location.pathname === item.href) ||
    (item.additionalMatches?.some(match => location.pathname.startsWith(match)));

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (item.isChat) {
      onChatClick?.();
    } else if (onNavigate && item.sectionId) {
      // Special handling for Home to ensure it resets to top
      if (item.href === "/" || item.name === "Home") {
        onNavigate(ROUTES.HOME, "hero");
      } else {
        onNavigate(item.href, item.sectionId);
      }
    }
  };

  const content = (
    <motion.div
      ref={ref}
      style={{ width, height: width }}
      className={`aspect-square rounded-2xl flex items-center justify-center mb-1 transition-colors ${
        isActive 
          ? "bg-primary/20 border-primary/50 shadow-[0_0_20px_rgba(76,201,240,0.3)]" 
          : "bg-white/5 border-white/10 hover:bg-white/10"
      } md:backdrop-blur-md border`}
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
  );

  return (
    <div className="relative group">
      <a
        href={item.href}
        onClick={handleClick}
        className="cursor-pointer"
        aria-label={item.name}
      >
        {content}
      </a>
      {isActive && (
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary shadow-[0_0_10px_rgba(76,201,240,0.8)]" />
      )}
    </div>
  );
}

const BottomNavigation = () => {
  const mouseX = useMotionValue(Infinity);
  const { navigateTo } = useSmoothNav();
  
  // Detect if device supports hover (desktop) vs touch (mobile)
  // This prevents the "dock effect" from interfering with touch
  const isTouchDevice = typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches;

  const handleChatClick = () => {
    const event = new CustomEvent('toggleChatbot');
    window.dispatchEvent(event);
  };

  const handleNavigate = (path: string, sectionId?: string) => {
    navigateTo(path, sectionId);
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[95vw] lg:hidden">
      <motion.div
        onMouseMove={isTouchDevice ? undefined : (e) => mouseX.set(e.pageX)}
        onMouseLeave={isTouchDevice ? undefined : () => mouseX.set(Infinity)}
        className="flex items-end gap-2 px-3 py-2 rounded-2xl glass border border-white/10 shadow-2xl bg-black/95 md:backdrop-blur-xl"
      >
        {navItems.map((item) => (
          <DockItem 
            key={item.name} 
            mouseX={mouseX} 
            item={item} 
            onChatClick={item.isChat ? handleChatClick : undefined}
            onNavigate={!item.isChat ? handleNavigate : undefined}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default BottomNavigation;