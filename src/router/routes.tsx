import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { ROUTES } from './constants';

// Layouts
import RootLayout from '@/layouts/RootLayout';

// Eager-loaded components (critical for LCP)
import LoadingScreen from '@/components/LoadingScreen';
import NotFound from '@/pages/NotFound';

// Lazy-loaded pages
const Index = lazy(() => import('@/pages/Index'));
const Contact = lazy(() => import('@/pages/Contact'));
const PrivacyPolicy = lazy(() => import('@/pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('@/pages/TermsOfService'));
const FAQ = lazy(() => import('@/pages/FAQ'));
const SocialMedia = lazy(() => import('@/pages/SocialMedia'));
const ComingSoon = lazy(() => import('@/pages/ComingSoon'));
const Careers = lazy(() => import('@/pages/Careers'));

// Company Pages
const AboutUsDetailed = lazy(() => import('@/pages/company/AboutUsDetailed'));
const HyvenLeadership = lazy(() => import('@/pages/company/HyvenLeadership'));
const Methodology = lazy(() => import('@/pages/company/Methodology'));
const WhyUs = lazy(() => import('@/pages/company/WhyUs'));

// Services
const AccountingSystems = lazy(() => import('@/pages/services/AccountingSystems'));
const DigitalDevelopment = lazy(() => import('@/pages/services/DigitalDevelopment'));
const AIServices = lazy(() => import('@/pages/services/AIServices'));
const TechnicalHardware = lazy(() => import('@/pages/services/TechnicalHardware'));
const DigitalMarketing = lazy(() => import('@/pages/services/SocialMedia'));
const CyberSecurity = lazy(() => import('@/pages/services/CyberSecurity'));

// Industries
const Healthcare = lazy(() => import('@/pages/industries/Healthcare'));
const Finance = lazy(() => import('@/pages/industries/Finance'));
const Retail = lazy(() => import('@/pages/industries/Retail'));
const Manufacturing = lazy(() => import('@/pages/industries/Manufacturing'));
const Education = lazy(() => import('@/pages/industries/Education'));
const Logistics = lazy(() => import('@/pages/industries/Logistics'));
const Energy = lazy(() => import('@/pages/industries/Energy'));

/**
 * Main Application Router using createBrowserRouter data API
 * 
 * Benefits:
 * - Type-safe routing
 * - Better error boundaries
 * - Future: data loaders & actions
 * - Centralized configuration
 */
export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      // Main Pages
      {
        index: true,
        element: <Index />,
      },

      
      // Virtual Section Routes (all render Homepage with auto-scroll)
      {
        path: ROUTES.HERO,
        element: <Index />,
      },
      {
        path: ROUTES.ABOUT,
        element: <Index />,
      },
      {
        path: ROUTES.SERVICES,
        element: <Index />,
      },
      {
        path: ROUTES.KEY_SECTORS,
        element: <Index />,
      },
      {
        path: ROUTES.CONTACT,
        element: <Index />,
      },
      
      // Info Pages
      {
        path: ROUTES.PRIVACY_POLICY,
        element: <PrivacyPolicy />,
      },
      {
        path: ROUTES.TERMS_OF_SERVICE,
        element: <TermsOfService />,
      },
      {
        path: ROUTES.FAQ,
        element: <FAQ />,
      },
      {
        path: ROUTES.SOCIAL_MEDIA,
        element: <SocialMedia />,
      },
      {
        path: ROUTES.CAREERS,
        element: <Careers />,
      },
      {
        path: ROUTES.BLOG,
        element: <ComingSoon />,
      },
      {
        path: ROUTES.CASE_STUDIES,
        element: <ComingSoon />,
      },
      
      // Company Pages
      {
        path: ROUTES.COMPANY_PROFILE,
        element: <AboutUsDetailed />,
      },
      {
        path: ROUTES.COMPANY_LEADERSHIP,
        element: <HyvenLeadership />,
      },
      {
        path: ROUTES.COMPANY_METHODOLOGY,
        element: <Methodology />,
      },
      {
        path: ROUTES.COMPANY_WHY_US,
        element: <WhyUs />,
      },
      
      // Services
      {
        path: ROUTES.SERVICE_ACCOUNTING,
        element: <AccountingSystems />,
      },
      {
        path: ROUTES.SERVICE_DIGITAL_DEV,
        element: <DigitalDevelopment />,
      },
      {
        path: ROUTES.SERVICE_AI,
        element: <AIServices />,
      },
      {
        path: ROUTES.SERVICE_HARDWARE,
        element: <TechnicalHardware />,
      },
      {
        path: ROUTES.SERVICE_MARKETING,
        element: <DigitalMarketing />,
      },
      {
        path: ROUTES.SERVICE_CYBERSECURITY,
        element: <CyberSecurity />,
      },
      
      // Industries
      {
        path: ROUTES.INDUSTRY_HEALTHCARE,
        element: <Healthcare />,
      },
      {
        path: ROUTES.INDUSTRY_FINANCE,
        element: <Finance />,
      },
      {
        path: ROUTES.INDUSTRY_RETAIL,
        element: <Retail />,
      },
      {
        path: ROUTES.INDUSTRY_MANUFACTURING,
        element: <Manufacturing />,
      },
      {
        path: ROUTES.INDUSTRY_EDUCATION,
        element: <Education />,
      },
      {
        path: ROUTES.INDUSTRY_LOGISTICS,
        element: <Logistics />,
      },
      {
        path: ROUTES.INDUSTRY_ENERGY,
        element: <Energy />,
      },
      
      // 404 Catch-all - MUST BE LAST
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
