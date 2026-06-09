import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudySection } from "@/src/components/CaseStudySection";
import { SiteFooter } from "@/src/components/SiteFooter";
import { SiteHeader } from "@/src/components/SiteHeader";
import { projects } from "@/src/data/projects";

const project = projects.find((item) => item.slug === "portfolio-system");

const systemLayers = [
  [
    "Identity",
    "Define the professional frame: AI product prototypes, UX systems, workflow design, and structured case studies.",
  ],
  [
    "Information architecture",
    "Organize scattered projects into a clear site structure with homepage, work overview, project pages, about, and contact.",
  ],
  [
    "Case-study format",
    "Use consistent sections for overview, problem, role, process, decisions, outcome, and next steps.",
  ],
  [
    "Visual system",
    "Keep the interface restrained, editorial, and flexible so the work can evolve without redesigning everything.",
  ],
] as const;

const contentDecisions = [
  "Replace generic UX analyst language with a clearer AI product and UX analyst identity.",
  "Use project cards as curated case-study entries instead of simple gallery blocks.",
  "Frame unfinished prototypes honestly as evolving systems rather than pretending every project is final.",
  "Connect landscape thinking, AI workflows, product systems, and web design through the idea of structured product experiences.",
];

const siteSections = [
  "Homepage positioning",
  "Work overview",
  "Project detail pages",
  "Case-study writing",
  "Project card system",
  "About page",
  "Resume / contact area",
  "Future visual assets",
];

const skills = [
  "Portfolio strategy",
  "Personal brand positioning",
  "Information architecture",
  "Frontend editing",
  "Case-study writing",
  "Visual direction",
  "Content hierarchy",
  "Self-directed product thinking",
];

export const metadata: Metadata = {
  title: "Portfolio System — Chan Tao",
  description: project?.heroSummary ?? "",
  openGraph: {
    title: "Portfolio System — Chan Tao",
    description: project?.heroSummary ?? "",
    type: "article",
    url: "https://chan-tao-portfolio.vercel.app/work/portfolio-system",
  },
};

export default function PortfolioSystemPage() {
  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#f8f3ec] text-slate-950">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-6 pb-24 pt-10 lg:px-8">
        <section className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-sm lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_340px]">
            <div className="space-y-6">
              <p className="text-[0.72rem] uppercase tracking-[0.35em] text-slate-500">
                {project.label}
              </p>

              <h1 className="text-[clamp(3rem,5vw,5rem)] font-semibold leading-[0.98] tracking-tight text-slate-950">
                {project.title}
              </h1>

              <p className="max-w-3xl text-xl leading-8 text-slate-700">
                {project.heroTagline}
              </p>

              <p className="max-w-3xl text-base leading-8 text-slate-700">
                {project.heroSummary}
              </p>

              <div className="flex flex-wrap gap-2 border-t border-slate-200 pt-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 bg-[#f8f4ee] px-3 py-2 text-[0.68rem] uppercase tracking-[0.22em] text-slate-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <aside className="rounded-[1.75rem] border border-slate-200 bg-[#f8f4ee] p-6 shadow-sm">
              <p className="text-[0.68rem] uppercase tracking-[0.34em] text-slate-500">
                Project snapshot
              </p>

              <div className="mt-5 space-y-5 text-sm leading-7 text-slate-700">
                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.28em] text-slate-500">
                    Role
                  </p>
                  <p className="mt-2">{project.role}</p>
                </div>

                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.28em] text-slate-500">
                    Users
                  </p>
                  <p className="mt-2">{project.targetUsers}</p>
                </div>

                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.28em] text-slate-500">
                    Tools
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700 shadow-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="grid gap-16 py-16">
          <CaseStudySection title="Overview">
            <p className="max-w-4xl text-lg leading-8 text-slate-700">
              {project.overview}
            </p>
          </CaseStudySection>

          <CaseStudySection title="Problem">
            <p className="max-w-4xl text-lg leading-8 text-slate-700">
              {project.problem}
            </p>
          </CaseStudySection>

          <CaseStudySection title="System layers">
            <div className="grid gap-4 md:grid-cols-2">
              {systemLayers.map(([title, detail], index) => (
                <div
                  key={title}
                  className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <p className="text-[0.65rem] uppercase tracking-[0.3em] text-slate-400">
                      0{index + 1}
                    </p>
                    <span className="h-px flex-1 bg-slate-200" />
                  </div>

                  <h2 className="mt-4 text-lg font-semibold text-slate-950">
                    {title}
                  </h2>

                  <p className="mt-2 leading-7 text-slate-700">{detail}</p>
                </div>
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection title="Content decisions">
            <div className="grid gap-3">
              {contentDecisions.map((decision) => (
                <div
                  key={decision}
                  className="rounded-[1.35rem] border border-slate-200 bg-white px-5 py-4 leading-7 text-slate-700 shadow-sm"
                >
                  {decision}
                </div>
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection title="Site sections">
            <div className="grid gap-3 sm:grid-cols-2">
              {siteSections.map((section) => (
                <div
                  key={section}
                  className="rounded-[1.35rem] border border-slate-200 bg-white px-5 py-4 text-slate-700 shadow-sm"
                >
                  {section}
                </div>
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection title="Process">
            <div className="grid gap-3">
              {project.process.map((step, index) => (
                <div
                  key={step}
                  className="rounded-[1.35rem] border border-slate-200 bg-white px-5 py-4 shadow-sm"
                >
                  <p className="text-[0.65rem] uppercase tracking-[0.3em] text-slate-400">
                    Step {index + 1}
                  </p>
                  <p className="mt-2 leading-7 text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection title="Key decisions">
            <div className="grid gap-3">
              {project.decisions.map((decision) => (
                <div
                  key={decision}
                  className="rounded-[1.35rem] border border-slate-200 bg-white px-5 py-4 leading-7 text-slate-700 shadow-sm"
                >
                  {decision}
                </div>
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection title="Outcome">
            <p className="max-w-4xl text-lg leading-8 text-slate-700">
              {project.outcome}
            </p>
          </CaseStudySection>

          <CaseStudySection title="Skills demonstrated">
            <div className="grid gap-3 sm:grid-cols-2">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="rounded-[1.35rem] border border-slate-200 bg-white px-5 py-4 text-slate-700 shadow-sm"
                >
                  {skill}
                </div>
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection title="Next steps">
            <p className="max-w-4xl text-lg leading-8 text-slate-700">
              {project.nextSteps}
            </p>
          </CaseStudySection>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}