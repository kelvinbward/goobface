// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.goobface.com',

  vite: {
    plugins: [tailwindcss()]
  },

  markdown: {
    shikiConfig: {
      theme: 'dracula',
      // Ensure specific langs are available if needed, though default usually covers it.
      wrap: true,
    },
  },

  integrations: [mdx()]
});