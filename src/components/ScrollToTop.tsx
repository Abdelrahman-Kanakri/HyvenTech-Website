import { useLayoutEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const navType = useNavigationType();

  useLayoutEffect(() => {
    // Disable browser's native scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    /**
     * Scroll to element with retry mechanism
     */
    const scrollToElement = (selector: string, attempt = 0, maxAttempts = 3) => {
      const element = document.querySelector(selector);
      
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
        return true;
      }

      // Retry if element not found
      if (attempt < maxAttempts) {
        setTimeout(() => {
          scrollToElement(selector, attempt + 1, maxAttempts);
        }, 100);
      }
      
      return false;
    };

    const previousPath = sessionStorage.getItem("prevPath");
    let scrollHandled = false;

    // CASE 1: Back button (POP) to Home from a subpage
    if (navType === "POP" && (pathname === "/" || pathname === "/home") && previousPath) {
      if (previousPath.includes('/services/')) {
        scrollToElement('#services', 0, 5);
        scrollHandled = true;
      } 
      else if (previousPath.includes('/key-sectors/')) {
        scrollToElement('#key-sectors', 0, 5);
        scrollHandled = true;
      } 
      else if (previousPath.includes('/company/') || previousPath.includes('/about')) {
        scrollToElement('#about', 0, 5);
        scrollHandled = true;
      }
    }

    // CASE 2: Section navigation from routes (e.g., /services, /key-sectors)
    if (!scrollHandled) {
      if (hash) {
        scrollToElement(hash);
        scrollHandled = true;
      } 
      else if (pathname === '/' || pathname === '/home') {
        // Navigating to home page - scroll to top smoothly
        window.scrollTo({ top: 0, behavior: 'smooth' });
        scrollHandled = true;
      }
      else if (pathname === '/services') {
        scrollToElement('#services');
        scrollHandled = true;
      }
      else if (pathname === '/key-sectors') {
        scrollToElement('#key-sectors');
        scrollHandled = true;
      }
      else if (pathname === '/contact') {
        scrollToElement('#contact');
        scrollHandled = true;
      }
      else if (pathname === '/about') {
        scrollToElement('#about');
        scrollHandled = true;
      }
    }

    // CASE 3: Default - scroll to top for other pages
    if (!scrollHandled) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }

    // Update previous path for next navigation
    sessionStorage.setItem("prevPath", pathname);

  }, [pathname, hash, navType]);

  return null;
};

export default ScrollToTop;