import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudySection } from "@/src/components/CaseStudySection";
import { AiContentPipelineMockups } from "@/src/components/AiContentPipelineMockups";
import { SiteFooter } from "@/src/components/SiteFooter";
import { SiteHeader } from "@/src/components/SiteHeader";
import { projects } from "@/src/data/projects";

const project = projects.find((item) => item.slug === "ai-content-pipeline");

const workflowSteps = [
  "Concept seed",
  "Hook and title direction",
  "Short script",
  "Shot list",
  "Visual prompt set",
  "Image generation",
  "Video generation",
  "Editing checklist",
  "Thumbnail/title testing",
  "Performance review",
];

const horrorRules = [
  "Start with a simple unsettling premise",
  "Keep the hook visible in the first few seconds",
  "Use visual continuity across generated images",
  "Design sound and silence as part of pacing",
  "Avoid over-explaining the horror",
  "Track which concepts generate stronger retention signals",
];

const exampleWorkflow = [
  "Idea: a person finds a video file that should not exist",
  "3 hook options",
  "1 short script",
  "6–8 shot beats",
  "Visual prompt directions",
  "Editing checklist",
  "Title/thumbnail options",
  "Post-publishing review questions",
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
        <section className="space-y-6 rounded-[2rem] border border-slate-300/75 bg-white p-10 shadow-sm">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-600">{project.label}</p>
          <h1 className="text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">{project.title}</h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-700">{project.description}</p>
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-5 text-slate-700">
              <p>{project.overview}</p>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-slate-600">Role</p>
                <div className="mt-2 space-y-2 text-slate-950">
                  {project.role}
                </div>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-slate-600">Tools</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span key={tool} className="rounded-full bg-white px-3 py-1 text-sm text-slate-700 shadow-sm ring-1 ring-slate-200">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-16 py-16">
          <CaseStudySection title="Project overview">
            <p className="text-slate-700">{project.overview}</p>
          </CaseStudySection>

          <CaseStudySection title="Problem">
            <ul className="list-disc space-y-4 pl-5 text-slate-700">
              <li>Short-form horror needs strong hooks, tight pacing, and visual clarity to be effective.</li>
              <li>AI tools can produce assets quickly, but outputs vary without a structured process.</li>
              <li>Solo creators often lose time switching between ideation, scripting, generation, editing, and publishing.</li>
              <li>The challenge was to design a repeatable pipeline that keeps creative control while improving speed.</li>
            </ul>
          </CaseStudySection>

          <CaseStudySection title="Target users">
            <ul className="list-disc space-y-3 pl-5 text-slate-700">
              <li>Solo content creators</li>
              <li>Horror YouTube/TikTok creators</li>
              <li>AI video creators</li>
              <li>Small creative teams</li>
              <li>Storytelling-focused content operators</li>
              <li>Creators testing short-form video concepts</li>
            </ul>
          </CaseStudySection>

          <CaseStudySection title="Workflow structure">
            <div className="space-y-3 text-slate-700">
              {workflowSteps.map((s) => (
                <p key={s}>• {s}</p>
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection title="Core system">
            <p className="text-slate-700">The objective is not to let AI randomly generate a final video. Instead, the pipeline defines clear inputs, outputs, and quality checks at each stage so human direction remains central and predictable outcomes are achievable.</p>
          </CaseStudySection>

          <CaseStudySection title="Horror-specific design rules">
            <ul className="list-disc space-y-2 pl-5 text-slate-700">
              {horrorRules.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </CaseStudySection>

          <CaseStudySection title="Example workflow">
            <ul className="list-disc space-y-2 pl-5 text-slate-700">
              {exampleWorkflow.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
          </CaseStudySection>

          <CaseStudySection title="Key product / UX decisions">
            <ul className="list-disc space-y-3 pl-5 text-slate-700">
              <li>Design the workflow before choosing tools to avoid tool-driven outcomes.</li>
              <li>Maintain human editorial direction to preserve narrative intent over AI randomness.</li>
              <li>Standardize prompt structures to enable repeatable visuals and faster iteration.</li>
              <li>Include performance review as a formal part of the creative loop to improve future outputs.</li>
            </ul>
          </CaseStudySection>

          <AiContentPipelineMockups />

          <CaseStudySection title="Skills demonstrated">
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "AI workflow design",
                "Content operations",
                "Prompt systems",
                "Visual storytelling",
                "Short-form video strategy",
                "Horror pacing",
                "Creative process design",
                "Productized content thinking",
              ].map((skill) => (
                <div key={skill} className="rounded-3xl border border-slate-200 bg-white px-5 py-4 text-slate-700">
                  {skill}
                </div>
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection title="Next steps">
            <ul className="list-disc space-y-3 pl-5 text-slate-700">
              <li>Build a simple web interface for the pipeline</li>
              <li>Add reusable prompt templates</li>
              <li>Add thumbnail/title testing tracker</li>
              <li>Create a content calendar view</li>
              <li>Add analytics fields for retention, click-through rate, and completion rate</li>
              <li>Test the workflow across multiple horror formats</li>
            </ul>
          </CaseStudySection>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
