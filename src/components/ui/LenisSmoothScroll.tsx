import { ReactNode, useEffect, useRef } from 'react';
import Lenis from 'lenis';

interface LenisSmoothScrollProps {
  children: ReactNode;
  intensity?: number;
  infinite?: boolean;
  orientation?: 'vertical' | 'horizontal';
  smooth?: boolean;
}

export function LenisSmoothScroll({
  children,
  intensity = 1.2,
  infinite = false,
  orientation = 'vertical',
  smooth = true,
}: LenisSmoothScrollProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (!wrapperRef.current || !contentRef.current) return;

    // Set overflow based on orientation
    if (orientation === 'horizontal') {
      wrapperRef.current.style.setProperty('overflowX', 'auto');
    } else {
      wrapperRef.current.style.setProperty('overflowY', 'auto');
    }

    // Initialize Lenis
    const lenis = new Lenis({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      smoothWheel: smooth,
      duration: intensity,
      infinite,
      orientation,
      gestureOrientation: orientation === 'horizontal' ? 'both' : 'vertical',
      autoRaf: true,
      // @ts-ignore - Lenis types may not include all options
      autoToggle: true,
      anchors: true,
      allowNestedScroll: true,
      syncTouch: Boolean(infinite) || orientation === 'horizontal',
    });

    lenisRef.current = lenis;

    // Expose to window for debugging
    if (typeof window !== 'undefined') {
      (window as any).lenis = lenis;
    }

    return () => {
      lenis.destroy();
      if (typeof window !== 'undefined') {
        delete (window as any).lenis;
      }
    };
  }, [intensity, infinite, orientation, smooth]);

  // Handle anchor link resets
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const path = event.composedPath();
      const pageLink = path.find(
        (node) =>
          node instanceof HTMLAnchorElement &&
          node.getAttribute('href')?.startsWith('./')
      );

      if (pageLink && lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
      }
    }

    window.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <>
      <div
        ref={wrapperRef}
        style={
          orientation === 'horizontal'
            ? { overflowX: 'auto', width: '100%' }
            : { overflowY: 'auto', height: '100%' }
        }
      >
        <div ref={contentRef} style={{ width: '100%' }}>
          {children}
        </div>
      </div>
    </>
  );
}
