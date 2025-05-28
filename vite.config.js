import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === "production" ? "/DevPattern/" : "/", // Solo usar subcarpeta en producción
  server: {
    https: false // para desarrollar localmente con HTTPS (autofirmado)
  }
}));