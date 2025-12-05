import { useLayoutEffect, useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
import { isSectionRoute } from "@/router/constants";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const navType = useNavigationType();

  // Save scroll position before page reload
  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.setItem("lastScrollPosition", window.scrollY.toString());
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  useLayoutEffect(() => {
    // Disable browser's native scroll restoration to handle it manually
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const previousPath = sessionStorage.getItem("prevPath");
    const previousHash = sessionStorage.getItem("prevHash");

    // Check if both current and previous paths are section routes
    const isCurrentSectionRoute = isSectionRoute(pathname);
    const isPreviousSectionRoute = previousPath ? isSectionRoute(previousPath) : false;

    // Detect if only hash changed (same pathname, different hash)
    const isHashOnlyChange = previousPath === pathname && previousHash !== hash;

    // RULE 1: If switching between section routes, DON'T scroll to top
    // The Index component's useEffect will handle the section scrolling
    if (isCurrentSectionRoute && isPreviousSectionRoute) {
      // Skip scroll-to-top - let section scroll logic handle it
      sessionStorage.setItem("prevPath", pathname);
      sessionStorage.setItem("prevHash", hash || '');
      return;
    }

    // RULE 2: If hash-only change on same page, DON'T scroll to top
    if (isHashOnlyChange) {
      sessionStorage.setItem("prevHash", hash || '');
      return;
    }

    // RULE 3: Coming FROM a subpage TO a section route - let Index handle it
    if (isCurrentSectionRoute && !isPreviousSectionRoute && previousPath) {
      sessionStorage.setItem("prevPath", pathname);
      sessionStorage.setItem("prevHash", hash || '');
      return;
    }

    // RULE 4: Check if page was reloaded
    const navigationEntry = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;
    const isReload = navigationEntry?.type === 'reload';

    if (isReload) {
      const lastScroll = sessionStorage.getItem("lastScrollPosition");
      if (lastScroll) {
        window.scrollTo({
          top: parseInt(lastScroll),
          behavior: "instant"
        });
        sessionStorage.removeItem("lastScrollPosition");
        sessionStorage.setItem("prevPath", pathname);
        sessionStorage.setItem("prevHash", hash || '');
        return;
      }
    }

    // RULE 5: Default - scroll to top for actual page changes (not section changes)
    if (previousPath && previousPath !== pathname && !isCurrentSectionRoute) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }

    // Update tracking
    sessionStorage.setItem("prevPath", pathname);
    sessionStorage.setItem("prevHash", hash || '');

  }, [pathname, hash, navType]);

  return null;
};

export default ScrollToTop;