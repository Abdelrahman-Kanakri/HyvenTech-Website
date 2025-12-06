import { motion } from "framer-motion";
import { Lightbulb, Users, Rocket, Target, Shield, Zap, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";

const benefits = [
  {
    icon: Lightbulb,
    title: "Innovative Approach",
    description: "We don't just follow trends; we set them. Our team constantly explores emerging technologies to ensure your solution is future-proof and competitive.",
    points: ["Latest Tech Stack", "Creative Problem Solving", "Future-Ready Architecture"]
  },
  {
    icon: Users,
    title: "Dedicated Partnership",
    description: "We view ourselves as an extension of your team. Your success is our success, and we are committed to transparent, collaborative, and long-term partnership.",
    points: ["Direct Communication", "Stakeholder Alignment", "Long-term Support"]
  },
  {
    icon: Rocket,
    title: "Agile Delivery",
    description: "Speed matters. Our agile methodology ensures rapid delivery of value, allowing you to launch faster and adapt to market changes efficiently.",
    points: ["Rapid Prototyping", "Iterative Releases", "Quick Feedback Loops"]
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "We focus on tangible business outcomes. Every line of code we write is aimed at driving growth, efficiency, and ROI for your organization.",
    points: ["KPI Focused", "Measurable ROI", "Business Growth"]
  },
  {
    icon: Shield,
    title: "Security First",
    description: "In today's digital landscape, security is paramount. We integrate robust security measures into every layer of our development process.",
    points: ["Data Encryption", "Compliance Standards", "Regular Audits"]
  },
  {
    icon: Zap,
    title: "Modern Tech Stack",
    description: "We utilize the most efficient, scalable, and maintainable technologies available, ensuring your application performs flawlessly at any scale.",
    points: ["Scalable Infrastructure", "High Performance", "Clean Code"]
  },
];

const WhyUs = () => {
  return (
    <div className="min-h-screen py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 mt-8 sm:mt-12 md:mt-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          <span className="rounded-xl px-4 py-2 inline-block"><span className="text-primary">The HyvenTech Advantages</span></span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Why leading enterprises choose HyvenTech as their digital transformation partner. We bring a unique blend of technical excellence and business acumen.
          </p>
        </motion.div>


        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                // Removed aggressive scale here, delegating to internal layout
              >
                <motion.div
                   whileHover={{ y: -5 }}
                   transition={{ type: "spring", stiffness: 300, damping: 20 }}
                   className="h-full"
                >
                  <Card className="h-full glass hover:bg-background/80 transition-all duration-500 ease-out flex flex-col border border-border/50 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 group">
                    <CardHeader className="pb-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-glow flex items-center justify-center mb-4 transform transition-transform duration-500 ease-out group-hover:scale-110 shadow-lg shadow-primary/10">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <CardTitle className="text-xl sm:text-2xl">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                        {benefit.description}
                      </p>
                      <div className="space-y-2 mt-auto">
                        {benefit.points.map((point, pIndex) => (
                          <div key={pIndex} className="flex items-center gap-2 text-sm text-foreground/80">
                            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                              <Check className="h-3 w-3 text-primary" />
                            </div>
                            {point}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WhyUs;