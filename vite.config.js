import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@apis": path.resolve(__dirname, 'src/apis'),
      "@data": path.resolve(__dirname, 'src/data'),
      "@components": path.resolve(__dirname, 'src/components'),
      "@containers": path.resolve(__dirname, 'src/containers'),
      "@context": path.resolve(__dirname, 'src/context'),
      "@pages": path.resolve(__dirname, 'src/pages'),
    },
  },
});
