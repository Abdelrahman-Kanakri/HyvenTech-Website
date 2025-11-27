import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Construction } from "lucide-react";

const ComingSoon = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-grow flex items-center justify-center relative overflow-hidden pt-20">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="w-24 h-24 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-8 animate-pulse">
            <Construction className="w-12 h-12 text-primary" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="glow rounded-xl px-4 py-2 inline-block">
              Coming <span className="text-primary">Soon</span>
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            We are working hard to bring you this content. Stay tuned for updates as we continue to build the future of HyvenTech.
          </p>
          
          <Button asChild size="lg" className="glow text-lg px-8">
            <Link to="/">
              Return Home
            </Link>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ComingSoon;
