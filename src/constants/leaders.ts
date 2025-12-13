const hamzahImg = "/leadership/Hamzah.jpg";
const abdelrahmanImg = "/leadership/Abdelrahman.jpg";
const rakanImg = "/leadership/Rakan.jpg";
const lanaImg = "/leadership/Lana.jpg";
const mahmoudImg = "/leadership/Mahmoud.png";

export interface Leader {
  id: number;
  name: string;
  role: string;
  image: string;
  skills: string[];
  bio: string;
  achievements: string[];
  linkedin: string;
  email: string;
}

export const leaders: Leader[] = [
  {
    id: 1,
    name: "Hamzah Abu Jawhar",
    role: "CEO",
    image: hamzahImg,
    skills: ["ERP Systems", "Cybersecurity", "Cloud Architecture", "Strategic Planning"],
    bio: "Hamzah leads our technical strategy with deep expertise in enterprise resource planning and security infrastructure. His vision drives our technical excellence and innovation across all our technology platforms.",
    achievements: [
      "Led cloud infrastructure migration, reducing operational costs by 40%",
      "Implemented enterprise-wide zero-trust security architecture",
      "Architected scalable ERP solution serving 10,000+ concurrent users"
    ],
    linkedin: "https://www.linkedin.com/in/hamza-a-jowher-5723b3124/",
    email: "hamza@hyventechjo.com"
  },
  {
    id: 2,
    name: "Abdelrahman Kanakri",
    role: "CTO",
    image: abdelrahmanImg,
    skills: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision"],
    bio: "Abdelrahman spearheads our AI initiatives, developing cutting-edge models and automation solutions that transform business operations.",
    achievements: [
      "Developed production AI models achieving 95%+ accuracy benchmarks",
      "Published research on transformer architectures in top-tier conferences",
      "Built ML pipeline infrastructure reducing model deployment time by 80%"
    ],
    linkedin: "https://www.linkedin.com/in/abdelrahman-kanakri-909654247/",
    email: "abdelrahman.kanakri@hyventechjo.com"
  },
  {
    id: 3,
    name: "Mahmoud Al-Khdoor",
    role: "CMO",
    image: mahmoudImg,
    skills: ["Brand Strategy", "Content Creation", "Community Management", "SEO"],
    bio: "Mahmoud crafts our digital narratives and manages strategic marketing initiatives to maximize brand impact and reach.",
    achievements: [
      "Established unified brand presence across 6+ social media platforms",
      "Created award-winning content campaigns with 10M+ total reach",
      "Built and nurtured engaged community of 50,000+ active followers"
    ],
    linkedin: "https://www.linkedin.com/in/%D9%85%D8%AD%D9%85%D9%88%D8%AF-%D8%A7%D9%84%D8%AE%D8%B6%D9%88%D8%B1-809808391/",
    email: "sales@hyventechjo.com"
  },
  {
    id: 4,
    name: "Rakan Masadeh",
    role: "Social Media & AI Engineer",
    image: rakanImg,
    skills: ["AI Integration", "Digital Marketing", "Content Strategy", "Analytics"],
    bio: "Rakan bridges the gap between technical AI implementation and digital presence, ensuring our solutions are both powerful and accessible.",
    achievements: [
      "Grew social media engagement by 300% using AI-driven content strategies",
      "Integrated GPT-based automated content generation pipeline",
      "Launched viral marketing campaign achieving 5M+ organic impressions"
    ],
    linkedin: "https://www.linkedin.com/in/rakan-masadeh-783859383/",
    email: "rakan@hyventechjo.com"
  },
  
];
