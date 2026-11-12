import { defineConfig } from 'vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { nitro } from 'nitro/vite';

import { SITE_URL } from './src/content/site-url.ts';

const IMMUTABLE = 'public, max-age=31536000, immutable';

export default defineConfig({
  resolve: { tsconfigPaths: true },
  server: { host: '0.0.0.0' },
  plugins: [
    tailwindcss(),
    tanstackStart({
      // Página 100% estática: o HTML sai pronto no build (SSR continua ativo).
      prerender: {
        enabled: true,
        // As rotas estáticas já são descobertas automaticamente. O crawl
        // transformaria os links de âncora ("/#modules") em URLs do sitemap.
        crawlLinks: false,
      },
      sitemap: { enabled: true, host: SITE_URL },
    }),
    nitro({
      routeRules: {
        // Imagens geradas levam hash do original no nome (scripts/optimize-images.mjs).
        '/img/**': { headers: { 'cache-control': IMMUTABLE } },
      },
    }),
    viteReact(),
  ],
});
