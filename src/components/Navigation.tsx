import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X, Bot } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navItems } from "@/constants/navigation";
import logoLight from "@/assets/Logo/Assets-03.png";
import logoDark from "@/assets/Logo/Assets-04.png";
import { ThemeToggle } from "@/components/ThemeToggle";
import { toast } from "sonner";

const Navigation = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Track theme changes
  useEffect(() => {
    const checkTheme = () => {
      const currentTheme = document.documentElement.classList.contains('light') ? 'light' : 'dark';
      setTheme(currentTheme);
    };
    
    checkTheme();
    
    // Watch for theme changes
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
  }, [location]);

  const handleDropdownToggle = useCallback((itemName: string) => {
    setOpenDropdown(prev => prev === itemName ? null : itemName);
  }, []);

  const handleLinkClick = useCallback(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, []);

  const getLinkProps = useCallback((href: string) => {
    return {
      to: href
    };
  }, []);

  const handleLogoClick = useCallback(() => {
    handleLinkClick();
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [handleLinkClick, location.pathname]);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (href === "/contact" || href === "/#contact") {
      e.preventDefault();
      handleLinkClick();
      
      const isHomePage = location.pathname === "/" || location.pathname === "/contact" || location.pathname === "/services" || location.pathname === "/about";
      
      if (isHomePage) {
        const element = document.querySelector('#contact-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        navigate('/contact');
      }
    } else {
      handleLinkClick();
    }
  };

  const renderedNavItems = useMemo(() => navItems.map((item) => (
    <div key={item.name} className="relative">
      {item.dropdown ? (
        <div className="flex items-center gap-1">
          <Link
            {...getLinkProps(item.href)}
            onClick={(e) => handleNavClick(e, item.href)}
            className="text-base text-foreground/80 hover:text-primary transition-colors relative group cursor-pointer"
            aria-label={`Navigate to ${item.name} section`}
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
                className="absolute top-full mt-2 left-0 min-w-[220px] glass backdrop-blur-3xl bg-background/95 border border-border/50 rounded-lg shadow-xl overflow-hidden"
                role="menu"
                aria-label={`${item.name} submenu`}
              >
                {item.dropdown.map((dropItem, index) => (
                  <Link
                    key={index}
                    {...getLinkProps(dropItem.href)}
                    onClick={handleLinkClick}
                    className={`block px-4 py-3 text-sm hover:bg-primary/10 transition-colors ${
                      dropItem.isHighlight ? 'text-primary font-semibold border-t border-border/50' : 'text-foreground/80'
                    }`}
                    role="menuitem"
                  >
                    {dropItem.name}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <Link
          {...getLinkProps(item.href)}
          onClick={(e) => handleNavClick(e, item.href)}
          className="text-base text-foreground/80 hover:text-primary transition-colors relative group cursor-pointer"
          aria-label={`Navigate to ${item.name}`}
        >
          {item.name}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
        </Link>
      )}
    </div>
  )), [openDropdown, handleLinkClick, handleDropdownToggle, getLinkProps, location.pathname, navigate]);

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
              
              {/* Desktop Logo - Visible only on LG+ */}
              <Link 
                {...getLinkProps("/")}
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



              {/* Desktop Navigation Links - Visible only on LG+ */}
              <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                {renderedNavItems}
                
                {/* Theme Toggle */}
                <ThemeToggle />
                

                
                  <Button
                    asChild
                    className="glow bg-primary hover:bg-primary/90 text-primary-foreground px-6 transition-all hover:scale-105"
                  >
                    <a 
                      href="/contact"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick();
                        
                        const isHomePage = location.pathname === "/" || location.pathname === "/contact" || location.pathname === "/services" || location.pathname === "/about";
                        
                        if (isHomePage) {
                          const element = document.querySelector('#contact-section');
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }
                        } else {
                          navigate('/', { state: { scrollToContact: true } });
                        }
                        
                        toast.success("Let's get started! 🚀", {
                          description: "Redirecting you to our contact page..."
                        });
                      }}
                    >
                      Get Started
                    </a>
                  </Button>
              </div>

              {/* Mobile/Tablet Menu Button - Floating Icon (Visible < LG) */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden ml-auto p-3 bg-background/80 backdrop-blur-md border border-border/50 rounded-full shadow-lg text-foreground hover:text-primary transition-all active:scale-95"
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
            <div className="absolute inset-0 bg-background/95 backdrop-blur-3xl" onClick={() => setMobileMenuOpen(false)} />
            <motion.div
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute left-0 right-0 top-0 bg-background border-b border-border/50 shadow-2xl overflow-y-auto max-h-screen"
              role="dialog"
              aria-label="Mobile navigation menu"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <Link 
                    {...getLinkProps("/")}
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
                            aria-expanded={openDropdown === item.name}
                          >
                            {item.name}
                            <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                          </button>
                          <AnimatePresence>
                            {openDropdown === item.name && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                              >
                                <div className="pl-6 space-y-1 py-2">
                                  {item.dropdown.map((dropItem, index) => (
                                    <Link
                                      key={index}
                                      {...getLinkProps(dropItem.href)}
                                      className={`block py-2 px-3 rounded-md text-sm transition-colors ${
                                        dropItem.isHighlight 
                                          ? 'text-primary font-medium bg-primary/5' 
                                          : 'text-foreground/70 hover:text-primary hover:bg-white/5'
                                      }`}
                                      onClick={handleLinkClick}
                                    >
                                      {dropItem.name}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          {...getLinkProps(item.href)}
                          onClick={handleLinkClick}
                          className="block text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                        >
                          {item.name}
                        </Link>
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
                  
                  <Button
                    asChild
                    className="w-full glow bg-primary hover:bg-primary/90 text-primary-foreground mt-6"
                  >
                    <a 
                      href="/contact"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick();
                        
                        const isHomePage = location.pathname === "/" || location.pathname === "/contact" || location.pathname === "/services" || location.pathname === "/about";
                        
                        if (isHomePage) {
                          const element = document.querySelector('#contact-section');
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }
                        } else {
                          navigate('/', { state: { scrollToContact: true } });
                        }

                        toast.success("Let's get started! 🚀", {
                          description: "Redirecting you to our contact page..."
                        });
                      }}
                    >
                        Get Started
                    </a>
                  </Button>
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

