// Gera as variantes responsivas (AVIF + WebP + fallback) das imagens de
// assets-src/ em public/img/ e escreve o manifest em src/content/images.json.
//
// Uso: node scripts/optimize-images.mjs [--force]
// - Pula variantes que já existem (o nome leva hash do arquivo de origem,
//   então trocar a imagem gera nomes novos e o cache longo continua seguro).
// - --force reencoda tudo.

import { createHash } from 'node:crypto';
import { existsSync } from 'node:fs';
import { mkdir, readdir, readFile, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve(import.meta.dirname, '..');
const SRC = path.join(ROOT, 'assets-src');
const OUT = path.join(ROOT, 'public/img');
const MANIFEST = path.join(ROOT, 'src/content/images.json');
const FORCE = process.argv.includes('--force');

const BACKGROUND = '#010409';

/**
 * widths: larguras geradas (1x e 2x do tamanho exibido, sem upscale).
 * fallback: formato do <img src> para navegadores sem AVIF/WebP.
 * fallbackWidth: largura única do fallback.
 */
const IMAGES = [
  {
    name: 'hero-tatuador-scalare',
    file: 'hero-tatuador-scalare.png',
    // exibida em 360 / 480 / 448 / 512px (w-90, sm:w-120, xl:w-md, 2xl:w-lg)
    widths: [360, 480, 640, 960, 1280],
    fallback: 'png',
    fallbackWidth: 640,
  },
  {
    name: 'rafael-souza-estrategista-trafego',
    file: 'rafael-souza-estrategista-trafego.png',
    // até 480px (w-120)
    widths: [400, 480, 720, 960],
    fallback: 'png',
    fallbackWidth: 480,
  },
  {
    name: 'logo-scalare-simbolo',
    file: 'logo-scalare-simbolo.png',
    // 48px de altura no header mobile
    widths: [48, 96, 144],
    fallback: 'png',
    fallbackWidth: 96,
  },
  {
    name: 'logo-scalare-horizontal',
    file: 'logo-scalare-horizontal.png',
    // ~173px no header (h-12) e 168px no footer (w-42)
    widths: [180, 360, 540],
    fallback: 'png',
    fallbackWidth: 360,
  },
  {
    name: 'selo-garantia-7-dias',
    file: 'selo-garantia.svg',
    density: 2400, // o SVG declara 64px; rasteriza em alta para não upscalar
    // 320px (size-80)
    widths: [320, 640],
    fallback: 'png',
    fallbackWidth: 320,
  },
  ...Array.from({ length: 9 }, (_, i) => {
    const n = String(i + 1).padStart(2, '0');
    return {
      name: `depoimento-${n}`,
      file: `depoimentos/depoimento-${n}.png`,
      // 1 por slide até 767px (~735px), 3/4/5 por slide acima, 240px no xl
      widths: [320, 480, 720, 960, 1179],
      fallback: 'jpg',
      fallbackWidth: 480,
      flatten: '#ffffff',
    };
  }),
];

/** Imagens únicas (sem variantes) que vão para public/ direto. */
const SINGLES = [
  {
    // Logo quadrado para o JSON-LD (Organization.logo)
    out: 'logo-scalare-512.png',
    file: 'logo-scalare-simbolo.png',
    build: (img) => img.resize(512, 512).png({ palette: true, quality: 90 }),
  },
  {
    // og:image 1200x630: card do Rafael centralizado no fundo do site.
    // Versione o nome (og-…-v2.jpg) ao trocar, por causa do cache do WhatsApp.
    out: 'og-rafael-souza-v1.jpg',
    file: 'rafael-souza-estrategista-trafego.png',
    build: (img) =>
      img
        .resize(1200, 630, { fit: 'contain', background: BACKGROUND })
        .flatten({ background: BACKGROUND })
        .jpeg({ quality: 82, mozjpeg: true, progressive: true }),
  },
];

const encoders = {
  avif: (img) => img.avif({ quality: 55, effort: 6 }),
  webp: (img) => img.webp({ quality: 78, effort: 6 }),
  png: (img) => img.png({ palette: true, quality: 85, effort: 10 }),
  jpg: (img) => img.jpeg({ quality: 80, mozjpeg: true, progressive: true }),
};

const kb = (bytes) => `${(bytes / 1024).toFixed(0)}KB`;

async function main() {
  await mkdir(OUT, { recursive: true });
  const manifest = {};
  const expected = new Set();
  let generated = 0;

  for (const image of IMAGES) {
    const srcPath = path.join(SRC, image.file);
    const buffer = await readFile(srcPath);
    const hash = createHash('sha1').update(buffer).digest('hex').slice(0, 8);
    const load = () => {
      let img = sharp(buffer, image.density ? { density: image.density } : {});
      if (image.flatten) img = img.flatten({ background: image.flatten });
      return img;
    };
    const meta = await load().metadata();
    const widths = image.widths.filter((w) => w <= meta.width);

    const jobs = [];
    for (const w of widths) {
      for (const fmt of ['avif', 'webp']) jobs.push({ w, fmt });
    }
    jobs.push({ w: image.fallbackWidth, fmt: image.fallback });

    for (const { w, fmt } of jobs) {
      const file = `${image.name}-${w}.${hash}.${fmt}`;
      expected.add(file);
      const out = path.join(OUT, file);
      if (!FORCE && existsSync(out)) continue;
      await encoders[fmt](load().resize({ width: w })).toFile(out);
      generated++;
    }

    manifest[image.name] = {
      width: meta.width,
      height: meta.height,
      hash,
      widths,
      fallback: image.fallback,
      fallbackWidth: image.fallbackWidth,
    };
  }

  // Remove variantes antigas (hash ou largura que não existem mais).
  for (const file of await readdir(OUT)) {
    if (!expected.has(file)) await unlink(path.join(OUT, file));
  }

  for (const single of SINGLES) {
    const out = path.join(ROOT, 'public', single.out);
    if (!FORCE && existsSync(out)) continue;
    await single.build(sharp(path.join(SRC, single.file))).toFile(out);
    generated++;
  }

  await writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + '\n');

  console.log(
    `[images] ${generated} arquivo(s) gerado(s), ${expected.size} variantes no total.`,
  );
  if (generated > 0) {
    for (const [name, m] of Object.entries(manifest)) {
      const sizes = [];
      for (const w of m.widths) {
        for (const fmt of ['avif', 'webp']) {
          const f = path.join(OUT, `${name}-${w}.${m.hash}.${fmt}`);
          sizes.push(`${fmt}${w}=${kb((await readFile(f)).length)}`);
        }
      }
      console.log(`  ${name}: ${sizes.join(' ')}`);
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
