import { useMemo } from "react";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { industries } from "@/constants/industries";
import { useIsMobile } from "@/hooks/use-mobile";

const Industries = () => {
  const isMobile = useIsMobile();

  const sectorCards = useMemo(() => industries.map((industry, index) => {
    const Icon = industry.icon;
    const isEven = index % 2 === 0;

    return (
      <motion.div
        key={industry.name}
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
        className={`flex flex-col ${isMobile ? '' : isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6 md:gap-8 lg:gap-12 max-w-5xl mx-auto`}
      >
        {/* Icon/Logo Section */}
        <motion.div 
          className="flex-shrink-0"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-2xl bg-gradient-glow flex items-center justify-center glow-strong">
            <Icon className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 text-primary" />
          </div>
        </motion.div>

        {/* Card Section */}
        <Card className="glass glow flex-1 hover:glow-strong transition-all duration-300 group relative w-full">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg lg:text-2xl">{industry.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
              {industry.description}
            </p>
            <div className="space-y-2">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                Solutions:
              </p>
              <div className="flex flex-wrap gap-2">
                {industry.solutions.map((solution, sIndex) => (
                  <span
                    key={sIndex}
                    className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-foreground border border-primary/20"
                  >
                    {solution}
                  </span>
                ))}
              </div>
            </div>
          </CardContent>
          
          {/* Rocket Icon Link */}
          <Link 
            to={industry.link}
            className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-all group-hover:scale-110 group-hover:rotate-12"
          >
            <Rocket className="h-5 w-5 text-primary" />
          </Link>
        </Card>
      </motion.div>
    );
  }), [isMobile]);

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

        <div className="space-y-8 md:space-y-12 lg:space-y-16">
          {sectorCards}
        </div>
      </div>
    </section>
  );
};

export default Industries;
