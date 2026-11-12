import {
  useEffect,
  type ComponentPropsWithoutRef,
  type ElementType,
} from 'react';

import { cn } from '#/lib/cn';

/** [estado inicial, estado quando entra na tela] */
const variants = {
  fade: ['opacity-0', 'data-inview:opacity-100'],
  up: [
    'opacity-0 translate-y-20',
    'data-inview:opacity-100 data-inview:translate-y-0',
  ],
  'from-left': [
    'opacity-0 -translate-x-20',
    'data-inview:opacity-100 data-inview:translate-x-0',
  ],
  'from-right': [
    'opacity-0 translate-x-20',
    'data-inview:opacity-100 data-inview:translate-x-0',
  ],
  blur: ['blur-[4px]', 'data-inview:blur-none'],
  'blur-fade': [
    'opacity-0 blur-[4px]',
    'data-inview:opacity-100 data-inview:blur-none',
  ],
  'scale-down': [
    'opacity-0 scale-120',
    'data-inview:opacity-100 data-inview:scale-100',
  ],
  zoom: ['opacity-0 scale-140', 'data-inview:opacity-100 data-inview:scale-100'],
  /** Só marca data-inview (para animações por keyframe, ex.: data-inview:animate-*). */
  none: ['', ''],
} as const;

type RevealProps<T extends ElementType> = {
  as?: T;
  variant?: keyof typeof variants;
  /** Segundos. */
  delay?: number;
  /** Segundos. */
  duration?: number;
  /** Fração visível (0–1) necessária para disparar. */
  amount?: number;
} & Omit<ComponentPropsWithoutRef<T>, 'as'>;

/**
 * Anima o elemento quando ele entra na tela (uma vez). O estado inicial vem
 * no HTML do servidor; o useRevealObserver marca data-inview no cliente.
 */
export function Reveal<T extends ElementType = 'div'>({
  as,
  variant = 'up',
  delay,
  duration = 1,
  amount,
  className,
  style,
  ...props
}: RevealProps<T>) {
  const Tag: ElementType = as ?? 'div';
  const [initial, inview] = variants[variant];

  return (
    <Tag
      data-reveal=""
      data-amount={amount}
      className={cn(
        'ease-reveal transition-[opacity,translate,scale,filter]',
        initial,
        inview,
        className,
      )}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: delay ? `${delay}s` : undefined,
        ...style,
      }}
      {...props}
    />
  );
}

/** Observa todos os [data-reveal] da página. Chamar uma vez na rota. */
export function useRevealObserver() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(
      '[data-reveal]:not([data-inview])',
    );

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => (el.dataset.inview = ''));
      return;
    }

    const observers = new Map<number, IntersectionObserver>();
    const observerFor = (amount: number) => {
      let observer = observers.get(amount);
      if (!observer) {
        observer = new IntersectionObserver(
          (entries, obs) => {
            for (const entry of entries) {
              if (!entry.isIntersecting) continue;
              (entry.target as HTMLElement).dataset.inview = '';
              obs.unobserve(entry.target);
            }
          },
          { threshold: amount },
        );
        observers.set(amount, observer);
      }
      return observer;
    };

    elements.forEach((el) => observerFor(Number(el.dataset.amount ?? 0)).observe(el));

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);
}
