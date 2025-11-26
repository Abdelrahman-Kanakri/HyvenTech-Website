import { motion } from "framer-motion";

const clients = [
  { 
    name: "KnowBe4", 
    industry: "Cybersecurity", 
    logo: "knowbe4-logo.svg", 
    link: "https://www.knowbe4.com/" 
  },
];

const ClientLogos = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4">
            <span className="glow rounded-xl px-4 py-2 inline-block"><span className="text-primary">Trusted By</span></span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Partnering with organizations across multiple sectors
          </p>
        </motion.div>

        <div className="flex items-center justify-center max-w-5xl mx-auto">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-center justify-center"
            >
              {client.link ? (
                <a 
                  href={client.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <div className="glass p-6 sm:p-8 rounded-lg w-64 sm:w-80 h-32 sm:h-40 flex flex-col items-center justify-center hover:glow-strong transition-all duration-300 group cursor-pointer relative overflow-hidden">
                    {client.logo ? (
                      <img 
                        src={client.logo} 
                        alt={client.name} 
                        className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    ) : (
                      <>
                        <p className="font-bold text-sm sm:text-base md:text-lg text-foreground group-hover:text-primary transition-colors text-center">
                          {client.name}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {client.industry}
                        </p>
                      </>
                    )}
                  </div>
                </a>
              ) : (
                <div className="glass p-4 sm:p-6 rounded-lg w-full h-24 sm:h-28 flex flex-col items-center justify-center hover:glow-strong transition-all duration-300 group">
                  <p className="font-bold text-sm sm:text-base md:text-lg text-foreground group-hover:text-primary transition-colors text-center">
                    {client.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {client.industry}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;

