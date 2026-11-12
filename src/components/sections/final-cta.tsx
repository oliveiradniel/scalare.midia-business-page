import { course, links } from '#/content/site';
import { Reveal } from '#/components/reveal';
import { Accent, Container, Eyebrow, GridBackdrop, SectionCta, titleClass } from '#/components/ui';
import { cn } from '#/lib/cn';

export function FinalCta() {
  return (
    <section aria-labelledby="final-cta-title" className="pb-20 md:pb-28">
      <Container>
        <Reveal
          variant="fade"
          className="border-primary/20 bg-surface relative isolate overflow-hidden rounded-[2rem] border px-6 py-16 text-center md:rounded-[2.5rem] md:px-16 md:py-24"
        >
          <GridBackdrop className="-z-10" />
          <div
            aria-hidden="true"
            className="bg-primary/25 absolute -bottom-48 left-1/2 -z-10 size-[34rem] -translate-x-1/2 rounded-full blur-[120px]"
          />

          <div className="mx-auto flex max-w-3xl flex-col items-center gap-5">
            <Eyebrow>Sua vez</Eyebrow>
            <h2 id="final-cta-title" className={cn(titleClass, 'text-white')}>
              Este pode ser <Accent>o passo que te falta</Accent>
            </h2>
            <p className="max-w-2xl text-pretty text-gray-400 md:text-lg">
              Saiba como tatuadores estão lotando a agenda usando Instagram e
              anúncios simples. Mesmo com poucos seguidores e sem depender
              apenas de indicações.
            </p>
            <p className="text-gray-300">
              <strong className="text-primary text-2xl">{course.priceDisplay}</strong>{' '}
              à vista ou 12x de{' '}
              <strong className="text-white">{course.installmentsDisplay}</strong>
            </p>
          </div>

          <SectionCta href={links.checkout} className="mt-10">
            Quero aprender o método <strong className="uppercase">inktensity</strong>
          </SectionCta>
        </Reveal>
      </Container>
    </section>
  );
}
