import { Img } from '#/components/img';
import { Reveal } from '#/components/reveal';
import { person } from '#/content/site';
import { Accent, Container, Glow, SectionHeading, sectionSpacing } from '#/components/ui';
import { cn } from '#/lib/cn';

const paragraphs = [
  'Nos últimos anos, mergulhei profundamente nos estudos e na prática do marketing digital com o objetivo de ajudar empresas e profissionais autônomos a conquistarem mais espaço na internet. Durante essa jornada, busquei entender não apenas como funcionam as ferramentas de anúncios, mas principalmente como transformar estratégias digitais em resultados concretos para negócios que desejam crescer e alcançar mais pessoas.',
  'Ao longo de mais de três anos atuando como gestor de tráfego, tive a oportunidade de trabalhar com diferentes perfis de clientes, ajudando empresas e autônomos a aumentarem sua visibilidade e atraírem novos clientes através da internet. Essa experiência prática mostrou que muitos profissionais talentosos deixam de crescer simplesmente por não saberem como se posicionar ou atrair clientes no ambiente digital.',
  'Foi justamente a partir dessa realidade que criei o Método Inktensity, pensado especialmente para tatuadores que não possuem conhecimento em marketing, mas querem se posicionar melhor e atrair mais clientes. O método reúne estratégias práticas de posicionamento no Instagram, criação de anúncios simples e eficientes e técnicas para fechar mais vendas, permitindo que tatuadores transformem seu perfil em uma verdadeira máquina de gerar pedidos de orçamento.',
];

const facts = ['+3 anos como gestor de tráfego', 'Criador do Método Inktensity'];

export function About() {
  return (
    <section
      id="about-me"
      aria-labelledby="about-title"
      className={cn('relative isolate scroll-mt-24', sectionSpacing)}
    >
      <Glow className="top-1/4 -left-40 -z-10" />

      <Container className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <Reveal variant="zoom" amount={0.1} className="relative mx-auto w-full max-w-120">
          <div
            aria-hidden="true"
            className="bg-primary/20 absolute inset-x-10 top-10 bottom-0 -z-10 rounded-full blur-[80px]"
          />
          <Img
            name="rafael-souza-estrategista-trafego"
            sizes="(min-width: 528px) 480px, calc(100vw - 32px)"
            alt="Rafael Souza, estrategista de tráfego, criador do Método Inktensity"
            className="h-auto w-full"
          />
        </Reveal>

        <div className="flex flex-col gap-6">
          <Reveal variant="from-right">
            <SectionHeading
              id="about-title"
              align="start"
              eyebrow="Sobre mim"
              title={
                <>
                  Prazer, eu sou o <Accent>{person.name}</Accent>
                </>
              }
              className="items-center text-center lg:items-start lg:text-start"
            />
          </Reveal>

          <ul className="flex flex-wrap justify-center gap-2 lg:justify-start">
            {facts.map((fact) => (
              <li
                key={fact}
                className="border-primary/25 bg-primary/5 rounded-full border px-3.5 py-1.5 text-sm text-gray-200"
              >
                {fact}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-5 text-center text-pretty text-gray-400 lg:text-start">
            {paragraphs.map((text, index) => (
              <Reveal as="p" key={index} variant="from-right" delay={index * 0.15}>
                {text}
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
