import { useState, useCallback } from "react";
import { RouterProvider } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useIsMobile } from "@/hooks/use-mobile";

// Router configuration
import { router } from "@/router/routes";

// Components
import ErrorBoundary from "./components/ErrorBoundary";
import LoadingScreen from "./components/LoadingScreen";
import LoadingBar from "./components/LoadingBar";
import { LenisProvider } from "@/providers/lenis-provider";

/**
 * Main App Component
 * 
 * Uses RouterProvider with createBrowserRouter for:
 * - Type-safe routing
 * - Better error handling
 * - Future data loading capabilities
 * - Centralized route configuration
 */
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <LenisProvider>
      <TooltipProvider>
        {isLoading ? (
          <LoadingScreen onComplete={handleLoadingComplete} />
        ) : (
          <ErrorBoundary>
            <RouterProvider router={router} />
          </ErrorBoundary>
        )}
      </TooltipProvider>
    </LenisProvider>
  );
};

export default App;
