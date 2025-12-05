import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

/**
 * Dedicated Contact Page
 * 
 * Standalone page for /contact route with proper deep linking support.
 */
const ContactPage = () => {
  return (
    <>
      <SEO 
        title="Contact Us - HyvenTech"
        description="Get in touch with HyvenTech. We're here to help transform your business with cutting-edge technology solutions."
        keywords="contact HyvenTech, get in touch, business inquiry, tech consultation"
      />
      
      <div className="min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="pt-24 sm:pt-28 lg:pt-36 pb-8 sm:pb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                Let's Build Something{" "}
                <span className="text-primary">Amazing Together</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Ready to transform your business? Our team is here to discuss your project and provide tailored solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <Contact />
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
