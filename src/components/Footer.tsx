import { Linkedin, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logoLight from "@/assets/Logo/Assets-03.png";
import logoDark from "@/assets/Logo/Assets-04.png";
import { useEffect, useState } from "react";

const Footer = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const location = useLocation();
  const isCareerPage = location.pathname === '/careers';

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
  
  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
  ];

  const contactItems = [
    { icon: MapPin, label: "Amman, Jordan", href: "https://www.google.com/maps/search/?api=1&query=Amman,Jordan" },
    { icon: Mail, label: "info@hyventechjo.com", href: "mailto:info@hyventechjo.com" },
    ...(isCareerPage ? [{ icon: Mail, label: "career@hyventechjo.com", href: "mailto:career@hyventechjo.com" }] : []),
    { icon: Phone, label: "+962 7993 3392", href: "tel:+96279933392" },
  ];

  const servicesLinks = [
    { label: "Accounting Systems", href: "/services/accounting-systems" },
    { label: "Digital Development", href: "/services/digital-development" },
    { label: "AI Solutions", href: "/services/ai-solutions" },
    { label: "Cyber Security", href: "/services/cyber-security" },
    { label: "Digital Marketing", href: "/services/digital-marketing" },
  ];

  const companyLinks = [
    { label: "About Us", href: "/company/profile" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    { label: "Case Studies", href: "/case-studies" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ];

  return (
    <footer className="relative pt-12 sm:pt-16 pb-8 bg-background border-t border-border/50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-8 sm:mb-12">
          {/* Column 1: Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-3 group p-2 px-3 rounded-xl bg-background/50 border border-border/30 hover:border-primary/50 transition-all w-fit">
              <img 
                src={theme === 'light' ? logoLight : logoDark} 
                alt="HyvenTech Logo" 
                className="w-32 h-auto object-contain group-hover:scale-110 transition-transform rounded-xl"
              />
            </Link>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Empowering businesses with innovative technology solutions. We build the digital infrastructure that powers the future of enterprise.
            </p>
            <div className="space-y-4 pt-2">
              {contactItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <Icon className="h-5 w-5 text-primary mt-0.5 group-hover:scale-110 transition-transform" />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {servicesLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal & Social */}
          <div>
            <h4 className="font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-3 mb-8">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h4 className="font-bold text-lg mb-4">Follow Us</h4>
            <div className="flex gap-2 flex-wrap">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    aria-label={link.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
    </footer>
  );
};

export default Footer;
