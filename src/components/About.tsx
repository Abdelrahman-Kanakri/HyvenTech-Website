import { motion } from "framer-motion";
import { Target, Users, Award, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Target,
    title: "Our Vision",
    description: "To empower businesses by automating their operations using the latest AI solutions and advanced software.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "A dedicated team of professionals with years of experience in cutting-edge technologies.",
  },
  {
    icon: Award,
    title: "Quality First",
    description: "We deliver excellence in every project, ensuring reliability and outstanding results.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Staying ahead with the latest tech trends to provide future-proof solutions.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4">
            <span className="rounded-xl px-4 py-2 inline-block">About <span className="text-primary">HyvenTech</span></span>
          </h2>
          <div className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-4xl mx-auto px-2 sm:px-0 leading-relaxed mb-8 space-y-4">
            <p>
            HyvenTech is a leader in integrated technology, empowering sectors from Healthcare and Finance to Manufacturing and Logistics. We combine deep industry expertise with cutting-edge AI to deliver end-to-end solutions—from custom software and mobile apps to essential business hardware.
            </p>
            
          </div>
          <Link to="/company/profile">
            <Button className="glow bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass glow p-5 sm:p-6 rounded-2xl text-center hover:glow-strong active:scale-[0.98] transition-all duration-300 touch-manipulation"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-glow flex items-center justify-center">
                  <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Background decoration - reduced on mobile */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-primary/10 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none -z-10" />
    </section>
  );
};

export default About;