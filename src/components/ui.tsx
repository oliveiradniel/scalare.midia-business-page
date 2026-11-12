import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { ArrowUpRightIcon, LockIcon, ShieldCheckIcon, ZapIcon } from 'lucide-react';

import { course, marqueeItems } from '#/content/site';
import { cn } from '#/lib/cn';

// ---------------------------------------------------------------------------
// Links
// ---------------------------------------------------------------------------

/** Props para links externos: nova aba + rel seguro. */
export function externalProps(href: string, { me = false } = {}) {
  if (!href.startsWith('http')) return {};
  return {
    target: '_blank',
    rel: me ? 'me noopener noreferrer' : 'noopener noreferrer',
  } as const;
}

function NewTabHint() {
  return <span className="sr-only"> (abre em nova aba)</span>;
}

type LinkProps = ComponentPropsWithoutRef<'a'> & { href: string; me?: boolean };

/** <a> que aplica nova aba + aviso automaticamente quando o href é externo. */
export function SmartLink({ href, me, children, ...props }: LinkProps) {
  const external = href.startsWith('http');
  return (
    <a href={href} {...externalProps(href, { me })} {...props}>
      {children}
      {external && <NewTabHint />}
    </a>
  );
}

// ---------------------------------------------------------------------------
// Layout
// ---------------------------------------------------------------------------

/**
 * Largura e respiro lateral padrão das seções: mesma largura da pílula do
 * header (max-w-350 dentro de p-4).
 */
export const containerClass = 'mx-auto w-full max-w-[calc(87.5rem+2rem)] px-4';

export function Container({
  className,
  ...props
}: ComponentPropsWithoutRef<'div'>) {
  return <div className={cn(containerClass, className)} {...props} />;
}

/** Espaçamento vertical padrão entre seções. */
export const sectionSpacing = 'py-20 md:py-28';

/** Grade fina de fundo (estilo blueprint), com fade nas bordas. */
export function GridBackdrop({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgb(236_254_103/0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgb(236_254_103/0.05)_1px,transparent_1px)] mask-radial-from-0% mask-radial-to-70% bg-[size:56px_56px]',
        className,
      )}
    />
  );
}

/** Brilho difuso lime. */
export function Glow({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'bg-primary/10 pointer-events-none absolute size-[36rem] rounded-full blur-[120px]',
        className,
      )}
    />
  );
}

/** Palavra gigante de fundo, cortada pela seção seguinte. */
export function BigWord({ children, className }: { children: string; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'from-primary/30 to-primary/0 pointer-events-none -mb-[0.32em] overflow-hidden bg-linear-to-b bg-clip-text text-center text-[clamp(4rem,17vw,15rem)] leading-none font-bold tracking-[-0.06em] whitespace-nowrap text-transparent uppercase select-none',
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Faixa inclinada com texto correndo. */
export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <div aria-hidden="true" className="relative z-10 -rotate-2 py-6">
      <div className="bg-primary text-ink flex overflow-hidden py-3 shadow-[0_0_60px_-10px_var(--color-primary)]">
        <div className="animate-marquee flex shrink-0 gap-8 pr-8 hover:[animation-play-state:paused]">
          {[...items, ...items].map((item, index) => (
            <span
              key={index}
              className="flex shrink-0 items-center gap-8 text-sm font-bold tracking-[0.18em] whitespace-nowrap uppercase md:text-base"
            >
              {item}
              <span className="text-lg">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Tipografia
// ---------------------------------------------------------------------------

type Tone = 'dark' | 'light';

/** Etiqueta acima dos títulos. */
export function Eyebrow({
  children,
  tone = 'dark',
  className,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <p
      className={cn(
        'inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-bold tracking-[0.14em] uppercase',
        tone === 'dark'
          ? 'border-primary/25 bg-primary/5 text-primary'
          : 'border-ink/15 bg-ink/5 text-ink',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'size-1.5 rounded-full',
          tone === 'dark' ? 'bg-primary shadow-[0_0_8px_var(--color-primary)]' : 'bg-ink',
        )}
      />
      {children}
    </p>
  );
}

/** Palavra de destaque: serif itálico lime no escuro, marca-texto no claro. */
export function Accent({ children, tone = 'dark' }: { children: ReactNode; tone?: Tone }) {
  return (
    <i
      className={cn(
        'font-serif',
        tone === 'dark'
          ? 'text-primary'
          : 'bg-[linear-gradient(transparent_58%,var(--color-primary)_58%,var(--color-primary)_92%,transparent_92%)] px-1',
      )}
    >
      {children}
    </i>
  );
}

export const titleClass =
  'text-3xl leading-[1.1] font-medium tracking-tight text-balance sm:text-4xl lg:text-5xl';

/** Bloco padrão: etiqueta + título + subtítulo. */
export function SectionHeading({
  id,
  eyebrow,
  title,
  subtitle,
  tone = 'dark',
  align = 'center',
  className,
  titleProps,
}: {
  id: string;
  eyebrow: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  tone?: Tone;
  align?: 'center' | 'start';
  className?: string;
  titleProps?: ComponentPropsWithoutRef<'h2'>;
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'mx-auto max-w-3xl items-center text-center' : 'items-start',
        className,
      )}
    >
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2
        id={id}
        {...titleProps}
        className={cn(titleClass, tone === 'dark' ? 'text-white' : 'text-ink')}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'max-w-2xl text-base text-pretty md:text-lg',
            tone === 'dark' ? 'text-gray-400' : 'text-ink/70',
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// CTAs
// ---------------------------------------------------------------------------

/** Faixa de brilho que atravessa o botão (loop ou no hover via group). */
export function Shimmer({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.6),transparent_100%)] blur-sm',
        className,
      )}
    />
  );
}

