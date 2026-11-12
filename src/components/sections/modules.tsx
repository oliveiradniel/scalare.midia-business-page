import { CheckIcon, GiftIcon } from 'lucide-react';

import { bonuses, courseStats, modules } from '#/content/site';
import { ModuleArt } from '#/components/module-art';
import { Reveal } from '#/components/reveal';
import {
  Accent,
  Container,
  Glow,
  GridBackdrop,
  SectionCta,
  SectionHeading,
  sectionSpacing,
} from '#/components/ui';
import { cn } from '#/lib/cn';

type Module = (typeof modules)[number];

function ArtFrame({ module, className }: { module: Module; className?: string }) {
  return (
    <div
      className={cn(
        'relative isolate flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_30%,rgb(236_254_103/0.16),transparent_65%)] p-6',
        className,
      )}
    >
      <GridBackdrop className="-z-10" />
      <ModuleArt name={module.illustration} className="max-w-80" />
    </div>
  );
}

function LessonList({ lessons }: { lessons: Module['lessons'] }) {
  return (
    <ol className="divide-y divide-white/5">
      {lessons.map((lesson, index) => (
        <li key={lesson.title} className="flex items-baseline gap-3 py-2.5 text-sm text-gray-300">
          <span aria-hidden="true" className="text-primary/70 w-6 shrink-0 font-bold tabular-nums">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span>
            {lesson.title}
            {lesson.bonus && (
              <span className="bg-primary/15 text-primary ml-2 rounded-full px-2 py-0.5 text-[11px] font-bold tracking-wide whitespace-nowrap uppercase">
                Aula bônus
              </span>
            )}
          </span>
        </li>
      ))}
    </ol>
  );
}

function ModuleLabel({ module }: { module: Module }) {
  return (
    <div className="flex items-center gap-3">
      <span className="bg-primary text-ink rounded-full px-3 py-1 text-xs font-bold tracking-wide uppercase">
        Módulo {module.number}
      </span>
      <span className="text-xs text-gray-400">
        {module.lessons.length} {module.lessons.length === 1 ? 'aula' : 'aulas'}
      </span>
    </div>
  );
}

const stats = [
  { value: String(courseStats.modules), label: 'módulos' },
  { value: String(courseStats.lessons), label: 'aulas práticas' },
  { value: String(courseStats.bonuses), label: 'bônus' },
  { value: '∞', label: 'acesso vitalício' },
];

function CourseStats() {
  return (
    <dl className="mx-auto mt-10 grid w-full max-w-2xl grid-cols-2 gap-y-6 rounded-2xl border border-white/10 bg-white/[0.03] py-5 sm:grid-cols-4 sm:divide-x sm:divide-white/10">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col-reverse items-center gap-0.5 px-2 text-center">
          <dt className="text-xs leading-tight text-gray-400">{stat.label}</dt>
          <dd className="text-primary text-3xl font-bold">{stat.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Modules() {
  const [intro, ...rest] = modules;

  return (
    <section
      id="modules"
      aria-labelledby="modules-title"
      className={cn('relative isolate scroll-mt-24', sectionSpacing)}
    >
      <Glow className="top-1/3 -left-60 -z-10" />
      <Glow className="right-[-15rem] bottom-0 -z-10" />

      <Container>
        <Reveal>
          <SectionHeading
            id="modules-title"
            eyebrow="Conteúdo do curso"
            title={
              <>
                O que você vai <Accent>aprender</Accent>?
              </>
            }
            subtitle={`${courseStats.modules} módulos com ${courseStats.lessons} aulas diretas ao ponto, do perfil ao fechamento, e mais ${courseStats.bonuses} bônus para cobrar mais e manter os resultados.`}
          />
          <CourseStats />
        </Reveal>

        <div className="mt-12 grid gap-5 md:mt-16 lg:grid-cols-3">
          <Reveal
            as="article"
            aria-labelledby={`module-${intro.number}`}
            className="bg-surface grid overflow-hidden rounded-3xl border border-white/10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:col-span-3"
          >
            <ArtFrame module={intro} className="border-b border-white/10 md:border-r md:border-b-0" />
            <div className="flex flex-col justify-center gap-4 p-6 md:p-10">
              <ModuleLabel module={intro} />
              <h3 id={`module-${intro.number}`} className="font-serif text-2xl text-white italic md:text-3xl">
                {intro.title}
              </h3>
              <p className="text-gray-400">{intro.headline}</p>
              <LessonList lessons={intro.lessons} />
            </div>
          </Reveal>

          {rest.map((module, index) => (
            <Reveal
              as="article"
              key={module.number}
              aria-labelledby={`module-${module.number}`}
              delay={index * 0.12}
              className="bg-surface hover:border-primary/30 flex flex-col overflow-hidden rounded-3xl border border-white/10 transition-colors"
            >
              <ArtFrame module={module} className="border-b border-white/10" />
              <div className="flex flex-1 flex-col gap-3 p-6">
                <ModuleLabel module={module} />
                <h3 id={`module-${module.number}`} className="font-serif text-2xl text-white italic">
                  {module.title}
                </h3>
                <p className="text-gray-400">{module.headline}</p>
                <LessonList lessons={module.lessons} />
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 md:mt-28">
          <Reveal>
            <SectionHeading
              id="bonus-title"
              eyebrow="Bônus exclusivos"
              title={
                <>
                  Está achando que acabou? Temos alguns <Accent>bônus</Accent>
                </>
              }
            />
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {bonuses.map((bonus, index) => (
              <Reveal
                as="article"
                key={bonus.number}
                aria-labelledby={`bonus-${bonus.number}`}
                delay={index * 0.12}
                className="bg-paper text-ink flex flex-col overflow-hidden rounded-3xl"
              >
                <div className="bg-ink relative isolate m-2 flex items-center justify-center overflow-hidden rounded-[1.25rem] bg-[radial-gradient(circle_at_50%_30%,rgb(236_254_103/0.18),transparent_65%)] p-6">
                  <GridBackdrop className="-z-10" />
                  <ModuleArt name={bonus.illustration} className="max-w-72" />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6 md:p-8">
                  <span className="bg-ink text-primary inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold tracking-wide uppercase">
                    <GiftIcon aria-hidden="true" className="size-3.5" />
                    Bônus {bonus.number}
                  </span>
                  <h3 id={`bonus-${bonus.number}`} className="text-2xl leading-tight font-medium tracking-tight">
                    {bonus.title}
                  </h3>
                  <ul className="mt-2 flex flex-col gap-2.5">
                    {bonus.lessons.map((lesson) => (
                      <li key={lesson} className="text-ink/80 flex items-start gap-3">
                        <span className="bg-primary flex size-5 shrink-0 items-center justify-center rounded-full">
                          <CheckIcon aria-hidden="true" className="size-3" strokeWidth={3} />
                        </span>
                        {lesson}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <SectionCta href="#offer" className="mt-12 md:mt-16">
          Quero o método completo
        </SectionCta>
      </Container>
    </section>
  );
}
