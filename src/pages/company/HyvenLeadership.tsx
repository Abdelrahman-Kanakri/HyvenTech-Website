import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Mail, Award, ChevronDown } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useIsMobile } from "@/hooks/use-mobile";
import hamzahImg from "@/assets/leadership/Hamzah.jpg";
import abdelrahmanImg from "@/assets/leadership/Abdelrahman.jpg";
import rakanImg from "@/assets/leadership/Rakan.jpg";
import lanaImg from "@/assets/leadership/Lana.jpg";
import mahmoudImg from "@/assets/leadership/Mahmoud.png";
import "./HyvenLeadership.css";

// Leader data with skills and achievements
const leaders = [
  {
    id: 1,
    name: "Hamzah Abu Jawhar",
    role: "Chief Technology Officer",
    image: hamzahImg,
    skills: ["ERP Systems", "Cybersecurity", "Cloud Architecture", "Strategic Planning"],
    bio: "Hamzah leads our technical strategy with deep expertise in enterprise resource planning and security infrastructure. His vision drives our technical excellence and innovation across all our technology platforms.",
    achievements: [
      "Led cloud infrastructure migration, reducing operational costs by 40%",
      "Implemented enterprise-wide zero-trust security architecture",
      "Architected scalable ERP solution serving 10,000+ concurrent users"
    ],
    linkedin: "https://www.linkedin.com/in/hamza-a-jowher-5723b3124/",
    email: "hamzah@hyventech.com"
  },
  {
    id: 2,
    name: "Abdelrahman Kanakri",
    role: "Lead AI Engineer",
    image: abdelrahmanImg,
    skills: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision"],
    bio: "Abdelrahman spearheads our AI initiatives, developing cutting-edge models and automation solutions that transform business operations. His expertise in machine learning and data science drives innovation.",
    achievements: [
      "Developed production AI models achieving 95%+ accuracy benchmarks",
      "Published research on transformer architectures in top-tier conferences",
      "Built ML pipeline infrastructure reducing model deployment time by 80%"
    ],
    linkedin: "https://www.linkedin.com/in/abdelrahman-kanakri-909654247/",
    email: "abdelrahman@hyventech.com"
  },
  {
    id: 3,
    name: "Rakan Masadeh",
    role: "Social Media & AI Engineer",
    image: rakanImg,
    skills: ["AI Integration", "Digital Marketing", "Content Strategy", "Analytics"],
    bio: "Rakan bridges the gap between technical AI implementation and digital presence, ensuring our solutions are both powerful and accessible. His unique blend of skills creates seamless user experiences.",
    achievements: [
      "Grew social media engagement by 300% using AI-driven content strategies",
      "Integrated GPT-based automated content generation pipeline",
      "Launched viral marketing campaign achieving 5M+ organic impressions"
    ],
    linkedin: "https://www.linkedin.com/in/rakan-masadeh-783859383/",
    email: "rakan@hyventech.com"
  },
  {
    id: 4,
    name: "Mahmoud Al-Kdhoor",
    role: "Social Media Manager",
    image: mahmoudImg,
    skills: ["Brand Strategy", "Content Creation", "Community Management", "SEO"],
    bio: "Mahmoud crafts our digital narratives and manages strategic marketing initiatives to maximize brand impact and reach. His creative vision shapes how the world sees HyvenTech.",
    achievements: [
      "Established unified brand presence across 6+ social media platforms",
      "Created award-winning content campaigns with 10M+ total reach",
      "Built and nurtured engaged community of 50,000+ active followers"
    ],
    linkedin: "#",
    email: "mahmoud@hyventech.com"
  },
  {
    id: 5,
    name: "Lana Alzoubi",
    role: "Social Media Specialist",
    image: lanaImg,
    skills: ["Content Writing", "Video Production", "Influencer Relations", "Analytics"],
    bio: "Lana creates engaging content and manages community interactions, building strong relationships between our brand and our audience. Her expertise in content strategy drives engagement.",
    achievements: [
      "Produced 200+ high-performing social media posts with viral reach",
      "Managed influencer partnership program generating 2M+ impressions",
      "Achieved industry-leading 15% average engagement rate across platforms"
    ],
    linkedin: "https://www.linkedin.com/in/lana-alzoubi-029438369/",
    email: "lana@hyventech.com"
  }
];

