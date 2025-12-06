import { Suspense, useMemo } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
import { isSectionRoute } from '@/router/constants'; // Make sure to import this!

// Components
import Navigation from '@/components/Navigation';
import LoadingScreen from '@/components/LoadingScreen';
import LoadingBar from '@/components/LoadingBar';
import ChatBot from '@/components/ChatBot';
import BottomNavigation from '@/components/BottomNavigation';
import ScrollToTop from '@/components/ScrollToTop';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';

/**
 * Root Layout Component
 * * Fixed: Prevents page transitions when scrolling between homepage sections.
 */
const RootLayout = () => {
  const isMobile = useIsMobile();
  const location = useLocation();
  
  // Only animate if we are NOT on mobile
  const shouldAnimate = !isMobile;

  /**
   * Smart Key Logic:
   * If we are navigating between section routes (e.g., "/" -> "/services"),
   * we return the SAME key ("homepage").
   * This prevents Framer Motion from unmounting the component, allowing
   * the smooth scroll to happen naturally.
   */
  const pageKey = useMemo(() => {
    if (isSectionRoute(location.pathname)) {
      return 'homepage';
    }
    return location.pathname;
  }, [location.pathname]);

  return (
    <>
      <LoadingBar />
      {/* ScrollToTop handles the positioning logic */}
      <ScrollToTop />
      
      <div className={`relative z-10 ${isMobile ? 'pb-24' : ''}`}>
        <Navigation />
        
        <AnimatePresence mode="wait">
          {shouldAnimate ? (
            <motion.div
              key={pageKey} // CHANGED: Uses smart key instead of just pathname
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Suspense fallback={<LoadingScreen onComplete={() => {}} />}>
                <Outlet />
              </Suspense>
            </motion.div>
          ) : (
            <div key={pageKey}>
              <Suspense fallback={<LoadingScreen onComplete={() => {}} />}>
                <Outlet />
              </Suspense>
            </div>
          )}
        </AnimatePresence>

        <Suspense fallback={null}>
          {isMobile && <BottomNavigation />}
          <ChatBot />
        </Suspense>
        
        <Toaster />
        <Sonner position="top-center" />
      </div>
    </>
  );
};

export default RootLayout;