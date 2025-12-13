import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, UserCheck, Bell, FileText } from "lucide-react";

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: FileText,
      title: "Information We Collect",
      content: `We collect information that you provide directly to us, including:
      
• **Personal Information**: Name, email address, phone number, and company details when you contact us or request our services.
• **Usage Data**: Information about how you use our website, including IP address, browser type, and pages visited.
• **Cookies**: We use cookies and similar technologies to enhance your browsing experience and analyze website traffic.`
    },
    {
      icon: Lock,
      title: "How We Use Your Information",
      content: `Your information helps us:
      
• Provide and improve our services
• Respond to your inquiries and support needs
• Send you updates about our services (with your consent)
• Analyze and enhance website performance
• Comply with legal obligations`
    },
    {
      icon: Shield,
      title: "Data Security",
      content: `We implement industry-standard security measures to protect your personal information:
      
• Encrypted data transmission (SSL/TLS)
• Secure servers and databases
• Regular security audits and updates
• Access controls and authentication
• Employee training on data protection

While we strive to protect your Personal Information, no method of transmission over the Internet is 100% secure.`
    },
    {
      icon: Eye,
      title: "Information Sharing",
      content: `We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
      
• With your explicit consent
• To comply with legal requirements
• To protect our rights and prevent fraud
• With trusted service providers who assist us (under strict confidentiality agreements)`
    },
    {
      icon: UserCheck,
      title: "Your Rights",
      content: `You have the right to:
      
• Access your personal information
• Request correction of inaccurate data
• Request deletion of your data
• Opt-out of marketing communications
• Lodge a complaint with relevant authorities

To exercise these rights, please contact us at privacy@hyventech.com`
    },
    {
      icon: Bell,
      title: "Updates to This Policy",
      content: `We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of any material changes by:
      
• Posting the updated policy on our website
• Sending an email notification (for significant changes)
• Updating the "Last Updated" date at the bottom of this page

Continued use of our services after changes indicates acceptance of the updated policy.`
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
              <Shield className="w-12 h-12 text-primary" />
            </div>
          </motion.div>

          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            Privacy <span className="text-primary">Policy</span>
          </motion.h1>

          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
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

        {/* Contact Section */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 text-center p-8 rounded-2xl glass border border-border/50 glow"
        >
          <h3 className="text-2xl font-bold mb-3">Questions About Privacy?</h3>
          <p className="text-muted-foreground mb-6">
            If you have any questions or concerns about our Privacy Policy, please don't hesitate to reach out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:privacy@hyventech.com"
              className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-all hover:scale-105 glow"
            >
              Email Privacy Team
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

export default PrivacyPolicy;
