import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Linkedin, Mail, Award, ChevronRight, X } from "lucide-react";
import { leaders, type Leader } from "@/constants/leaders";

// Memoized Leader Card Component
const LeaderCard = memo(({ 
  leader, 
  isExpanded, 
  onToggle, 
  index 
}: { 
  leader: Leader; 
  isExpanded: boolean; 
  onToggle: () => void;
  index: number;
}) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.1,
        layout: { type: "spring", stiffness: 200, damping: 25 }
      }}
      className={`
        relative overflow-hidden rounded-2xl border border-border/50 
        bg-card/50 backdrop-blur-sm cursor-pointer glow
        transition-shadow duration-300
        ${isExpanded ? 'shadow-2xl shadow-primary/10 ring-1 ring-primary/20 glow-strong' : 'hover:shadow-lg hover:shadow-primary/5'}
      `}
      onClick={onToggle}
    >
      {/* Collapsed State */}
      <motion.div 
        layout="position"
        className="flex items-center gap-4 p-4 sm:p-5"
      >
        {/* Avatar */}
        <motion.div 
          layout
          className={`
            relative flex-shrink-0 rounded-full overflow-hidden
            border-2 transition-all duration-300
            ${isExpanded ? 'border-primary w-16 h-16 sm:w-20 sm:h-20' : 'border-primary/30 w-12 h-12 sm:w-14 sm:h-14'}
          `}
        >
          <img 
            src={leader.image} 
            alt={leader.name}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>

        {/* Basic Info */}
        <div className="flex-1 min-w-0">
          <motion.h3 
            layout="position"
            className={`
              font-bold text-foreground truncate transition-all
              ${isExpanded ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'}
            `}
          >
            {leader.name}
          </motion.h3>
          <motion.p 
            layout="position"
            className="text-primary text-sm sm:text-base font-medium truncate"
          >
            {leader.role}
          </motion.p>
        </div>

        {/* Expand/Collapse Icon */}
        <motion.div
          animate={{ rotate: isExpanded ? 90 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center"
        >
          {isExpanded ? (
            <X className="w-4 h-4 text-primary" />
          ) : (
            <ChevronRight className="w-4 h-4 text-primary" />
          )}
        </motion.div>
      </motion.div>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: "auto", 
              opacity: 1,
              transition: {
                height: { type: "spring", stiffness: 200, damping: 25 },
                opacity: { duration: 0.3, delay: 0.1 }
              }
            }}
            exit={{ 
              height: 0, 
              opacity: 0,
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.15 }
              }
            }}
            className="overflow-hidden"
          >
            <div className="px-4 sm:px-5 pb-5 space-y-4">
              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

              {/* Bio */}
              <motion.p 
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="text-muted-foreground text-sm sm:text-base leading-relaxed"
              >
                {leader.bio}
              </motion.p>

              {/* Skills */}
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-2"
              >
                {leader.skills.map((skill, idx) => (
                  <motion.span
                    key={skill}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.25 + idx * 0.05 }}
                    className="px-3 py-1 text-xs sm:text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>

              {/* Achievements */}
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="space-y-2"
              >
                <h4 className="flex items-center gap-2 text-sm font-bold text-primary uppercase tracking-wide">
                  <Award className="w-4 h-4" />
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {leader.achievements.map((achievement, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.35 + idx * 0.1 }}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex gap-3 pt-2"
                onClick={(e) => e.stopPropagation()}
              >
                {leader.linkedin && leader.linkedin !== "#" && (
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0077B5] text-white text-sm font-medium hover:bg-[#0077B5]/90 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                )}
                <a
                  href={`mailto:${leader.email}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted text-foreground text-sm font-medium hover:bg-muted/80 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});

LeaderCard.displayName = "LeaderCard";

const HyvenLeadership = memo(() => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const handleToggle = useCallback((id: number) => {
    setExpandedId(prev => prev === id ? null : id);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      {/* Header */}
      <header className="container mx-auto px-4 pt-32 sm:pt-36 pb-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            Our <span className="text-primary">Leadership</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the visionaries driving innovation at HyvenTech
          </p>
        </motion.div>
      </header>

      {/* Leadership List */}
      <main className="flex-1 container mx-auto px-4 pb-20 mb-20">
        <div className="max-w-3xl mx-auto space-y-4">
          {leaders.map((leader, index) => (
            <LeaderCard
              key={leader.id}
              leader={leader}
              isExpanded={expandedId === leader.id}
              onToggle={() => handleToggle(leader.id)}
              index={index}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
});

HyvenLeadership.displayName = "HyvenLeadership";

export default HyvenLeadership;
