import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // 1. Load environment variables manually so we can "see" them in the config
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
    define: {
      "import.meta.env.VITE_N8N_WEBHOOK_URL": JSON.stringify(env.VITE_N8N_WEBHOOK_URL || ""),
    },
    build: {
      target: "es2020",
      cssCodeSplit: true,
      minify: "esbuild", // Explicitly use esbuild for speed
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom', 'react-router-dom'],
            'ui-vendor': ['lucide-react', '@radix-ui/react-slot', '@radix-ui/react-accordion', 'clsx', 'tailwind-merge'],
            'animation-vendor': ['framer-motion', 'ogl']
          }
        }
      }
    },
  };
});