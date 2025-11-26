import React from "react";
import { ShoppingCart } from "lucide-react";
import IndustryDetail from "@/components/IndustryDetail";

const Retail = () => {
  return (
    <IndustryDetail
      title="Retail & E-Commerce"
      description="Revolutionizing the retail experience with omnichannel solutions that connect physical stores with digital platforms."
      icon={ShoppingCart}
      challenges={[
        "Unifying inventory across online and offline channels",
        "Personalizing the customer shopping experience",
        "Optimizing supply chain and logistics",
        "Managing peak season traffic and transactions"
      ]}
      solutions={[
        {
          title: "Omnichannel E-Commerce",
          description: "Unified platforms that integrate your online store, mobile app, and physical POS."
        },
        {
          title: "Inventory Management",
          description: "Real-time inventory tracking and automated reordering systems."
        },
        {
          title: "Customer Loyalty Programs",
          description: "Digital loyalty solutions to retain customers and drive repeat business."
        },
        {
          title: "Data Analytics",
          description: "Insights into customer behavior and sales trends to optimize pricing and marketing."
        }
      ]}
    />
  );
};

export default Retail;
