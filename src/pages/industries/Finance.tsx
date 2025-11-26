import React from "react";
import { DollarSign } from "lucide-react";
import IndustryDetail from "@/components/IndustryDetail";

const Finance = () => {
  return (
    <IndustryDetail
      title="Finance & Banking"
      description="Driving digital transformation in the financial sector with secure, scalable, and compliant fintech solutions."
      icon={DollarSign}
      challenges={[
        "Protecting against sophisticated cyber threats and fraud",
        "Meeting strict regulatory compliance requirements",
        "Modernizing legacy banking systems",
        "Delivering seamless digital customer experiences"
      ]}
      solutions={[
        {
          title: "Secure Payment Gateways",
          description: "Robust payment processing solutions supporting multiple currencies and payment methods."
        },
        {
          title: "Algorithmic Trading Platforms",
          description: "High-frequency trading systems with real-time data analysis and execution capabilities."
        },
        {
          title: "Risk Management Systems",
          description: "AI-powered tools for credit scoring, fraud detection, and regulatory reporting."
        },
        {
          title: "Mobile Banking Apps",
          description: "Feature-rich mobile applications for personal and business banking."
        }
      ]}
    />
  );
};

export default Finance;
