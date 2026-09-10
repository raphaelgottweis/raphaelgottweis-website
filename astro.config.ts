import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  // used to generate images, canonical URLs, and the sitemap
  // TODO: switch to https://raphaelgottweis.com/ once that domain is live and pointed at this deployment
  site:
    process.env.VERCEL_ENV === 'production'
      ? 'https://raphaelgottweis-website.vercel.app/'
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}/`
        : 'https://localhost:3000/',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
  },
});
