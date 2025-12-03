import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; 
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./index.css";
import { registerServiceWorker } from "./utils/registerSW";

const basename = import.meta.env.BASE_URL; 

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter basename={basename}>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

// Register service worker for PWA capabilities
registerServiceWorker();