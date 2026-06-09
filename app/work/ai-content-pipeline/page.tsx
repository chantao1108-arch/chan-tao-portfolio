import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudySection } from "@/src/components/CaseStudySection";
import { SiteFooter } from "@/src/components/SiteFooter";
import { SiteHeader } from "@/src/components/SiteHeader";
import { projects } from "@/src/data/projects";

const project = projects.find((item) => item.slug === "ai-content-pipeline");

const pipelineSteps = [
  [
    "Concept",
    "Start with a short horror premise, emotional hook, or strange visual contradiction.",
  ],
  [
    "Script",
    "Turn the premise into a compact structure with hook, escalation, reveal, and ending beat.",
  ],
  [
    "Shot plan",
    "Break the story into camera moments, visual actions, environmental details, and transition points.",
  ],
  [
    "Visual prompts",
    "Create consistent prompts for character, location, atmosphere, framing, and continuity.",
  ],
  [
    "Generation",
    "Use image and video tools to create usable assets while keeping editorial control.",
  ],
  [
    "Edit & review",
    "Assemble the sequence, test pacing, refine sound and text, then review retention signals.",
  ],
] as const;

const workflowPrinciples = [
  [
    "Human direction first",
    "The workflow starts with story and editorial judgment, not with whatever the AI tool randomly produces.",
  ],
  [
    "Repeatable structure",
    "Each video follows a consistent pipeline so production becomes faster without becoming generic.",
  ],
  [
    "Visual consistency",
    "Prompt templates help preserve atmosphere, camera language, and scene continuity across generated assets.",
  ],
  [
    "Feedback loop",
    "Performance review becomes part of the creative process, shaping the next script, hook, thumbnail, and edit.",
  ],
] as const;

const productionArtifacts = [
  "Hook options",
  "Short script",
  "Shot list",
  "Visual prompt set",
  "Image references",
  "Video-generation notes",
  "Editing checklist",
  "Post-publish review",
];

const skills = [
  "AI workflow design",
  "Horror storytelling",
  "Prompt system design",
  "Visual direction",
  "Content operations",
  "Short-form pacing",
  "Creative production planning",
  "Performance review thinking",
];

export const metadata: Metadata = {
  title: "AI Content Pipeline — Horror Video Workflow",
  description: project?.heroSummary ?? "",
  openGraph: {
    title: "AI Content Pipeline — Horror Video Workflow",
    description: project?.heroSummary ?? "",
    type: "article",
    url: "https://chan-tao-portfolio.vercel.app/work/ai-content-pipeline",
  },
};

export default function AIContentPipelinePage() {
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

          <CaseStudySection title="Pipeline structure">
            <div className="grid gap-3">
              {pipelineSteps.map(([title, detail], index) => (
                <div
                  key={title}
                  className="rounded-[1.35rem] border border-slate-200 bg-white px-5 py-4 shadow-sm"
                >
                  <p className="text-[0.65rem] uppercase tracking-[0.3em] text-slate-400">
                    Step {index + 1}
                  </p>
                  <h2 className="mt-2 text-base font-semibold text-slate-950">
                    {title}
                  </h2>
                  <p className="mt-1 leading-7 text-slate-700">{detail}</p>
                </div>
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection title="Workflow principles">
            <div className="grid gap-4 md:grid-cols-2">
              {workflowPrinciples.map(([title, detail]) => (
                <div
                  key={title}
                  className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h2 className="text-lg font-semibold text-slate-950">{title}</h2>
                  <p className="mt-2 leading-7 text-slate-700">{detail}</p>
                </div>
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection title="Production artifacts">
            <div className="grid gap-3 sm:grid-cols-2">
              {productionArtifacts.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.35rem] border border-slate-200 bg-white px-5 py-4 text-slate-700 shadow-sm"
                >
                  {item}
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