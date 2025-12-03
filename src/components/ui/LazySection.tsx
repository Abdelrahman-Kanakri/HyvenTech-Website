import { ReactNode, useEffect, useRef, useState } from 'react';

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  placeholder?: ReactNode;
  once?: boolean;
}

/**
 * Lazy load sections using Intersection Observer
 * Renders children only when section enters viewport
 * 
 * @param children - Content to lazy load
 * @param threshold - Visibility threshold (0-1)
 * @param rootMargin - Margin around root for early loading
 * @param placeholder - Optional loading placeholder
 * @param once - Only load once (don't unload when leaving viewport)
 */
const LazySection = ({
  children,
  className = '',
  threshold = 0.1,
  rootMargin = '100px',
  placeholder = null,
  once = true,
}: LazySectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            
            // If 'once' is true, disconnect after first intersection
            if (once) {
              observer.disconnect();
            }
          } else if (!once) {
            // If 'once' is false, hide when leaving viewport
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, once]);

  return (
    <div ref={sectionRef} className={className}>
      {isVisible ? children : placeholder}
    </div>
  );
};

export default LazySection;
