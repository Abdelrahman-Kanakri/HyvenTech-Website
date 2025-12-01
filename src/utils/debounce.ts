/**
 * Debounce utility
 * 
 * Delays the execution of a function until after a specified wait time
 * has elapsed since the last time it was invoked.
 * 
 * Useful for scenarios like:
 * - Search input (wait until user stops typing)
 * - Form validation (wait until user finishes editing)
 * - Window resize handlers
 * 
 * @param func - The function to debounce
 * @param wait - The number of milliseconds to delay
 * @returns Debounced function
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return function debounced(...args: Parameters<T>) {
    // Clear the previous timeout
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }

    // Set a new timeout
    timeoutId = setTimeout(() => {
      func(...args);
      timeoutId = null;
    }, wait);
  };
}

/**
 * Throttle utility
 * 
 * Ensures a function is called at most once in a specified time period.
 * Unlike debounce, throttle will execute the function at regular intervals
 * while the trigger continues.
 * 
 * Useful for scenarios like:
 * - Scroll event handlers
 * - Mouse move tracking
 * - API calls that should happen at most every X seconds
 * 
 * @param func - The function to throttle
 * @param limit - The minimum time (in ms) between function executions
 * @returns Throttled function
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean = false;

  return function throttled(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;

      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}
