import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Linkedin, Mail, Award } from "lucide-react";
import { BackgroundGradient } from "@/components/ui/background-gradient";

// Images
import hamzahImg from "@/assets/leadership/Hamzah.jpg";
import abdelrahmanImg from "@/assets/leadership/Abdelrahman.jpg";
import rakanImg from "@/assets/leadership/Rakan.jpg";
import lanaImg from "@/assets/leadership/Lana.jpg";
import mahmoudImg from "@/assets/leadership/Mahmoud.png";

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

export default function HyvenTechLeadership() {
  const [active, setActive] = useState<(typeof leaders)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-32 pb-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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

      <div className="flex-1 container mx-auto px-4 pb-20">
        <AnimatePresence>
          {active && typeof active === "object" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.2 } }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className="fixed inset-0 bg-black/20 h-full w-full z-10"
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {active && typeof active === "object" ? (
            <div className="fixed inset-0  grid place-items-center z-[100]">
              <motion.button
                key={`button-${active.name}-${id}`}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.05 } }}
                className="flex absolute top-2 right-2 items-center justify-center bg-card rounded-full h-8 w-8 border border-border hover:bg-muted transition-colors z-50"
                onClick={() => setActive(null)}
              >
                <CloseIcon />
              </motion.button>
              <motion.div
                layoutId={`card-${active.name}-${id}`}
                ref={ref}
                transition={{ type: "spring", stiffness: 150, damping: 20, mass: 1 }}
                className="w-full max-w-[600px] h-full md:h-fit md:max-h-[90%] flex flex-col glass sm:rounded-3xl overflow-hidden shadow-2xl will-change-transform"
              >
                <motion.div layoutId={`image-${active.name}-${id}`}>
                  <img
                    width={200}
                    height={200}
                    src={active.image}
                    alt={active.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                  />
                </motion.div>

                <div>
                  <div className="flex justify-between items-start p-4">
                    <div className="">
                      <motion.h3
                        layoutId={`title-${active.name}-${id}`}
                        className="font-bold text-foreground text-2xl"
                      >
                        {active.name}
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${active.role}-${id}`}
                        className="text-primary font-medium"
                      >
                        {active.role}
                      </motion.p>
                    </div>

                    <div className="flex gap-2">
                        {active.linkedin && active.linkedin !== "#" && (
                            <motion.a
                                layoutId={`linkedin-${active.name}-${id}`}
                                href={active.linkedin}
                                target="_blank"
                                className="p-2 rounded-full bg-blue-600 text-white"
                            >
                                <Linkedin className="w-4 h-4" />
                            </motion.a>
                        )}
                        <motion.a
                            layoutId={`email-${active.name}-${id}`}
                            href={`mailto:${active.email}`}
                            className="p-2 rounded-full bg-gray-600 text-white"
                        >
                            <Mail className="w-4 h-4" />
                        </motion.a>
                    </div>
                  </div>
                  <div className="pt-4 relative px-4">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.4 } }}
                      exit={{ opacity: 0 }}
                      className="text-muted-foreground text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                    >
                        <p>{active.bio}</p>
                        
                        <div className="flex flex-wrap gap-2 my-2">
                            {active.skills.map((skill, idx) => (
                            <span
                                key={idx}
                                className="px-2 py-1 rounded-full text-xs font-medium bg-primary/10 border border-primary/30 text-primary"
                            >
                                {skill}
                            </span>
                            ))}
                        </div>

                        <div className="space-y-2 w-full">
                            <h4 className="text-sm font-bold text-primary uppercase tracking-wide flex items-center gap-2">
                            <Award className="w-4 h-4" />
                            Key Achievements
                            </h4>
                            <ul className="space-y-1">
                            {active.achievements.map((achievement, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="text-primary mt-1 flex-shrink-0">•</span>
                                <span>{achievement}</span>
                                </li>
                            ))}
                            </ul>
                        </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <BackgroundGradient
              key={`card-${leader.name}-${id}`}
              containerClassName="rounded-[22px] bg-card dark:bg-zinc-900"
              className="rounded-[22px] p-4 sm:p-10 bg-card dark:bg-zinc-900 h-full"
            >
              <motion.div
                layoutId={`card-${leader.name}-${id}`}
                onClick={() => setActive(leader)}
                className="bg-transparent hover:bg-transparent cursor-pointer border-none transition-colors backdrop-blur-sm w-full h-full flex flex-col justify-between"
              >
                  <div className="flex flex-col items-center w-full">
                    <motion.div 
                        layoutId={`image-${leader.name}-${id}`}
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform overflow-hidden"
                    >
                      <img 
                        src={leader.image} 
                        alt={leader.name}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <motion.h3
                        layoutId={`title-${leader.name}-${id}`}
                        className="text-lg sm:text-xl font-bold text-foreground text-center"
                    >
                      {leader.name}
                    </motion.h3>
                    <motion.p
                        layoutId={`description-${leader.role}-${id}`}
                        className="text-sm sm:text-base text-primary font-medium text-center"
                    >
                      {leader.role}
                    </motion.p>
                  </div>

                  <div className="space-y-2 my-4 w-full">
                    <p className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wide text-center">
                      Expertise:
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                        {leader.skills.slice(0, 3).map((skill, idx) => (
                            <span key={idx} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-foreground border border-primary/20">
                                {skill}
                            </span>
                        ))}
                    </div>
                  </div>

                  {leader.linkedin && leader.linkedin !== "#" && (
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-full flex items-center justify-center gap-2 py-2 rounded-lg border border-primary/20 hover:bg-primary/10 transition-colors group/btn cursor-pointer text-foreground hover:text-primary mt-auto"
                      >
                        <Linkedin className="h-4 w-4" />
                        <span className="text-sm font-medium">
                          Connect
                        </span>
                      </a>
                  )}
              </motion.div>
            </BackgroundGradient>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-foreground"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
