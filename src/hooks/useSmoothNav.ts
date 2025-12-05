import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { isSectionRoute, SECTION_IDS } from '@/router/constants';

/**
 * Smart Smooth Navigation Hook
 * 
 * Prevents "scroll fighting" by handling navigation intelligently:
 * - If already on a section route, updates URL and scrolls without re-rendering
 * - If on a different page, navigates normally
 * 
 * @param targetPath - The path to navigate to (e.g., "/contact")
 * @param sectionId - The section ID to scroll to (e.g., "contact")
 * @returns Navigation handler function
 */
export const useSmoothNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  const navigateTo = useCallback((targetPath: string, sectionId?: string) => {
    // Determine section ID from path if not provided
    const scrollTarget = sectionId || SECTION_IDS[targetPath];

    // Scenario A: Already on a section route (Homepage variants)
    if (isSectionRoute(location.pathname)) {
      // Update URL silently without triggering navigation
      window.history.pushState(null, '', targetPath);
      
      // Scroll to section
      if (scrollTarget) {
        scrollToSection(scrollTarget);
      }
    } 
    // Scenario B: On a subpage - use normal navigation
    else {
      navigate(targetPath);
      // After navigation, scroll to section
      if (scrollTarget) {
        setTimeout(() => scrollToSection(scrollTarget), 100);
      }
    }
  }, [location.pathname, navigate, scrollToSection]);

  return { navigateTo, scrollToSection };
};
