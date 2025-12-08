import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

function DockItem({ item, isActive, onClick }: { 
  item: typeof navItems[0]; 
  isActive: boolean;
  onClick: (e: React.MouseEvent) => void;
}) {
  return (
    <div className="relative group flex flex-col items-center">
      <a
        href={item.href}
        onClick={onClick}
        className="cursor-pointer relative z-10"
        aria-label={item.name}
      >
        {/* Changed motion.div to standard div with fixed width/height */}
        <div
          className={`w-12 h-12 rounded-2xl flex items-center justify-center relative transition-all duration-300 ${
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
            whileTap={{ scale: 0.9 }}
            className="z-20 w-full h-full flex items-center justify-center"
          >
            <item.icon 
              className={`w-5 h-5 transition-colors duration-300 ${isActive ? "text-primary" : "text-muted-foreground"}`} 
            />
          </motion.div>
        </div>
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
  const { navigateTo } = useSmoothNav();
  const location = useLocation();
  const [chatOpen, setChatOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [isAtTop, setIsAtTop] = useState(true);
  
  // 1. SYNC STATE
  useEffect(() => {
    const handleStateChange = (e: CustomEvent) => {
      setChatOpen(e.detail);
    };
    
    window.addEventListener('chatbotStateChange', handleStateChange as EventListener);
    return () => window.removeEventListener('chatbotStateChange', handleStateChange as EventListener);
  }, []);

  // 2. SCROLL SPY LOGIC
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
      { rootMargin: "-40% 0px -40% 0px" }
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
    const event = new CustomEvent('toggleChatbot');
    window.dispatchEvent(event);
  };

  const handleNavigate = (path: string, sectionId?: string) => {
    navigateTo(path, sectionId);
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[95vw] lg:hidden">
      {/* Container - Removed onMouseMove/onMouseLeave logic */}
      <div className="flex items-center gap-2 px-3 py-2 rounded-2xl glass border border-white/10 shadow-2xl bg-black/80 md:backdrop-blur-xl">
        {navItems.map((item) => {
          const isActive = (() => {
            // Priority 1: Chat State
            if (item.isChat) return chatOpen;
            if (chatOpen) return false;

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
      </div>
    </div>
  );
};

export default BottomNavigation;