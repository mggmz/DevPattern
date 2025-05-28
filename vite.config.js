import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/DevPattern/",   // carpeta que creará GitHub Pages
  server: {
    https: true           // para desarrollar localmente con HTTPS (autofirmado)
  }
});
