import { CheckIcon } from 'lucide-react';

import heroLines from '#/assets/icons/hero-lines.svg';
import { badges, messages, whatsapp } from '#/content/site';
import { Img } from '#/components/img';
import { containerClass, CtaLink, GridBackdrop, TrustLine } from '#/components/ui';
import { cn } from '#/lib/cn';

export const HERO_IMAGE_SIZES =
  '(min-width: 1536px) 512px, (min-width: 1280px) 448px, (min-width: 640px) 480px, 360px';

const highlights = [
  <>
    Aprenda a <i className="text-primary font-medium">atrair clientes</i> todos
    os dias
  </>,
  <>
    Gere <i className="text-primary font-medium">pedidos de orçamento</i> no
    Direct e WhatsApp
  </>,
  <>Mesmo que você não entenda nada de marketing</>,
];

/** Posição de cada etiqueta flutuante sobre a foto. */
const chipPositions = [
  'top-[18%] -left-2 sm:-left-8',
  'top-[46%] -right-2 sm:-right-6',
  'bottom-[16%] left-[6%]',
];

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="home-title"
      className="relative isolate overflow-hidden pt-32 pb-16 md:pt-40 xl:min-h-dvh"
    >
      <GridBackdrop className="-z-10" />
      <div
        aria-hidden="true"
        className="bg-primary/8 absolute -top-40 -left-40 -z-10 size-[44rem] rounded-full blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="bg-primary/6 absolute top-1/3 -right-40 -z-10 size-[36rem] rounded-full blur-[140px]"
      />

      <div className={cn(containerClass, 'flex flex-col items-center gap-12 xl:flex-row xl:gap-8')}>
        <div className="relative z-10 flex flex-1 flex-col items-center xl:items-start">
          <h1
            id="home-title"
            className="animate-enter-blur mb-6 max-w-3xl text-center text-4xl leading-[1.08] font-medium tracking-tight text-balance text-white sm:text-5xl lg:text-6xl xl:text-start"
          >
            É um bom tatuador?{' '}
            <i className="text-primary font-serif">Sabe que tem as habilidades</i>
            , mas ainda te faltam clientes pra exercer isso?
          </h1>

          <p className="animate-enter-from-left max-w-2xl text-center text-lg text-pretty text-gray-400 sm:text-xl xl:text-start">
            Saiba como tatuadores estão lotando a agenda usando Instagram e
            anúncios simples. Mesmo com poucos seguidores e sem depender apenas
            de indicações.
          </p>

          <ul className="mt-6 flex flex-col gap-2.5 text-gray-300">
            {highlights.map((item, index) => (
              <li
                key={index}
                className="animate-enter-from-left flex items-center gap-3"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <span className="bg-primary/15 text-primary ring-primary/30 flex size-6 shrink-0 items-center justify-center rounded-full ring-1">
                  <CheckIcon aria-hidden="true" className="size-3.5" strokeWidth={3} />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="animate-enter-up mt-10 flex w-full flex-col items-center gap-5 xl:items-start">
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <CtaLink href="#offer">
                Quero aprender o método <strong className="uppercase">inktensity</strong>
              </CtaLink>
              <CtaLink href={whatsapp(messages.hero)} variant="outline" className="justify-center">
                Fale comigo
              </CtaLink>
            </div>
            <TrustLine className="xl:justify-start" />
          </div>
        </div>

        <div className="relative flex shrink-0 items-center">
          <div className="relative">
            <img
              src={heroLines}
              alt=""
              aria-hidden="true"
              width={2000}
              height={2000}
              decoding="async"
              fetchPriority="low"
              className="animate-fade-in absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mask-b-from-50%"
            />
            <Img
              name="hero-tatuador-scalare"
              sizes={HERO_IMAGE_SIZES}
              priority
              alt="Tatuador de máscara e luvas pretas, com avental da Scalare Mídia, tatuando uma rosa dos ventos no antebraço de um cliente"
              className="animate-fade-in w-90 mask-x-from-90% mask-b-from-80% sm:w-120 xl:w-md 2xl:w-lg"
            />

            {badges.map((label, index) => (
              <span
                key={label}
                className={cn(
                  'animate-float bg-background/70 border-primary/25 absolute z-10 flex items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-medium text-white shadow-[0_8px_30px_-10px_rgb(0_0_0/0.8)] backdrop-blur-md',
                  chipPositions[index],
                )}
                style={{ animationDelay: `${index * 0.8}s` }}
              >
                <span aria-hidden="true" className="bg-primary text-ink flex size-5 items-center justify-center rounded-full text-xs font-bold">
                  +
                </span>
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
