import { useMemo } from "react";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { industries } from "@/constants/industries";

const Industries = () => {
  const renderedIndustries = useMemo(() => industries.map((industry, index) => {
    const Icon = industry.icon;
    return (
      <motion.div
        key={industry.name}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05, duration: 0.5 }}
      >
        <Card className="glass glow h-full hover:glow-strong transition-all duration-300 group relative">
          <CardHeader className="pb-3">
            <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-lg bg-gradient-glow flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Icon className="h-5 w-5 lg:h-7 lg:w-7 text-primary" />
            </div>
            <CardTitle className="text-sm lg:text-lg">{industry.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3">
              {industry.description}
            </p>
            <div className="space-y-1">
              {industry.solutions.map((solution, sIndex) => (
                <div key={sIndex} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-primary" />
                  <span className="text-xs text-foreground">{solution}</span>
                </div>
              ))}
            </div>
          </CardContent>
          
          {/* Rocket Icon Link */}
          <Link 
            to={industry.link}
            className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-all group-hover:scale-110"
          >
            <Rocket className="h-4 w-4 text-primary" />
          </Link>
        </Card>
      </motion.div>
    );
  }), []);

  return (
    <section id="key-sectors" className="py-12 sm:py-16 md:py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4">
            <span className="rounded-xl px-4 py-2 inline-block">Key <span className="text-primary">Sectors</span></span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
            Delivering tailored solutions across diverse sectors
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {renderedIndustries}
        </div>
      </div>
    </section>
  );
};

export default Industries;

