// https://nuxt.com/docs/api/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  alias: {
    "@": resolve(__dirname, "./src"),
  },
  css: ['@/assets/css/main.scss'],
  modules: ['@nuxtjs/tailwindcss'],
  devtools: { enabled: true },
});
