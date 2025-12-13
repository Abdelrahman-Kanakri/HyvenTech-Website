import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { FileCheck, Scale, AlertTriangle, UserX, RefreshCw, Gavel } from "lucide-react";

const TermsOfService = () => {
  const sections = [
    {
      icon: FileCheck,
      title: "Acceptance of Terms",
      content: `By accessing and using HyvenTech's website and services, you accept and agree to be bound by the terms and provision of this agreement.

If you do not agree to these Terms of Service, please do not use our website or services. We reserve the right to modify these terms at any time, and your continued use of our services constitutes acceptance of those changes.`
    },
    {
      icon: Scale,
      title: "Services Description",
      content: `HyvenTech provides custom software development, digital solutions, AI services, cybersecurity, and related technology consulting services. Our services include but are not limited to:

• Custom Software Development
• Accounting Systems
• AI Solutions & Implementation
• Digital Marketing Services
• Technical Hardware Supply
• Cybersecurity Solutions
• Technical Support & Maintenance

Specific service details, timelines, and deliverables will be outlined in individual service agreements or contracts.`
    },
    {
      icon: UserX,
      title: "User Responsibilities",
      content: `As a user of our services, you agree to:

• Provide accurate and complete information when requested
• Maintain the confidentiality of any account credentials
• Use our services only for lawful purposes
• Not attempt to interfere with or disrupt our services
• Not reverse engineer, decompile, or disassemble our software
• Respect intellectual property rights
• Comply with all applicable laws and regulations

Violation of these responsibilities may result in termination of services without refund.`
    },
    {
      icon: Gavel,
      title: "Intellectual Property",
      content: `All content, software, code, designs, logos, and materials created by HyvenTech remain our intellectual property unless explicitly transferred through a separate written agreement.

**Your Rights:**
• You own the content and data you provide to us
• Custom software developed for you may be owned by you per contract terms
• You retain ownership of your business processes and methodologies

**Our Rights:**
• We retain ownership of our proprietary tools, frameworks, and methodologies
• We may use generic knowledge and experience gained during projects
• We reserve the right to showcase work in our portfolio (with your permission)`
    },
    {
      icon: RefreshCw,
      title: "Service Modifications & Availability",
      content: `We reserve the right to:

• Modify or discontinue services with reasonable notice
• Perform scheduled maintenance (we'll notify you in advance)
• Update software and systems for security and performance
• Temporarily suspend services for emergency maintenance

We strive for 99.9% uptime for hosted services, but cannot guarantee uninterrupted access. We are not liable for losses resulting from service interruptions beyond our reasonable control.`
    },
    {
      icon: AlertTriangle,
      title: "Limitation of Liability",
      content: `To the fullest extent permitted by law:

• HyvenTech shall not be liable for any indirect, incidental, special, or consequential damages
• Our total liability shall not exceed the amount paid for the specific service in question
• We are not responsible for third-party services or integrations
• We provide services "as is" without warranties beyond what's stated in individual contracts

**Exceptions:**
• This limitation does not apply to cases of gross negligence or willful misconduct
• Liability for death or personal injury caused by our negligence is not excluded`
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/5 pt-32 pb-16"
      >
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-4"
          >
            <div className="p-4 rounded-full bg-primary/10 inline-block">
              <Scale className="w-12 h-12 text-primary" />
            </div>
          </motion.div>

          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            Terms of <span className="text-primary">Service</span>
          </motion.h1>

          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Please read these terms carefully before using our services.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-6 text-sm text-muted-foreground"
          >
            Last Updated: December 13, 2025
          </motion.p>
        </div>
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 flex-grow max-w-5xl">
        <div className="space-y-8">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={index}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass border border-border/50 rounded-2xl p-6 md:p-8 hover:glow-soft transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 glow">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mt-2">{section.title}</h2>
                </div>
                <div className="text-muted-foreground leading-relaxed whitespace-pre-line pl-16">
                  {section.content}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Important Notice */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 p-6 rounded-2xl border-2 border-primary/20 bg-primary/5"
        >
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-lg mb-2">Important Notice</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                These general terms provide an overview of our standard policies. Specific projects and services may be subject to additional terms outlined in individual contracts or service agreements. For enterprise clients, custom terms may apply.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 text-center p-8 rounded-2xl glass border border-border/50 glow"
        >
          <h3 className="text-2xl font-bold mb-3">Questions About These Terms?</h3>
          <p className="text-muted-foreground mb-6">
            If you have any questions about our Terms of Service, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:legal@hyventech.com"
              className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-all hover:scale-105 glow"
            >
              Email Legal Team
            </a>
            <a
              href="/contact"
              className="px-8 py-3 border border-border hover:bg-muted text-foreground rounded-lg font-medium transition-all hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsOfService;
