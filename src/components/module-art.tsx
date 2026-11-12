import type { ReactNode } from 'react';

import type { Illustration } from '#/content/site';
import { cn } from '#/lib/cn';

// Ilustrações dos módulos/bônus. Lime = currentColor (text-primary);
// tinta e superfícies escuras fixas para casar com os cards.
const INK = '#0a0d06';
const CARD = '#111811';
const SCREEN = '#0d140d';

function Lines({
  x,
  y,
  widths,
  gap = 9,
  fill = '#fff',
  opacity = [0.55, 0.3],
}: {
  x: number;
  y: number;
  widths: number[];
  gap?: number;
  fill?: string;
  opacity?: number[];
}) {
  return (
    <>
      {widths.map((w, i) => (
        <rect
          key={i}
          x={x}
          y={y + i * gap}
          width={w}
          height={5}
          rx={2.5}
          fill={fill}
          fillOpacity={opacity[Math.min(i, opacity.length - 1)]}
        />
      ))}
    </>
  );
}

function Check({ x, y, color = INK }: { x: number; y: number; color?: string }) {
  return (
    <path
      d={`M${x - 3.5} ${y} l2.5 2.5 5-5`}
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
}

/** Módulo 00: player de vídeo + checklist de próximos passos. */
function Intro() {
  return (
    <>
      <rect x="36" y="26" width="184" height="132" rx="14" fill={SCREEN} stroke="currentColor" strokeOpacity=".35" />
      <circle cx="52" cy="40" r="3" fill="currentColor" fillOpacity=".6" />
      <circle cx="62" cy="40" r="3" fill="#fff" fillOpacity=".2" />
      <circle cx="72" cy="40" r="3" fill="#fff" fillOpacity=".2" />
      <rect x="48" y="52" width="160" height="76" rx="8" fill="currentColor" fillOpacity=".06" />
      <circle cx="128" cy="90" r="30" fill="none" stroke="currentColor" strokeOpacity=".25" />
      <circle cx="128" cy="90" r="20" fill="currentColor" />
      <path d="M122 80 l16 10 -16 10z" fill={INK} />
      <rect x="48" y="140" width="160" height="4" rx="2" fill="#fff" fillOpacity=".12" />
      <rect x="48" y="140" width="64" height="4" rx="2" fill="currentColor" />
      <circle cx="112" cy="142" r="5" fill="currentColor" />

      <rect x="198" y="72" width="96" height="94" rx="12" fill={CARD} stroke="currentColor" strokeOpacity=".4" />
      {[90, 114].map((y) => (
        <g key={y}>
          <circle cx="214" cy={y} r="7" fill="currentColor" />
          <Check x={214} y={y} />
        </g>
      ))}
      <circle cx="214" cy="138" r="6.5" fill="none" stroke="currentColor" strokeOpacity=".6" />
      <Lines x={228} y={87.5} widths={[52, 40, 58]} gap={24} opacity={[0.6, 0.6, 0.3]} />
    </>
  );
}

/** Módulo 01: perfil do Instagram (stories, bio, destaques e feed) + autoridade local. */
function Positioning() {
  const cells = [0, 1, 2].flatMap((row) => [0, 1, 2].map((col) => ({ row, col })));
  const lime = new Set(['0-0', '1-2', '2-1']);
  return (
    <>
      <rect x="110" y="12" width="100" height="180" rx="18" fill={SCREEN} stroke="currentColor" strokeOpacity=".45" />
      <rect x="145" y="19" width="30" height="5" rx="2.5" fill="#fff" fillOpacity=".15" />
      <circle cx="134" cy="46" r="10" fill="#fff" fillOpacity=".15" />
      <circle cx="134" cy="46" r="14" fill="none" stroke="currentColor" strokeWidth="2.5" />
      {[156, 172, 188].map((x) => (
        <g key={x}>
          <rect x={x} y="40" width="11" height="5" rx="2.5" fill="#fff" fillOpacity=".6" />
          <rect x={x} y="49" width="11" height="3" rx="1.5" fill="#fff" fillOpacity=".25" />
        </g>
      ))}
      <Lines x={122} y={68} widths={[72, 54]} gap={8} />
      {[130, 152, 174].map((cx, i) => (
        <circle
          key={cx}
          cx={cx}
          cy="96"
          r="7"
          fill={i === 0 ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeOpacity={i === 0 ? 1 : 0.6}
        />
      ))}
      {cells.map(({ row, col }) => {
        const key = `${row}-${col}`;
        return (
          <rect
            key={key}
            x={120 + col * 27}
            y={110 + row * 26}
            width="24"
            height="23"
            rx="3"
            fill={lime.has(key) ? 'currentColor' : '#fff'}
            fillOpacity={lime.has(key) ? 0.85 : 0.08}
          />
        );
      })}

      <rect x="22" y="56" width="92" height="30" rx="15" fill={CARD} stroke="currentColor" strokeOpacity=".4" />
      <circle cx="38" cy="71" r="8" fill="currentColor" />
      <path d="M38 67 v8 M34 71 h8" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <Lines x={52} y={65} widths={[48, 30]} gap={8} />

      <rect x="206" y="34" width="84" height="28" rx="14" fill={CARD} stroke="currentColor" strokeOpacity=".4" />
      <path
        d="M224 54 c-6-4-9-7-9-10.5 a4.5 4.5 0 0 1 9-1 a4.5 4.5 0 0 1 9 1 c0 3.5-3 6.5-9 10.5z"
        fill="currentColor"
      />
      <Lines x={240} y={44} widths={[38]} />

      <ellipse cx="258" cy="170" rx="24" ry="5" fill="currentColor" fillOpacity=".2" />
      <path
        d="M258 112 c-13 0-23 10-23 22 0 16 23 36 23 36 s23-20 23-36 c0-12-10-22-23-22z"
        fill="currentColor"
      />
      <circle cx="258" cy="133" r="8" fill={INK} />
    </>
  );
}

/** Módulo 02: anúncio patrocinado + alvo + resultados subindo. */
function Ads() {
  return (
    <>
      <rect x="30" y="18" width="152" height="166" rx="14" fill={SCREEN} stroke="currentColor" strokeOpacity=".4" />
      <circle cx="48" cy="36" r="8" fill="#fff" fillOpacity=".2" />
      <rect x="62" y="30" width="54" height="5" rx="2.5" fill="#fff" fillOpacity=".55" />
      <rect x="62" y="39" width="32" height="4" rx="2" fill="currentColor" fillOpacity=".8" />
      <rect x="40" y="54" width="132" height="78" rx="8" fill="currentColor" fillOpacity=".08" />
      <path
        d="M40 122 l34-30 22 18 18-14 58 34 v4 a8 8 0 0 1-8 8 H48 a8 8 0 0 1-8-8z"
        fill="currentColor"
        fillOpacity=".25"
      />
      <circle cx="146" cy="74" r="8" fill="currentColor" fillOpacity=".7" />
      <path
        d="M66 62 c-5 0-9 4-9 9 0 6 9 14 9 14 s9-8 9-14 c0-5-4-9-9-9z"
        fill="currentColor"
      />
      <circle cx="66" cy="71" r="3" fill={INK} />
      <rect x="40" y="144" width="132" height="28" rx="14" fill="currentColor" />
      <rect x="62" y="155" width="64" height="6" rx="3" fill={INK} fillOpacity=".75" />
      <path d="M146 158 h10 m-4-4 4 4-4 4" stroke={INK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      <circle cx="248" cy="78" r="46" fill="none" stroke="currentColor" strokeOpacity=".2" />
      <circle cx="248" cy="78" r="32" fill="none" stroke="currentColor" strokeOpacity=".4" />
      <circle cx="248" cy="78" r="18" fill="none" stroke="currentColor" strokeOpacity=".8" strokeWidth="2" />
      <circle cx="248" cy="78" r="6" fill="currentColor" />
      <path d="M300 26 L252 74" stroke="#fff" strokeOpacity=".9" strokeWidth="3" strokeLinecap="round" />
      <path d="M300 26 l-12 2 M300 26 l-2 12" stroke="#fff" strokeOpacity=".9" strokeWidth="3" strokeLinecap="round" />

      {[14, 22, 30, 42, 56].map((h, i) => (
        <rect
          key={i}
          x={206 + i * 18}
          y={184 - h}
          width="12"
          height={h}
          rx="3"
          fill="currentColor"
          fillOpacity={0.25 + i * 0.18}
        />
      ))}
    </>
  );
}

/** Módulo 03: conversa no Direct/WhatsApp terminando em agendamento + preço. */
function Sales() {
  return (
    <>
      <rect x="26" y="24" width="156" height="48" rx="16" fill={CARD} stroke="#fff" strokeOpacity=".15" />
      <circle cx="48" cy="48" r="10" fill="#fff" fillOpacity=".2" />
      <Lines x={66} y={39} widths={[98, 70]} gap={11} />

      <rect x="114" y="84" width="176" height="52" rx="16" fill="currentColor" />
      <Lines x={130} y={98} widths={[120, 84]} gap={12} fill={INK} opacity={[0.75, 0.45]} />
      <path
        d="M256 124 l3.5 3.5 7-7 M264 124 l3.5 3.5 7-7"
        stroke={INK}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      <rect x="26" y="148" width="132" height="38" rx="16" fill={CARD} stroke="#fff" strokeOpacity=".15" />
      <rect x="40" y="160" width="58" height="14" rx="7" fill="currentColor" />
      <Check x={51} y={167} />
      <rect x="60" y="164.5" width="30" height="5" rx="2.5" fill={INK} fillOpacity=".7" />
      <rect x="106" y="164.5" width="38" height="5" rx="2.5" fill="#fff" fillOpacity=".3" />

      <g transform="rotate(-10 236 168)">
        <path
          d="M196 152 h50 l20 16 -20 16 h-50 a8 8 0 0 1-8-8 v-16 a8 8 0 0 1 8-8z"
          fill={CARD}
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="250" cy="168" r="4" fill="currentColor" />
        <rect x="200" y="161" width="34" height="6" rx="3" fill="currentColor" />
        <rect x="200" y="171" width="22" height="4" rx="2" fill="#fff" fillOpacity=".35" />
      </g>

      <circle cx="276" cy="42" r="18" fill="currentColor" fillOpacity=".12" stroke="currentColor" />
      <Check x={276} y={42} color="currentColor" />
    </>
  );
}

/** Bônus 1: preço subindo + referência na cidade (pin com estrela). */
function Pricing() {
  return (
    <>
      {[40, 66, 96].map((h, i) => (
        <rect
          key={i}
          x={36 + i * 34}
          y={182 - h}
          width="26"
          height={h}
          rx="6"
          fill="currentColor"
          fillOpacity={0.15 + i * 0.17}
        />
      ))}
      <path
        d="M44 124 C 76 116, 104 94, 126 62"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="2 8"
      />
      <path d="M114 62 h12 v12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

      <g transform="rotate(-12 196 54)">
        <path
          d="M146 36 a12 12 0 0 1 12-12 h58 l26 30 -26 30 h-58 a12 12 0 0 1-12-12z"
          fill="currentColor"
        />
        <circle cx="226" cy="54" r="5" fill={INK} />
        <rect x="160" y="42" width="40" height="7" rx="3.5" fill={INK} fillOpacity=".75" />
        <rect x="160" y="56" width="26" height="5" rx="2.5" fill={INK} fillOpacity=".45" />
      </g>

      <ellipse cx="262" cy="176" rx="28" ry="6" fill="currentColor" fillOpacity=".2" />
      <path
        d="M262 92 c-17 0-30 13-30 29 0 21 30 49 30 49 s30-28 30-49 c0-16-13-29-30-29z"
        fill={CARD}
        stroke="currentColor"
        strokeWidth="2"
      />
      <polygon
        points="262,109 264.7,116.3 272.5,116.6 266.4,121.4 268.5,128.9 262,124.6 255.5,128.9 257.6,121.4 251.5,116.6 259.3,116.3"
        fill="currentColor"
      />
      {[
        [300, 84],
        [222, 96],
        [292, 140],
      ].map(([x, y]) => (
        <path
          key={`${x}-${y}`}
          d={`M${x} ${y - 6} v12 M${x - 6} ${y} h12`}
          stroke="currentColor"
          strokeOpacity=".7"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ))}
    </>
  );
}

/** Bônus 2: crescimento constante (gráfico) + consistência (ciclo). */
function Growth() {
  const points: [number, number][] = [
    [40, 160],
    [80, 142],
    [120, 148],
    [160, 118],
    [200, 106],
    [240, 78],
    [280, 56],
  ];
  const line = points.map(([x, y]) => `${x} ${y}`).join(' L');
  return (
    <>
      <defs>
        <linearGradient id="module-art-growth" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="currentColor" stopOpacity=".35" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[60, 100, 140].map((y) => (
        <path key={y} d={`M40 ${y} H292`} stroke="#fff" strokeOpacity=".07" strokeDasharray="4 6" />
      ))}
      <path d="M40 20 V176 H296" fill="none" stroke="#fff" strokeOpacity=".2" />
      <path d={`M${line} V176 H40 Z`} fill="url(#module-art-growth)" />
      <path d={`M${line}`} fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      {points.slice(0, -1).map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="4" fill={INK} stroke="currentColor" strokeWidth="2" />
      ))}
      <circle cx="280" cy="56" r="14" fill="currentColor" fillOpacity=".2" />
      <circle cx="280" cy="56" r="7" fill="currentColor" />
      <path d="M280 49 V20" stroke="currentColor" strokeWidth="2" />
      <path d="M280 20 h20 l-5 6 5 6 h-20z" fill="currentColor" />

      <rect x="54" y="26" width="104" height="38" rx="12" fill={CARD} stroke="currentColor" strokeOpacity=".35" />
      <path
        d="M80 40 a9 9 0 1 0 2 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path d="M81 33 l1 7 -7 0" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <Lines x={96} y={37} widths={[50, 32]} gap={10} />
    </>
  );
}

const ART: Record<Illustration, () => ReactNode> = {
  intro: Intro,
  positioning: Positioning,
  ads: Ads,
  sales: Sales,
  pricing: Pricing,
  growth: Growth,
};

export function ModuleArt({ name, className }: { name: Illustration; className?: string }) {
  const Art = ART[name];
  return (
    <svg
      viewBox="0 0 320 200"
      aria-hidden="true"
      focusable="false"
      className={cn('text-primary h-auto w-full', className)}
    >
      <Art />
    </svg>
  );
}
