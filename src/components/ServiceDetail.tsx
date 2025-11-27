import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, LucideIcon } from "lucide-react";
import Navigation from "@/components/Navigation";
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
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="w-20 h-20 mx-auto glass backdrop-blur-xl bg-gradient-glow rounded-2xl flex items-center justify-center mb-8 glow shadow-lg shadow-primary/20 group"
            >
              <Icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="glow rounded-xl px-4 py-2 inline-block">
                <span className="text-primary">{title}</span>
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-muted-foreground mb-10 leading-relaxed"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button size="lg" className="glow" asChild>
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                <span className="glow rounded-xl px-4 py-2 inline-block">
                  <span className="text-primary">Key Benefits</span>
                </span>
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass backdrop-blur-xl bg-card/50 p-6 rounded-xl border border-border/50 hover:border-primary/50 hover:glow-strong transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/10 group"
                >
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="max-w-3xl mx-auto glass backdrop-blur-xl bg-primary/5 rounded-3xl p-12 border border-primary/20 glow shadow-xl"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us today to discuss how our {title} solutions can help you achieve your goals.
            </p>
            <Button size="lg" className="glow" asChild>
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
