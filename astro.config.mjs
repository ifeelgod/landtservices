// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Keep in sync with SITE.url in src/config/site.ts
const SITE_URL = 'https://lt-services.com';
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  site: isGitHubPages ? 'https://ifeelgod.github.io' : SITE_URL,
  base: isGitHubPages ? '/landtservices' : '/',
  trailingSlash: 'always',
  build: { inlineStylesheets: 'auto' },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en-US', es: 'es-US' } },
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
