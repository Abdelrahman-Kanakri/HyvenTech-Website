import { motion } from "framer-motion";
import { 
  Calculator,
  Code,
  Bot, 
  HardDrive,
  Share2,
  ShieldCheck
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Calculator,
    title: "Accounting Systems",
    description: "Our own ready-to-use software, as well as fully customized systems tailored to your specific requirements.",
    link: "/services/accounting-systems"
  },
  {
    icon: Code,
    title: "Digital Development",
    description: "Professional website and mobile application development.",
    link: "/services/digital-development"
  },
  {
    icon: Bot,
    title: "Artificial Intelligence (AI)",
    description: "Smart solutions and software designed to meet current market demands.",
    link: "/services/ai-solutions"
  },
  {
    icon: HardDrive,
    title: "Technical Hardware",
    description: "Supply of hardware specifically for accounting systems (e.g., barcode scanners and POS terminals).",
    link: "/services/technical-hardware"
  },
  {
    icon: Share2,
    title: "Digital Marketing",
    description: "Integrated solutions for managing and delivering social media services.",
    link: "/services/digital-marketing"
  },
  {
    icon: ShieldCheck,
    title: "Cyber Security",
    description: "Strategic partnership with KnowBe4.",
    link: "/services/cyber-security"
  },
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handleConsultation = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4">
            <span className="rounded-xl px-4 py-2 inline-block">Core <span className="text-primary">Capabilities</span></span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
            Comprehensive technology solutions designed to elevate your business
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card 
                  className="glass glow h-full group hover:glow-strong active:scale-[0.98] transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 touch-manipulation flex flex-col relative z-10"
                >
                  <CardHeader className="pb-3 lg:pb-4">
                    <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-lg bg-gradient-glow flex items-center justify-center mb-3 lg:mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-5 w-5 lg:h-7 lg:w-7 text-primary" />
                    </div>
                    <CardTitle className="text-base lg:text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <CardDescription className="text-sm sm:text-base leading-relaxed mb-4 flex-1">
                      {service.description}
                    </CardDescription>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleConsultation}
                        className="flex-1 glow hover:glow-strong transition-all"
                      >
                        Get Consultation
                      </Button>
                      <Button
                        variant="default"
                        size="sm"
                        asChild
                        className="flex-1 glow bg-primary hover:bg-primary/90 transition-all"
                      >
                        <Link to={service.link}>Learn More</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
