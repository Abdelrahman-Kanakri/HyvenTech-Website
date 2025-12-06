import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SECTION_IDS, isSectionRoute } from "@/router/constants";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  const scrollToHash = (elementId: string, behavior: ScrollBehavior = 'smooth') => {
    if (elementId === 'hero') {
      window.scrollTo({ top: 0, behavior: behavior });
      return;
    }

    const element = document.getElementById(elementId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: behavior
      });
    }
  };

  useEffect(() => {
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    if (isSectionRoute(pathname)) {
      const sectionId = SECTION_IDS[pathname];
      if (sectionId) {
        // 1. Instant Jump
        scrollToHash(sectionId, 'instant');

        // 2. Retry Logic: Checks again after layout shifts
        const t1 = setTimeout(() => scrollToHash(sectionId, 'smooth'), 100);
        const t2 = setTimeout(() => scrollToHash(sectionId, 'smooth'), 300);
        const t3 = setTimeout(() => scrollToHash(sectionId, 'smooth'), 600); // Aggressive fix for mobile

        return () => {
          clearTimeout(t1);
          clearTimeout(t2);
          clearTimeout(t3);
        };
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;