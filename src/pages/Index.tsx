import React from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import ClientLogos from "@/components/ClientLogos";
import Team from "@/components/Team";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Particles from "@/components/ui/Particles";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* 3D Particle Background - Fixed behind all content */}
      <div className="fixed inset-0 z-0">
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

      {/* All content with relative positioning to appear above particles */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <ClientLogos />
        <Services />
        <Industries />
        <Process />
        <WhyChooseUs />
        <About />
        <Team />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
