import { useState, useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

// Components
import ErrorBoundary from "./components/ErrorBoundary";
import LoadingScreen from "./components/LoadingScreen";
import Chatbot from "./components/ChatBot";
import ScrollToTop from "./components/ScrollToTop";
import Navigation from "./components/Navigation";
import MobileLogo from "./components/MobileLogo";
import Particles from "@/components/ui/Particles";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import FAQ from "./pages/FAQ";
import SocialMedia from "./pages/SocialMedia";
import ComingSoon from "./pages/ComingSoon";

import Careers from "./pages/Careers";
import AccountingSystems from "./pages/services/AccountingSystems";
import DigitalDevelopment from "./pages/services/DigitalDevelopment";
import AIServices from "./pages/services/AIServices";
import TechnicalHardware from "./pages/services/TechnicalHardware";
import DigitalMarketing from "./pages/services/SocialMedia";
import CyberSecurity from "./pages/services/CyberSecurity";
import Healthcare from "./pages/industries/Healthcare";
import Finance from "./pages/industries/Finance";
import Retail from "./pages/industries/Retail";
import Manufacturing from "./pages/industries/Manufacturing";
import Education from "./pages/industries/Education";
import Logistics from "./pages/industries/Logistics";
import Energy from "./pages/industries/Energy";
import AboutUsDetailed from "./pages/company/AboutUsDetailed";
import HyvenLeadership from "./pages/company/HyvenLeadership"; 
import Methodology from "./pages/company/Methodology";
import WhyUs from "./pages/company/WhyUs";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);
  
  return (
    <TooltipProvider>
      {isLoading ? (
        <LoadingScreen onComplete={handleLoadingComplete} />
      ) : (
        <ErrorBoundary>
          <div className="fixed inset-0 z-0 pointer-events-none">
            <Particles
              particleColors={['#06B6D4', '#3B82F6', '#ffffff']}
              particleCount={300}
              particleSpread={12}
              speed={0.05}
              particleBaseSize={100}
              moveParticlesOnHover={true}
              particleHoverFactor={1.5}
              alphaParticles={true}
              sizeRandomness={1.2}
              cameraDistance={20}
              disableRotation={false}
            />
          </div>
          
          <div className="relative z-10">
            <ScrollToTop />
            <Navigation />
            <MobileLogo />
            
            <Routes>
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

            <Chatbot />
            <Toaster />
            <Sonner position="top-center" />
          </div>
        </ErrorBoundary>
      )}
    </TooltipProvider>
  );
};

export default App;