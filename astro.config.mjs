// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: process.env.SITE_URL || 'https://3tsmart.org',
  trailingSlash: 'never',
  build: { format: 'file', inlineStylesheets: 'auto' },
  compressHTML: true,
  integrations: [sitemap()],
  // Cast: Tailwind ships against a newer Vite type than Astro 5 bundles.
  vite: { plugins: [/** @type {any} */ (tailwindcss())] },
});
