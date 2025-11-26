import React from "react";
import { HardDrive } from "lucide-react";
import ServiceDetail from "@/components/ServiceDetail";

const TechnicalHardware = () => {
  return (
    <ServiceDetail
      title="Technical Hardware"
      description="Equip your business with reliable, high-performance hardware solutions tailored to support your software and operational needs."
      icon={HardDrive}
      benefits={[
        "Reliable performance for critical business operations",
        "Seamless compatibility with our software solutions",
        "Durable equipment designed for industrial use",
        "Comprehensive warranty and support services",
        "Cost-effective procurement and setup"
      ]}
      features={[
        {
          title: "POS Systems",
          description: "All-in-one Point of Sale terminals with touchscreens, receipt printers, and cash drawers."
        },
        {
          title: "Barcode Scanners",
          description: "High-speed 1D and 2D barcode scanners for efficient inventory management and checkout."
        },
        {
          title: "Server Infrastructure",
          description: "Robust server hardware configuration and installation for on-premise data management."
        },
        {
          title: "Networking Equipment",
          description: "Enterprise-grade routers, switches, and access points for secure and fast connectivity."
        }
      ]}
    />
  );
};

export default TechnicalHardware;
