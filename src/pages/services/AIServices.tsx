import React from "react";
import { Bot } from "lucide-react";
import ServiceDetail from "@/components/ServiceDetail";

const AIServices = () => {
  return (
    <ServiceDetail
      title="AI Solutions"
      description="Leverage the power of Artificial Intelligence to automate processes, gain insights, and drive innovation in your business."
      icon={Bot}
      benefits={[
        "Increased operational efficiency through automation",
        "Data-driven decision making with predictive analytics",
        "Enhanced customer experience via intelligent chatbots",
        "Reduced manual errors and operational costs",
        "Competitive advantage through innovative tech adoption"
      ]}
      features={[
        {
          title: "Machine Learning Models",
          description: "Custom ML models for demand forecasting, customer segmentation, and pattern recognition."
        },
        {
          title: "Natural Language Processing",
          description: "Advanced NLP for sentiment analysis, document processing, and automated customer support."
        },
        {
          title: "Computer Vision",
          description: "Image and video analysis solutions for quality control, security, and object detection."
        },
        {
          title: "AI Consultation",
          description: "Strategic guidance on identifying high-impact AI use cases for your specific industry."
        }
      ]}
    />
  );
};

export default AIServices;
