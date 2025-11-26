import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const team = [
  {
    name: "Hamzah Abu Jawhar",
    role: "Chief Technology Officer",
    expertise: ["ERP Solutions", "IT Security", "IT Support Specialist"],
    initials: "HAJ",
    linkedin: "https://www.linkedin.com/in/hamza-a-jowher-5723b3124/",
    bio: "Hamzah leads our technical strategy with deep expertise in enterprise resource planning and security infrastructure. His vision drives our technical excellence."
  },
  {
    name: "Abdelrahman Kanakri",
    role: "Lead AI Engineer",
    expertise: ["AI Model Development", "Data Science", "AI Automations"],
    initials: "AK",
    linkedin: "https://www.linkedin.com/in/abdelrahman-kanakri-909654247/",
    bio: "Abdelrahman spearheads our AI initiatives, developing cutting-edge models and automation solutions that transform business operations."
  },
  {
    name: "Rakan Masadeh",
    role: "Social Media & AI Engineer",
    expertise: ["Social Media", "Data Science", "ERP Solutions"],
    initials: "RM",
    linkedin: "https://www.linkedin.com/in/rakannmmasdeh-rakan-783859383/",
    bio: "Rakan bridges the gap between technical AI implementation and digital presence, ensuring our solutions are both powerful and accessible."
  },
  {
    name: "Mahmoud Al-Kdhoor",
    role: "Social Media Manager",
    expertise: ["Strategic Planning", "Sales", "Marketing"],
    initials: "MAK",
    linkedin: "#",
    bio: "Mahmoud crafts our digital narratives and manages strategic marketing initiatives to maximize brand impact and reach."
  },
  {
    name: "Lana Alzoubi",
    role: "Social Media Specialist",
    expertise: ["Marketing", "Content Creation", "Community Management"],
    initials: "LA",
    linkedin: "https://www.linkedin.com/in/lana-alzoubi-029438369/",
    bio: "Lana creates engaging content and manages community interactions, building strong relationships between our brand and our audience."
  },
];

const Leadership = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-primary glow">Leadership</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet the visionaries and experts driving Fusion Innovation IT forward. Our diverse team combines decades of experience in technology, strategy, and innovation.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="glass glow h-full hover:glow-strong transition-all duration-300 group flex flex-col">
                <CardContent className="p-8 flex-1 flex flex-col">
                  {/* Avatar & Header */}
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-glow flex items-center justify-center text-primary font-bold text-3xl sm:text-4xl mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                      {member.initials}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground text-center mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium text-center text-lg">
                      {member.role}
                    </p>
                  </div>

                  {/* Bio */}
                  <p className="text-muted-foreground text-center mb-6 leading-relaxed flex-1">
                    {member.bio}
                  </p>

                  {/* Expertise */}
                  <div className="space-y-3 mb-8">
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider text-center">
                      Core Expertise
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-auto pt-6 border-t border-border/50 flex gap-3 justify-center">
                    <Button variant="outline" size="sm" className="gap-2" asChild>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
                        LinkedIn
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Mail className="h-4 w-4" />
                      Contact
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leadership;
