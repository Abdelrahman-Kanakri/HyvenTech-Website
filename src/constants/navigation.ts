import { ROUTES } from '@/router/constants';

export const navItems = [
  { name: "Home", href: ROUTES.HOME },
  {
    name: "Services",
    href: ROUTES.SERVICES,
    dropdown: [
      {
        name: "Accounting Systems",
        href: ROUTES.SERVICE_ACCOUNTING,
        isHighlight: false,
      },
      {
        name: "Digital Development",
        href: ROUTES.SERVICE_DIGITAL_DEV,
        isHighlight: false,
      },
      {
        name: "Artificial Intelligence",
        href: ROUTES.SERVICE_AI,
        isHighlight: false,
      },
      {
        name: "Technical Hardware",
        href: ROUTES.SERVICE_HARDWARE,
        isHighlight: false,
      },
      {
        name: "Digital Marketing",
        href: ROUTES.SERVICE_MARKETING,
        isHighlight: false,
      },
      {
        name: "Cyber Security",
        href: ROUTES.SERVICE_CYBERSECURITY,
        isHighlight: false,
      },
    ],
  },
  {
    name: "Key Sectors",
    href: ROUTES.KEY_SECTORS,
    dropdown: [
      {
        name: "Healthcare",
        href: ROUTES.INDUSTRY_HEALTHCARE,
        isHighlight: false,
      },
      {
        name: "Finance & Banking",
        href: ROUTES.INDUSTRY_FINANCE,
        isHighlight: false,
      },
      {
        name: "Retail & E-Commerce",
        href: ROUTES.INDUSTRY_RETAIL,
        isHighlight: false,
      },
      {
        name: "Manufacturing",
        href: ROUTES.INDUSTRY_MANUFACTURING,
        isHighlight: false,
      },
      { name: "Education", href: ROUTES.INDUSTRY_EDUCATION, isHighlight: false },
      { name: "Logistics", href: ROUTES.INDUSTRY_LOGISTICS, isHighlight: false },
      {
        name: "Energy & Utilities",
        href: ROUTES.INDUSTRY_ENERGY,
        isHighlight: false,
      },
    ],
  },
  {
    name: "Company",
    href: ROUTES.ABOUT,
    dropdown: [
      { name: "About HyvenTech", href: ROUTES.COMPANY_PROFILE, isHighlight: true },
      { name: "Leadership", href: ROUTES.COMPANY_LEADERSHIP, isHighlight: false },
      {
        name: "Our Approach",
        href: ROUTES.COMPANY_METHODOLOGY,
        isHighlight: false,
      },
      {
        name: "The HyvenTech Advantage",
        href: ROUTES.COMPANY_WHY_US,
        isHighlight: false,
      },
    ],
  },
  { name: "Careers", href: ROUTES.CAREERS },
];
