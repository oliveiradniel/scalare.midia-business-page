import { useEffect, useState } from 'react';
import { XIcon } from 'lucide-react';

import whatsappIcon from '#/assets/icons/whatsapp.svg';
import { messages, whatsapp } from '#/content/site';
import { externalProps } from '#/components/ui';
import { cn } from '#/lib/cn';

type BubbleState = 'hidden' | 'shown' | 'dismissed';

export function WhatsAppFloat() {
  const [bubble, setBubble] = useState<BubbleState>('hidden');
  const href = whatsapp(messages.floating);

  useEffect(() => {
    const timeout = setTimeout(
      () => setBubble((state) => (state === 'hidden' ? 'shown' : state)),
      1500,
    );
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="fixed right-12 bottom-10 z-20">
      <div className="relative">
        <div
          className={cn(
            'absolute right-0 bottom-12 w-60 rounded-lg bg-white p-2 transition-all',
            bubble === 'shown'
              ? 'visible translate-0 scale-100 opacity-100 duration-600'
              : 'invisible scale-90 opacity-0 duration-300',
            bubble === 'hidden' && 'translate-x-10 translate-y-10',
            bubble === 'dismissed' && 'translate-y-10',
          )}
        >
          <p>
            Olá! Precisa de ajuda? Clique no ícone do WhatsApp e converse
            diretamente comigo.
          </p>

          <button
            type="button"
            aria-label="Fechar mensagem"
            onClick={() => setBubble('dismissed')}
            className="absolute top-0 right-0 flex size-6 translate-x-1/3 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-black bg-white"
          >
            <XIcon className="size-3" aria-hidden="true" />
          </button>
        </div>

        <a
          href={href}
          {...externalProps(href)}
          aria-label="Fale comigo pelo WhatsApp (abre em nova aba)"
        >
          <img
            src={whatsappIcon}
            alt=""
            aria-hidden="true"
            className="hover:animate-wiggle size-10"
          />
        </a>
      </div>
    </div>
  );
}
