import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, CheckCircle } from "lucide-react";

const Careers = () => {
  const positions = [
    "Backend Developers: Experience in financial systems is a plus.",
    "Mobile App Developers.",
    "AI & Machine Learning Engineers.",
    "Digital Marketing & Content Management Specialists."
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <div className="container mx-auto px-4 py-32 flex-grow max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Careers</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Are you passionate about technology and innovation? At Fusion Innovation IT, we are always looking for creative minds to join our family.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Open Positions</h2>
            <p className="mb-4 text-muted-foreground">As an integrated software house, we are interested in talents in the following fields:</p>
            <ul className="space-y-4">
              {positions.map((position, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>{position}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card border rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Why Work With Us?</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              A flexible work environment, diverse projects, new technical challenges, and the opportunity to be part of the AI revolution in the region.
            </p>
            <div className="flex flex-col gap-4">
              <p className="font-medium">Send your CV to:</p>
              <Button size="lg" className="glow w-full sm:w-auto" asChild>
                <a href="mailto:careers@fusioninnovationit.com" className="flex items-center gap-2 justify-center">
                  <Mail className="w-5 h-5" />
                  careers@fusioninnovationit.com
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Careers;
