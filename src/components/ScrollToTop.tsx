import { useEffect, useRef, useLayoutEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const scrollPositions: Record<string, number> = {};

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
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

    // 2. Handle Browser Back Button (POP)
    if (navType === "POP") {
      const savedPosition = scrollPositions[pathname];
      if (savedPosition !== undefined) {
        window.scrollTo(0, savedPosition);
        return;
      }
    }

    // 3. Define Logic for Specific Paths
    const BASE_PATH = '';
    let didScrollToSection = false;

    // Check path-specific scroll logic
    if (pathname === `${BASE_PATH}/` || pathname === `${BASE_PATH}/home`) {
      // Home usually just means top
      window.scrollTo({ top: 0, behavior: 'instant' });
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

    // 4. CRITICAL FIX: Fallback to Top
    // If we didn't match a section, OR if we tried to match a section but the ID wasn't found...
    // ...we MUST scroll to the top instantly.
    if (!didScrollToSection) {
      // Use 'instant' or 'auto' for page loads. 'smooth' causes glitches here.
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }

  }, [pathname, hash, navType]);

  return null;
};

export default ScrollToTop;