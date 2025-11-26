import React from "react";
import { Truck } from "lucide-react";
import IndustryDetail from "@/components/IndustryDetail";

const Logistics = () => {
  return (
    <IndustryDetail
      title="Logistics"
      description="Optimizing supply chains and fleet operations with intelligent logistics software and tracking solutions."
      icon={Truck}
      challenges={[
        "Reducing delivery times and fuel costs",
        "Tracking shipments in real-time",
        "Managing complex warehouse operations",
        "Coordinating last-mile delivery efficiently"
      ]}
      solutions={[
        {
          title: "Route Optimization",
          description: "AI-powered algorithms to plan the most efficient delivery routes."
        },
        {
          title: "Fleet Management",
          description: "Real-time tracking and maintenance scheduling for your vehicle fleet."
        },
        {
          title: "Warehouse Management Systems (WMS)",
          description: "Software to optimize storage, picking, and packing processes."
        },
        {
          title: "Last-Mile Delivery App",
          description: "Mobile apps for drivers and customers to track deliveries and proof of delivery."
        }
      ]}
    />
  );
};

export default Logistics;
