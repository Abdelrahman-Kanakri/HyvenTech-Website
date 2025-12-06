import React, { Suspense, lazy } from "react";
import { useScrollSpy } from "@/hooks/useScrollSpy";

import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";

// Lazy load below-the-fold components
const Services = lazy(() => import("@/components/Services"));
const Industries = lazy(() => import("@/components/Industries")); // Maps to "Key Sectors"
const WhyChooseUs = lazy(() => import("@/components/WhyChooseUs"));
const Process = lazy(() => import("@/components/Process"));
const Team = lazy(() => import("@/components/Team"));
const About = lazy(() => import("@/components/About"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const LoadingFallback = () => <div className="py-20" />;

const Index = () => {
  // Keep scroll spy for active state highlighting
  useScrollSpy([
    'hero',
    'services', 
    'key-sectors',
    'about',
    'contact'
  ]);

  return (
    <div className="min-h-screen relative flex flex-col w-full overflow-x-hidden">
      {/* CRITICAL: These IDs must match SECTION_IDS in constants.ts */}
      <section id="hero" className="w-full">
        <Hero />
      </section>
      
      <div className="divider-glow" />
      <ClientLogos />
      <div className="divider-glow" />
      
      <section id="services" className="w-full">
        <Suspense fallback={<LoadingFallback />}>
          <Services />
        </Suspense>
      </section>
      <div className="divider-glow" />
      
      <section id="key-sectors" className="w-full">
        <Suspense fallback={<LoadingFallback />}>
          <Industries />
        </Suspense>
      </section>
      <div className="divider-glow" />
      
      <Suspense fallback={<LoadingFallback />}>
        <Process />
      </Suspense>
      <div className="divider-glow" />
      
      <Suspense fallback={<LoadingFallback />}>
        <WhyChooseUs />
      </Suspense>
      <div className="divider-glow" />
      
      <section id="about" className="w-full">
        <Suspense fallback={<LoadingFallback />}>
          <About />
        </Suspense>
      </section>
      <div className="divider-glow" />
      
      <Suspense fallback={<LoadingFallback />}>
        <Team />
      </Suspense>
      <div className="divider-glow" />
      
      <section id="contact" className="w-full">
        <Suspense fallback={<LoadingFallback />}>
          <Contact />
        </Suspense>
      </section>
      
      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;