import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // 1. Load environment variables manually so we can "see" them in the config
  // This helps ensure VITE_N8N_WEBHOOK_URL is actually picked up
  const env = loadEnv(mode, process.cwd(), "");

  return {
    base: "/HyvenTech",
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@app": path.resolve(__dirname, "./src/app"),
        "@features": path.resolve(__dirname, "./src/features"),
        "@shared": path.resolve(__dirname, "./src/shared"),
        "@pages": path.resolve(__dirname, "./src/pages"),
      },
    },
    // 2. Explicitly define the variable to ensure it is baked into the code
    define: {
      // Added || "" to ensure it defaults to an empty string if undefined, preventing build crashes
      "import.meta.env.VITE_N8N_WEBHOOK_URL": JSON.stringify(env.VITE_N8N_WEBHOOK_URL || ""),
    },
    build: {
      // 3. FIX: "es2020" allows 'import.meta' to work without errors in older environments
      target: "es2020",
      cssCodeSplit: true,
      minify: false,
      chunkSizeWarningLimit: 1000,
    },
  };
});