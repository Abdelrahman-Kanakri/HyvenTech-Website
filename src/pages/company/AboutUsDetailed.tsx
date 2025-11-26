import React from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Target, Zap, Shield, Users, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutUsDetailed = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Corporate <span className="text-primary">Profile</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Fusion Innovation IT delivers integrated technological solutions for diverse industries, including Healthcare, Finance, and Logistics. By fusing Artificial Intelligence with custom software and hardware systems, we turn complex business challenges into smart, manageable growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold">Who We Are</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  Fusion Innovation IT is a leader in integrated technology, empowering sectors from Healthcare and Finance to Manufacturing and Logistics. We combine deep industry expertise with cutting-edge AI to deliver end-to-end solutions—from custom software and mobile apps to essential business hardware.
                </p>
              </div>
            </motion.div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden glass glow flex items-center justify-center">
               {/* Abstract visual representation */}
               <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
               <div className="text-center p-8 relative z-10">
                 <div className="text-6xl font-bold text-primary mb-2">LLC</div>
                 <div className="text-xl text-foreground">Registered Entity</div>
                 <div className="mt-8 grid grid-cols-2 gap-4 text-left">
                    <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary"/> <span>Financial Experts</span></div>
                    <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary"/> <span>AI Engineers</span></div>
                    <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary"/> <span>Hardware Suppliers</span></div>
                    <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary"/> <span>Digital Strategists</span></div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl glass border border-primary/20"
            >
              <Target className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To democratize access to enterprise-grade technology. We aim to provide businesses of all sizes with the same level of automation, intelligence, and security that was previously accessible only to Fortune 500 companies. We strive to eliminate operational inefficiencies through smart software, allowing our clients to focus on growth rather than administration.
              </p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl glass border border-primary/20"
            >
              <Zap className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading catalyst for the region's digital economy. We envision a future where every business decision is data-driven, every repetitive task is automated, and every digital interaction is secure. We are building the infrastructure for the next generation of smart enterprises in the Middle East and beyond.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Ecosystem (What We Do) */}
      <section className="py-16 md:py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">The Fusion Ecosystem</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We don't just deliver code; we provide smart solutions that manage your business. Whether you are in Retail, Energy, or Education, Fusion Innovation IT combines AI-driven software with practical hardware tools to streamline operations and drive efficiency across your organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Accounting Systems",
                desc: "The backbone of your business. Whether you need our ready-made, compliant ERP solutions or a custom-built financial engine, we ensure your numbers are accurate, secure, and accessible in real-time."
              },
              {
                title: "Digital Development",
                desc: "Your digital face. We build high-performance websites and mobile applications that serve as powerful tools for customer engagement, not just static brochures."
              },
              {
                title: "AI Solutions",
                desc: "The brain of the operation. We integrate predictive analytics, chatbots, and automation algorithms directly into your workflow to reduce costs and increase speed."
              },
              {
                title: "Technical Hardware",
                desc: "The physical enablers. We supply and configure the necessary hardware—servers, POS terminals, barcode scanners—ensuring 100% compatibility with our software."
              }
            ].map((item, i) => (
              <div key={i} className="bg-background p-6 rounded-xl border hover:border-primary/50 transition-colors">
                <h3 className="font-bold text-lg mb-3 text-primary">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Our Philosophy</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-xl">Quality First</h3>
                <p className="text-sm text-muted-foreground">We never compromise on code quality or security. If it's not robust, it doesn't leave our lab.</p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-xl">Partnership</h3>
                <p className="text-sm text-muted-foreground">We don't just have clients; we have partners. Your growth is the only metric of our success.</p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-xl">Innovation</h3>
                <p className="text-sm text-muted-foreground">We stay ahead of the curve so you don't have to. We bring the latest tech to your doorstep.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the hundreds of businesses that have trusted Fusion Innovation IT with their digital future.
          </p>
          <Button asChild size="lg" className="glow text-lg px-8">
            <Link to="/contact">
              Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUsDetailed;
