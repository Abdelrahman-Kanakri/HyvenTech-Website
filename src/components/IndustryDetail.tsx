import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Zap, LucideIcon } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import Navigation from "@/components/Navigation";
import BottomNavigation from "@/components/BottomNavigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

interface IndustryDetailProps {
  title: string;
  description: string;
  icon: LucideIcon;
  challenges: string[];
  solutions: {
    title: string;
    description: string;
  }[];
}

const IndustryDetail: React.FC<IndustryDetailProps> = ({
  title,
  description,
  icon: Icon,
  challenges,
  solutions,
}) => {
  const isMobile = useIsMobile();

  return (
    <div className={`min-h-screen flex flex-col ${isMobile ? 'pb-24' : ''}`}>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 sm:w-20 sm:h-20 mx-auto glass backdrop-blur-xl bg-gradient-glow rounded-2xl flex items-center justify-center mb-6 sm:mb-8 glow shadow-lg shadow-primary/20 group"
            >
              <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary group-hover:scale-110 transition-transform" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
            >
              <span className="glow rounded-xl px-3 sm:px-4 py-2 inline-block">
                <span className="text-primary">{title} Solutions</span>
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 leading-relaxed"
            >
              {description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions Grid */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 max-w-6xl mx-auto">
            {/* Challenges */}
            <div>
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <Target className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" />
                <h2 className="text-2xl sm:text-3xl font-bold">
                  <span className="glow rounded-xl px-3 sm:px-4 py-2 inline-block">
                    <span className="text-primary">Industry Challenges</span>
                  </span>
                </h2>
              </div>
              <div className="space-y-4 sm:space-y-6">
                {challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl glass glow border border-white/10 hover:glow-strong transition-all duration-300 group"
                  >
                    <div className="w-2 h-2 rounded-full bg-destructive mt-2.5 flex-shrink-0 group-hover:scale-150 transition-transform" />
                    <p className="text-base sm:text-lg">{challenge}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div>
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" />
                <h2 className="text-2xl sm:text-3xl font-bold">
                  <span className="glow rounded-xl px-3 sm:px-4 py-2 inline-block">
                    <span className="text-primary">Our Solutions</span>
                  </span>
                </h2>
              </div>
              <div className="space-y-4 sm:space-y-6">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.03, y: -5 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 sm:p-6 rounded-xl glass glow border border-white/10 hover:glow-strong transition-all duration-300 group h-full"
                  >
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-primary group-hover:scale-105 inline-block transition-transform">{solution.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">{solution.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="max-w-3xl mx-auto glass backdrop-blur-xl bg-primary/10 rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-primary/20 glow shadow-xl"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Innovate Your {title} Business</h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
              Partner with HyvenTech to leverage cutting-edge technology tailored for the {title} sector.
            </p>
            <Button size="lg" className="glow w-full sm:w-auto" asChild>
              <Link to="/contact">Get a Custom Proposal</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {isMobile && <BottomNavigation />}
      <Footer />
    </div>
  );
};

export default IndustryDetail;
