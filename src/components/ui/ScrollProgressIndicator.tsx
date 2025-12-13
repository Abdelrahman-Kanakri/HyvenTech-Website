import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface Section {
  id: string;
  label: string;
}

const sections: Section[] = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "key-sectors", label: "Sectors" },
  { id: "about", label: "About" },
  { id: "team", label: "Team" },
  { id: "contact", label: "Contact" },
];

export function ScrollProgressIndicator() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const location = useLocation();
  const isHomePage = location.pathname === "/"; // Added this line

  // Handle scroll tracking
  useEffect(() => {
    // Reset active section when returning to homepage
    if (isHomePage) { // Changed from location.pathname === "/"
      setActiveSection("home");
    }

    const handleScroll = () => {
      // Only update if we're on the homepage
      if (!isHomePage) { // Changed from location.pathname !== "/"
        return;
      }

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    // Set up scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage, location.pathname]); // Added isHomePage to dependency array

  const handleClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div 
      className={`fixed right-8 top-1/2 -translate-y-1/2 z-50 transition-opacity duration-300 ${
        isHomePage ? 'opacity-100 lg:block' : 'opacity-0 pointer-events-none'
      }`}
    >
      <nav className="flex flex-col gap-4" aria-label="Page sections">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          
          return (
            <button
              key={section.id}
              onClick={() => handleClick(section.id)}
              className="group relative flex items-center justify-end"
              aria-label={`Go to ${section.label} section`}
              aria-current={isActive ? "location" : undefined}
            >
              {/* Label tooltip */}
              <span className="absolute right-8 px-3 py-1.5 bg-background/95 backdrop-blur-sm border border-primary/20 rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-lg">
                {section.label}
              </span>

              {/* Dot indicator */}
              <div className="relative flex items-center justify-center">
                <motion.div
                  className={`w-3 h-3 rounded-full border-2 transition-colors duration-300 ${
                    isActive
                      ? "bg-primary border-primary"
                      : "bg-transparent border-muted-foreground/30 group-hover:border-primary/50"
                  }`}
                  animate={{
                    scale: isActive ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                />
                
                {/* Pulsing ring for active section */}
                {isActive && (
                  <motion.div
                    className="absolute w-6 h-6 rounded-full border-2 border-primary"
                    initial={{ scale: 1, opacity: 0.5 }}
                    animate={{ scale: 1.8, opacity: 0 }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                )}
              </div>
            </button>
          );
        })}
        
        {/* Progress line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-0.5 h-full bg-muted-foreground/20 -z-10">
          <motion.div
            className="w-full bg-primary origin-top"
            style={{
              height: `${((sections.findIndex(s => s.id === activeSection) + 1) / sections.length) * 100}%`,
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </nav>
    </div>
  );
}
