import { motion } from "framer-motion";
import { Lightbulb, Users, Rocket, Target, Shield, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const benefits = [
  {
    icon: Lightbulb,
    title: "Innovative Approach",
    description: "We leverage the latest technologies to build future-proof solutions for your business.",
  },
  {
    icon: Users,
    title: "Dedicated Partnership",
    description: "We treat your business like our own, providing personalized attention and support.",
  },
  {
    icon: Rocket,
    title: "Agile Delivery",
    description: "Fast, iterative development cycles to get your product to market sooner.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Focused on delivering tangible business outcomes and measurable growth.",
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Building robust protection into every layer of your digital infrastructure.",
  },
  {
    icon: Zap,
    title: "Modern Tech Stack",
    description: "Using the most efficient and scalable tools available today.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-12 sm:py-16 md:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4">
            <span className="rounded-xl px-4 py-2 inline-block">The <span className="text-primary">HyvenTech Advantage</span></span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
            Your fresh perspective partner for digital transformation
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="glass glow h-full hover:glow-strong transition-all duration-300 group">
                  <CardHeader className="pb-3">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-glow flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
