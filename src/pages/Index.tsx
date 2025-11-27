import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

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
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    let sectionId = "";

    if (path === "/services") sectionId = "services";
    else if (path === "/key-sectors") sectionId = "key-sectors";
    else if (path === "/about") sectionId = "about";
    else if (path === "/contact") sectionId = "contact";

    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        // Add a small delay to ensure content is rendered and layout is stable
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else if (path === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

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
