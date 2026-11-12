import { MessageCircleIcon, PlusIcon } from 'lucide-react';

import { faq, messages, whatsapp } from '#/content/site';
import { Reveal } from '#/components/reveal';
import { Accent, BigWord, Container, CtaLink, SectionHeading } from '#/components/ui';

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="relative scroll-mt-24 pt-12 pb-20 md:pb-28">
      <BigWord>Dúvidas</BigWord>

      <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <div className="flex flex-col gap-8 lg:sticky lg:top-28 lg:self-start">
          <Reveal variant="from-left">
            <SectionHeading
              id="faq-title"
              align="start"
              eyebrow="FAQ"
              title={
                <>
                  Perguntas <Accent>frequentes</Accent>
                </>
              }
              subtitle="Ainda está com alguma dúvida antes de começar?"
              className="items-center text-center lg:items-start lg:text-start"
            />
          </Reveal>

          <Reveal
            variant="from-left"
            delay={0.15}
            className="bg-surface border-primary/20 relative overflow-hidden rounded-3xl border p-7"
          >
            <div
              aria-hidden="true"
              className="bg-primary/15 absolute -right-16 -bottom-16 size-48 rounded-full blur-3xl"
            />
            <span className="bg-primary text-ink relative flex size-11 items-center justify-center rounded-2xl">
              <MessageCircleIcon aria-hidden="true" className="size-5" />
            </span>
            <h3 className="relative mt-5 text-xl font-medium text-white">
              Ficou com alguma dúvida específica?
            </h3>
            <p className="relative mt-2 text-gray-400">
              Se sua pergunta não apareceu aqui, pode falar diretamente comigo.
              Eu mesmo vou te responder e te ajudar a entender se o Método
              Inktensity faz sentido para o seu estúdio.
            </p>
            <CtaLink href={whatsapp(messages.faq)} className="relative mt-6 w-full">
              Fale comigo
            </CtaLink>
          </Reveal>
        </div>

        <div className="flex flex-col gap-3">
          {faq.map((item, index) => (
            <Reveal
              as="details"
              key={item.question}
              variant="from-right"
              delay={index * 0.08}
              duration={0.8}
              className="group bg-surface open:border-primary/40 open:bg-primary/[0.06] rounded-2xl border border-white/10 transition-colors hover:border-white/20"
            >
              <summary className="flex cursor-pointer list-none items-center gap-4 px-5 py-4 text-start text-white md:px-6 md:py-5">
                <span className="border-primary/40 text-primary group-open:bg-primary group-open:text-ink flex size-8 shrink-0 items-center justify-center rounded-full border text-sm font-bold transition-colors">
                  {index + 1}
                </span>
                <span className="group-open:text-primary flex-1 font-medium transition-colors md:text-lg">
                  {item.question}
                </span>
                <PlusIcon
                  aria-hidden="true"
                  className="size-5 shrink-0 text-gray-400 transition-transform duration-300 group-open:rotate-45"
                />
              </summary>
              <p className="px-5 pb-5 pl-[4.25rem] text-gray-400 md:px-6 md:pb-6 md:pl-[4.5rem]">
                {item.answer}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
