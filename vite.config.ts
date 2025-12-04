import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // 1. Load environment variables manually so we can "see" them in the config
  const env = loadEnv(mode, process.cwd(), "");

  return {
    // CRITICAL: Must match GitHub repository name exactly for Pages deployment
    base: "/",
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
      // Removed "terser" and "treeshake" settings to prevent "forwardRef" errors.
      // Default esbuild minification is safer and faster.
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: (assetInfo) => {
            if (assetInfo.name?.endsWith('.css')) {
              return 'assets/css/[name]-[hash][extname]';
            }
            // Optimize image assets
            if (assetInfo.name?.match(/\.(png|jpe?g|svg|gif|webp|avif)$/)) {
              return 'assets/img/[name]-[hash][extname]';
            }
            return 'assets/[name]-[hash][extname]';
          },
        },
      },
      // Additional optimizations
      reportCompressedSize: true,
      sourcemap: false, 
      cssMinify: true,
    },
    // Optimize dependencies
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom'],
      exclude: [],
    },
    css: {
      devSourcemap: false,
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: [],
      include: ['src/**/*.test.{ts,tsx}'],
    },
  };
});