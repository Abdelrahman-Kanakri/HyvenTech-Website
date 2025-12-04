import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { lazy, Suspense, useCallback } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useShouldAnimate } from "@/hooks/use-reduced-motion";

const Hero = () => {
  const isMobile = useIsMobile();
  const shouldAnimate = useShouldAnimate(isMobile);

  const handleContactClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector('#contact-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleServicesClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-24">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-primary opacity-30" />

      <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center max-w-5xl mx-auto">
          {/* Visual Element - Abstract Gradient (Background) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-to-tr from-primary/20 to-secondary/20 blur-[40px] sm:blur-[100px] -z-10 pointer-events-none sm:animate-pulse" />

          {/* Text Content */}
          <div className="w-full space-y-6 sm:space-y-8">
            {/* Main Headline */}
            {shouldAnimate ? (
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-foreground">Custom Software Solutions for </span>
                <span className="text-primary">Enterprise Digital Transformation</span>
              </motion.h1>
            ) : (
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                <span className="text-foreground">Custom Software Solutions for </span>
                <span className="text-primary">Enterprise Digital Transformation</span>
              </h1>
            )}

            {/* Sub-headline */}
            {shouldAnimate ? (
              <motion.p
                className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                We build AI-powered systems, secure cloud infrastructure, and custom applications that scale with your business
              </motion.p>
            ) : (
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                We build AI-powered systems, secure cloud infrastructure, and custom applications that scale with your business
              </p>
            )}

            {/* Key Benefits */}
            {shouldAnimate ? (
              <motion.div
                className="flex flex-wrap justify-center gap-3 sm:gap-6 text-sm sm:text-base"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {["Enterprise-Grade Security", "Scalable Architecture", "24/7 Support"].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 text-foreground/80">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </motion.div>
            ) : (
              <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-sm sm:text-base">
                {["Enterprise-Grade Security", "Scalable Architecture", "24/7 Support"].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 text-foreground/80">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            )}

            {/* CTA Buttons */}
            {shouldAnimate ? (
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 sm:pt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <Button
                  size="lg"
                  onClick={handleServicesClick}
                  className="group glow bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12 sm:h-14 text-base sm:text-lg w-full sm:w-auto min-w-[200px]"
                  aria-label="View our services"
                >
                  View Our Services
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-90" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleContactClick}
                  className="glow border-primary/50 hover:bg-primary/10 px-8 h-12 sm:h-14 text-base sm:text-lg w-full sm:w-auto min-w-[200px]"
                  aria-label="Contact us to get started"
                >
                  Get Started
                </Button>
              </motion.div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 sm:pt-8">
                <Button
                  size="lg"
                  onClick={handleServicesClick}
                  className="group glow bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12 sm:h-14 text-base sm:text-lg w-full sm:w-auto min-w-[200px]"
                  aria-label="View our services"
                >
                  View Our Services
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-90" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleContactClick}
                  className="glow border-primary/50 hover:bg-primary/10 px-8 h-12 sm:h-14 text-base sm:text-lg w-full sm:w-auto min-w-[200px]"
                  aria-label="Contact us to get started"
                >
                  Get Started
                </Button>
              </div>
            )}

            {/* Trust Indicator */}
            <p className="text-xs sm:text-sm text-muted-foreground pt-6 sm:pt-8">
              Trusted by industry leaders across healthcare, finance, and manufacturing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


