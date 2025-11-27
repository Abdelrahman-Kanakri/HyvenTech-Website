import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Mail, Award, ChevronDown } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Leader data with skills and achievements
const leaders = [
  {
    id: 1,
    name: "Hamzah Abu Jawhar",
    role: "Chief Technology Officer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hamzah",
    skills: [
      "ERP Systems",
      "Cybersecurity",
      "Cloud Architecture",
      "Strategic Planning",
    ],
    bio: "Hamzah leads our technical strategy with deep expertise in enterprise resource planning and security infrastructure. His vision drives our technical excellence and innovation across all our technology platforms.",
    achievements: [
      "Led cloud infrastructure migration, reducing operational costs by 40%",
      "Implemented enterprise-wide zero-trust security architecture",
      "Architected scalable ERP solution serving 10,000+ concurrent users",
    ],
    linkedin: "https://www.linkedin.com/in/hamza-a-jowher-5723b3124/",
    email: "hamzah@hyventech.com",
  },
  {
    id: 2,
    name: "Abdelrahman Kanakri",
    role: "Lead AI Engineer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Abdelrahman",
    skills: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision"],
    bio: "Abdelrahman spearheads our AI initiatives, developing cutting-edge models and automation solutions that transform business operations. His expertise in machine learning and data science drives innovation.",
    achievements: [
      "Developed production AI models achieving 95%+ accuracy benchmarks",
      "Published research on transformer architectures in top-tier conferences",
      "Built ML pipeline infrastructure reducing model deployment time by 80%",
    ],
    linkedin: "https://www.linkedin.com/in/abdelrahman-kanakri-909654247/",
    email: "abdelrahman@hyventech.com",
  },
  {
    id: 3,
    name: "Rakan Masadeh",
    role: "Social Media & AI Engineer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rakan",
    skills: [
      "AI Integration",
      "Digital Marketing",
      "Content Strategy",
      "Analytics",
    ],
    bio: "Rakan bridges the gap between technical AI implementation and digital presence, ensuring our solutions are both powerful and accessible. His unique blend of skills creates seamless user experiences.",
    achievements: [
      "Grew social media engagement by 300% using AI-driven content strategies",
      "Integrated GPT-based automated content generation pipeline",
      "Launched viral marketing campaign achieving 5M+ organic impressions",
    ],
    linkedin: "https://www.linkedin.com/in/rakan-masadeh-783859383/",
    email: "rakan@hyventech.com",
  },
  {
    id: 4,
    name: "Mahmoud Al-Kdhoor",
    role: "Social Media Manager",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mahmoud",
    skills: [
      "Brand Strategy",
      "Content Creation",
      "Community Management",
      "SEO",
    ],
    bio: "Mahmoud crafts our digital narratives and manages strategic marketing initiatives to maximize brand impact and reach. His creative vision shapes how the world sees HyvenTech.",
    achievements: [
      "Established unified brand presence across 6+ social media platforms",
      "Created award-winning content campaigns with 10M+ total reach",
      "Built and nurtured engaged community of 50,000+ active followers",
    ],
    linkedin: "#",
    email: "mahmoud@hyventech.com",
  },
  {
    id: 5,
    name: "Lana Alzoubi",
    role: "Social Media Specialist",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lana",
    skills: [
      "Content Writing",
      "Video Production",
      "Influencer Relations",
      "Analytics",
    ],
    bio: "Lana creates engaging content and manages community interactions, building strong relationships between our brand and our audience. Her expertise in content strategy drives engagement.",
    achievements: [
      "Produced 200+ high-performing social media posts with viral reach",
      "Managed influencer partnership program generating 2M+ impressions",
      "Achieved industry-leading 15% average engagement rate across platforms",
    ],
    linkedin: "https://www.linkedin.com/in/lana-alzoubi-029438369/",
    email: "lana@hyventech.com",
  },
];

const HyvenTechLeadership = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Header */}
      <div className="container mx-auto px-4 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="inline-block glow rounded-2xl px-6 py-3">
              <span className="text-primary">Our Leadership</span>
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the visionaries driving innovation at HyvenTech
          </p>
        </motion.div>
      </div>

      {/* Team Grid */}
      <div className="flex-1 container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {leaders.map((leader, index) => {
            const isActive = activeId === leader.id;

            return (
              <motion.article
                key={leader.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`
                  relative group cursor-pointer overflow-hidden
                  rounded-2xl border backdrop-blur-xl
                  transition-all duration-300
                  ${
                    isActive
                      ? "bg-white/10 border-primary/50 shadow-2xl shadow-primary/20"
                      : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-primary/30 hover:shadow-lg"
                  }
                `}
                onClick={() => toggleCard(leader.id)}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className={`
                      w-full h-[300px] object-cover
                      transition-all duration-700
                      ${
                        isActive
                          ? "grayscale-0 scale-105"
                          : "grayscale group-hover:grayscale-0"
                      }
                    `}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Header Group - Always Visible */}
                  <div className="mb-4">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                      {leader.name}
                    </h3>
                    <p className="text-base text-primary font-semibold mb-3">
                      {leader.role}
                    </p>

                    {/* Skills Badges */}
                    <div className="flex flex-wrap gap-2">
                      {leader.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="
                            px-3 py-1 rounded-full text-xs font-medium
                            bg-primary/10 border border-primary/30
                            text-primary
                          "
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expand Indicator */}
                  {!isActive && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-4">
                      <span>Click for more details</span>
                      <ChevronDown className="w-4 h-4 animate-pulse" />
                    </div>
                  )}

                  {/* Expanded Content - Accordion Style */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                          transition: {
                            height: { duration: 0.6, ease: "easeInOut" },
                            opacity: { duration: 0.4, delay: 0.1 },
                          },
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                          transition: {
                            height: { duration: 0.5, ease: "easeInOut" },
                            opacity: { duration: 0.3 },
                          },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-white/10 mt-4">
                          {/* Bio */}
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="mb-6"
                          >
                            <h4 className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">
                              About
                            </h4>
                            <p className="text-sm text-gray-300 leading-relaxed">
                              {leader.bio}
                            </p>
                          </motion.div>

                          {/* Key Achievements */}
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="mb-6"
                          >
                            <h4 className="text-sm font-bold text-primary mb-3 uppercase tracking-wide flex items-center gap-2">
                              <Award className="w-4 h-4" />
                              Key Achievements
                            </h4>
                            <ul className="space-y-2">
                              {leader.achievements.map((achievement, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2 text-sm text-gray-300"
                                >
                                  <span className="text-primary mt-1 flex-shrink-0">
                                    •
                                  </span>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>

                          {/* Social Links */}
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="flex flex-wrap gap-3"
                          >
                            {leader.linkedin && leader.linkedin !== "#" && (
                              <a
                                href={leader.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="
                                  flex items-center gap-2 px-4 py-2 rounded-lg
                                  bg-white/5 border border-white/10
                                  hover:bg-primary/20 hover:border-primary/50
                                  text-white hover:text-primary
                                  transition-all text-sm font-medium
                                "
                              >
                                <Linkedin className="w-4 h-4" />
                                <span>LinkedIn</span>
                              </a>
                            )}

                            <a
                              href={`mailto:${leader.email}`}
                              onClick={(e) => e.stopPropagation()}
                              className="
                                flex items-center gap-2 px-4 py-2 rounded-lg
                                bg-white/5 border border-white/10
                                hover:bg-primary/20 hover:border-primary/50
                                text-white hover:text-primary
                                transition-all text-sm font-medium
                              "
                            >
                              <Mail className="w-4 h-4" />
                              <span>Email</span>
                            </a>
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HyvenTechLeadership;
