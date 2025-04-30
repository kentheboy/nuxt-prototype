// https://nuxt.com/docs/api/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  alias: {
    "@": resolve(__dirname, "./src"),
  },
  css: ["@/assets/css/main.scss"],
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {}, 
      autoprefixer: {},
    },
  },
});
