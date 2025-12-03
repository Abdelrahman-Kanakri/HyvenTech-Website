import { useState, useCallback, lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useIsMobile } from "@/hooks/use-mobile";

// Components
import ErrorBoundary from "./components/ErrorBoundary";
import LoadingScreen from "./components/LoadingScreen";
import ScrollToTop from "./components/ScrollToTop";
import Navigation from "./components/Navigation";
import LoadingBar from "./components/LoadingBar";

// Lazy Load Non-Critical Components
const Chatbot = lazy(() => import("./components/ChatBot"));
const BottomNavigation = lazy(() => import("./components/BottomNavigation"));

// Lazy Loaded Pages
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const FAQ = lazy(() => import("./pages/FAQ"));
const SocialMedia = lazy(() => import("./pages/SocialMedia"));
const ComingSoon = lazy(() => import("./pages/ComingSoon"));

const Careers = lazy(() => import("./pages/Careers"));
const AccountingSystems = lazy(() => import("./pages/services/AccountingSystems"));
const DigitalDevelopment = lazy(() => import("./pages/services/DigitalDevelopment"));
const AIServices = lazy(() => import("./pages/services/AIServices"));
const TechnicalHardware = lazy(() => import("./pages/services/TechnicalHardware"));
const DigitalMarketing = lazy(() => import("./pages/services/SocialMedia"));
const CyberSecurity = lazy(() => import("./pages/services/CyberSecurity"));
const Healthcare = lazy(() => import("./pages/industries/Healthcare"));
const Finance = lazy(() => import("./pages/industries/Finance"));
const Retail = lazy(() => import("./pages/industries/Retail"));
const Manufacturing = lazy(() => import("./pages/industries/Manufacturing"));
const Education = lazy(() => import("./pages/industries/Education"));
const Logistics = lazy(() => import("./pages/industries/Logistics"));
const Energy = lazy(() => import("./pages/industries/Energy"));
const AboutUsDetailed = lazy(() => import("./pages/company/AboutUsDetailed"));
const HyvenLeadership = lazy(() => import("./pages/company/HyvenLeadership")); 
const Methodology = lazy(() => import("./pages/company/Methodology"));
const WhyUs = lazy(() => import("./pages/company/WhyUs"));

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const isMobile = useIsMobile();

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  // PERFORMANCE: Disable animations on mobile for better performance
  const shouldAnimate = !isMobile;
  
  return (
    <TooltipProvider>
      <LoadingBar />
      {isLoading ? (
        <LoadingScreen onComplete={handleLoadingComplete} />
      ) : (
        <ErrorBoundary>
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
                  <ScrollToTop />
                  <Suspense fallback={<LoadingScreen onComplete={() => {}} />}>
                    <Routes location={location}>
                    <Route index element={<Index />} />
                    <Route path="services" element={<Index />} />
                    <Route path="about" element={<Index />} />
                    <Route path="contact" element={<Index />} />
                    <Route path="key-sectors" element={<Index />} />
                    <Route path="privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="terms-of-service" element={<TermsOfService />} />
                    <Route path="faq" element={<FAQ />} />
                    <Route path="social-media" element={<SocialMedia />} />
                    <Route path="careers" element={<Careers />} />
                    <Route path="blog" element={<ComingSoon />} />
                    <Route path="case-studies" element={<ComingSoon />} />
                    
                    {/* Company Pages */}
                    <Route path="company/profile" element={<AboutUsDetailed />} />
                    <Route path="company/leadership" element={<HyvenLeadership />} />
                    <Route path="company/methodology" element={<Methodology />} />
                    <Route path="company/why-us" element={<WhyUs />} />

                    {/* Services */}
                    <Route path="services/accounting-systems" element={<AccountingSystems />} />
                    <Route path="services/digital-development" element={<DigitalDevelopment />} />
                    <Route path="services/ai-solutions" element={<AIServices />} />
                    <Route path="services/technical-hardware" element={<TechnicalHardware />} />
                    <Route path="services/digital-marketing" element={<DigitalMarketing />} />
                    <Route path="services/cyber-security" element={<CyberSecurity />} />

                    {/* Key Sectors */}
                    <Route path="key-sectors/healthcare" element={<Healthcare />} />
                    <Route path="key-sectors/finance" element={<Finance />} />
                    <Route path="key-sectors/retail" element={<Retail />} />
                    <Route path="key-sectors/manufacturing" element={<Manufacturing />} />
                    <Route path="key-sectors/education" element={<Education />} />
                    <Route path="key-sectors/logistics" element={<Logistics />} />
                    <Route path="key-sectors/energy" element={<Energy />} />

                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </motion.div>
              ) : (
                // Mobile: No animations for better performance
                <div key={location.pathname}>
                  <ScrollToTop />
                  <Suspense fallback={<LoadingScreen onComplete={() => {}} />}>
                    <Routes location={location}>
                      <Route index element={<Index />} />
                      <Route path="services" element={<Index />} />
                      <Route path="about" element={<Index />} />
                      <Route path="contact" element={<Index />} />
                      <Route path="key-sectors" element={<Index />} />
                      <Route path="privacy-policy" element={<PrivacyPolicy />} />
                      <Route path="terms-of-service" element={<TermsOfService />} />
                      <Route path="faq" element={<FAQ />} />
                      <Route path="social-media" element={<SocialMedia />} />
                      <Route path="careers" element={<Careers />} />
                      <Route path="blog" element={<ComingSoon />} />
                      <Route path="case-studies" element={<ComingSoon />} />
                      
                      {/* Company Pages */}
                      <Route path="company/profile" element={<AboutUsDetailed />} />
                      <Route path="company/leadership" element={<HyvenLeadership />} />
                      <Route path="company/methodology" element={<Methodology />} />
                      <Route path="company/why-us" element={<WhyUs />} />

                      {/* Services */}
                      <Route path="services/accounting-systems" element={<AccountingSystems />} />
                      <Route path="services/digital-development" element={<DigitalDevelopment />} />
                      <Route path="services/ai-solutions" element={<AIServices />} />
                      <Route path="services/technical-hardware" element={<TechnicalHardware />} />
                      <Route path="services/digital-marketing" element={<DigitalMarketing />} />
                      <Route path="services/cyber-security" element={<CyberSecurity />} />

                      {/* Key Sectors */}
                      <Route path="key-sectors/healthcare" element={<Healthcare />} />
                      <Route path="key-sectors/finance" element={<Finance />} />
                      <Route path="key-sectors/retail" element={<Retail />} />
                      <Route path="key-sectors/manufacturing" element={<Manufacturing />} />
                      <Route path="key-sectors/education" element={<Education />} />
                      <Route path="key-sectors/logistics" element={<Logistics />} />
                      <Route path="key-sectors/energy" element={<Energy />} />

                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </Suspense>
                </div>
              )}
            </AnimatePresence>

            <Suspense fallback={null}>
              {isMobile && <BottomNavigation />}
              <Chatbot />
            </Suspense>
            <Toaster />
            <Sonner position="top-center" />
          </div>
        </ErrorBoundary>
      )}
    </TooltipProvider>
  );
};

export default App;
