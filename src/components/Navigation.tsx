import { useState, useEffect, useRef } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { name: "Home", href: "/" },
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
    name: "Key Sectors", 
    href: "/key-sectors",
    dropdown: [
      { name: "Healthcare", href: "/key-sectors/healthcare", isHighlight: false },
      { name: "Finance & Banking", href: "/key-sectors/finance", isHighlight: false },
      { name: "Retail & E-Commerce", href: "/key-sectors/retail", isHighlight: false },
      { name: "Manufacturing", href: "/key-sectors/manufacturing", isHighlight: false },
      { name: "Education", href: "/key-sectors/education", isHighlight: false },
      { name: "Logistics", href: "/key-sectors/logistics", isHighlight: false },
      { name: "Energy & Utilities", href: "/key-sectors/energy", isHighlight: false }
    ]
  },
  { 
    name: "Company", 
    href: "/about",
    dropdown: [
      { name: "About HyvenTech", href: "/company/profile", isHighlight: true },
      { name: "Leadership", href: "/company/leadership", isHighlight: false },
      { name: "Our Methodology", href: "/company/methodology", isHighlight: false },
      { name: "The HyvenTech Advantage", href: "/company/why-us", isHighlight: false }
    ]
  },
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

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const getLinkProps = (href: string) => {
    return {
      to: href
    };
  };

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
          <div className="lg:glass lg:backdrop-blur-xl lg:bg-background/70 lg:border lg:border-border/50 lg:rounded-2xl lg:shadow-2xl lg:shadow-primary/5 lg:px-6 lg:py-4">
            <div className="flex items-center justify-between w-full" ref={dropdownRef}>
              
              {/* Desktop Logo - Visible only on LG+ */}
              <Link 
                {...getLinkProps("/")}
                className="hidden lg:flex items-center gap-2 group" 
                aria-label="HyvenTech Home"
                onClick={() => {
                  handleLinkClick();
                  if (location.pathname === "/") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-glow flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-primary font-bold text-lg">HT</span>
                </div>
                <span className="font-bold text-lg">
                  HyvenTech
                </span>
              </Link>

              {/* Mobile/Tablet Logo - Floating Style (Visible < LG) */}
              <Link 
                {...getLinkProps("/")}
                className="lg:hidden flex items-center gap-2 p-2 bg-background/80 backdrop-blur-md border border-border/50 rounded-xl shadow-lg transition-all active:scale-95"
                aria-label="HyvenTech Home"
                onClick={() => {
                  handleLinkClick();
                  if (location.pathname === "/") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-base">HT</span>
                </div>
                <span className="font-bold text-sm text-foreground">
                  HyvenTech
                </span>
              </Link>

              {/* Desktop Navigation Links - Visible only on LG+ */}
              <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                {navItems.map((item) => (
                  <div key={item.name} className="relative">
                    {item.dropdown ? (
                      <div className="flex items-center gap-1">
                        <Link
                          {...getLinkProps(item.href)}
                          onClick={handleLinkClick}
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
                        onClick={handleLinkClick}
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
                  <Link {...getLinkProps("/contact")} onClick={handleLinkClick}>
                    Get Started
                  </Link>
                </Button>
              </div>

              {/* Mobile/Tablet Menu Button - Floating Icon (Visible < LG) */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-3 bg-background/80 backdrop-blur-md border border-border/50 rounded-full shadow-lg text-foreground hover:text-primary transition-all active:scale-95"
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
                  
                  <Button
                    asChild
                    className="w-full glow bg-primary hover:bg-primary/90 text-primary-foreground mt-6"
                  >
                    <Link {...getLinkProps("/contact")} onClick={handleLinkClick}>
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
