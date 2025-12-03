import { useState, useEffect } from 'react';

/**
 * Hook to detect if user prefers reduced motion
 * Respects OS-level accessibility settings
 * 
 * @returns boolean - true if user prefers reduced motion
 */
export const useReducedMotion = (): boolean => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check if browser supports matchMedia
    if (typeof window === 'undefined' || !window.matchMedia) {
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    // Set initial value
    setPrefersReducedMotion(mediaQuery.matches);

    // Listen for changes
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } 
    // Older browsers
    else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  return prefersReducedMotion;
};

/**
 * Hook to determine if animations should be enabled
 * Combines mobile detection with reduced motion preference
 * 
 * @param isMobile - whether device is mobile
 * @returns boolean - true if animations should be enabled
 */
export const useShouldAnimate = (isMobile: boolean): boolean => {
  const prefersReducedMotion = useReducedMotion();
  
  // Disable animations if user prefers reduced motion OR on mobile
  return !prefersReducedMotion && !isMobile;
};
