import * as path from "path"

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import svgrPlugin from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgrPlugin()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
        "@": path.resolve(__dirname, "./src")
    }
  }
});
