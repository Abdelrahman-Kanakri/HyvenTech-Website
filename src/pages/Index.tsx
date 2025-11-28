import React from "react";

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


const Index = () => {

  return (
    <div className="min-h-screen relative">
      <Hero />
      <div className="divider-glow" />
      <ClientLogos />
      <div className="divider-glow" />
      <Services />
      <div className="divider-glow" />
      <Industries />
      <div className="divider-glow" />
      <Process />
      <div className="divider-glow" />
      <WhyChooseUs />
      <div className="divider-glow" />
      <About />
      <div className="divider-glow" />
      <Team />
      <div className="divider-glow" />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
