import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

// Dummy leader data
const leaders = [
  {
    id: 1,
    name: "Hamzah Abu Jawhar",
    role: "Chief Technology Officer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hamzah",
    bio: "Hamzah leads our technical strategy with deep expertise in enterprise resource planning and security infrastructure. His vision drives our technical excellence and innovation across all our technology platforms.",
    linkedin: "https://www.linkedin.com/in/hamza-a-jowher-5723b3124/",
    twitter: "#",
    email: "hamzah@fusioninnovation.it"
  },
  {
    id: 2,
    name: "Abdelrahman Kanakri",
    role: "Lead AI Engineer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Abdelrahman",
    bio: "Abdelrahman spearheads our AI initiatives, developing cutting-edge models and automation solutions that transform business operations. His expertise in machine learning and data science drives innovation.",
    linkedin: "https://www.linkedin.com/in/abdelrahman-kanakri-909654247/",
    twitter: "#",
    email: "abdelrahman@fusioninnovation.it"
  },
  {
    id: 3,
    name: "Rakan Masadeh",
    role: "Social Media & AI Engineer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rakan",
    bio: "Rakan bridges the gap between technical AI implementation and digital presence, ensuring our solutions are both powerful and accessible. His unique blend of skills creates seamless user experiences.",
    linkedin: "https://www.linkedin.com/in/rakannmmasdeh-rakan-783859383/",
    twitter: "#",
    email: "rakan@fusioninnovation.it"
  },
  {
    id: 4,
    name: "Mahmoud Al-Kdhoor",
    role: "Social Media Manager",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mahmoud",
    bio: "Mahmoud crafts our digital narratives and manages strategic marketing initiatives to maximize brand impact and reach. His creative vision shapes how the world sees Fusion Innovation IT.",
    linkedin: "#",
    twitter: "#",
    email: "mahmoud@fusioninnovation.it"
  },
  {
    id: 5,
    name: "Lana Alzoubi",
    role: "Social Media Specialist",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lana",
    bio: "Lana creates engaging content and manages community interactions, building strong relationships between our brand and our audience. Her expertise in content strategy drives engagement.",
    linkedin: "https://www.linkedin.com/in/lana-alzoubi-029438369/",
    twitter: "#",
    email: "lana@fusioninnovation.it"
  }
];

const LeadershipSection = () => {
  const [activeId, setActiveId] = useState(leaders[0].id);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      {/* Header */}
      <div className="container mx-auto px-4 pt-32 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <br />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="glow rounded-xl px-4 py-2 inline-block">
              <span className="text-primary">Our Leadership</span>
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet the visionaries driving innovation at Fusion Innovation IT
          </p>
        </motion.div>
      </div>

      {/* Expanding Cards Container */}
      <div className="flex-1 flex items-center justify-center px-4 pb-20">
        <div className="w-full max-w-7xl h-[600px] flex gap-2">
          {leaders.map((leader) => {
            const isActive = activeId === leader.id;
            
            return (
              <motion.div
                key={leader.id}
                layout
                className={cn(
                  "relative overflow-hidden rounded-2xl border border-border/50",
                  "transition-all duration-500 ease-out",
                  isActive ? "flex-[3]" : "flex-[0.5]"
                )}
                style={{
                  background: `
                    linear-gradient(rgba(12, 43, 78, 0.95), rgba(12, 43, 78, 0.95)),
                    repeating-linear-gradient(
                      0deg,
                      transparent,
                      transparent 19px,
                      rgba(244, 244, 244, 0.03) 19px,
                      rgba(244, 244, 244, 0.03) 20px
                    ),
                    repeating-linear-gradient(
                      90deg,
                      transparent,
                      transparent 19px,
                      rgba(244, 244, 244, 0.03) 19px,
                      rgba(244, 244, 244, 0.03) 20px
                    )
                  `,
                  backgroundSize: "100% 100%, 20px 20px, 20px 20px"
                }}
              >
                {/* Animated Grid Background */}
                <div 
                  className="absolute inset-0 opacity-30 animate-grid-scroll"
                  style={{
                    background: `
                      repeating-linear-gradient(
                        0deg,
                        transparent,
                        transparent 19px,
                        rgba(244, 244, 244, 0.02) 19px,
                        rgba(244, 244, 244, 0.02) 20px
                      ),
                      repeating-linear-gradient(
                        90deg,
                        transparent,
                        transparent 19px,
                        rgba(244, 244, 244, 0.02) 19px,
                        rgba(244, 244, 244, 0.02) 20px
                      )
                    `,
                    backgroundSize: "20px 20px, 20px 20px"
                  }}
                />

                {/* Glow Hover Effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(244, 244, 244, 0.15), rgba(244, 244, 244, 0.05), transparent)",
                    mixBlendMode: "overlay"
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = ((e.clientX - rect.left) / rect.width) * 100;
                    const y = ((e.clientY - rect.top) / rect.height) * 100;
                    e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
                    e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
                  }}
                />

                {/* Content Container */}
                <div className="relative h-full flex flex-col">
                  {/* Inactive State - Vertical Text */}
                  {!isActive && (
                    <div className="flex-1 flex items-center justify-center">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center gap-6"
                      >
                        {/* Avatar - CLICKABLE */}
                        <motion.div
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveId(leader.id);
                          }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/50 cursor-pointer shadow-lg shadow-primary/20 glow"
                        >
                          <img 
                            src={leader.image} 
                            alt={leader.name}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>

                        {/* Vertical Text */}
                        <div 
                          className="text-center"
                          style={{ writingMode: "vertical-rl" }}
                        >
                          <h3 className="text-xl font-bold text-foreground mb-2">
                            {leader.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {leader.role}
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  )}

                  {/* Active State - Horizontal Layout */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        className="flex-1 p-8 flex flex-col justify-between"
                      >
                        {/* Top Section */}
                        <div className="flex items-start gap-6">
                          {/* Avatar - CLICKABLE (for consistency) */}
                          <motion.div
                            onClick={(e) => e.stopPropagation()}
                            className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary shadow-2xl shadow-primary/30 glow-strong flex-shrink-0"
                          >
                            <img 
                              src={leader.image} 
                              alt={leader.name}
                              className="w-full h-full object-cover"
                            />
                          </motion.div>

                          {/* Info */}
                          <div className="flex-1">
                            <h2 className="text-4xl font-bold text-foreground mb-2">
                              {leader.name}
                            </h2>
                            <p className="text-xl text-primary mb-4">
                              {leader.role}
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                              {leader.bio}
                            </p>
                          </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4 mt-6">
                          <a
                            href={leader.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 glass hover:glow-strong border border-border/50 hover:border-primary/50 rounded-lg text-primary transition-all duration-300"
                          >
                            <Linkedin className="w-4 h-4" />
                            <span className="text-sm">LinkedIn</span>
                          </a>
                          <a
                            href={`mailto:${leader.email}`}
                            className="flex items-center gap-2 px-4 py-2 glass hover:glow-strong border border-border/50 hover:border-primary/50 rounded-lg text-primary transition-all duration-300"
                          >
                            <Mail className="w-4 h-4" />
                            <span className="text-sm">Email</span>
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LeadershipSection;

