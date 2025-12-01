import { motion } from "framer-motion";
import { Search, FileText, Code, TestTube, Rocket, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery & Analysis",
    description: "We dive deep into your business needs, challenges, and goals to create a comprehensive project roadmap.",
    duration: "1-2 weeks",
  },
  {
    icon: FileText,
    title: "Planning & Design",
    description: "Detailed technical specifications, architecture design, and project timeline with clear milestones.",
    duration: "2-3 weeks",
  },
  {
    icon: Code,
    title: "Development",
    description: "Agile development with regular sprints, continuous integration, and transparent progress tracking.",
    duration: "8-16 weeks",
  },
  {
    icon: TestTube,
    title: "Testing & QA",
    description: "Rigorous testing including unit, integration, and user acceptance testing to ensure quality.",
    duration: "2-4 weeks",
  },
  {
    icon: Rocket,
    title: "Deployment",
    description: "Smooth production deployment with minimal downtime and comprehensive documentation.",
    duration: "1 week",
  },
  {
    icon: CheckCircle,
    title: "Support & Maintenance",
    description: "Ongoing support, monitoring, and continuous improvement to ensure long-term success.",
    duration: "Ongoing",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-12 sm:py-16 md:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4">
            <span className="rounded-xl px-4 py-2 inline-block">Our <span className="text-primary">Methodology</span></span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
            Our proven methodology ensures successful project delivery every time
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative"
              >
                <div className="flex gap-4 sm:gap-6 mb-8 sm:mb-10">
                  {/* Icon & Line */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-glow flex items-center justify-center glow z-10">
                      <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                    </div>
                    {!isLast && (
                      <div className="w-0.5 h-full bg-gradient-to-b from-primary/50 to-transparent mt-2" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg sm:text-xl font-bold text-foreground">
                        {step.title}
                      </h3>
                      <span className="text-xs sm:text-sm text-primary font-medium whitespace-nowrap ml-4">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
