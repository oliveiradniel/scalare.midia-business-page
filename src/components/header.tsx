import { motion } from 'motion/react';

import { navOptions } from '../data/nav-options';

import bannerImage from '../assets/images/banner.png';
import logoImage from '../assets/images/logo.png';

import { Select } from './select';

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -80 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
        },
      }}
      className="fixed z-20 w-full p-4"
    >
      <div className="border-primary/12 bg-background/40 mx-auto flex h-20 max-w-350 items-center justify-between gap-4 rounded-full border p-4 backdrop-blur-2xl">
        <div className="flex items-center gap-4 sm:gap-8">
          <img
            src={bannerImage}
            alt="Logo da Scalare Mídia"
            className="hidden h-12 w-auto sm:flex"
          />

          <img
            src={logoImage}
            alt="Logo da Scalare Mídia"
            className="h-12 w-auto sm:hidden"
          />

          <Select />

          <nav aria-label="Menu principal" className="hidden md:flex">
            <ul className="flex items-center gap-4">
              {navOptions.map((option) => (
                <li key={option.id} className="text-center">
                  <a
                    href={option.href}
                    className="hover:text-primary text-white transition-all ease-linear"
                  >
                    {option.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <motion.a
          href="#offer"
          whileHover={{
            scale: 1.06,
          }}
          type="button"
          className="bg-primary relative cursor-pointer overflow-hidden rounded-full p-2 px-3 text-center text-sm font-medium sm:text-base"
        >
          <motion.span
            className="absolute inset-0 blur-sm"
            initial={{ x: '-80%' }}
            animate={{ x: '80%' }}
            transition={{
              duration: 2,
              ease: 'linear',
              repeat: Infinity,
              repeatDelay: 3,
            }}
            style={{
              background:
                'linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.6), transparent 100%)',
            }}
          />
          Comprar agora
        </motion.a>
      </div>
    </motion.header>
  );
}
