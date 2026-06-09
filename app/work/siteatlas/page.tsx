import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudySection } from "@/src/components/CaseStudySection";
import { SiteAtlasMockups } from "@/src/components/SiteAtlasMockups";
import { SiteFooter } from "@/src/components/SiteFooter";
import { SiteHeader } from "@/src/components/SiteHeader";
import { projects } from "@/src/data/projects";

const project = projects.find((item) => item.slug === "siteatlas");

const productFeatures = [
  "Project input: site, project type, visual direction, and user level",
  "AI-generated site analysis framework",
  "Precedent logic and reference cards",
  "AI visual direction prompts",
  "Board Builder Lite",
  "Export Center",
  "Critique checklist",
  "Advanced / Competition tier concept",
];

const uxSteps = [
  "User enters location, project type, style direction, and skill level.",
  "SiteAtlas generates site-analysis categories and design questions.",
  "User reviews precedent logic and visual directions.",
  "User organizes findings into board-ready sections.",
  "User exports, refines, or continues into critique mode.",
];

const productLogic = [
  [
    "Input",
    "A student starts with a site, assignment type, visual direction, and skill level.",
  ],
  [
    "Structure",
    "The system turns the vague brief into analysis categories, design questions, and precedent logic.",
  ],
  [
    "Direction",
    "The student receives visual guidance, board sections, critique prompts, and next-step suggestions.",
  ],
  [
    "Output",
    "The activation moment is a board-ready structure the student can present, revise, and discuss.",
  ],
] as const;

const skills = [
  "AI product thinking",
  "UX information architecture",
  "Design education strategy",
  "Landscape architecture logic",
  "Prompt system design",
  "Web product prototyping",
  "Feature prioritization",
  "English case-study writing",
];

export const metadata: Metadata = {
  title: "SiteAtlas — AI Design Education Tool",
  description: project?.heroSummary ?? "",
  openGraph: {
    title: "SiteAtlas — AI Design Education Tool",
    description: project?.heroSummary ?? "",
    type: "article",
    url: "https://chan-tao-portfolio.vercel.app/work/siteatlas",
  },
};

export default function SiteAtlasPage() {
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

          <CaseStudySection title="Product logic">
            <div className="grid gap-4 md:grid-cols-2">
              {productLogic.map(([title, detail], index) => (
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

          <CaseStudySection title="Product features">
            <ul className="grid gap-3 text-slate-700 sm:grid-cols-2">
              {productFeatures.map((feature) => (
                <li
                  key={feature}
                  className="rounded-[1.35rem] border border-slate-200 bg-white px-5 py-4 shadow-sm"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </CaseStudySection>

          <CaseStudySection title="UX flow">
            <div className="space-y-3">
              {uxSteps.map((step, index) => (
                <div
                  key={step}
                  className="flex gap-4 rounded-[1.25rem] border border-slate-200 bg-white px-5 py-4 shadow-sm"
                >
                  <span className="text-[0.68rem] uppercase tracking-[0.28em] text-slate-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-slate-700">{step}</p>
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

          <SiteAtlasMockups />

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