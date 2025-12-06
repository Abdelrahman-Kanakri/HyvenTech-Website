import React from "react";
import { useScrollSpy } from "@/hooks/useScrollSpy";

// CRITICAL FIX: Standard imports for ALL homepage sections.
// We removed 'lazy' and 'Suspense' to prevent layout shifts.
// This ensures the page height is calculated correctly immediately,
// fixing the "wrong section" scroll bug.
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import Services from "@/components/Services";
import Industries from "@/components/Industries"; // Key Sectors
import Process from "@/components/Process";      // Methodology
import WhyChooseUs from "@/components/WhyChooseUs";
import Team from "@/components/Team";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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
      {/* CRITICAL: The IDs below must match SECTION_IDS in constants.ts.
         Because we are using standard imports, the browser can now 
         find these IDs at their correct pixel positions immediately.
      */}

      <section id="hero" className="w-full">
        <Hero />
      </section>
      
      <div className="divider-glow" />
      <ClientLogos />
      <div className="divider-glow" />
      
      <section id="services" className="w-full">
        <Services />
      </section>
      <div className="divider-glow" />
      
      <section id="key-sectors" className="w-full">
        <Industries />
      </section>
      <div className="divider-glow" />
      
      <section className="w-full">
        <Process />
      </section>
      <div className="divider-glow" />
      
      <section className="w-full">
        <WhyChooseUs />
      </section>
      <div className="divider-glow" />
      
      <section id="about" className="w-full">
        <About />
      </section>
      <div className="divider-glow" />
      
      <section className="w-full">
        <Team />
      </section>
      <div className="divider-glow" />
      
      <section id="contact" className="w-full">
        <Contact />
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;