/** Botão principal: pílula lime com círculo de seta (padrão das referências). */
export function CtaLink({
  href,
  children,
  className,
  variant = 'primary',
}: {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'outline' | 'dark';
}) {
  return (
    <SmartLink
      href={href}
      className={cn(
        'group relative inline-flex items-center justify-between gap-4 overflow-hidden rounded-full py-2 pr-2 pl-6 text-base font-bold transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] sm:text-lg',
        variant === 'primary' &&
          'bg-primary text-ink shadow-[0_10px_40px_-12px_var(--color-primary)]',
        variant === 'dark' && 'bg-ink text-primary',
        variant === 'outline' &&
          'border border-white/25 py-3 pr-6 font-medium text-white/85 hover:border-white/50',
        className,
      )}
    >
      {variant !== 'outline' && (
        <Shimmer className="-translate-x-full transition-transform duration-600 ease-linear group-hover:translate-x-[80%]" />
      )}
      <span className="relative">{children}</span>
      {variant !== 'outline' && (
        <span
          aria-hidden="true"
          className={cn(
            'relative flex size-10 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-45',
            variant === 'primary' ? 'bg-ink text-primary' : 'bg-primary text-ink',
          )}
        >
          <ArrowUpRightIcon className="size-5" />
        </span>
      )}
    </SmartLink>
  );
}

/** Microcopy de confiança embaixo dos CTAs. */
export function TrustLine({ tone = 'dark', className }: { tone?: Tone; className?: string }) {
  const items = [
    { icon: LockIcon, label: 'Compra segura' },
    { icon: ZapIcon, label: 'Acesso imediato' },
    { icon: ShieldCheckIcon, label: `${course.guaranteeDays} dias de garantia` },
  ];
  return (
    <ul
      className={cn(
        'flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs sm:text-sm',
        tone === 'dark' ? 'text-gray-400' : 'text-ink/70',
        className,
      )}
    >
      {items.map(({ icon: Icon, label }) => (
        <li key={label} className="flex items-center gap-1.5">
          <Icon
            aria-hidden="true"
            className={cn('size-4', tone === 'dark' ? 'text-primary' : 'text-ink')}
          />
          {label}
        </li>
      ))}
    </ul>
  );
}

/** CTA + microcopy, centralizado no fim das seções. */
export function SectionCta({
  href,
  children,
  tone = 'dark',
  className,
}: {
  href: string;
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <div className={cn('flex flex-col items-center gap-4', className)}>
      <CtaLink href={href} variant={tone === 'dark' ? 'primary' : 'dark'}>
        {children}
      </CtaLink>
      <TrustLine tone={tone} />
    </div>
  );
}
