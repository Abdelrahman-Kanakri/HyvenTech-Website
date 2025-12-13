import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Zap } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Do you offer ready-made accounting software or custom-built ones?",
      answer: "We offer both. We have our own proprietary accounting software ready for immediate deployment, and we also have a specialized team to develop accounting software fully tailored to the client's request and business nature."
    },
    {
      question: "Do you provide the hardware required to run the systems?",
      answer: "Yes, we provide a Turnkey Solution. We supply the hardware specific to accounting systems, such as barcode scanners, printers, and Point of Sale (POS) systems, ensuring full compatibility with our software."
    },
    {
      question: "What AI services do you offer?",
      answer: "We are currently working on developing AI solutions that keep pace with market requirements, such as data analysis to predict sales trends, automated responses (chatbots), and improving user experience in apps and websites."
    },
    {
      question: "Do you offer after-sales services?",
      answer: "Absolutely. We pride ourselves on strong technical support to ensure the continuity of your systems, whether for websites, mobile apps, or accounting software."
    },
    {
      question: "How long does it take to develop a custom software solution?",
      answer: "Development timelines vary based on project complexity. A typical custom software project ranges from 3-6 months, including planning, development, testing, and deployment. We provide detailed timelines during the consultation phase."
    },
    {
      question: "What technologies do you use?",
      answer: "We work with cutting-edge technologies including React, TypeScript, Python, AWS, Google Cloud, Firebase, and more. Our tech stack is chosen based on your specific requirements to ensure optimal performance and scalability."
    },
    {
      question: "Do you offer training for the systems you develop?",
      answer: "Yes! We provide comprehensive training sessions for your team to ensure smooth adoption of any custom software or system we develop. Training can be conducted on-site or remotely based on your preference."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We work across multiple industries including Healthcare, Finance & Banking, Retail, Manufacturing, Education, Logistics, and Energy sectors. Our solutions are tailored to meet industry-specific compliance and operational requirements."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Animated Header */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/5 pt-32 pb-16"
      >
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-4"
          >
            <div className="p-4 rounded-full bg-primary/10 inline-block">
              <HelpCircle className="w-12 h-12 text-primary" />
            </div>
          </motion.div>

          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            Frequently Asked <span className="text-primary">Questions</span>
          </motion.h1>

          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Find answers to common questions about our services, processes, and expertise.
          </motion.p>
        </div>
      </motion.div>

      {/* FAQ Content */}
      <div className="container mx-auto px-4 py-16 flex-grow max-w-4xl">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="border border-border/50 rounded-lg px-6 glass hover:glow-soft transition-all duration-300"
                >
                  <AccordionTrigger className="text-left text-base md:text-lg font-medium hover:text-primary transition-colors py-6">
                    <div className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span>{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pl-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Still Have Questions CTA */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 text-center p-8 rounded-2xl glass border border-border/50 glow"
        >
          <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
          <p className="text-muted-foreground mb-6">
            Can't find the answer you're looking for? Please get in touch with our team.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-all hover:scale-105 glow"
          >
            Contact Us
          </a>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default FAQ;
