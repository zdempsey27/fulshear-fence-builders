import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://fulshearfencebuilders.com',
  integrations: [sitemap()],
});
