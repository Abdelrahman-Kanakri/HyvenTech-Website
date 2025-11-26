import React from "react";
import { Share2 } from "lucide-react";
import ServiceDetail from "@/components/ServiceDetail";

const DigitalMarketing = () => {
  return (
    <ServiceDetail
      title="Digital Marketing"
      description="Amplify your brand's voice and reach your target audience with data-driven digital marketing strategies and social media management."
      icon={Share2}
      benefits={[
        "Increased brand awareness and online visibility",
        "Higher conversion rates through targeted campaigns",
        "Improved customer engagement and loyalty",
        "Measurable ROI with detailed performance analytics",
        "Consistent brand messaging across all channels"
      ]}
      features={[
        {
          title: "Social Media Management",
          description: "Full-service management of your social profiles including content creation, scheduling, and community engagement."
        },
        {
          title: "SEO Optimization",
          description: "On-page and off-page SEO strategies to improve your search engine rankings and organic traffic."
        },
        {
          title: "PPC Advertising",
          description: "Targeted Pay-Per-Click campaigns on Google and social platforms to drive immediate leads."
        },
        {
          title: "Content Marketing",
          description: "Creation of high-quality blog posts, videos, and graphics to attract and retain your audience."
        }
      ]}
    />
  );
};

export default DigitalMarketing;
