import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scroll Spy Hook with IntersectionObserver
 * 
 * Automatically updates URL hash as user scrolls through sections.
 * Mimics professional landing pages (Stripe, Apple, etc.)
 * 
 * @param sectionIds - Array of section IDs to observe (e.g., ['hero', 'services', 'about'])
 * @param options - IntersectionObserver options
 * @returns Current active section ID
 */

interface UseScrollSpyOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

export const useScrollSpy = (
  sectionIds: string[],
  options: UseScrollSpyOptions = {}
) => {
  const [activeSection, setActiveSection] = useState<string>('');
  const location = useLocation();

  useEffect(() => {
    // Only run on homepage/section routes
    const currentPath = location.pathname;
    const isHomepage = currentPath === '/' || 
                       currentPath === '/hero' || 
                       currentPath === '/about' ||
                       currentPath === '/services' ||
                       currentPath === '/key-sectors' ||
                       currentPath === '/contact';
    
    if (!isHomepage) {
      setActiveSection('');
      return;
    }

    const observerOptions: IntersectionObserverInit = {
      root: options.root || null,
      rootMargin: options.rootMargin || '-20% 0px -60% 0px',
      threshold: options.threshold || 0.15,
    };

    const observers: IntersectionObserver[] = [];
    const sectionElements: { [key: string]: Element } = {};

    // Map section IDs to clean URL paths
    const sectionToPath: Record<string, string> = {
      'hero': '/',
      'services': '/services',
      'key-sectors': '/key-sectors',
      'about': '/about',
      'contact': '/contact',
    };

    // Create observers for each section
    sectionIds.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (!element) return;

      sectionElements[sectionId] = element;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newPath = sectionToPath[sectionId] || '/';
            setActiveSection(sectionId);

            // Silently update URL with clean path (no hash)
            if (window.location.pathname !== newPath) {
              window.history.replaceState(null, '', newPath);
            }
          }
        });
      }, observerOptions);

      observer.observe(element);
      observers.push(observer);
    });

    // Cleanup
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sectionIds, options.root, options.rootMargin, options.threshold, location.pathname]);

  return activeSection;
};

/**
 * Check if a section is currently active based on scroll position
 * 
 * @param sectionId - The ID of the section to check
 * @param activeSection - Current active section from useScrollSpy
 * @param location - Current location from useLocation
 * @returns Boolean indicating if section is active
 */
export const isSectionActive = (
  sectionId: string,
  activeSection: string,
  locationHash: string
): boolean => {
  // Check URL hash first
  if (locationHash === `#${sectionId}`) {
    return true;
  }
  
  // Check active section from scroll spy
  return activeSection === sectionId;
};
