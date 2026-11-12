// Domínio de produção. Fica num arquivo separado e sem imports para poder ser
// lido também pelo vite.config.ts (sitemap). VITE_SITE_URL sobrescreve
// (ex.: para testar um domínio de homologação).
const fromVite =
  typeof import.meta.env !== 'undefined' ? import.meta.env.VITE_SITE_URL : '';
const fromNode =
  typeof process !== 'undefined' ? process.env.VITE_SITE_URL : '';

export const SITE_URL = (
  fromVite ||
  fromNode ||
  'https://inktensity.scalaremidia.com.br'
).replace(/\/$/, '');
