import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="container mx-auto px-4 py-32 flex-grow max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-muted-foreground">
            Find answers to common questions about our services and processes.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
