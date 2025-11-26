import React from "react";
import { Leaf } from "lucide-react";
import IndustryDetail from "@/components/IndustryDetail";

const Energy = () => {
  return (
    <IndustryDetail
      title="Energy & Utilities"
      description="Powering a sustainable future with smart energy management systems and renewable energy solutions."
      icon={Leaf}
      challenges={[
        "Balancing energy supply and demand",
        "Integrating renewable energy sources into the grid",
        "Monitoring infrastructure for faults and maintenance",
        "Empowering consumers to manage their energy usage"
      ]}
      solutions={[
        {
          title: "Smart Grid Management",
          description: "Advanced systems for monitoring and controlling the electrical grid."
        },
        {
          title: "Energy Analytics",
          description: "Data analysis tools to optimize energy production and consumption."
        },
        {
          title: "Asset Performance Management",
          description: "Predictive maintenance for power plants and transmission infrastructure."
        },
        {
          title: "Smart Metering",
          description: "IoT-enabled meters for accurate billing and real-time usage monitoring."
        }
      ]}
    />
  );
};

export default Energy;
