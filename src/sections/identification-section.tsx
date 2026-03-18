import { motion } from 'motion/react';

import errorBox from '../assets/images/error-box.svg';

export function IdentificationSection() {
  const challenges = [
    {
      id: 'agenda',
      label: 'Semanas com agenda cheia e outras vazias',
    },
    {
      id: 'indication',
      label: 'Depender apenas de indicação',
    },
    {
      id: 'clients',
      label: 'Postar no Instagram e não aparecer cliente',
    },
    {
      id: 'pricing',
      label: 'Clientes que acham caro ou pedem desconto o tempo todo',
    },
    {
      id: 'competition',
      label: 'Muitos tatuadores na cidade disputando os mesmos clientes',
    },
    {
      id: 'authority',
      label: 'Ter um bom trabalho mas pouca autoridade online',
    },
    {
      id: 'lead_quality',
      label: 'Receber muitas mensagens, mas poucas virarem agendamento',
    },
    {
      id: 'time_marketing',
      label: 'Não ter tempo ou estratégia para divulgar o trabalho',
    },
    {
      id: 'others',
      label: 'Entre outros...',
    },
  ];

  return (
    <div className="px-4">
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
        className="mx-auto w-full max-w-200 text-center text-3xl text-white"
      >
        Você tem algum desses{' '}
        <i className="font-playfair from-primary bg-linear-to-r to-white bg-clip-text font-bold text-transparent">
          desafios
        </i>{' '}
        atualmente como tatuador?
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          y: [0, -12, 0],
        }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 1,
          },
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="bg-background border-primary/20 mx-auto mt-12 flex w-full max-w-240 flex-col gap-4 rounded-lg border p-8 md:flex-row md:gap-12"
      >
        <ul className="flex flex-col gap-3">
          {challenges.slice(0, 5).map((challenge) => (
            <li className="flex items-start gap-2">
              <img src={errorBox} alt="" className="size-8" />
              <span className="text-lg text-white">{challenge.label}</span>
            </li>
          ))}
        </ul>

        <ul className="flex flex-col gap-3">
          {challenges.slice(5, 9).map((challenge) => (
            <li className="flex items-start gap-2">
              <img src={errorBox} alt="" className="size-8" />
              <span className="text-lg text-white">{challenge.label}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      <div className="mx-auto mt-16 flex max-w-220 flex-col items-center gap-8 overflow-x-hidden sm:flex-row">
        <motion.h3
          initial={{ opacity: 0, x: -80 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
            },
          }}
          viewport={{ once: true }}
          className="text-2xl font-medium text-white"
        >
          Se sim, fique tranquilo!
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, x: 80 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
            },
          }}
          viewport={{ once: true }}
          className="flex-1 text-gray-400"
        >
          Isso acontece por que a maioria dos tatuadores não sabe usar o
          Instagram de forma estratégica. No meu curso você aprende desde{' '}
          <i className="text-primary font-playfair font-medium">
            organização do seu perfil a como gerar urgência
          </i>{' '}
          para fechar uma tatuagem com o <strong>preço que você merece</strong>.
        </motion.p>
      </div>

      <div className="bg-primary/40 my-8 h-[0.5px] w-full mask-x-from-90%" />
    </div>
  );
}
