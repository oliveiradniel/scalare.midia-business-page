import { ArrowRightIcon } from 'lucide-react';

import { brand, messages, nav, whatsapp } from '#/content/site';
import { Footer } from '#/components/footer';
import { Header } from '#/components/header';
import {
  Accent,
  Container,
  CtaLink,
  Eyebrow,
  GridBackdrop,
  titleClass,
} from '#/components/ui';
import { cn } from '#/lib/cn';

const INK = '#0a0d06';

/** Ponto a `r` do centro (100,100) no ângulo `deg` (0 = norte). */
function at(deg: number, r: number) {
  const rad = (deg * Math.PI) / 180;
  return `${(100 + r * Math.sin(rad)).toFixed(2)},${(100 - r * Math.cos(rad)).toFixed(2)}`;
}

/** Rosa dos ventos (a mesma da tatuagem do hero) com a agulha procurando o norte. */
function Compass({ className }: { className?: string }) {
  const rays = [
    ...[0, 90, 180, 270].map((deg) => ({ deg, length: 74, width: 13 })),
    ...[45, 135, 225, 315].map((deg) => ({ deg, length: 48, width: 9 })),
  ];

  return (
    <svg
      viewBox="0 0 200 200"
      aria-hidden="true"
      focusable="false"
      className={cn('text-primary drop-shadow-[0_0_28px_rgb(236_254_103/0.35)]', className)}
    >
      <circle cx="100" cy="100" r="96" fill={INK} />
      <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeOpacity=".2" />

      {Array.from({ length: 72 }, (_, i) => {
        const deg = i * 5;
        const major = deg % 45 === 0;
        const [x1, y1] = at(deg, major ? 72 : 80).split(',');
        const [x2, y2] = at(deg, 88).split(',');
        return (
          <line
            key={deg}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeOpacity={major ? 0.9 : 0.3}
            strokeWidth={major ? 2.5 : 1}
            strokeLinecap="round"
          />
        );
      })}

      {rays.map(({ deg, length, width }) => (
        <g key={deg}>
          <polygon
            points={`100,100 ${at(deg, length)} ${at(deg - 45, width)}`}
            fill="currentColor"
            fillOpacity=".28"
          />
          <polygon
            points={`100,100 ${at(deg, length)} ${at(deg + 45, width)}`}
            fill="currentColor"
            fillOpacity=".1"
          />
        </g>
      ))}

      <g className="animate-needle transform-view origin-center">
        <path d="M100 30 L110 100 L90 100 Z" fill="currentColor" />
        <path d="M100 170 L110 100 L90 100 Z" fill="#fff" fillOpacity=".85" />
      </g>
      <circle cx="100" cy="100" r="8" fill={INK} stroke="currentColor" strokeWidth="2.5" />
    </svg>
  );
}

const digitClass =
  'from-primary to-primary/10 bg-linear-to-b bg-clip-text text-transparent';

export function NotFound() {
  const shortcuts = [
    ...nav.filter((item) => item.href !== '/#home'),
    { label: 'Oferta', href: '/#offer' },
  ];

  return (
    <>
      {/* React 19 sobe <title> e <meta> para o <head>. */}
      <title>{`Página não encontrada | ${brand.name}`}</title>
      <meta name="robots" content="noindex" />

      <Header />

      <main id="conteudo" className="overflow-x-clip">
        <section
          aria-labelledby="not-found-title"
          className="relative isolate flex min-h-dvh items-center pt-32 pb-20"
        >
          <GridBackdrop className="-z-10" />
          <div
            aria-hidden="true"
            className="bg-primary/10 absolute top-1/4 left-1/2 -z-10 size-160 -translate-x-1/2 rounded-full blur-[140px]"
          />

          <Container className="flex flex-col items-center text-center">
            <div
              aria-hidden="true"
              className="animate-enter-blur flex items-center gap-[0.06em] text-[clamp(7rem,24vw,16rem)] leading-none font-bold tracking-[-0.06em] select-none"
            >
              <span className={digitClass}>4</span>
              <Compass className="size-[0.78em]" />
              <span className={digitClass}>4</span>
            </div>

            <div className="animate-enter-up mt-10 flex flex-col items-center gap-5">
              <Eyebrow>Erro 404</Eyebrow>
              <h1 id="not-found-title" className={cn(titleClass, 'text-white')}>
                Essa página saiu do <Accent>mapa</Accent>
              </h1>
              <p className="max-w-xl text-base text-pretty text-gray-400 md:text-lg">
                O endereço que você tentou acessar não existe ou foi movido. Mas
                o caminho até a agenda cheia continua por aqui.
              </p>

              <div className="mt-4 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
                <CtaLink href="/">Voltar para o início</CtaLink>
                <CtaLink
                  href={whatsapp(messages.notFound)}
                  variant="outline"
                  className="justify-center"
                >
                  Falar comigo
                </CtaLink>
              </div>
            </div>

            <nav
              aria-labelledby="not-found-shortcuts"
              className="animate-enter-up mt-14 flex flex-col items-center gap-4"
              style={{ animationDelay: '0.2s' }}
            >
              <h2 id="not-found-shortcuts" className="text-sm text-gray-400">
                Talvez você estivesse procurando:
              </h2>
              <ul className="flex flex-wrap justify-center gap-2">
                {shortcuts.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="group hover:border-primary/50 hover:text-primary bg-surface flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-gray-200 transition-colors"
                    >
                      {item.label}
                      <ArrowRightIcon
                        aria-hidden="true"
                        className="size-3.5 transition-transform group-hover:translate-x-0.5"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
