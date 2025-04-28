// https://nuxt.com/docs/api/nuxt-config
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite"; // https://tailwindcss.com/docs/installation/framework-guides/nuxt
export default defineNuxtConfig({
  alias: {
    "@": resolve(__dirname, "./src"),
  },
  css: ["@/assets/css/main.scss"],
  vite: {
    plugins: [tailwindcss()],
  },
});
