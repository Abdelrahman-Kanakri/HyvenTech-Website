import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, MotionValue, AnimatePresence } from "framer-motion";
import { Home, Briefcase, Mail, Users, Bot } from "lucide-react";
import { useLocation } from "react-router-dom";
import { ROUTES, isSectionRoute } from "@/router/constants";
import { useSmoothNav } from "@/hooks/useSmoothNav";

const navItems = [
  { name: "Home", href: ROUTES.HOME, icon: Home, sectionId: "hero" },
  { name: "Services", href: ROUTES.SERVICES, icon: Briefcase, sectionId: "services" },
  { name: "Company", href: ROUTES.ABOUT, icon: Users, sectionId: "about", additionalMatches: ["/company"] },
  { name: "Contact", href: ROUTES.CONTACT, icon: Mail, sectionId: "contact" },
  { name: "Chat", href: "#", icon: Bot, isChat: true },
];

function DockItem({ mouseX, item, isActive, onClick }: { 
  mouseX: MotionValue; 
  item: typeof navItems[0]; 
  isActive: boolean;
  onClick: (e: React.MouseEvent) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 60, 40]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <div className="relative group flex flex-col items-center">
      <a
        href={item.href}
        onClick={onClick}
        className="cursor-pointer relative z-10"
        aria-label={item.name}
      >
        <motion.div
          ref={ref}
          style={{ width, height: width }}
          className={`aspect-square rounded-2xl flex items-center justify-center relative transition-all duration-300 ${
            isActive ? "" : "bg-white/5 border border-white/5" 
          }`}
        >
          {/* SLIDING BACKGROUND (The Glow) */}
          <AnimatePresence>
            {isActive && (
              <motion.div
                layoutId="dock-active-bg"
                className="absolute inset-0 rounded-2xl bg-primary/20 border border-primary/50 shadow-[0_0_20px_rgba(76,201,240,0.3)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </AnimatePresence>

          {/* Icon */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="z-20 w-full h-full flex items-center justify-center"
          >
            <item.icon 
              className={`w-5 h-5 transition-colors duration-300 ${isActive ? "text-primary" : "text-muted-foreground"}`} 
            />
          </motion.div>
        </motion.div>
      </a>

      {/* SLIDING DOT */}
      {isActive && (
        <motion.div 
          layoutId="dock-dot"
          className="absolute -bottom-2 w-1 h-1 rounded-full bg-primary shadow-[0_0_10px_rgba(76,201,240,0.8)]"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </div>
  );
}

const BottomNavigation = () => {
  const mouseX = useMotionValue(Infinity);
  const { navigateTo } = useSmoothNav();
  const location = useLocation();
  const [chatOpen, setChatOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [isAtTop, setIsAtTop] = useState(true);
  
  const isTouchDevice = typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches;

  // 1. SYNC STATE: Listen for updates directly from the ChatBot component
  useEffect(() => {
    const handleStateChange = (e: CustomEvent) => {
      setChatOpen(e.detail);
    };
    
    // We explicitly cast the event type to handle TS warning or just ignore in JS
    window.addEventListener('chatbotStateChange', handleStateChange as EventListener);
    return () => window.removeEventListener('chatbotStateChange', handleStateChange as EventListener);
  }, []);

  // 2. SCROLL SPY LOGIC (Maintained from previous fixes)
  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    if (location.pathname !== '/' && !isSectionRoute(location.pathname)) {
      setActiveSection(""); 
      return () => window.removeEventListener("scroll", handleScroll);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        rootMargin: "-40% 0px -40% 0px" 
      }
    );

    const observeElements = () => {
      navItems.forEach((item) => {
        if (item.sectionId) {
          const element = document.getElementById(item.sectionId);
          if (element) observer.observe(element);
        }
      });
    };

    observeElements();
    const timer = setTimeout(observeElements, 500);
    const retryTimer = setTimeout(observeElements, 1500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
      clearTimeout(timer);
      clearTimeout(retryTimer);
    };
  }, [location.pathname]);

  const handleChatClick = () => {
    // We emit the toggle event. The ChatBot will receive it, 
    // update its state, and emit a 'chatbotStateChange' event back to us.
    const event = new CustomEvent('toggleChatbot');
    window.dispatchEvent(event);
  };

  const handleNavigate = (path: string, sectionId?: string) => {
    // If navigating, we assume the chat should close visually, 
    // but we let the ScrollToTop logic handle the actual movement.
    // Note: navigateTo usually doesn't close chat automatically unless logic added,
    // but the 'chatbotStateChange' will keep us accurate.
    navigateTo(path, sectionId);
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[95vw] lg:hidden">
      <motion.div
        onMouseMove={isTouchDevice ? undefined : (e) => mouseX.set(e.pageX)}
        onMouseLeave={isTouchDevice ? undefined : () => mouseX.set(Infinity)}
        className="flex items-end gap-2 px-3 py-2 rounded-2xl glass border border-white/10 shadow-2xl bg-black/80 md:backdrop-blur-xl"
      >
        {navItems.map((item) => {
          const isActive = (() => {
            // Priority 1: Chat State (Synced with ChatBot component)
            if (item.isChat) return chatOpen;
            if (chatOpen) return false; // If chat is open, other tabs are inactive

            // Priority 2: Home at Top
            if (isAtTop && (item.href === "/" || item.href === ROUTES.HOME)) return true;
            if (isAtTop && item.sectionId !== 'hero') return false;

            // Priority 3: Scroll Spy
            if (activeSection) return item.sectionId === activeSection;

            // Priority 4: Path Matching
            if (location.pathname === item.href || location.pathname.startsWith(`${item.href}/`)) return true;
            if (item.additionalMatches?.some(match => location.pathname.startsWith(match))) return true;
            
            return false;
          })();

          return (
            <DockItem 
              key={item.name} 
              mouseX={mouseX} 
              item={item}
              isActive={isActive}
              onClick={(e) => {
                e.preventDefault();
                if (item.isChat) {
                  handleChatClick();
                } else if (item.sectionId) {
                  handleNavigate(item.href, item.sectionId);
                }
              }}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default BottomNavigation;