// fileName: ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SECTION_IDS, isSectionRoute } from "@/router/constants";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // 1. Handle "Virtual" Section Routes (e.g., /services, /about)
    if (isSectionRoute(pathname)) {
      const sectionId = SECTION_IDS[pathname];
      if (sectionId) {
        // Attempt to find the element
        const element = document.getElementById(sectionId);
        
        if (element) {
          // If element exists immediately (navigation), scroll to it
          const yOffset = -80; // Offset for fixed header
          const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
          
          window.scrollTo({ top: y, behavior: 'smooth' });
        } else {
          // If element doesn't exist yet (page reload/initial load), retry briefly
          const retryScroll = setTimeout(() => {
            const el = document.getElementById(sectionId);
            if (el) {
              const yOffset = -80; 
              const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
              window.scrollTo({ top: y, behavior: 'instant' }); // Instant on load
            }
          }, 100); // 100ms delay to allow DOM to paint
          return () => clearTimeout(retryScroll);
        }
      }
      return;
    }

    // 2. Handle Standard Route Changes (e.g., /privacy-policy)
    // Always scroll to top (0,0)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

  }, [pathname, hash]); // Re-run whenever path or hash changes

  return null;
};

export default ScrollToTop;