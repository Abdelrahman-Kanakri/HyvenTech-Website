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
  );
};

export default Index;
