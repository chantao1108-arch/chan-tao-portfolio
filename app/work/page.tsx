import type { Metadata } from "next";
import { ProjectCard } from "@/src/components/ProjectCard";
import { SiteFooter } from "@/src/components/SiteFooter";
import { SiteHeader } from "@/src/components/SiteHeader";
import { projects } from "@/src/data/projects";

export const metadata: Metadata = {
  title: "Work — Chan Tao",
  description:
    "Selected work by Chan Tao across AI product prototypes, UX systems, workflow design, and product analytics.",
  openGraph: {
    title: "Work — Chan Tao",
    description:
      "Selected work across AI product prototypes, UX systems, workflow design, and product analytics.",
    type: "website",
    url: "https://chan-tao-portfolio.vercel.app/work",
  },
};

const workFilters = [
  "AI product prototypes",
  "UX systems",
  "workflow design",
  "product analytics",
  "interactive systems",
];

const workPrinciples = [
  [
    "01",
    "From ambiguity to structure",
    "Each project begins with a vague product problem, then becomes a clearer system, workflow, or prototype.",
  ],
  [
    "02",
    "Systems before decoration",
    "I focus on the logic underneath the interface: flows, rules, information architecture, and repeatable product processes.",
  ],
  [
    "03",
    "AI as production partner",
    "AI tools are used to accelerate research, writing, workflow design, prototyping, and iteration — not to replace authorship.",
  ],
];

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-[#f8f3ec] text-slate-950">
      <SiteHeader />

      <main className="mx-auto max-w-7xl px-6 pb-24 pt-10 lg:px-8">
        <section className="grid gap-10 rounded-[2rem] border border-slate-200 bg-white/85 p-8 shadow-sm lg:grid-cols-[minmax(0,1.1fr)_360px] lg:p-10">
          <div className="max-w-4xl space-y-6">
            <p className="text-[0.72rem] uppercase tracking-[0.35em] text-slate-500">
              Work
            </p>

            <h1 className="text-[clamp(2.8rem,5vw,4.4rem)] font-semibold leading-[1.02] tracking-tight text-slate-950">
              Selected systems, prototypes, and product-UX case studies.
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-slate-700">
              These projects connect product thinking, UX logic, workflow design, and AI systems. They are built as evolving case studies: each one documents a problem, a system, a process, and a next step.
            </p>

            <div className="flex flex-wrap gap-2 border-t border-slate-200 pt-5 text-[0.68rem] uppercase tracking-[0.26em] text-slate-500">
              {workFilters.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-white px-3 py-2 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <aside className="rounded-[1.7rem] border border-slate-200 bg-[#f8f4ee] p-6 shadow-sm">
            <p className="text-[0.68rem] uppercase tracking-[0.34em] text-slate-500">
              Case study logic
            </p>

            <div className="mt-5 space-y-4">
              {workPrinciples.map(([index, title, detail]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[0.65rem] uppercase tracking-[0.28em] text-slate-400">
                      {index}
                    </span>
                    <span className="h-px flex-1 bg-slate-200" />
                  </div>

                  <h2 className="mt-3 text-base font-semibold text-slate-950">
                    {title}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section className="mt-14 grid gap-8 xl:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}