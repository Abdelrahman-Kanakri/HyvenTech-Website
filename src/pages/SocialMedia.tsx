import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Twitter, Facebook } from "lucide-react";

const SocialMedia = () => {
  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com",
      color: "hover:text-blue-700",
      description: "Fusion Innovation IT on Facebook"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com",
      color: "hover:text-blue-600",
      description: "Fusion Innovation IT on LinkedIn"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com",
      color: "hover:text-pink-600",
      description: "Fusion Innovation IT on Instagram"
    },
    {
      name: "X (Twitter)",
      icon: Twitter,
      url: "https://twitter.com",
      color: "hover:text-sky-500",
      description: "Fusion Innovation IT on X"
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <div className="container mx-auto px-4 py-32 flex-grow">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Connect With Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with our latest tech news, accounting software offers, and AI developments through our channels.
          </p>
          <p className="mt-4 text-muted-foreground">
            We are available to answer your inquiries and provide solutions for your own social media needs as well.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <div key={index} className="bg-card border rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-all group">
                <div className={`w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${social.color}`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{social.name}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">{social.description}</p>
                <Button variant="outline" className="w-full glow" asChild>
                  <a href={social.url} target="_blank" rel="noopener noreferrer">
                    Follow on {social.name}
                  </a>
                </Button>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SocialMedia;
