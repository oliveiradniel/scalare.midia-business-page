import type { ReactNode } from 'react';
import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router';

import manropeMedium from '@fontsource/manrope/files/manrope-latin-500-normal.woff2?url';
import playfairItalic from '@fontsource/playfair-display/files/playfair-display-latin-400-italic.woff2?url';

import { seo } from '#/content/site';
import { NotFound } from '#/components/not-found';
import appCss from '#/styles/app.css?url';

// Fontes do <h1> (LCP): Manrope 500 + Playfair Display itálico 400.
const fontPreload = (href: string) =>
  ({
    rel: 'preload',
    as: 'font',
    type: 'font/woff2',
    href,
    crossOrigin: 'anonymous',
  }) as const;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: seo.themeColor },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    links: [
      fontPreload(manropeMedium),
      fontPreload(playfairItalic),
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', href: '/favicon.ico', sizes: '48x48' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'manifest', href: '/manifest.webmanifest' },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: NotFound,
});

// Sem JS, os elementos com animação de entrada ficariam invisíveis.
const NO_SCRIPT_CSS =
  '[data-reveal]{opacity:1!important;translate:none!important;scale:none!important;filter:none!important}';

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang={seo.language}>
      <head>
        <HeadContent />
      </head>
      <body>
        <a
          href="#conteudo"
          className="bg-primary sr-only rounded-full px-4 py-2 font-medium focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50"
        >
          Pular para o conteúdo
        </a>
        {children}
        <noscript>
          <style>{NO_SCRIPT_CSS}</style>
        </noscript>
        <Scripts />
      </body>
    </html>
  );
}
