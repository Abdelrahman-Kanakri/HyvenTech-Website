import React from "react";
import { Code } from "lucide-react";
import ServiceDetail from "@/components/ServiceDetail";

const DigitalDevelopment = () => {
  return (
    <ServiceDetail
      title="Digital Development"
      description="Transform your digital presence with high-performance websites and mobile applications built on cutting-edge technology stacks."
      icon={Code}
      benefits={[
        "Responsive designs that work on all devices",
        "High-performance architecture for fast load times",
        "SEO-optimized structure for better visibility",
        "Scalable backend systems to grow with your user base",
        "Secure and compliant code standards"
      ]}
      features={[
        {
          title: "Custom Web Applications",
          description: "Tailor-made web apps using React, Next.js, and modern frameworks for superior user experience."
        },
        {
          title: "Mobile App Development",
          description: "Native and cross-platform mobile apps for iOS and Android using React Native and Flutter."
        },
        {
          title: "E-Commerce Solutions",
          description: "Robust online stores with secure payment gateways and inventory management systems."
        },
        {
          title: "API Integration",
          description: "Seamless connection of third-party services and internal systems through REST and GraphQL APIs."
        }
      ]}
    />
  );
};

export default DigitalDevelopment;
