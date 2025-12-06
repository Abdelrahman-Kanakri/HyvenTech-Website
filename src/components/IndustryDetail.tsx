import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Zap, LucideIcon } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import Navigation from "@/components/Navigation";
import BottomNavigation from "@/components/BottomNavigation";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  return (
    <div className={`min-h-screen flex flex-col ${isMobile ? 'pb-24' : ''}`}>
      <Navigation />
      
      {/* Hero Section - Matching ServiceDetail styling */}
      <section className="relative pt-24 sm:pt-28 lg:pt-36 pb-12 sm:pb-16 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10 pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="w-16 h-16 sm:w-20 sm:h-20 mx-auto glass md:backdrop-blur-xl bg-gradient-glow rounded-2xl flex items-center justify-center mb-6 sm:mb-8 glow shadow-lg shadow-primary/20 group will-change-transform cursor-pointer"
            >
              <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary transition-transform duration-500 ease-out group-hover:scale-110" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6"
            >
              <span className="rounded-xl px-3 sm:px-4 py-2 inline-block">
                <span className="text-primary">{title} Solutions</span>
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
              className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 sm:mb-10 leading-relaxed max-w-3xl mx-auto"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button size="lg" className="h-11 sm:h-12 w-full sm:w-auto px-8 glow hover:glow-strong transition-all hover:scale-105 duration-300" onClick={() => navigate('/', { state: { scrollToContact: true } })}>
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions Grid - Matching ServiceDetail Layout */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-7xl mx-auto">
            
            {/* Left Column: Challenges (List Style like Benefits) */}
            <div>
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <Target className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" />
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                  <span className="rounded-xl px-3 sm:px-4 py-2 inline-block">
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
                    whileHover={{ x: 6 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 20,
                      delay: index * 0.1 
                    }}
                    className="flex items-start gap-3 sm:gap-4 p-2 rounded-lg hover:bg-white/5 transition-colors duration-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-destructive mt-2.5 flex-shrink-0" />
                    <span className="text-base sm:text-lg lg:text-xl text-foreground/90 leading-relaxed">{challenge}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column: Solutions (Card Style like Features) */}
            <div className="mt-8 lg:mt-0">
               <div className="flex items-center gap-3 mb-6 sm:mb-8 lg:hidden">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" />
                <h2 className="text-2xl sm:text-3xl font-bold">Our Solutions</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -6 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 20,
                      delay: index * 0.1 
                    }}
                    className="glass glow p-5 sm:p-6 lg:p-8 rounded-xl border border-white/10 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group h-full flex flex-col"
                  >
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{solution.title}</h3>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed flex-grow">{solution.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Matching ServiceDetail */}
      <section className="py-12 sm:py-16 lg:py-20 mb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="max-w-4xl mx-auto glass md:backdrop-blur-xl bg-primary/10 rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-primary/20 glow shadow-xl hover:shadow-2xl hover:shadow-primary/10 transition-shadow duration-300"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Innovate Your {title} Business</h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
              Partner with HyvenTech to leverage cutting-edge technology tailored for the {title} sector.
            </p>
            <Button size="lg" className="h-11 sm:h-12 w-full sm:w-auto px-8 glow hover:glow-strong transition-all hover:scale-105 duration-300" onClick={() => navigate('/', { state: { scrollToContact: true } })}>
              Get a Custom Proposal
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