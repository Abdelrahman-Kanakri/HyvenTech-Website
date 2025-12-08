// fileName: constants.ts

/**
 * Route Path Constants
 * * Centralized source of truth for all route paths.
 * Using this prevents typos and makes refactoring easier.
 */

export const ROUTES = {
  // Main Pages
  HOME: '/',
  CONTACT: '/contact',
  
  // Virtual Section Routes (all render Homepage with scroll)
  HERO: '/hero',
  ABOUT: '/about',
  SERVICES: '/services',
  KEY_SECTORS: '/key-sectors',
  
  // Info Pages
  PRIVACY_POLICY: '/privacy-policy',
  TERMS_OF_SERVICE: '/terms-of-service',
  FAQ: '/faq',
  
  // Marketing
  SOCIAL_MEDIA: '/social-media',
  CAREERS: '/careers',
  BLOG: '/blog',
  CASE_STUDIES: '/case-studies',
  
  // Company Pages
  COMPANY_PROFILE: '/company/profile',
  COMPANY_LEADERSHIP: '/company/leadership',
  COMPANY_METHODOLOGY: '/company/our_approach',
  COMPANY_WHY_US: '/company/why-us',
  
  // Services
  SERVICE_ACCOUNTING: '/services/accounting-systems',
  SERVICE_DIGITAL_DEV: '/services/digital-development',
  SERVICE_AI: '/services/ai-solutions',
  SERVICE_HARDWARE: '/services/technical-hardware',
  SERVICE_MARKETING: '/services/digital-marketing',
  SERVICE_CYBERSECURITY: '/services/cyber-security',
  
  // Industries
  INDUSTRY_HEALTHCARE: '/key-sectors/healthcare',
  INDUSTRY_FINANCE: '/key-sectors/finance',
  INDUSTRY_RETAIL: '/key-sectors/retail',
  INDUSTRY_MANUFACTURING: '/key-sectors/manufacturing',
  INDUSTRY_EDUCATION: '/key-sectors/education',
  INDUSTRY_LOGISTICS: '/key-sectors/logistics',
  INDUSTRY_ENERGY: '/key-sectors/energy',
  
  // Special
  NOT_FOUND: '/404',
  COMING_SOON: '/coming-soon',
} as const;

// Section Routes (virtual routes that render Homepage)
export const SECTION_ROUTES = [
  ROUTES.HOME,
  ROUTES.HERO,
  ROUTES.ABOUT,
  ROUTES.SERVICES,
  ROUTES.KEY_SECTORS,
  ROUTES.CONTACT,
] as const;

// Map section paths to their corresponding element IDs
// Keys must match the ROUTES values above
export const SECTION_IDS: Record<string, string> = {
  [ROUTES.HOME]: 'hero',
  [ROUTES.HERO]: 'hero',
  [ROUTES.ABOUT]: 'about',
  [ROUTES.SERVICES]: 'services',
  [ROUTES.KEY_SECTORS]: 'key-sectors',
  [ROUTES.CONTACT]: 'contact',
};

// Type for all valid routes
export type RouteValues = typeof ROUTES[keyof typeof ROUTES];

// Helper to check if a path is valid
export const isValidRoute = (path: string): path is RouteValues => {
  return Object.values(ROUTES).includes(path as RouteValues);
};

// Helper to check if path is a section route (renders Homepage)
export const isSectionRoute = (path: string): boolean => {
  return SECTION_ROUTES.includes(path as any);
};