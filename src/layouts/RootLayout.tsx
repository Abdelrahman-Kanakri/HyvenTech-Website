import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

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
 * 
 * Wraps all routes with common layout elements:
 * - Navigation
 * - Scroll restoration
 * - Bottom navigation (mobile)
 * - Chatbot
 * - Toasts
 * - Page transitions
 */
const RootLayout = () => {
  const isMobile = useIsMobile();
  const location = useLocation();
  const shouldAnimate = !isMobile;

  return (
    <>
      <LoadingBar />
      <ScrollToTop />
      <div className={`relative z-10 ${isMobile ? 'pb-24' : ''}`}>
        <Navigation />
        
        <AnimatePresence mode="wait">
          {shouldAnimate ? (
            <motion.div
              key={location.pathname}
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
            <div key={location.pathname}>
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
