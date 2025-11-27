import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, LucideIcon } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import Navigation from "@/components/Navigation";
import BottomNavigation from "@/components/BottomNavigation";
import MobileLogo from "@/components/MobileLogo";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

interface ServiceDetailProps {
  title: string;
  description: string;
  icon: LucideIcon;
  benefits: string[];
  features: {
    title: string;
    description: string;
  }[];
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({
  title,
  description,
  icon: Icon,
  benefits,
  features,
}) => {
  const isMobile = useIsMobile();

  return (
    <div className={`min-h-screen flex flex-col ${isMobile ? 'pb-24' : ''}`}>
      {/* Conditional Navigation */}
      {!isMobile && <Navigation />}
      {isMobile && <MobileLogo />}
      
      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10 pointer-events-none" />
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
                <span className="text-primary">{title}</span>
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button size="lg" className="glow w-full sm:w-auto" asChild>
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start max-w-6xl mx-auto">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                <span className="glow rounded-xl px-3 sm:px-4 py-2 inline-block">
                  <span className="text-primary">Key Benefits</span>
                </span>
              </h2>
              <div className="space-y-3 sm:space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-base sm:text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass backdrop-blur-xl bg-card/50 p-4 sm:p-6 rounded-xl border border-border/50 hover:border-primary/50 hover:glow-strong transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/10 group"
                >
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="max-w-3xl mx-auto glass backdrop-blur-xl bg-primary/5 rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-primary/20 glow shadow-xl"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Ready to Transform Your Business?</h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
              Contact us today to discuss how our {title} solutions can help you achieve your goals.
            </p>
            <Button size="lg" className="glow w-full sm:w-auto" asChild>
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {isMobile && <BottomNavigation />}
      <Footer />
    </div>
  );
};

export default ServiceDetail;
