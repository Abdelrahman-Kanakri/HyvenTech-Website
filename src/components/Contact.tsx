import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm, ValidationError } from "@formspree/react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@hyventechjo.com",
    href: "mailto:info@hyventechjo.com",
    ariaLabel: "Send email to info@hyventechjo.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+962 7993 3392",
    href: "tel:+96279933392",
    ariaLabel: "Call +962 7993 3392",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Amman, Jordan",
    href: "https://www.google.com/maps/search/?api=1&query=Amman,Jordan",
    ariaLabel: "View location on Google Maps",
    target: "_blank",
    rel: "noopener noreferrer",
  },
];

const Contact = () => {
  const [state, handleSubmit] = useForm("xnnezjyg");

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 relative pb-20 sm:pb-24 md:pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4">
            <span className="rounded-xl px-4 py-2 inline-block">Contact <span className="text-primary">Us</span></span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
            Ready to transform your business? Let's discuss your project
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-4 sm:mb-5 md:mb-6">Contact Information</h3>
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={index}
                  href={item.href}
                  aria-label={item.ariaLabel || `${item.label}: ${item.value}`}
                  target={item.target}
                  rel={item.rel}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 glass rounded-lg glow hover:glow-strong active:scale-[0.98] transition-all group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 touch-manipulation min-h-[64px]"
                >
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-gradient-glow flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs sm:text-sm text-muted-foreground">{item.label}</div>
                    <div className="font-medium text-sm sm:text-base truncate">{item.value}</div>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass glow p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl"
          >
            {state.succeeded ? (
              <div className="glass glow-strong p-6 rounded-lg text-center border border-primary/50">
                <h3 className="text-xl font-bold text-primary mb-2">Message Sent! 🎉</h3>
                <p className="text-muted-foreground">
                  Thanks for contacting HyvenTech. We'll get back to you at <strong>info@hyventechjo.com</strong> shortly.
                </p>
              </div>
            ) : (
              <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="bg-background/50 h-11 sm:h-12 text-base"
                    required
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>
                
                {/* Hidden Subject Field for Email Filtering */}
                <input type="hidden" name="_subject" value="New submission from Contact US"/>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    className="bg-background/50 h-11 sm:h-12 text-base"
                    required
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project"
                    rows={5}
                    className="bg-background/50 text-base resize-none"
                    required
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                <Button 
                  type="submit" 
                  className="w-full glow-strong bg-primary hover:bg-primary/90 active:bg-primary/80 text-primary-foreground min-h-[48px] text-base touch-manipulation"
                  disabled={state.submitting}
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Background decoration - responsive */}
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-accent/20 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] pointer-events-none -z-10" />
    </section>
  );
};

export default Contact;
