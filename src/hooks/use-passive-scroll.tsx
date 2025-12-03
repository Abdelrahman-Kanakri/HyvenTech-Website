import { useEffect, useRef } from 'react';

/**
 * Throttle function to limit execution rate
 */
const throttle = <T extends (...args: any[]) => void>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return function(this: any, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

interface UsePassiveScrollOptions {
  onScroll: (event: Event) => void;
  throttleMs?: number;
  enabled?: boolean;
}

/**
 * Hook for optimized scroll event listeners
 * Uses passive listeners for better performance
 * 
 * @param onScroll - Callback function to execute on scroll
 * @param throttleMs - Throttle interval in milliseconds (default: 100)
 * @param enabled - Whether the listener is enabled (default: true)
 */
export const usePassiveScroll = ({
  onScroll,
  throttleMs = 100,
  enabled = true,
}: UsePassiveScrollOptions) => {
  const throttledCallbackRef = useRef<(event: Event) => void>();

  useEffect(() => {
    // Create throttled callback
    throttledCallbackRef.current = throttle(onScroll, throttleMs);
  }, [onScroll, throttleMs]);

  useEffect(() => {
    if (!enabled || !throttledCallbackRef.current) return;

    const handleScroll = (event: Event) => {
      if (throttledCallbackRef.current) {
        throttledCallbackRef.current(event);
      }
    };

    // Add passive event listener for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [enabled]);
};

/**
 * Hook for touch events with passive listeners
 */
interface UsePassiveTouchOptions {
  onTouchStart?: (event: TouchEvent) => void;
  onTouchMove?: (event: TouchEvent) => void;
  onTouchEnd?: (event: TouchEvent) => void;
  element?: HTMLElement | null;
}

export const usePassiveTouch = ({
  onTouchStart,
  onTouchMove,
  onTouchEnd,
  element,
}: UsePassiveTouchOptions) => {
  useEffect(() => {
    const target = element || window;
    
    if (onTouchStart) {
      target.addEventListener('touchstart', onTouchStart as any, { passive: true });
    }
    if (onTouchMove) {
      target.addEventListener('touchmove', onTouchMove as any, { passive: true });
    }
    if (onTouchEnd) {
      target.addEventListener('touchend', onTouchEnd as any, { passive: true });
    }

    return () => {
      if (onTouchStart) {
        target.removeEventListener('touchstart', onTouchStart as any);
      }
      if (onTouchMove) {
        target.removeEventListener('touchmove', onTouchMove as any);
      }
      if (onTouchEnd) {
        target.removeEventListener('touchend', onTouchEnd as any);
      }
    };
  }, [onTouchStart, onTouchMove, onTouchEnd, element]);
};
