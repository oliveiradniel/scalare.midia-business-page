import { XIcon } from 'lucide-react';

import { challenges } from '#/content/site';
import { Reveal } from '#/components/reveal';
import { Accent, BigWord, Container, SectionCta, SectionHeading } from '#/components/ui';

export function Identification() {
  const main = challenges.slice(0, -1);
  const last = challenges.at(-1);

  return (
    <section aria-labelledby="desafios-title" className="relative pt-12">
      <BigWord>Inktensity</BigWord>

      <Container>
        <div className="bg-paper text-ink relative overflow-hidden rounded-[2rem] px-5 py-16 shadow-[0_-30px_80px_-40px_var(--color-primary)] sm:px-10 md:rounded-[2.5rem] md:px-14 md:py-24">
          <Reveal>
            <SectionHeading
              id="desafios-title"
              tone="light"
              eyebrow="Diagnóstico"
              title={
                <>
                  Você tem algum desses <Accent tone="light">desafios</Accent>{' '}
                  atualmente como tatuador?
                </>
              }
            />
          </Reveal>

          <ul className="mt-12 grid gap-3 sm:grid-cols-2 md:mt-16 lg:grid-cols-3 lg:gap-4">
            {main.map((label, index) => (
              <Reveal
                as="li"
                key={label}
                delay={(index % 3) * 0.1}
                duration={0.8}
                className="ring-ink/5 flex items-start gap-3 rounded-2xl bg-white p-5 shadow-[0_12px_32px_-18px_rgb(10_13_6/0.35)] ring-1"
              >
                <span className="bg-ink text-primary flex size-8 shrink-0 items-center justify-center rounded-full">
                  <XIcon aria-hidden="true" className="size-4" strokeWidth={3} />
                </span>
                <span className="pt-1 text-base leading-snug font-medium">{label}</span>
              </Reveal>
            ))}
            {last && (
              <li className="border-ink/20 text-ink/60 flex items-center justify-center rounded-2xl border border-dashed p-5 text-base font-medium">
                {last}
              </li>
            )}
          </ul>

          <Reveal
            className="bg-ink relative mt-10 grid items-center gap-6 overflow-hidden rounded-3xl p-8 text-white md:mt-14 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] md:gap-12 md:p-12"
          >
            <div
              aria-hidden="true"
              className="bg-primary/15 absolute -top-24 -left-24 size-72 rounded-full blur-3xl"
            />
            <h3 className="relative text-3xl leading-tight font-medium tracking-tight md:text-4xl">
              Se sim, <Accent>fique tranquilo!</Accent>
            </h3>
            <p className="relative text-pretty text-gray-300 md:text-lg">
              Isso acontece porque a maioria dos tatuadores não sabe usar o
              Instagram de forma estratégica. No meu curso você aprende desde{' '}
              <i className="text-primary font-serif">
                organização do seu perfil a como gerar urgência
              </i>{' '}
              para fechar uma tatuagem com o{' '}
              <strong className="text-white">preço que você merece</strong>.
            </p>
          </Reveal>

          <SectionCta href="#offer" tone="light" className="mt-12">
            Quero resolver isso
          </SectionCta>
        </div>
      </Container>
    </section>
  );
}
