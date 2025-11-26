import React from "react";
import { Calculator } from "lucide-react";
import ServiceDetail from "@/components/ServiceDetail";

const AccountingSystems = () => {
  return (
    <ServiceDetail
      title="Accounting Systems"
      description="Streamline your financial operations with our robust, fully customized accounting software solutions designed for businesses of all sizes."
      icon={Calculator}
      benefits={[
        "Automated financial reporting and analysis",
        "Seamless integration with existing ERP systems",
        "Real-time cash flow tracking and management",
        "Compliance with local and international tax regulations",
        "User-friendly interface for non-accountants"
      ]}
      features={[
        {
          title: "Custom Ledger Management",
          description: "Tailored general ledger structures to match your specific business hierarchy and reporting needs."
        },
        {
          title: "Invoicing & Billing",
          description: "Automated invoicing, recurring billing, and payment tracking to accelerate your revenue cycle."
        },
        {
          title: "Inventory Integration",
          description: "Direct link between inventory levels and financial records for accurate COGS calculation."
        },
        {
          title: "Multi-Currency Support",
          description: "Handle transactions in multiple currencies with real-time exchange rate updates."
        }
      ]}
    />
  );
};

export default AccountingSystems;
