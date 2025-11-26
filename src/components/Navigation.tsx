import { useState, useEffect, useRef } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";



const navItems = [
  { name: "Home", href: "/#home" },
  { 
    name: "Services", 
    href: "/services",
    dropdown: [
      { name: "Accounting Systems", href: "/services/accounting-systems", isHighlight: false },
      { name: "Digital Development", href: "/services/digital-development", isHighlight: false },
      { name: "Artificial Intelligence", href: "/services/ai-solutions", isHighlight: false },
      { name: "Technical Hardware", href: "/services/technical-hardware", isHighlight: false },
      { name: "Digital Marketing", href: "/services/digital-marketing", isHighlight: false },
      { name: "Cyber Security", href: "/services/cyber-security", isHighlight: false }
    ]
  },
  { 
    name: "Industries", 
    href: "/industries",
    dropdown: [
      { name: "Healthcare", href: "/industries/healthcare", isHighlight: false },
      { name: "Finance & Banking", href: "/industries/finance", isHighlight: false },
      { name: "Retail & E-Commerce", href: "/industries/retail", isHighlight: false },
      { name: "Manufacturing", href: "/industries/manufacturing", isHighlight: false },
      { name: "Education", href: "/industries/education", isHighlight: false },
      { name: "Logistics", href: "/industries/logistics", isHighlight: false },
      { name: "Energy & Utilities", href: "/industries/energy", isHighlight: false }
    ]
  },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Navigation = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  const handleDropdownToggle = (itemName: string) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);

    const [targetPath, targetHash] = href.split('#');
    
    // Check if we are on the same page AND same path
    const currentPath = location.pathname;
    
    // If we are clicking a hash link on the CURRENT page, scroll smoothly
    if (currentPath === targetPath && targetHash) {
        e.preventDefault();
        const el = document.querySelector('#' + targetHash);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
        return;
    }

    // For everything else (different page, or same page but different virtual path like /services),
    // we let the router handle it. This ensures App.tsx triggers the transition.
    // We do NOT manually scroll here; ScrollToTop.tsx will handle it.
  };



  const getLinkProps = (href: string) => {
    const [path, hash] = href.split('#');
    return {
      to: path || "/",
      state: hash ? { scrollTo: hash } : undefined
    };
  };

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-4 inset-x-0 z-50 hidden lg:block"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="w-[90%] max-w-6xl mx-auto">
          <div className="glass backdrop-blur-xl bg-background/70 border border-border/50 rounded-2xl shadow-2xl shadow-primary/5 px-4 sm:px-6 py-3 sm:py-4">
            <div className="flex items-center justify-between w-full" ref={dropdownRef}>
              {/* Logo */}
              <Link 
                {...getLinkProps("/")}
                className="flex items-center gap-2 group" 
                aria-label="Fusion Innovation IT Home"
                onClick={(e) => handleLinkClick(e, "/")}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-glow flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-primary font-bold text-base sm:text-lg">FI</span>
                </div>
                <span className="font-bold text-sm sm:text-base md:text-lg hidden sm:block">
                  Fusion Innovation IT
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                {navItems.map((item) => (
                  <div key={item.name} className="relative">
                    {item.dropdown ? (
                      <div className="flex items-center gap-1">
                        <Link
                          {...getLinkProps(item.href)}
                          onClick={(e) => handleLinkClick(e, item.href)}
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
                              className="absolute top-full mt-2 left-0 min-w-[220px] glass backdrop-blur-xl bg-background/90 border border-border/50 rounded-lg shadow-xl overflow-hidden"
                              role="menu"
                              aria-label={`${item.name} submenu`}
                            >
                              {item.dropdown.map((dropItem, index) => (
                                <Link
                                  key={index}
                                  {...getLinkProps(dropItem.href)}
                                  onClick={(e) => handleLinkClick(e, dropItem.href)}
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
                        onClick={(e) => handleLinkClick(e, item.href)}
                        className="text-base text-foreground/80 hover:text-primary transition-colors relative group cursor-pointer"
                        aria-label={`Navigate to ${item.name}`}
                      >
                        {item.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                      </Link>
                    )}
                  </div>
                ))}
                
                {/* CTA Button */}
                <Button
                  asChild
                  className="glow bg-primary hover:bg-primary/90 text-primary-foreground px-6"
                >
                  <Link {...getLinkProps("/contact")} onClick={(e) => handleLinkClick(e, "/contact")}>
                    Get Started
                  </Link>
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
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
            <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" onClick={() => setMobileMenuOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-full sm:w-80 bg-background border-l border-border/50 shadow-2xl overflow-y-auto"
              role="dialog"
              aria-label="Mobile navigation menu"
            >
              <div className="p-6 pt-24">
                <nav className="space-y-4" role="navigation">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      {item.dropdown ? (
                        <div>
                          <button
                            onClick={() => handleDropdownToggle(item.name)}
                            className="w-full flex items-center justify-between text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                            aria-expanded={openDropdown === item.name}
                          >
                            {item.name}
                            <ChevronDown className={`h-5 w-5 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                          </button>
                          <AnimatePresence>
                            {openDropdown === item.name && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="ml-4 mt-2 space-y-2 overflow-hidden"
                              >
                                {item.dropdown.map((dropItem, index) => (
                                  <Link
                                    key={index}
                                    {...getLinkProps(dropItem.href)}
                                    className="block py-2 text-foreground/70 hover:text-primary transition-colors"
                                    onClick={(e) => handleLinkClick(e, dropItem.href)}
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
                          onClick={(e) => handleLinkClick(e, item.href)}
                          className="block text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                  
                  <Button
                    asChild
                    className="w-full glow bg-primary hover:bg-primary/90 text-primary-foreground mt-6"
                  >
                    <Link {...getLinkProps("/contact")} onClick={(e) => handleLinkClick(e, "/contact")}>
                        Get Started
                    </Link>
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
