import React from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./index.css";
import { registerServiceWorker } from "./utils/registerSW";

/**
 * Application Entry Point
 * 
 * Note: Router is now provided via RouterProvider in App.tsx
 * using the modern createBrowserRouter data API.
 */
createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

// Register service worker for PWA capabilities
registerServiceWorker();