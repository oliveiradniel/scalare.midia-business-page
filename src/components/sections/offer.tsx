import { CheckIcon } from 'lucide-react';

import offerIcon from '#/assets/icons/offer.svg';
import { advantages, bonuses, course, links, modules } from '#/content/site';
import { Img } from '#/components/img';
import { Reveal } from '#/components/reveal';
import { Accent, CtaLink, Container, SectionHeading, TrustLine } from '#/components/ui';

const included = [
  ...modules.map((m) => ({ tag: `Módulo ${m.number}`, title: m.title })),
  ...bonuses.map((b) => ({ tag: `Bônus ${b.number}`, title: b.title })),
];

export function Offer() {
  return (
    <section id="offer" aria-labelledby="offer-title" className="scroll-mt-24 py-12 md:py-16">
      <Container>
        <div className="bg-paper text-ink relative overflow-hidden rounded-[2rem] px-5 py-16 sm:px-10 md:rounded-[2.5rem] md:px-14 md:py-24">
          <div
            aria-hidden="true"
            className="bg-primary/60 absolute -top-40 left-1/2 size-[30rem] -translate-x-1/2 rounded-full blur-[120px]"
          />

          <Reveal className="relative">
            <SectionHeading
              id="offer-title"
              tone="light"
              eyebrow="Não perca mais tempo e dinheiro!"
              title={
                <>
                  Quanto vale ter{' '}
                  <Accent tone="light">clientes chegando todos os dias</Accent>?
                </>
              }
              subtitle="Uma única tatuagem que você fechar já pode pagar esse treinamento inteiro. Agora imagine aprender um método que pode te ajudar a gerar pedidos de orçamento constantemente usando Instagram e anúncios simples."
            />
          </Reveal>

          <div className="relative mt-12 grid items-start gap-8 md:mt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-12">
            <Reveal variant="from-left" className="flex flex-col gap-4">
              <h3 className="text-xl font-medium">Tudo o que você recebe:</h3>
              <ul className="flex flex-col gap-2.5">
                {included.map((item) => (
                  <li
                    key={item.tag}
                    className="ring-ink/5 flex items-center gap-4 rounded-2xl bg-white px-4 py-3.5 shadow-[0_10px_28px_-18px_rgb(10_13_6/0.4)] ring-1"
                  >
                    <span className="bg-ink text-primary flex size-8 shrink-0 items-center justify-center rounded-full">
                      <CheckIcon aria-hidden="true" className="size-4" strokeWidth={3} />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-ink/60 text-xs font-bold tracking-wide uppercase">
                        {item.tag}
                      </span>
                      <span className="font-medium">{item.title}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal
              variant="blur-fade"
              duration={1.2}
              className="bg-ink ring-primary/30 relative overflow-hidden rounded-3xl p-7 text-white shadow-[0_40px_80px_-30px_rgb(10_13_6/0.7)] ring-1 md:p-9"
            >
              <div
                aria-hidden="true"
                className="bg-primary/20 absolute -top-20 -right-20 size-64 rounded-full blur-3xl"
              />

              <div className="relative flex items-center gap-4">
                <div className="rounded-xl bg-white/90 p-2">
                  <img src={offerIcon} alt="" aria-hidden="true" className="size-10" />
                </div>
                <div>
                  <h3 className="text-primary text-lg font-medium">
                    Acesso completo ao método{' '}
                    <i className="font-serif text-xl">Inktensity</i>
                  </h3>
                  <span className="text-sm text-gray-400">Vitalício</span>
                </div>
              </div>

              <div className="relative mt-8 border-t border-white/10 pt-8">
                <p className="text-gray-400">
                  De <s className="text-lg">{course.oldPriceDisplay}</s>{' '}
                  <span className="text-sm">/anual</span>
                </p>
                <p className="mt-1 flex flex-wrap items-baseline gap-x-2">
                  <span className="text-gray-400">Por</span>
                  <strong className="text-primary text-5xl font-bold tracking-tight md:text-6xl">
                    {course.priceDisplay}
                  </strong>
                  <span className="text-sm text-gray-400">/uma única vez</span>
                </p>
                <p className="mt-2 text-gray-300">
                  Ou 12x de <strong className="text-white">{course.installmentsDisplay}</strong>
                </p>
              </div>

              <ul className="relative mt-8 flex flex-col gap-3">
                {advantages.map((advantage) => (
                  <li key={advantage} className="flex items-center gap-3">
                    <span className="bg-primary/15 text-primary flex size-6 shrink-0 items-center justify-center rounded-full">
                      <CheckIcon aria-hidden="true" className="size-3.5" strokeWidth={3} />
                    </span>
                    <span>{advantage}</span>
                  </li>
                ))}
              </ul>

              <CtaLink href={links.checkout} className="relative mt-8 w-full">
                Quero testar agora!
              </CtaLink>
              <TrustLine className="relative mt-4" />
            </Reveal>
          </div>

          <Reveal className="ring-ink/5 relative mt-8 grid items-center gap-6 rounded-3xl bg-white p-6 shadow-[0_10px_28px_-18px_rgb(10_13_6/0.4)] ring-1 sm:grid-cols-[auto_minmax(0,1fr)] md:mt-12 md:gap-10 md:p-10">
            <Reveal
              variant="none"
              amount={0.3}
              className="data-inview:animate-flip-y mx-auto size-40 md:size-48"
            >
              <Img
                name="selo-garantia-7-dias"
                sizes="(min-width: 768px) 192px, 160px"
                alt="Selo de 7 dias de garantia: 100% do dinheiro de volta"
                className="size-full"
              />
            </Reveal>
            <div className="text-center sm:text-start">
              <h3 className="text-2xl font-medium tracking-tight md:text-3xl">
                Garantia incondicional de{' '}
                <Accent tone="light">{course.guaranteeDays} dias</Accent>
              </h3>
              <p className="text-ink/70 mt-3 md:text-lg">
                Você pode testar, assistir as aulas e testar o método. Se acha
                que não valeu a pena, basta pedir reembolso dentro de{' '}
                <strong className="text-ink">{course.guaranteeDays} dias</strong>.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
