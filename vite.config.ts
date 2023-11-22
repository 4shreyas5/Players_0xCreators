
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from 'tailwindcss';


// https://vitejs.dev/config/
export default defineConfig({
  define: {
    global: {},
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  plugins: [
    react(),
    tailwindcss('./tailwind.config.js'),
  ],
  resolve: {
    alias: {
      stream: "stream-browserify",
      os: "os-browserify/browser",
      util: "util",
      process: "process/browser",
      buffer: "buffer",
    },
  },
});
