import { motion } from "framer-motion";
import { Search, FileText, Code, TestTube, Rocket, CheckCircle, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";

const steps = [
  {
    icon: Search,
    title: "Discovery & Analysis",
    description: "We begin by deeply understanding your business ecosystem. We analyze your requirements, challenges, and goals to create a comprehensive project roadmap that aligns with your strategic vision.",
    duration: "1-2 weeks",
    deliverables: ["Requirements Document", "Feasibility Study", "Project Roadmap"]
  },
  {
    icon: FileText,
    title: "Planning & Design",
    description: "Our architects and designers craft the blueprint of your solution. We focus on user experience, system scalability, and security from the ground up, ensuring a solid foundation.",
    duration: "2-3 weeks",
    deliverables: ["UI/UX Prototypes", "System Architecture", "Technical Specifications"]
  },
  {
    icon: Code,
    title: "Agile Development",
    description: "We adopt an agile approach with iterative sprints. This allows for flexibility, regular feedback loops, and transparent progress tracking, ensuring the final product meets your evolving needs.",
    duration: "8-16 weeks",
    deliverables: ["Sprint Updates", "Source Code", "Beta Versions"]
  },
  {
    icon: TestTube,
    title: "Testing & QA",
    description: "Quality is non-negotiable. We conduct rigorous testing including unit tests, integration testing, security audits, and user acceptance testing (UAT) to guarantee a bug-free experience.",
    duration: "2-4 weeks",
    deliverables: ["Test Reports", "Security Audit", "UAT Sign-off"]
  },
  {
    icon: Rocket,
    title: "Deployment & Launch",
    description: "We ensure a smooth transition to production with minimal downtime. Our deployment strategy includes comprehensive backup plans and performance optimization for a successful launch.",
    duration: "1 week",
    deliverables: ["Production Build", "User Manuals", "Deployment Guide"]
  },
  {
    icon: CheckCircle,
    title: "Support & Evolution",
    description: "Our partnership doesn't end at launch. We provide ongoing maintenance, monitoring, and continuous improvement to ensure your solution evolves with your business.",
    duration: "Ongoing",
    deliverables: ["SLA Support", "Performance Monitoring", "Feature Updates"]
  },
];

const Methodology = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <br></br>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          <span className="rounded-xl px-4 py-2 inline-block"><span className="text-primary">Our Methodolgy</span></span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A proven, structured approach to digital transformation. We combine agile flexibility with enterprise-grade rigor to deliver exceptional results.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="max-w-5xl mx-auto relative">
          {/* Connecting Line (Desktop) */}
          <div className="absolute left-[27px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.02, y: -5 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative mb-12 md:mb-16 last:mb-0"
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                  {/* Icon Column */}
                  <div className="flex md:flex-col items-center md:items-start shrink-0">
                    <div className="w-14 h-14 rounded-full bg-gradient-glow flex items-center justify-center glow z-10 shadow-lg shadow-primary/20 relative">
                      <Icon className="h-7 w-7 text-primary" />
                      <div className="absolute -right-2 -top-2 w-6 h-6 rounded-full bg-background border border-primary flex items-center justify-center text-xs font-bold text-primary">
                        {index + 1}
                      </div>
                    </div>
                    {/* Mobile Line */}
                    <div className="h-full w-0.5 bg-border md:hidden mx-auto mt-4" />
                  </div>

                  {/* Content Card */}
                  <Card className="flex-1 glass glow hover:glow-strong transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 border border-border/50 hover:border-primary/50">
                    <CardContent className="p-6 sm:p-8">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-2">
                            {step.title}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full w-fit">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            {step.duration}
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                        {step.description}
                      </p>

                      <div className="bg-muted/30 rounded-lg p-4 border border-border/50">
                        <p className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                          <ArrowRight className="h-4 w-4 text-primary" />
                          Key Deliverables
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {step.deliverables.map((item, i) => (
                            <span key={i} className="text-xs sm:text-sm px-3 py-1 rounded bg-background border border-border text-muted-foreground">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Methodology;
