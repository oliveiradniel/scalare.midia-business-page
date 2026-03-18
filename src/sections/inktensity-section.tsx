import { motion } from 'motion/react';

import { ArrowDownIcon } from 'lucide-react';

import positionImage from '../assets/images/position.svg';
import adsImage from '../assets/images/ads.svg';
import cashImage from '../assets/images/cash.svg';
import { TypeAnimation } from 'react-type-animation';

export function InktensitySection() {
  const modules = [
    {
      id: 'positioning',
      title: 'Posicionamento no Instagram',
    },
    {
      id: 'ads',
      title: 'Criar anúncios simples e eficientes',
    },
    {
      id: 'sales',
      title: 'Fechar vendas',
    },
  ];

  const badges = [
    {
      id: 'sales-badge',
      label: 'Vendas',
    },
    {
      id: 'revenue-badge',
      label: 'Faturamento',
    },
    {
      id: 'customers-badge',
      label: 'Clientes',
    },
  ];

  const contents = [
    {
      id: 'positioning-content',
      title: 'Como se posicionar no Instagram',
      headline:
        'Aprenda como transformar seu perfil em um portfólio que atrai clientes.',
      classes: [
        'Organizando seu perfil: bio, foto e portfólio no feed',
        'Como atrair clientes com posts e stories estratégicos',
        'Como interagir com seguidores e responder mensagens para gerar conexão',
      ],
      img: positionImage,
    },
    {
      id: 'ads-content',
      title: 'Criando anúncios simples e eficientes',
      headline: 'Aprenda a criar anúncios que geram pedidos de orçamento.',
      classes: [
        'Criando e configurando sua máquina de vendas',
        'Contectando ativos e estruturando tudo certo',
        'Objetivos de campanha - qual escolher',
        'Estruturando campanhas da maneira certa (ABO, CBO, públicos e segmentação)',
        'Criando crativos de alto impacto para anúncios',
        'Criando anúncios para atrair seguidores qualificados',
        'Criando anúncios para receber pedidos de orçamento',
        'Como analisar resultados e melhorar seus anúncios',
        'Evitando bloqueios e protegendo sua conta de anúncios',
      ],
      img: adsImage,
    },
    {
      id: 'cash-content',
      title: 'Fechando vendas',
      headline: 'Aprenda como transformar pedidos de orçamento em clientes.',
      classes: [
        'Como responder leads no WhatsApp e Direct',
        'Lidando com objeções comuns e fechando a venda',
        'Criando urgência para fazer o cliente decidir rápido',
      ],
      img: cashImage,
    },
  ];

  const bonus = [
    {
      id: 'posts',
      label: '50 ideias de posts para tatuadores',
      headline: 'Para nunca ficar sem conteúdo no Instagram',
    },
    {
      id: 'scripts',
      label: 'Scripts prontos para responder clientes',
      headline:
        'Mensagens prontas para responder orçamento e fechar mais tattoos',
    },
    {
      id: 'structure',
      label: 'Estrutura de anúncios para copiar',
      headline: 'Modelos simples de campanhas que você pode usar',
    },
    {
      id: 'checklist',
      label: 'Checklist do perfil que atrai clientes',
      headline:
        'Checklist para transformar seu Instagram em uma vitrine pessoal',
    },
  ];

  return (
    <div
      id="modules"
      className="flex scroll-mt-40 flex-col items-center gap-16 px-4"
    >
      <div className="flex items-center gap-4">
        {badges.map((badge) => (
          <motion.span
            initial={{ filter: 'blur(4px)' }}
            whileInView={{
              filter: 'blur(0)',
              transition: {
                duration: 1.4,
              },
            }}
            viewport={{ once: true }}
            key={badge.id}
            className="border-primary/20 before:text-primary rounded-full border bg-[#161616] px-3 py-1 text-center text-xs text-gray-300 before:mr-1 before:content-['+']"
          >
            {badge.label}
          </motion.span>
        ))}
      </div>

      <div className="flex max-w-260 flex-col gap-16 lg:flex-row">
        <div className="flex flex-1 flex-col gap-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-2xl text-white sm:text-3xl"
          >
            <TypeAnimation
              sequence={['Conheça o método', 2000, 'Cresça com o método', 2000]}
              repeat={Infinity}
              wrapper="span"
              speed={50}
            />

            <i className="text-primary font-playfair">Inktensity</i>
          </motion.h2>

          <p className="text-center text-gray-400">
            Um sistema direto ao ponto criado para ajudar tatuadores a
            transformar o Instagram em uma máquina de clientes. Você vai
            aprender desde atrair pessoas, até fechar tatuagens no Direct ou
            WhatsApp.
          </p>

          <a
            href="#offer"
            type="button"
            className="bg-primary flex items-center justify-center gap-4 rounded-full px-6 py-3 text-lg font-medium"
          >
            Quero adquirir agora
            <ArrowDownIcon className="text-background size-6" />
          </a>
        </div>

        <div className="flex flex-1 flex-col justify-between gap-4">
          <motion.h3
            initial={{ opacity: 0, x: 80 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 1,
              },
            }}
            viewport={{
              once: true,
            }}
            className="text-center text-2xl text-white"
          >
            Seus fundamentos consistem em 3 pilares:
          </motion.h3>

          <div className="flex flex-col gap-2">
            {modules.map((module, index) => {
              const delay = 0.3 * index;

              return (
                <motion.div
                  initial={{ opacity: 0, x: 80 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 1,
                      delay,
                    },
                  }}
                  viewport={{
                    once: true,
                  }}
                  key={module.id}
                  className="rounded-full border border-gray-600 px-4 py-2"
                >
                  <h4 className="text-center text-base font-thin text-gray-300">
                    {index + 1}. {module.title}
                  </h4>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 80 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
          },
        }}
        viewport={{ once: true }}
        className="mt-8 text-center text-5xl text-white"
      >
        O que você vai{' '}
        <i className="font-playfair from-primary bg-linear-to-r to-white bg-clip-text text-transparent">
          aprender
        </i>
        ?
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 1,
          },
        }}
        viewport={{ once: true }}
        className="flex w-full flex-col gap-12 rounded-lg bg-white/6 mask-r-from-96% mask-l-from-90% p-8 md:gap-4"
      >
        {contents.map((content, index) => (
          <div
            key={`content-${index}`}
            className="flex flex-col items-center gap-6 overflow-hidden md:flex-row md:gap-2"
          >
            <div className="flex flex-1 justify-center">
              <motion.img
                initial={{ filter: 'blur(4px)' }}
                whileInView={{
                  filter: 'blur(0px)',
                  transition: {
                    duration: 1,
                  },
                }}
                viewport={{ once: true }}
                aria-hidden="true"
                src={content.img}
                alt=""
                className="size-16 md:size-24"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 1,
                },
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-background/30 flex-3 rounded-lg border border-white/10 p-4 md:mask-r-from-80%"
            >
              <span className="bg-primary rounded-full px-3 py-1 text-xs font-medium">
                Módulo {index + 1}
              </span>

              <h3 className="font-playfair mt-2 text-xl font-medium text-white italic">
                {content.title}
              </h3>

              <p className="mt-6 text-gray-400">{content.headline}</p>

              <ul className="mt-4 flex list-inside list-disc flex-col gap-1 text-sm text-gray-400">
                {content.classes.map((classroom) => (
                  <li>{classroom}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        ))}
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 80 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
          },
        }}
        viewport={{
          once: true,
        }}
        className="mt-8 text-center text-4xl text-white"
      >
        Está achando que acabou? Temos alguns{' '}
        <i className="font-playfair from-primary bg-linear-to-r to-white bg-clip-text text-transparent">
          bônus
        </i>
      </motion.h2>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {bonus.map((b, index) => {
          const delay = index * 0.2;

          return (
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 2,
                  delay,
                },
              }}
              viewport={{ once: true }}
              key={b.id}
              className="flex flex-col justify-between gap-4 rounded-lg bg-white p-4"
            >
              <h4 className="text-background">🎁 {b.label}</h4>

              <p className="text-gray-400">{b.headline}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
