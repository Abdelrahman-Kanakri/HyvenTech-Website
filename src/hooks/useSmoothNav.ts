// fileName: src/hooks/useSmoothNav.ts
import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SECTION_IDS } from '@/router/constants';

/**
 * Smart Smooth Navigation Hook
 * * Simplified to work in harmony with ScrollToTop.tsx.
 * It delegates "Navigation" to the router and "Scrolling" to the ScrollToTop component
 * (except when clicking a link to the page you are already on).
 */
export const useSmoothNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Height of your fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  const navigateTo = useCallback((targetPath: string, sectionId?: string) => {
    const scrollTarget = sectionId || SECTION_IDS[targetPath];

    // Case 1: We are already on the target path (e.g. clicking 'Services' while on /services)
    if (location.pathname === targetPath) {
      if (scrollTarget) {
        scrollToSection(scrollTarget);
      }
      return;
    }

    // Case 2: Changing routes (e.g. Home -> Services, or Contact -> Services)
    // We just navigate. The ScrollToTop.tsx component will detect the 
    // route change and handle the scrolling automatically.
    navigate(targetPath);
    
  }, [location.pathname, navigate, scrollToSection]);

  return { navigateTo };
};