
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // 1. Load environment variables manually so we can "see" them in the config
  const env = loadEnv(mode, process.cwd(), "");

  return {
    // CRITICAL: Must match GitHub repository name exactly for Pages deployment
    base: "/HyvenTech/",  
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
      minify: "terser", // Switch to terser for better compression
      terserOptions: {
        compress: {
          drop_console: true, // Remove console.log in production
          drop_debugger: true,
          pure_funcs: ['console.log', 'console.info', 'console.debug'],
          passes: 2, // Multiple compression passes
        },
        mangle: {
          safari10: true,
        },
        format: {
          comments: false, // Remove all comments
        },
      },
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            // Core React dependencies
            if (id.includes('node_modules/react') || 
                id.includes('node_modules/react-dom') || 
                id.includes('node_modules/react-router-dom')) {
              return 'react-vendor';
            }
            
            // UI libraries (Radix UI)
            if (id.includes('node_modules/@radix-ui') ||
                id.includes('node_modules/clsx') ||
                id.includes('node_modules/tailwind-merge') ||
                id.includes('node_modules/class-variance-authority')) {
              return 'ui-vendor';
            }
            
            // Animation libraries - Split for better caching
            if (id.includes('node_modules/framer-motion')) {
              return 'framer-motion';
            }
            
            // Other node_modules
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          // Optimize chunk naming
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
        treeshake: {
          moduleSideEffects: false,
          propertyReadSideEffects: false,
        },
      },
      // Additional optimizations
      reportCompressedSize: true,
      sourcemap: false, // Disable source maps in production for smaller bundles
      // Optimize CSS
      cssMinify: true,
    },
    // Optimize dependencies
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom'],
      // Exclude heavy dependencies from pre-bundling if not needed immediately
      exclude: [],
    },
    // Enable CSS code splitting for better caching
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