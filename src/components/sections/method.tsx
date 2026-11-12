import { MegaphoneIcon, MessagesSquareIcon, SmartphoneIcon } from 'lucide-react';

import { pillars } from '#/content/site';
import { Reveal } from '#/components/reveal';
import { Typewriter } from '#/components/typewriter';
import { Container, Glow, SectionCta, SectionHeading, sectionSpacing } from '#/components/ui';
import { cn } from '#/lib/cn';

const PHRASES = ['Conheça o método', 'Cresça com o método'];

const icons = {
  instagram: SmartphoneIcon,
  ads: MegaphoneIcon,
  sales: MessagesSquareIcon,
};

export function Method() {
  return (
    <section aria-labelledby="method-title" className={cn('relative isolate', sectionSpacing)}>
      <Glow className="top-0 left-1/2 -z-10 -translate-x-1/2" />

      <Container>
        <Reveal variant="fade">
          <SectionHeading
            id="method-title"
            eyebrow="O método"
            titleProps={{ 'aria-label': `${PHRASES[0]} Inktensity` }}
            title={
              <>
                <Typewriter phrases={PHRASES} />{' '}
                <i className="text-primary font-serif">Inktensity</i>
              </>
            }
            subtitle="Um sistema direto ao ponto criado para ajudar tatuadores a transformar o Instagram em uma máquina de clientes. Você vai aprender desde atrair pessoas, até fechar tatuagens no Direct ou WhatsApp."
          />
        </Reveal>

        <Reveal as="h3" variant="fade" className="mt-14 text-center text-lg font-medium text-gray-300 md:mt-16">
          Seus fundamentos consistem em 3 pilares:
        </Reveal>

        <ol className="mt-8 grid gap-4 md:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = icons[pillar.icon];
            return (
              <Reveal
                as="li"
                key={pillar.title}
                delay={index * 0.15}
                className="group bg-surface hover:border-primary/40 relative overflow-hidden rounded-3xl border border-white/10 p-7 transition-colors"
              >
                <span
                  aria-hidden="true"
                  className="text-primary/10 group-hover:text-primary/20 absolute -top-4 right-4 text-8xl font-bold tracking-tighter transition-colors"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="bg-primary text-ink relative flex size-12 items-center justify-center rounded-2xl shadow-[0_0_30px_-6px_var(--color-primary)]">
                  <Icon aria-hidden="true" className="size-6" />
                </span>
                <h4 className="relative mt-6 text-xl font-medium text-white">
                  <span className="sr-only">{index + 1}. </span>
                  {pillar.title}
                </h4>
                <p className="relative mt-2 text-gray-400">{pillar.text}</p>
              </Reveal>
            );
          })}
        </ol>

        <SectionCta href="#offer" className="mt-12 md:mt-16">
          Quero adquirir agora
        </SectionCta>
      </Container>
    </section>
  );
}
