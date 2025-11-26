import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import gsap from "gsap";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./FusionLeadership.css";

// Leader data
const leaders = [
  {
    id: 1,
    name: "Hamzah Abu Jawhar",
    role: "Chief Technology Officer",
    imageGray: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hamzah&backgroundColor=b6b6b6",
    imageColor: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hamzah",
    bio: "Hamzah leads our technical strategy with deep expertise in enterprise resource planning and security infrastructure. His vision drives our technical excellence and innovation across all our technology platforms.",
    linkedin: "https://www.linkedin.com/in/hamza-a-jowher-5723b3124/",
    email: "hamzah@fusioninnovation.it"
  },
  {
    id: 2,
    name: "Abdelrahman Kanakri",
    role: "Lead AI Engineer",
    imageGray: "https://api.dicebear.com/7.x/avataaars/svg?seed=Abdelrahman&backgroundColor=b6b6b6",
    imageColor: "https://api.dicebear.com/7.x/avataaars/svg?seed=Abdelrahman",
    bio: "Abdelrahman spearheads our AI initiatives, developing cutting-edge models and automation solutions that transform business operations. His expertise in machine learning and data science drives innovation.",
    linkedin: "https://www.linkedin.com/in/abdelrahman-kanakri-909654247/",
    email: "abdelrahman@fusioninnovation.it"
  },
  {
    id: 3,
    name: "Rakan Masadeh",
    role: "Social Media & AI Engineer",
    imageGray: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rakan&backgroundColor=b6b6b6",
    imageColor: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rakan",
    bio: "Rakan bridges the gap between technical AI implementation and digital presence, ensuring our solutions are both powerful and accessible. His unique blend of skills creates seamless user experiences.",
    linkedin: "https://www.linkedin.com/in/rakannmmasdeh-rakan-783859383/",
    email: "rakan@fusioninnovation.it"
  },
  {
    id: 4,
    name: "Mahmoud Al-Kdhoor",
    role: "Social Media Manager",
    imageGray: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mahmoud&backgroundColor=b6b6b6",
    imageColor: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mahmoud",
    bio: "Mahmoud crafts our digital narratives and manages strategic marketing initiatives to maximize brand impact and reach. His creative vision shapes how the world sees Fusion Innovation IT.",
    linkedin: "#",
    email: "mahmoud@fusioninnovation.it"
  },
  {
    id: 5,
    name: "Lana Alzoubi",
    role: "Social Media Specialist",
    imageGray: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lana&backgroundColor=b6b6b6",
    imageColor: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lana",
    bio: "Lana creates engaging content and manages community interactions, building strong relationships between our brand and our audience. Her expertise in content strategy drives engagement.",
    linkedin: "https://www.linkedin.com/in/lana-alzoubi-029438369/",
    email: "lana@fusioninnovation.it"
  }
];

const FusionLeadership = () => {
  const [activeId, setActiveId] = useState<number | null>(leaders[0].id);
  const containerRef = useRef<HTMLDivElement>(null);

  // GSAP Flashlight Effect
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      container.style.setProperty('--x', `${x}px`);
      container.style.setProperty('--y', `${y}px`);
    };

    container.addEventListener('pointermove', handlePointerMove);
    
    return () => {
      container.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

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

      {/* Flashlight Reveal Container */}
      <div className="flex-1 flex items-center justify-center px-4 pb-20">
        <div 
          ref={containerRef}
          className="chroma-container w-full max-w-7xl h-[600px] relative"
        >
          {/* Grayscale Layer (Base) */}
          <div className="chroma-grid">
            {leaders.map((leader) => {
              const isActive = activeId === leader.id;
              
              return (
                <motion.div
                  key={`gray-${leader.id}`}
                  layout
                  className={`chroma-card ${isActive ? 'active' : 'inactive'}`}
                  style={{
                    flexGrow: isActive ? 3 : 0.5,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="card-content">
                    {/* Inactive State - Vertical */}
                    {!isActive && (
                      <div className="vertical-mode">
                        <motion.div
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveId(leader.id);
                          }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="avatar-wrapper"
                        >
                          <img src={leader.imageGray} alt={leader.name} className="avatar-small" />
                        </motion.div>
                        <h3 className="name-vertical">{leader.name}</h3>
                        <p className="role-vertical">{leader.role}</p>
                      </div>
                    )}

                    {/* Active State - Horizontal */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                          className="horizontal-mode"
                        >
                          <div className="avatar-section">
                            <motion.div
                              onClick={(e) => e.stopPropagation()}
                              className="avatar-wrapper-large"
                            >
                              <img src={leader.imageGray} alt={leader.name} className="avatar-large" />
                            </motion.div>
                          </div>
                          
                          <div className="info-section">
                            <h2 className="name-large">{leader.name}</h2>
                            <p className="role-large">{leader.role}</p>
                            <p className="bio">{leader.bio}</p>
                            
                            <div className="social-links">
                              <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                                <Linkedin className="w-4 h-4" />
                                <span>LinkedIn</span>
                              </a>
                              <a href={`mailto:${leader.email}`} className="social-link">
                                <Mail className="w-4 h-4" />
                                <span>Email</span>
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Color Layer (Revealed by Flashlight) */}
          <div className="chroma-overlay">
            <div className="chroma-grid">
              {leaders.map((leader) => {
                const isActive = activeId === leader.id;
                
                return (
                  <motion.div
                    key={`color-${leader.id}`}
                    layout
                    className={`chroma-card ${isActive ? 'active' : 'inactive'}`}
                    style={{
                      flexGrow: isActive ? 3 : 0.5,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <div className="card-content">
                      {/* Inactive State - Vertical */}
                      {!isActive && (
                        <div className="vertical-mode">
                          <motion.div
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveId(leader.id);
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="avatar-wrapper"
                          >
                            <img src={leader.imageColor} alt={leader.name} className="avatar-small" />
                          </motion.div>
                          <h3 className="name-vertical">{leader.name}</h3>
                          <p className="role-vertical">{leader.role}</p>
                        </div>
                      )}

                      {/* Active State - Horizontal */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                            className="horizontal-mode"
                          >
                            <div className="avatar-section">
                              <motion.div
                                onClick={(e) => e.stopPropagation()}
                                className="avatar-wrapper-large"
                              >
                                <img src={leader.imageColor} alt={leader.name} className="avatar-large" />
                              </motion.div>
                            </div>
                            
                            <div className="info-section">
                              <h2 className="name-large">{leader.name}</h2>
                              <p className="role-large">{leader.role}</p>
                              <p className="bio">{leader.bio}</p>
                              
                              <div className="social-links">
                                <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                                  <Linkedin className="w-4 h-4" />
                                  <span>LinkedIn</span>
                                </a>
                                <a href={`mailto:${leader.email}`} className="social-link">
                                  <Mail className="w-4 h-4" />
                                  <span>Email</span>
                                </a>
                              </div>
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

          {/* Fade Edge Effect */}
          <div className="chroma-fade"></div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FusionLeadership;
