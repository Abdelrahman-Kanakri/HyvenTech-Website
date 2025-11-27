import { useEffect, useLayoutEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const scrollPositions: Record<string, number> = {};
// Track the previous pathname to handle back navigation
let previousPathname: string | null = null;

const ScrollToTop = () => {
  const location = useLocation();
  const { pathname, hash } = location;
  const navType = useNavigationType();

  // 1. Save scroll position before leaving the page
  useEffect(() => {
    // Save on scroll
    const handleScroll = () => {
      scrollPositions[pathname] = window.scrollY;
    };
    
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  useLayoutEffect(() => {
    // Helper: Returns TRUE if it found the element, FALSE if it didn't
    const scrollToElement = (selector: string) => {
      const element = document.querySelector(selector);
      if (element) {
        // Smooth scroll only for anchors/sections
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        return true;
      }
      return false;
    };

    // 2. Handle Browser Back Button (POP) from subpages
    if (navType === "POP" && (pathname === "/" || pathname === "/home")) {
      // Check if coming back from a subpage and scroll to appropriate section
      if (previousPathname) {
        let targetSection = null;
        
        if (previousPathname.startsWith('/services/')) {
          targetSection = '#services';
        } else if (previousPathname.startsWith('/key-sectors/')) {
          targetSection = '#key-sectors';
        } else if (previousPathname.startsWith('/company/')) {
          targetSection = '#about';
        }
        
        if (targetSection) {
          setTimeout(() => {
            scrollToElement(targetSection);
          }, 100);
          previousPathname = pathname; // Update for next navigation
          return;
        }
      }
    }

    // 3. Handle regular POP navigation (restoring scroll position)
    if (navType === "POP") {
      const savedPosition = scrollPositions[pathname];
      if (savedPosition !== undefined) {
        window.scrollTo(0, savedPosition);
        previousPathname = pathname; // Update for next navigation
        return;
      }
    }

    // 4. Define Logic for Specific Paths
    const BASE_PATH = '';
    let didScrollToSection = false;

    // Check path-specific scroll logic
    if (pathname === `${BASE_PATH}/` || pathname === `${BASE_PATH}/home`) {
      // Home usually just means top
      window.scrollTo({ top: 0, behavior: 'smooth' });
      didScrollToSection = true;
    } 
    else if (pathname === `${BASE_PATH}/services`) {
      didScrollToSection = scrollToElement('#services');
    } 
    else if (pathname === `${BASE_PATH}/key-sectors`) {
      didScrollToSection = scrollToElement('#key-sectors');
    } 
    else if (pathname === `${BASE_PATH}/contact`) {
      didScrollToSection = scrollToElement('#contact');
    } 
    else if (pathname === `${BASE_PATH}/about`) {
      didScrollToSection = scrollToElement('#about'); 
    } 
    else if (hash) {
      didScrollToSection = scrollToElement(hash);
    }

    // 5. CRITICAL FIX: Fallback to Top
    // If we didn't match a section, OR if we tried to match a section but the ID wasn't found...
    // ...we MUST scroll to the top instantly.
    if (!didScrollToSection) {
      // Use 'instant' or 'auto' for page loads. 'smooth' causes glitches here.
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }

    // Update previousPathname for next navigation
    previousPathname = pathname;

  }, [pathname, hash, navType]);

  return null;
};

export default ScrollToTop;