import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

import react from "@astrojs/react";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  site: 'https://rogandven.github.io',
  integrations: [icon({
    include: {
      mdi: ['*'],
      bi: ['*']
    }
  }), react()],
});