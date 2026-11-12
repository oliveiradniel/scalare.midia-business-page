import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';

import { testimonials } from '#/content/site';
import { Img } from '#/components/img';
import { Reveal } from '#/components/reveal';
import { Accent, Container, SectionHeading, sectionSpacing } from '#/components/ui';
import { cn } from '#/lib/cn';
import type { ImageName } from '#/lib/images';

const AUTOPLAY_MS = 4000;
const GAP = 20;
const SLIDE_SIZES =
  '(min-width: 1152px) 262px, (min-width: 1024px) calc(25vw - 27px), (min-width: 768px) calc(33vw - 30px), (min-width: 640px) calc(50vw - 34px), calc(85vw - 14px)';

function useCarousel(count: number) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const [pages, setPages] = useState(count);
  const [paused, setPaused] = useState(false);
  const hold = useRef({ hover: false, focus: false, drag: false });

  const step = useCallback(() => {
    const track = trackRef.current;
    const slide = track?.firstElementChild as HTMLElement | null;
    return slide ? slide.offsetWidth + GAP : 1;
  }, []);

  const goTo = useCallback(
    (index: number) => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      trackRef.current?.scrollTo({
        left: index * step(),
        behavior: reduce ? 'auto' : 'smooth',
      });
    },
    [step],
  );

  // Páginas (bullets) = slides - slides visíveis + 1, como no Swiper.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const measure = () => {
      const perView = Math.max(1, Math.round((track.clientWidth + GAP) / step()));
      setPages(count - perView + 1);
      setActive(Math.round(track.scrollLeft / step()));
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    return () => observer.disconnect();
  }, [count, step]);

  const onScroll = () => {
    const track = trackRef.current;
    if (track) setActive(Math.round(track.scrollLeft / step()));
  };

  // Autoplay: pausa no hover, no foco, no arrasto, com a aba oculta e com
  // prefers-reduced-motion.
  useEffect(() => {
    if (paused) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => {
      const { hover, focus, drag } = hold.current;
      if (hover || focus || drag || document.hidden) return;
      const track = trackRef.current;
      if (!track) return;
      const current = Math.round(track.scrollLeft / step());
      goTo(current + 1 >= pages ? 0 : current + 1);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, pages, goTo, step]);

  // Arrastar com o mouse (toque e trackpad já rolam nativamente).
  const drag = useRef<{ x: number; left: number } | null>(null);
  const dragHandlers = {
    onPointerDown: (event: React.PointerEvent<HTMLUListElement>) => {
      if (event.pointerType !== 'mouse' || event.button !== 0) return;
      const track = event.currentTarget;
      drag.current = { x: event.clientX, left: track.scrollLeft };
      hold.current.drag = true;
      track.setPointerCapture(event.pointerId);
      track.style.scrollSnapType = 'none';
      track.style.scrollBehavior = 'auto';
    },
    onPointerMove: (event: React.PointerEvent<HTMLUListElement>) => {
      if (!drag.current) return;
      event.currentTarget.scrollLeft =
        drag.current.left - (event.clientX - drag.current.x);
    },
    onPointerUp: (event: React.PointerEvent<HTMLUListElement>) => {
      if (!drag.current) return;
      const track = event.currentTarget;
      const moved = drag.current.x - event.clientX;
      const from = Math.round(drag.current.left / step());
      drag.current = null;
      hold.current.drag = false;
      const target = Math.abs(moved) > 40 ? from + Math.sign(moved) : from;
      goTo(Math.min(Math.max(target, 0), pages - 1));
      setTimeout(() => {
        track.style.scrollSnapType = '';
        track.style.scrollBehavior = '';
      }, 400);
    },
  };

  return {
    trackRef,
    active: Math.min(active, pages - 1),
    pages,
    paused,
    togglePaused: () => setPaused((value) => !value),
    goTo,
    trackProps: { onScroll, ...dragHandlers },
    regionProps: {
      onMouseEnter: () => (hold.current.hover = true),
      onMouseLeave: () => (hold.current.hover = false),
      onFocus: () => (hold.current.focus = true),
      onBlur: (event: React.FocusEvent<HTMLDivElement>) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          hold.current.focus = false;
        }
      },
    },
  };
}

