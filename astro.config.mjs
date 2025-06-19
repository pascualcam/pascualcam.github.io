// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://pascualcam.github.io',
  base: process.env.NODE_ENV === 'production' ? '/pascualcam-new' : '/',
  output: 'static',
  integrations: [react(), tailwind()],
});
