import React, { Suspense, lazy } from "react";
import { useLocation } from "react-router-dom";
import { useScrollSpy } from "@/hooks/useScrollSpy";

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

const Index = () => {
  const location = useLocation();
  
  // Enable scroll-spy for automatic URL updates
  useScrollSpy([
    'hero',
    'services', 
    'key-sectors',
    'about',
    'contact'
  ]);

  // Scroll-to-Path Logic: Handle page refresh/direct access
  React.useEffect(() => {
    const sectionMap: Record<string, string> = {
      '/': 'hero',
      '/hero': 'hero',
      '/services': 'services',
      '/key-sectors': 'key-sectors',
      '/about': 'about',
      '/contact': 'contact',
    };

    const sectionId = sectionMap[location.pathname];
    
    if (sectionId) {
      // Small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, []); // Only run on mount

  return (
    <div className="min-h-screen relative">
      <section id="hero">
        <Hero />
      </section>
      <div className="divider-glow" />
      <ClientLogos />
      <div className="divider-glow" />
      
      <section id="services">
        <Suspense fallback={<LoadingFallback />}>
          <Services />
        </Suspense>
      </section>
      <div className="divider-glow" />
      
      <section id="key-sectors">
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
      
      <section id="about">
        <Suspense fallback={<LoadingFallback />}>
          <About />
        </Suspense>
      </section>
      <div className="divider-glow" />
      
      <Suspense fallback={<LoadingFallback />}>
        <Team />
      </Suspense>
      <div className="divider-glow" />
      
      <section id="contact">
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