export function Testimonials() {
  const {
    trackRef,
    active,
    pages,
    paused,
    togglePaused,
    goTo,
    trackProps,
    regionProps,
  } = useCarousel(testimonials.length);

  const arrowClass =
    'hover:border-primary hover:text-primary flex size-11 cursor-pointer items-center justify-center rounded-full border border-white/15 text-white transition-colors disabled:pointer-events-none disabled:opacity-30';

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className={cn('relative isolate scroll-mt-24', sectionSpacing)}
    >
      <Container>
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionHeading
              id="testimonials-title"
              align="start"
              eyebrow="Resultados reais"
              title={
                <>
                  Quem compra, <Accent>aprova</Accent>:
                </>
              }
              subtitle="Prints de conversas com tatuadores que aplicaram o método."
              className="items-center text-center md:items-start md:text-start"
            />
          </Reveal>

          <div className="hidden gap-2 md:flex">
            <button
              type="button"
              aria-label="Depoimento anterior"
              disabled={active === 0}
              onClick={() => goTo(active - 1)}
              className={arrowClass}
            >
              <ArrowLeftIcon aria-hidden="true" className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Próximo depoimento"
              disabled={active >= pages - 1}
              onClick={() => goTo(active + 1)}
              className={arrowClass}
            >
              <ArrowRightIcon aria-hidden="true" className="size-5" />
            </button>
          </div>
        </div>

        <Reveal variant="fade" delay={0.2}>
          <div
            role="region"
            aria-roledescription="carrossel"
            aria-label="Prints de conversas com alunos"
            className="relative mt-10 md:mt-12"
            {...regionProps}
          >
            <button
              type="button"
              onClick={togglePaused}
              className="bg-background sr-only z-20 rounded-full px-3 py-1 text-sm text-white focus-visible:not-sr-only focus-visible:absolute focus-visible:top-2 focus-visible:left-2"
            >
              {paused ? 'Retomar rotação automática' : 'Pausar rotação automática'}
            </button>

            <ul
              ref={trackRef}
              {...trackProps}
              tabIndex={0}
              aria-label="Depoimentos"
              className="flex cursor-grab snap-x snap-mandatory gap-5 overflow-x-auto rounded-3xl [scrollbar-width:none] active:cursor-grabbing [&::-webkit-scrollbar]:hidden"
            >
              {testimonials.map((item, index) => (
                <li
                  key={item.image}
                  aria-roledescription="slide"
                  aria-label={`${index + 1} de ${testimonials.length}`}
                  className="ring-primary/20 shrink-0 basis-[85%] snap-center overflow-hidden rounded-3xl bg-white ring-1 select-none sm:basis-[calc((100%-20px)/2)] sm:snap-start md:basis-[calc((100%-40px)/3)] lg:basis-[calc((100%-60px)/4)]"
                >
                  <Img
                    name={item.image as ImageName}
                    sizes={SLIDE_SIZES}
                    alt={item.alt}
                    draggable={false}
                    className="h-auto w-full"
                  />
                </li>
              ))}
            </ul>

            <div className="mt-6 flex justify-center gap-1">
              {Array.from({ length: pages }, (_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Ir para o depoimento ${index + 1}`}
                  aria-current={index === active ? 'true' : undefined}
                  onClick={() => goTo(index)}
                  className="group flex h-6 cursor-pointer items-center justify-center px-0.5"
                >
                  <span
                    className={cn(
                      'h-2 rounded-full transition-all duration-300',
                      index === active
                        ? 'bg-primary w-7'
                        : 'w-2 bg-white/25 group-hover:bg-white/50',
                    )}
                  />
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
