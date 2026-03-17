import { motion } from 'motion/react';

import tattooArtistImage from '../assets/images/tattoo-artist.png';
import linesImage from '../assets/images/lines.svg';

import { whatsappMessage } from '../utils/whatsapp-message';

export function HeroSection() {
  const whatsappText = whatsappMessage(
    'Olá! Sou tatuador e vi a página do Método Inktensity. Pode me explicar melhor como funciona?',
  );

  return (
    <div
      id="home"
      className="relative flex min-h-dvh w-full flex-col items-center justify-center gap-12 px-4 pt-28 xl:flex-row"
    >
      <div className="bg-primary/4 absolute -top-20 -left-40 hidden h-160 w-160 rounded-full blur-3xl sm:flex" />

      <div className="relative z-10 flex max-w-200 flex-col items-center justify-center xl:items-start">
        <div className="mt-4 mb-12 xl:mt-0">
          <span className="from-primary/20 rounded-full border border-white/10 bg-linear-to-r to-white/20 px-4 py-3 text-base font-medium text-white">
            Este pode ser o passo que te falta
          </span>
        </div>

        <h1 className="mb-8 text-center text-4xl font-medium text-white sm:text-5xl xl:text-start">
          É um bom tatuador?{' '}
          <i className="text-primary font-playfair">
            Sabe que tem as habilidades
          </i>
          , mas ainda te faltam clientes pra exercer isso?
        </h1>

        <p className="text-center text-xl text-gray-400 xl:text-start">
          Saiba como tatuadores estão lotando a agenda usando Instagram e
          anúncios simples. Mesmo com poucos seguidores e sem depender apenas de
          indicações.
        </p>

        <ul className="mt-4 list-inside list-disc text-gray-400">
          <li>
            Aprenda a{' '}
            <i className="text-primary font-medium">atrair clientes</i> todos os
            dias
          </li>
          <li>
            Gere{' '}
            <i className="text-primary font-medium">pedidos de orçamento</i> no
            Direct e WhatsApp
          </li>
          <li>Mesmo que você não entenda nada de marketing</li>
        </ul>

        <div className="mt-16 flex w-full flex-col gap-2 sm:flex-row sm:justify-center xl:justify-start">
          <motion.a
            href="#offer"
            initial="initial"
            whileHover="hover"
            whileTap={{ scale: 0.97 }}
            variants={{
              hover: { scale: 1.04 },
            }}
            className="bg-primary relative flex w-full cursor-pointer flex-col items-center justify-center gap-1 overflow-hidden rounded-full px-6 py-3 text-lg font-medium sm:w-auto sm:flex-row sm:text-xl"
          >
            Quero aprender o método{' '}
            <strong className="uppercase">inktensity</strong>
            <motion.span
              variants={{
                initial: { x: '-100%' },
                hover: {
                  x: '80%',
                  transition: {
                    duration: 0.6,
                    ease: 'linear',
                  },
                },
              }}
              className="absolute inset-0 blur-sm"
              style={{
                background:
                  'linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.6), transparent 100%)',
              }}
            />
          </motion.a>

          <motion.a
            href={whatsappText}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.97 }}
            whileHover={{
              scale: 1.04,
            }}
            type="button"
            className="w-full cursor-pointer rounded-full border border-white/40 py-3 text-center text-lg font-light text-white/80 sm:max-w-40"
          >
            Fale comigo
          </motion.a>
        </div>
      </div>

      <div className="flex items-center">
        <div className="relative">
          <img
            aria-hidden="true"
            src={linesImage}
            alt=""
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mask-b-from-50%"
          />

          <img
            aria-hidden="true"
            src={tattooArtistImage}
            alt=""
            className="w-90 mask-x-from-90% mask-b-from-80% sm:w-120 xl:w-160"
          />
        </div>
      </div>
    </div>
  );
}
