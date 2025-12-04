import { useEffect, useRef } from 'react';

/**
 * Throttle function to limit execution rate
 */
const throttle = <T extends (...args: unknown[]) => void>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null;
  return function(this: unknown, ...args: Parameters<T>) {
    if (!timeout) {
      func.apply(this, args);
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
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

    type TouchEventListener = (event: TouchEvent) => void;
    
    if (onTouchStart) {
      target.addEventListener('touchstart', onTouchStart as TouchEventListener, { passive: true } as AddEventListenerOptions);
    }
    if (onTouchMove) {
      target.addEventListener('touchmove', onTouchMove as TouchEventListener, { passive: true } as AddEventListenerOptions);
    }
    if (onTouchEnd) {
      target.addEventListener('touchend', onTouchEnd as TouchEventListener, { passive: true } as AddEventListenerOptions);
    }

    return () => {
      if (onTouchStart) {
        target.removeEventListener('touchstart', onTouchStart as TouchEventListener);
      }
      if (onTouchMove) {
        target.removeEventListener('touchmove', onTouchMove as TouchEventListener);
      }
      if (onTouchEnd) {
        target.removeEventListener('touchend', onTouchEnd as TouchEventListener);
      }
    };
  }, [onTouchStart, onTouchMove, onTouchEnd, element]);
};
