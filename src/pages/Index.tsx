import React, { Suspense, lazy } from "react";

import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";

// Lazy load below-the-fold components to reduce initial bundle size
const Services = lazy(() => import("@/components/Services"));
const Industries = lazy(() => import("@/components/Industries"));
const WhyChooseUs = lazy(() => import("@/components/WhyChooseUs"));
const Process = lazy(() => import("@/components/Process"));
const Team = lazy(() => import("@/components/Team"));
const About = lazy(() => import("@/components/About"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const LoadingFallback = () => <div className="py-20" />;

import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();

  React.useEffect(() => {
    if (location.state?.scrollToContact) {
      const element = document.querySelector('#contact-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Clear the state to prevent scrolling on refresh
        window.history.replaceState({}, document.title);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen relative">
      <Hero />
      <div className="divider-glow" />
      <ClientLogos />
      <div className="divider-glow" />
      
      <Suspense fallback={<LoadingFallback />}>
        <Services />
      </Suspense>
      <div className="divider-glow" />
      
      <Suspense fallback={<LoadingFallback />}>
        <Industries />
      </Suspense>
      <div className="divider-glow" />
      
      <Suspense fallback={<LoadingFallback />}>
        <Process />
      </Suspense>
      <div className="divider-glow" />
      
      <Suspense fallback={<LoadingFallback />}>
        <WhyChooseUs />
      </Suspense>
      <div className="divider-glow" />
      
      <Suspense fallback={<LoadingFallback />}>
        <About />
      </Suspense>
      <div className="divider-glow" />
      
      <Suspense fallback={<LoadingFallback />}>
        <Team />
      </Suspense>
      <div className="divider-glow" />
      
      <div id="contact-section">
        <Suspense fallback={<LoadingFallback />}>
          <Contact />
        </Suspense>
      </div>
      
      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
