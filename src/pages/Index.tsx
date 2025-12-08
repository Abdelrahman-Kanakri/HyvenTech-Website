import React, { Suspense, lazy } from "react";
import { useScrollSpy } from "@/hooks/useScrollSpy";

// Critical components loaded immediately for LCP (Largest Contentful Paint)
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";

// Lazy load below-the-fold components to reduce initial bundle size
const Services = lazy(() => import("@/components/Services"));
const Industries = lazy(() => import("@/components/Industries")); // Maps to "Key Sectors"
const WhyChooseUs = lazy(() => import("@/components/WhyChooseUs"));
const Team = lazy(() => import("@/components/Team"));
const About = lazy(() => import("@/components/About"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const LoadingFallback = () => <div className="py-20 min-h-[50vh]" />;

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