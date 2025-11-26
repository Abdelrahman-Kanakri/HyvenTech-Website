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

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import FAQ from "./pages/FAQ";
import SocialMedia from "./pages/SocialMedia";
import AboutUsDetailed from "./pages/AboutUsDetailed";
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
          <ScrollToTop />
          <Navigation />
          <MobileLogo />
          
          <Routes>
            <Route index element={<Index />} />
            <Route path="services" element={<Index />} />
            <Route path="about" element={<Index />} />
            <Route path="contact" element={<Index />} />
            <Route path="industries" element={<Index />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms-of-service" element={<TermsOfService />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="social-media" element={<SocialMedia />} />
            <Route path="about-us" element={<AboutUsDetailed />} />
            <Route path="services/accounting-systems" element={<AccountingSystems />} />
            <Route path="services/digital-development" element={<DigitalDevelopment />} />
            <Route path="services/ai-solutions" element={<AIServices />} />
            <Route path="services/technical-hardware" element={<TechnicalHardware />} />
            <Route path="services/digital-marketing" element={<DigitalMarketing />} />
            <Route path="services/cyber-security" element={<CyberSecurity />} />
            <Route path="industries/healthcare" element={<Healthcare />} />
            <Route path="industries/finance" element={<Finance />} />
            <Route path="industries/retail" element={<Retail />} />
            <Route path="industries/manufacturing" element={<Manufacturing />} />
            <Route path="industries/education" element={<Education />} />
            <Route path="industries/logistics" element={<Logistics />} />
            <Route path="industries/energy" element={<Energy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Chatbot />
          <Toaster />
          <Sonner position="top-center" />
        </ErrorBoundary>
      )}
    </TooltipProvider>
  );
};

export default App;