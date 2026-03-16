import { motion } from 'motion/react';

import { navOptions } from '../data/nav-options';

import logoImage from '../assets/images/logo.png';
import { Select } from './select';

export function Header() {
  return (
    <header className="fixed z-20 w-full p-4">
      <div className="border-primary/12 bg-background/40 mx-auto flex h-20 max-w-350 items-center justify-between rounded-full border p-4 backdrop-blur-2xl">
        <div className="flex items-center gap-8">
          <img
            src={logoImage}
            alt="Logo da Scalare Mídia"
            className="size-12"
          />

          <Select />

          <nav aria-label="Menu principal" className="hidden md:flex">
            <ul className="flex items-center gap-4">
              {navOptions.map((option) => (
                <li>
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

        <motion.button
          whileHover={{
            scale: 1.06,
          }}
          type="button"
          className="bg-primary relative cursor-pointer overflow-hidden rounded-full p-2 px-3 font-medium"
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
        </motion.button>
      </div>
    </header>
  );
}
