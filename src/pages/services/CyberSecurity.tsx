import React from "react";
import { ShieldCheck } from "lucide-react";
import ServiceDetail from "@/components/ServiceDetail";

const CyberSecurity = () => {
  return (
    <ServiceDetail
      title="Cyber Security"
      description="Safeguard your digital assets and infrastructure with our comprehensive cybersecurity solutions and proactive threat monitoring."
      icon={ShieldCheck}
      benefits={[
        "Protection against data breaches and cyber attacks",
        "Compliance with data privacy regulations (GDPR, etc.)",
        "Business continuity through disaster recovery planning",
        "Secure remote work environments for your team",
        "Peace of mind knowing your business is protected"
      ]}
      features={[
        {
          title: "Vulnerability Assessments",
          description: "Regular scanning and testing of your systems to identify and patch security weaknesses."
        },
        {
          title: "Network Security",
          description: "Implementation of firewalls, intrusion detection systems, and secure VPNs."
        },
        {
          title: "Endpoint Protection",
          description: "Advanced antivirus and anti-malware solutions for all devices connected to your network."
        },
        {
          title: "Security Training",
          description: "Employee training programs to raise awareness about phishing and social engineering attacks."
        }
      ]}
    />
  );
};

export default CyberSecurity;
