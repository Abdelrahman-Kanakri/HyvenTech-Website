"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function HeroParallaxSection() {
  return <HeroParallax products={products} header={<HyvenTechHeader />} />;
}

const HyvenTechHeader = () => {
    const handleContactClick = (e: React.MouseEvent) => {
        e.preventDefault();
        const element = document.querySelector('#contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };
    
      const handleServicesClick = (e: React.MouseEvent) => {
        e.preventDefault();
        const element = document.querySelector('#services');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };

    return (
        <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
            {/* Background gradient overlay */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-to-tr from-primary/20 to-secondary/20 blur-[60px] sm:blur-[100px] -z-10 pointer-events-none animate-pulse" />

            <div className="flex flex-col items-start gap-8 max-w-5xl">
                <div className="w-full space-y-6 sm:space-y-8">
                    {/* Main Headline */}
                    <motion.h1
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight dark:text-white"
                        initial={{ opacity: 1, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <span className="text-foreground dark:text-white">Custom Software Solutions for </span>
                        <span className="text-primary">Enterprise Digital Transformation</span>
                    </motion.h1>

                    {/* Sub-headline */}
                    <motion.p
                        className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        We build AI-powered systems, secure cloud infrastructure, and custom applications that scale with your business
                    </motion.p>

                    {/* Key Benefits */}
                    <motion.div
                        className="flex flex-wrap gap-3 sm:gap-6 text-sm sm:text-base"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        {["Enterprise-Grade Security", "Scalable Architecture", "24/7 Support"].map((benefit, index) => (
                            <div key={index} className="flex items-center gap-2 text-foreground/80 dark:text-white/80">
                                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                                <span>{benefit}</span>
                            </div>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 pt-6 sm:pt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        <Button
                            size="lg"
                            onClick={handleServicesClick}
                            className="group glow bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12 sm:h-14 text-base sm:text-lg w-full sm:w-auto min-w-[200px]"
                            aria-label="View our services"
                        >
                            View Our Services
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-90" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            onClick={handleContactClick}
                            className="glow border-primary/50 hover:bg-primary/10 px-8 h-12 sm:h-14 text-base sm:text-lg w-full sm:w-auto min-w-[200px]"
                            aria-label="Contact us to get started"
                        >
                            Get Started
                        </Button>
                    </motion.div>

                    {/* Trust Indicator */}
                    <motion.p
                        className="text-xs sm:text-sm text-muted-foreground pt-6 sm:pt-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        Trusted by industry leaders across healthcare, finance, and manufacturing
                    </motion.p>
                </div>
            </div>
        </div>
    );
};

export const products = [
  // --- Row 1: Focusing on Partnership and Strategy ---
  {
    title: "Client Synergy", // Partner/Client Focus
    link: "#partners",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Strategic Consulting", // Service: Strategy
    link: "#services",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Global Alliances", // Partner Focus
    link: "#partners",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },
  {
    title: "UX/UI Design", // Service: Design
    link: "#services",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Future Proofing",
    link: "#strategy",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },

  // --- Row 2: Focusing on Core Services and Development ---
  {
    title: "Full Stack Dev", // Service: Development
    link: "#services",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },
  {
    title: "Agile Delivery",
    link: "#delivery",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Backend Scalability", // Service: Development
    link: "#services",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Cloud Infrastructure", // Service: Infrastructure
    link: "#services",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "Dedicated Support", // Service: Support
    link: "#services",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },

  // --- Row 3: Focusing on Outcomes and Final Sections ---
  {
    title: "Digital Transformation",
    link: "#end",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },
  {
    title: "Brand Elevation",
    link: "#end",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Growth Metrics",
    link: "#end",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Innovation Labs",
    link: "#end",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "Project Completion",
    link: "#end",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];
