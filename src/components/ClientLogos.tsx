import { motion } from "framer-motion";
import { InfiniteMarquee } from "@/components/ui/InfiniteMarquee";

const knowbe4Logo = "/knowbe4-logo.svg";

// Partner and technology logos
const logos = [
  { 
    name: "KnowBe4", 
    type: "partner",
    logo: knowbe4Logo, 
    link: "https://www.knowbe4.com/" 
  },
  {
    name: "React",
    type: "technology",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "TypeScript",
    type: "technology",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Python",
    type: "technology",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "AWS",
    type: "technology",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    name: "Google Cloud",
    type: "technology",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
  },
  {
    name: "Firebase",
    type: "technology",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    name: "Vite",
    type: "technology",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
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
            <span className="rounded-xl px-4 py-2 inline-block"><span className="text-primary">Partners</span> & Technologies</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Powered by industry-leading partnerships and cutting-edge technologies
          </p>
        </motion.div>

        <InfiniteMarquee duration={50}>
          {logos.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center"
            >
              {item.link ? (
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <div className="glass p-6 rounded-lg w-40 h-28 flex items-center justify-center hover:glow-strong transition-all duration-300 group cursor-pointer">
                    <img 
                      src={item.logo} 
                      alt={item.name} 
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </a>
              ) : (
                <div className="glass p-6 rounded-lg w-40 h-28 flex items-center justify-center hover:glow-strong transition-all duration-300 group">
                  <img 
                    src={item.logo} 
                    alt={item.name} 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              )}
            </div>
          ))}
        </InfiniteMarquee>
      </div>
    </section>
  );
};

export default ClientLogos;
