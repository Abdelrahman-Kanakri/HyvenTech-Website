import React from "react";
import { Heart } from "lucide-react";
import IndustryDetail from "@/components/IndustryDetail";

const Healthcare = () => {
  return (
    <IndustryDetail
      title="Healthcare"
      description="Empowering healthcare providers with secure, HIPAA-compliant technology solutions that improve patient care and operational efficiency."
      icon={Heart}
      challenges={[
        "Managing vast amounts of sensitive patient data securely",
        "Ensuring interoperability between different medical systems",
        "Reducing administrative burden on medical staff",
        "Providing remote care options for patients"
      ]}
      solutions={[
        {
          title: "Electronic Medical Records (EMR)",
          description: "Secure and accessible EMR systems that streamline patient data management and improve clinical workflows."
        },
        {
          title: "Telemedicine Platforms",
          description: "High-quality video consultation platforms integrated with scheduling and billing systems."
        },
        {
          title: "Patient Portals",
          description: "User-friendly portals for patients to access records, book appointments, and communicate with providers."
        },
        {
          title: "IoT Health Monitoring",
          description: "Integration of wearable devices for real-time patient monitoring and data analysis."
        }
      ]}
    />
  );
};

export default Healthcare;
