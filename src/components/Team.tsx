import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useRef, useState, MouseEvent } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const team = [
  {
    name: "Hamzah Abu Jawhar",
    role: "Chief Technology Officer",
    expertise:  ["ERP Solutions","IT Security", "IT technical Support Specialist"],
    initials: "HAJ",
    linkedin: "https://www.linkedin.com/in/hamza-a-jowher-5723b3124/",
  },
  {
    name: "Abdelrahman Kanakri",
    role: "Lead AI Engineer",
    expertise: ["AI Model Development", "AI Automations", "Data Science"],
    initials: "AK",
    linkedin: "https://www.linkedin.com/in/abdelrahman-kanakri-909654247/",
  },
  {
    name: "Mahmoud Al-Khdoor",
    role: "Social Media Manager",
    expertise: ["Strategic Planning", "Sales", "Marketing"],
    initials: "MAK",
    linkedin: "https://www.linkedin.com/in/%D9%85%D8%AD%D9%85%D9%88%D8%AF-%D8%A7%D9%84%D8%AE%D8%B6%D9%88%D8%B1-809808391/",
  },
  {
    name: "Rakan Masadeh",
    role: "Social Media & AI Engineer",
    expertise: ["Social Media", "Data Science", "ERP Solutions"],
    initials: "RM",
    linkedin: "https://www.linkedin.com/in/rakannmmasdeh-rakan-783859383/",
  },
  
];

const TeamCard = ({ member, index }: { member: typeof team[0], index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });
  const isMobile = useIsMobile();

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (isMobile || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate offset (opposite direction for parallax effect)
    const offsetX = (x - centerX) / 20;
    const offsetY = (y - centerY) / 20;
    
    setParallaxOffset({ x: -offsetX, y: -offsetY });
  };

  const handleMouseLeave = () => {
    setParallaxOffset({ x: 0, y: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
    >
      <Card 
        ref={cardRef}
        className="glass glow h-full hover:glow-strong transition-all duration-300 group overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <CardContent className="p-6">
          {/* Avatar with parallax effect */}
          <div className="flex flex-col items-center mb-4">
            <motion.div 
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-glow flex items-center justify-center text-primary font-bold text-2xl sm:text-3xl mb-3 group-hover:scale-110 transition-transform"
              animate={!isMobile ? {
                x: parallaxOffset.x,
                y: parallaxOffset.y,
              } : {}}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
            >
              {member.initials}
            </motion.div>
            <h3 className="text-lg sm:text-xl font-bold text-foreground text-center">
              {member.name}
            </h3>
            <p className="text-sm sm:text-base text-primary font-medium text-center">
              {member.role}
            </p>
          </div>

          {/* Expertise */}
          <div className="space-y-2 mb-4">
            <p className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              Expertise:
            </p>
            <div className="flex flex-wrap gap-2">
              {member.expertise.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="text-xs px-2 py-1 rounded-full bg-primary/10 text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* LinkedIn */}
          <a 
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2 rounded-lg border border-primary/20 hover:bg-primary/10 transition-colors group/btn cursor-pointer"
          >
            <Linkedin className="h-4 w-4 text-primary" />
            <span className="text-sm text-foreground group-hover/btn:text-primary transition-colors">
              Connect
            </span>
          </a>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Team = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section id="team" className="py-12 sm:py-16 md:py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4">
            <span className="rounded-xl px-4 py-2 inline-block"><span className="text-primary">Leadership</span></span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
            Meet the professionals driving innovation and excellence
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {team.map((member, index) => (
            <TeamCard key={index} member={member} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