const HyvenTechLeadership = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Handle flashlight effect
  useEffect(() => {
    if (isMobile || !containerRef.current) return;

    const container = containerRef.current;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      container.style.setProperty('--x', `${x}px`);
      container.style.setProperty('--y', `${y}px`);
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  // Toggle card
  const toggleCard = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Header */}
      <div className="container mx-auto px-4 pt-32 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tight">
            <span className="inline-block glow rounded-2xl px-4 sm:px-6 py-2 sm:py-3">
              <span className="text-primary">Our Leadership</span>
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the visionaries driving innovation at HyvenTech
          </p>
        </motion.div>
      </div>

      {/* Team Grid */}
      <div className="flex-1 container mx-auto px-4 pb-20 h-[800px] md:h-[600px]">
        <div 
          ref={containerRef}
          className="chroma-container"
        >
          {/* Flashlight Overlay - Only visible on desktop */}
          {!isMobile && (
            <>
              <div className="chroma-overlay" />
              <div className="chroma-fade" />
            </>
          )}
          
          {/* Mobile Overlay - Static visibility */}
          {isMobile && (
            <div className="absolute inset-0 pointer-events-none z-10 bg-black/30" />
          )}

          <div className="chroma-grid">
            {leaders.map((leader, index) => {
              const isActive = activeId === leader.id;
              
              return (
                <motion.div
                  key={leader.id}
                  layout
                  onClick={() => toggleCard(leader.id)}
                  className={`chroma-card ${isActive ? 'active' : 'inactive'} cursor-pointer`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="card-content">
                    {/* Content Logic based on Active State & Device */}
                    <AnimatePresence mode="wait">
                      {isActive ? (
                        <motion.div 
                          key="active"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="horizontal-mode"
                        >
                          {/* Avatar Section */}
                          <div className="avatar-section hidden sm:block">
                            <div className="avatar-wrapper-large">
                              <img
                                src={leader.image}
                                alt={leader.name}
                                className="avatar-large object-cover"
                              />
                            </div>
                          </div>

                          {/* Info Section */}
                          <div className="info-section overflow-y-auto custom-scrollbar">
                            <div>
                              <h3 className="name-large">{leader.name}</h3>
                              <p className="role-large">{leader.role}</p>
                            </div>

                            <div className="flex flex-wrap gap-2 my-2">
                              {leader.skills.map((skill, idx) => (
                                <span
                                  key={idx}
                                  className="px-2 py-1 rounded-full text-xs font-medium bg-primary/10 border border-primary/30 text-primary"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>

                            <div className="bio">
                              <p>{leader.bio}</p>
                            </div>

                            <div className="space-y-2">
                              <h4 className="text-sm font-bold text-primary uppercase tracking-wide flex items-center gap-2">
                                <Award className="w-4 h-4" />
                                Key Achievements
                              </h4>
                              <ul className="space-y-1">
                                {leader.achievements.map((achievement, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <span className="text-primary mt-1 flex-shrink-0">•</span>
                                    <span>{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="social-links pt-4">
                              {leader.linkedin && leader.linkedin !== "#" && (
                                <a
                                  href={leader.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                  className="social-link"
                                >
                                  <Linkedin className="w-4 h-4" />
                                  <span>LinkedIn</span>
                                </a>
                              )}
                              
                              <a
                                href={`mailto:${leader.email}`}
                                onClick={(e) => e.stopPropagation()}
                                className="social-link"
                              >
                                <Mail className="w-4 h-4" />
                                <span>Email</span>
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div 
                          key="inactive"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="vertical-mode"
                        >
                          <div className="avatar-wrapper">
                            <img
                              src={leader.image}
                              alt={leader.name}
                              className="avatar-small object-cover"
                            />
                          </div>
                          <div className="hidden md:block">
                            <h3 className="name-vertical">{leader.name}</h3>
                            <p className="role-vertical">{leader.role}</p>
                          </div>
                          <div className="md:hidden text-center">
                            <h3 className="font-bold text-foreground">{leader.name}</h3>
                            <p className="text-xs text-muted-foreground">{leader.role}</p>
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
      </div>

      <Footer />
    </div>
  );
};

export default HyvenTechLeadership;

