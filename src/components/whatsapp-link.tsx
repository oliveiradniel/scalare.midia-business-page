import { useEffect, useState } from 'react';

import { AnimatePresence, motion } from 'motion/react';

import whatsAppIcon from '../assets/images/whatsapp-green.svg';

import { XIcon } from 'lucide-react';

import { whatsappMessage } from '../utils/whatsapp-message';

export function WhatsAppLink() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowMessage(true), 1500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const whatsappText = whatsappMessage(
    'Olá! Vi a página do Método Inktensity e gostaria de entender melhor como o método pode me ajudar.',
  );

  return (
    <div
      aria-label="Fale comigo pelo WhatsApp"
      className="fixed right-12 bottom-10 z-20"
    >
      <div className="relative">
        <AnimatePresence>
          {showMessage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40, x: 40 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                x: 0,
                transition: {
                  duration: 0.6,
                },
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: 40,
                x: 0,
              }}
              className="absolute right-0 bottom-12 w-60 rounded-lg bg-white p-2"
            >
              <p>
                Olá! Precisa de ajuda? Clique no ícone do WhatsApp e converse
                diretamente comigo.
              </p>

              <button
                type="button"
                onClick={() => setShowMessage(false)}
                className="absolute top-0 right-0 flex size-6 translate-x-1/3 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-black bg-white"
              >
                <XIcon className="size-3" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <a href={whatsappText} target="_blank" rel="noopener noreferrer">
          <motion.img
            whileHover={{
              rotate: [0, -10, 10, -10, 10, 0],
              scale: 1.1,
              transition: {
                duration: 0.5,
                times: [0, 0.6, 1],
              },
            }}
            aria-hidden="true"
            src={whatsAppIcon}
            alt=""
            className="size-10"
          />
        </a>
      </div>
    </div>
  );
}
