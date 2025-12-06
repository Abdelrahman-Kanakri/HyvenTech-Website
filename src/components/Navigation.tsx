// fileName: Navigation.tsx
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { NavLink, Link, useLocation } from "react-router-dom"; // Added Link
import { navItems } from "@/constants/navigation";
import { ROUTES } from "@/router/constants";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useSmoothNav } from "@/hooks/useSmoothNav";

const logoLight = "/Logo/Assets-03.png";
const logoDark = "/Logo/Assets-04.png";

const Navigation = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { navigateTo } = useSmoothNav();

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const handleDropdownToggle = useCallback((itemName: string) => {
    setOpenDropdown(prev => prev === itemName ? null : itemName);
  }, []);

  const handleLinkClick = useCallback(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, []);

  // Updated Logo Click
  const handleLogoClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault(); // Prevent hard reload
    handleLinkClick();
    navigateTo(ROUTES.HOME, 'hero');
  }, [handleLinkClick, navigateTo]);

  // Smart section navigation handler
  const handleSectionClick = useCallback((e: React.MouseEvent, path: string, sectionId: string) => {
    e.preventDefault(); // CRITICAL: Prevents full page reload
    handleLinkClick();
    navigateTo(path, sectionId);
  }, [handleLinkClick, navigateTo]);

  const renderedNavItems = useMemo(() => navItems.map((item) => {
    const isSectionLink = item.name === "Services" || item.name === "Key Sectors" || item.name === "Company" || item.name === "Contact";
    
    // Helper to get correct route for section links
    const getSectionRoute = (name: string) => {
      if (name === "Services") return ROUTES.SERVICES;
      if (name === "Key Sectors") return ROUTES.KEY_SECTORS;
      if (name === "Contact") return ROUTES.CONTACT;
      return ROUTES.ABOUT;
    };

    // Helper to get section ID
    const getSectionId = (name: string) => {
      if (name === "Services") return 'services';
      if (name === "Key Sectors") return 'key-sectors';
      if (name === "Contact") return 'contact';
      return 'about';
    };

    return (
      <div key={item.name} className="relative">
        {item.dropdown ? (
          <div className="flex items-center gap-1">
            {/* Main Dropdown Link */}
            <Link
              to={getSectionRoute(item.name)}
              onClick={(e) => handleSectionClick(
                e,
                getSectionRoute(item.name),
                getSectionId(item.name)
              )}
              className="text-base transition-colors relative group cursor-pointer text-foreground/80 hover:text-primary"
              aria-label={`Maps to ${item.name} section`}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDropdownToggle(item.name);
              }}
              className="text-foreground/80 hover:text-primary transition-colors cursor-pointer p-1"
              aria-label={`Toggle ${item.name} dropdown menu`}
              aria-expanded={openDropdown === item.name}
              aria-haspopup="true"
            >
              <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
            </button>
          
            <AnimatePresence>
              {openDropdown === item.name && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full mt-2 left-0 min-w-[220px] bg-background/95 md:glass md:backdrop-blur-3xl border border-border/50 rounded-lg shadow-xl overflow-hidden"
                  role="menu"
                >
                  {item.dropdown.map((dropItem, index) => (
                    <NavLink
                      key={index}
                      to={dropItem.href}
                      onClick={handleLinkClick}
                      className={({ isActive }) => `block px-4 py-3 text-sm transition-colors ${
                        dropItem.isHighlight 
                          ? 'text-primary font-semibold border-t border-border/50' 
                          : isActive
                            ? 'bg-primary/10 text-primary'
                            : 'text-foreground/80 hover:bg-primary/10 hover:text-primary'
                      }`}
                      role="menuitem"
                    >
                      {dropItem.name}
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : item.name === "Contact" ? (
          <Link
            to={ROUTES.CONTACT}
            onClick={(e) => handleSectionClick(e, ROUTES.CONTACT, 'contact')}
            className="text-base transition-colors relative group cursor-pointer text-foreground/80 hover:text-primary"
            aria-label="Navigate to Contact"
          >
            {item.name}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
          </Link>
        ) : (
          <NavLink
            to={item.href}
            onClick={handleLinkClick}
            className={({ isActive }) => `text-base transition-colors relative group cursor-pointer ${
              isActive ? 'text-primary' : 'text-foreground/80 hover:text-primary'
            }`}
            aria-label={`Maps to ${item.name}`}
          >
            {item.name}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
          </NavLink>
        )}
      </div>
    );
  }), [openDropdown, handleLinkClick, handleDropdownToggle, handleSectionClick]);

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-4 inset-x-0 z-50 block"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="w-[90%] max-w-6xl mx-auto">
          <div className="lg:glass lg:backdrop-blur-xl lg:bg-background/70 lg:border lg:border-border/50 lg:rounded-3xl lg:shadow-2xl lg:shadow-primary/5 lg:px-6 lg:py-2">
            <div className="flex items-center justify-between w-full" ref={dropdownRef}>
              
              {/* Desktop Logo */}
              <Link 
                to={ROUTES.HOME}
                className="hidden lg:flex items-center gap-3 group p-2 px-3 rounded-xl bg-background/50 border border-border/30 hover:border-primary/50 transition-all" 
                aria-label="HyvenTech Home"
                onClick={handleLogoClick}
              >
                <img 
                  src={theme === 'light' ? logoLight : logoDark} 
                  alt="HyvenTech Logo" 
                  className="w-32 h-auto object-contain group-hover:scale-110 transition-transform rounded-xl"
                />
              </Link>

              {/* Desktop Navigation Links */}
              <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                {renderedNavItems}
                <ThemeToggle />
                <Link
                  to={ROUTES.CONTACT}
                  onClick={(e) => handleSectionClick(e, ROUTES.CONTACT, 'contact')}
                  className="glow transition-all hover:scale-105 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-md inline-flex items-center justify-center font-medium text-sm"
                >
                  Get Started
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden ml-auto p-3 bg-background/95 border border-border/50 rounded-full shadow-lg text-foreground hover:text-primary transition-all active:scale-95"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-background/98" onClick={() => setMobileMenuOpen(false)} />
            <motion.div
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute left-0 right-0 top-0 bg-background border-b border-border/50 shadow-2xl overflow-y-auto max-h-screen"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <Link 
                    to={ROUTES.HOME}
                    className="flex items-center gap-2"
                    onClick={handleLogoClick}
                  >
                    <img 
                      src={theme === 'light' ? logoLight : logoDark} 
                      alt="HyvenTech Logo" 
                      className="w-24 h-auto object-contain"
                    />
                  </Link>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                  >
                    <X className="h-6 w-6 text-foreground" />
                  </button>
                </div>
                <nav className="space-y-4" role="navigation">
                  {navItems.map((item) => (
                    <div key={item.name} className="border-b border-border/30 pb-2 last:border-0">
                      {item.dropdown ? (
                        <div>
                          <button
                            onClick={() => handleDropdownToggle(item.name)}
                            className="w-full flex items-center justify-between text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                          >
                            {item.name}
                            <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                          </button>
                          <AnimatePresence>
                            {openDropdown === item.name && (
                              <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                className="overflow-hidden will-change-transform"
                              >
                                <div className="pl-6 space-y-1 py-2">
                                  {item.dropdown.map((dropItem, index) => (
                                    <NavLink
                                      key={index}
                                      to={dropItem.href}
                                      className={({ isActive }) => `block py-2 px-3 rounded-md text-sm transition-colors ${
                                        dropItem.isHighlight 
                                          ? 'text-primary font-medium bg-primary/5' 
                                          : isActive
                                            ? 'text-primary bg-primary/10'
                                            : 'text-foreground/70 hover:text-primary hover:bg-white/5'
                                      }`}
                                      onClick={handleLinkClick}
                                    >
                                      {dropItem.name}
                                    </NavLink>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : item.name === "Contact" ? (
                        <Link
                          to={ROUTES.CONTACT}
                          onClick={(e) => handleSectionClick(e, ROUTES.CONTACT, 'contact')}
                          className="block text-lg font-medium transition-colors py-2 text-foreground hover:text-primary"
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <NavLink
                          to={item.href}
                          onClick={handleLinkClick}
                          className={({ isActive }) => `block text-lg font-medium transition-colors py-2 ${
                            isActive ? 'text-primary' : 'text-foreground hover:text-primary'
                          }`}
                        >
                          {item.name}
                        </NavLink>
                      )}
                    </div>
                  ))}
                  
                  {/* Theme Toggle */}
                  <div className="pt-4 pb-2 border-t border-border/30">
                    <div className="flex items-center justify-between">  
                      <span className="text-sm font-medium text-foreground">Theme</span>
                      <ThemeToggle />
                    </div>
                  </div>
                  
                  <Link
                    to={ROUTES.CONTACT}
                    onClick={(e) => handleSectionClick(e, ROUTES.CONTACT, 'contact')}
                    className="w-full glow mt-6 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-3 rounded-md inline-flex items-center justify-center font-medium"
                  >
                    Get Started
                  </Link>
                </nav>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;