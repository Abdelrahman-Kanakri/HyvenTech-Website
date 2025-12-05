import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from '@/router/constants';

/**
 * Smart Navigation Link for Hash Scrolling
 * 
 * Handles cross-page scrolling:
 * - On homepage: scrolls to anchor
 * - On subpage: navigates to homepage, then scrolls
 * - Updates URL with hash immediately
 */

interface NavHashLinkProps {
  to: string;
  hash: string;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  'aria-label'?: string;
}

export const NavHashLink = ({ 
  to, 
  hash, 
  onClick, 
  className, 
  children,
  'aria-label': ariaLabel 
}: NavHashLinkProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isNavigatingRef = useRef(false);

  // Scroll to element by hash
  const scrollToHash = (elementHash: string) => {
    const element = document.querySelector(elementHash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Handle scroll after navigation
  useEffect(() => {
    if (isNavigatingRef.current && location.pathname === to) {
      // Small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        scrollToHash(hash);
        isNavigatingRef.current = false;
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [location, to, hash]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClick?.();

    // Update URL immediately with hash
    window.history.pushState({}, '', `${to}${hash}`);

    if (location.pathname === to) {
      // Already on target page, just scroll
      scrollToHash(hash);
    } else {
      // Navigate to page first, then scroll
      isNavigatingRef.current = true;
      navigate(to);
    }
  };

  return (
    <a
      href={`${to}${hash}`}
      onClick={handleClick}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
};
