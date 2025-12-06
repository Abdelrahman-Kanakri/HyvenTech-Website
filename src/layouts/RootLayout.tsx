import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
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

const RootLayout = () => {
  const isMobile = useIsMobile();

  return (
    <div className="relative min-h-screen bg-background flex flex-col font-sans">
      <LoadingBar />
      <ScrollToTop />
      
      {/* Main Content Wrapper */}
      <div className={`relative z-10 flex-1 flex flex-col ${isMobile ? 'pb-24' : ''}`}>
        <Navigation />
        
        {/* SIMPLIFIED: Removed AnimatePresence to guarantee visibility */}
        <div className="flex-1 flex flex-col w-full min-h-[60vh]">
          <Suspense fallback={<LoadingScreen onComplete={() => {}} />}>
            <Outlet />
          </Suspense>
        </div>

        <Suspense fallback={null}>
          {isMobile && <BottomNavigation />}
          <ChatBot />
        </Suspense>
        
        <Toaster />
        <Sonner position="top-center" />
      </div>
    </div>
  );
};

export default RootLayout;