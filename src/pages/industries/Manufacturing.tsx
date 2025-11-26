import React from "react";
import { Factory } from "lucide-react";
import IndustryDetail from "@/components/IndustryDetail";

const Manufacturing = () => {
  return (
    <IndustryDetail
      title="Manufacturing"
      description="Enabling Industry 4.0 with smart manufacturing solutions that increase productivity and reduce downtime."
      icon={Factory}
      challenges={[
        "Minimizing equipment downtime and maintenance costs",
        "Optimizing production schedules and resource allocation",
        "Ensuring quality control across production lines",
        "Tracking supply chain visibility in real-time"
      ]}
      solutions={[
        {
          title: "Manufacturing Execution Systems (MES)",
          description: "Comprehensive software to monitor and control the manufacturing process on the factory floor."
        },
        {
          title: "Predictive Maintenance",
          description: "IoT sensors and AI analytics to predict equipment failures before they occur."
        },
        {
          title: "Supply Chain Management",
          description: "End-to-end visibility and management of raw materials and finished goods."
        },
        {
          title: "Digital Twins",
          description: "Virtual replicas of physical systems to simulate and optimize production workflows."
        }
      ]}
    />
  );
};

export default Manufacturing;
