import { useEffect, useRef, useLayoutEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const navType = useNavigationType();
  const scrollPositions = useRef<Record<string, number>>({});

  // Save scroll position before leaving the page
  useEffect(() => {
    const handleScroll = () => {
      scrollPositions.current[pathname] = window.scrollY;
    };

    // Save on unmount/change
    return () => {
      scrollPositions.current[pathname] = window.scrollY;
    };
  }, [pathname]);

  useLayoutEffect(() => {
    const scrollToElement = (selector: string) => {
      const element = document.querySelector(selector);
      if (element) {
        element.scrollIntoView({ behavior: "auto", block: "start" });
        return true;
      }
      return false;
    };

    // If we are popping back (browser back button), restore scroll position
    if (navType === "POP") {
      const savedPosition = scrollPositions.current[pathname];
      if (savedPosition !== undefined) {
        window.scrollTo(0, savedPosition);
        return;
      }
    }

    // Handle virtual routes mapping to sections
    const BASE_PATH = '';
    if (pathname === `${BASE_PATH}/home`) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else if (pathname === `${BASE_PATH}/services`) {
      scrollToElement('#services');
    } else if (pathname === `${BASE_PATH}/industries`) {
      scrollToElement('#industries');
    } else if (pathname === `${BASE_PATH}/contact`) {
      scrollToElement('#contact');
    } else if (pathname === `${BASE_PATH}/about`) {
      scrollToElement('#about'); 
    } else if (hash) {
      scrollToElement(hash);
    } else {
      // For new navigations (PUSH), scroll to top instantly
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [pathname, hash, navType]);

  return null;
};

export default ScrollToTop;
