export const navItems = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      {
        name: "Accounting Systems",
        href: "/services/accounting-systems",
        isHighlight: false,
      },
      {
        name: "Digital Development",
        href: "/services/digital-development",
        isHighlight: false,
      },
      {
        name: "Artificial Intelligence",
        href: "/services/ai-solutions",
        isHighlight: false,
      },
      {
        name: "Technical Hardware",
        href: "/services/technical-hardware",
        isHighlight: false,
      },
      {
        name: "Digital Marketing",
        href: "/services/digital-marketing",
        isHighlight: false,
      },
      {
        name: "Cyber Security",
        href: "/services/cyber-security",
        isHighlight: false,
      },
    ],
  },
  {
    name: "Key Sectors",
    href: "/key-sectors",
    dropdown: [
      {
        name: "Healthcare",
        href: "/key-sectors/healthcare",
        isHighlight: false,
      },
      {
        name: "Finance & Banking",
        href: "/key-sectors/finance",
        isHighlight: false,
      },
      {
        name: "Retail & E-Commerce",
        href: "/key-sectors/retail",
        isHighlight: false,
      },
      {
        name: "Manufacturing",
        href: "/key-sectors/manufacturing",
        isHighlight: false,
      },
      { name: "Education", href: "/key-sectors/education", isHighlight: false },
      { name: "Logistics", href: "/key-sectors/logistics", isHighlight: false },
      {
        name: "Energy & Utilities",
        href: "/key-sectors/energy",
        isHighlight: false,
      },
    ],
  },
  {
    name: "Company",
    href: "/about",
    dropdown: [
      { name: "About HyvenTech", href: "/company/profile", isHighlight: true },
      { name: "Leadership", href: "/company/leadership", isHighlight: false },
      {
        name: "Our Methodology",
        href: "/company/methodology",
        isHighlight: false,
      },
      {
        name: "The HyvenTech Advantage",
        href: "/company/why-us",
        isHighlight: false,
      },
    ],
  },
  { name: "Contact", href: "/#contact" },
];
