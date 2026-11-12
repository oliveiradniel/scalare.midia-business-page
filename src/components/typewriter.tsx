import { useEffect, useState } from 'react';

const TYPE_DELAY = 50;
const PAUSE = 2000;

/**
 * Digita/apaga as frases em loop, apagando só o trecho que muda.
 * O HTML do servidor já sai com a primeira frase (SEO e sem salto de layout).
 * Dê ao heading pai um aria-label fixo para o leitor de tela não ler a animação.
 */
export function Typewriter({ phrases }: { phrases: string[] }) {
  const [text, setText] = useState(phrases[0]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;
    const sleep = (ms: number) =>
      new Promise<void>((resolve) => (timer = setTimeout(resolve, ms)));

    (async () => {
      let current = phrases[0];
      let index = 0;
      while (!cancelled) {
        await sleep(PAUSE);
        index = (index + 1) % phrases.length;
        const next = phrases[index];

        let common = 0;
        while (common < current.length && current[common] === next[common]) {
          common++;
        }
        while (!cancelled && current.length > common) {
          current = current.slice(0, -1);
          setText(current);
          await sleep(TYPE_DELAY);
        }
        while (!cancelled && current.length < next.length) {
          current = next.slice(0, current.length + 1);
          setText(current);
          await sleep(TYPE_DELAY);
        }
      }
    })();

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [phrases]);

  return (
    <span className="after:animate-blink after:content-['|']">{text}</span>
  );
}
