import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudySection } from "@/src/components/CaseStudySection";
import { SiteAtlasMockups } from "@/src/components/SiteAtlasMockups";
import { SiteFooter } from "@/src/components/SiteFooter";
import { SiteHeader } from "@/src/components/SiteHeader";
import { projects } from "@/src/data/projects";

const project = projects.find((item) => item.slug === "siteatlas");

const targetUsers = [
  "Landscape architecture students",
  "Architecture and urban design students",
  "Portfolio applicants",
  "Beginner designers preparing studio boards",
  "Self-taught design learners",
];

const roleItems = [
  "Product strategy",
  "UX flow",
  "AI prompt structure",
  "Feature planning",
  "Information architecture",
  "Prototype direction",
  "Case study writing",
];

const productFeatures = [
  "Project input: site, project type, design style, user level",
  "AI-generated site analysis framework",
  "Precedent cards",
  "AI visual directions",
  "Board Builder Lite",
  "Export Center",
  "Critique checklist",
  "Advanced / Competition tier concept",
];

const uxSteps = [
  "User enters location, project type, style, and skill level",
  "SiteAtlas generates analysis categories",
  "User reviews precedents and visual directions",
  "User organizes findings into board sections",
  "User exports or continues refining the presentation logic",
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
                  {roleItems.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
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
          <CaseStudySection title="Problem">
            <ul className="list-disc space-y-4 pl-5 text-slate-700">
              <li>Site analysis is often ambiguous for beginner design students.</li>
              <li>Students depend heavily on expensive tutoring, scattered references, and vague online inspiration.</li>
              <li>AI tools can generate text, but they usually do not understand the design process or studio critique logic.</li>
              <li>The challenge was to create a product flow that turns a vague design starting point into actionable design thinking.</li>
            </ul>
          </CaseStudySection>

          <CaseStudySection title="Target users">
            <ul className="list-disc space-y-3 pl-5 text-slate-700">
              {targetUsers.map((user) => (
                <li key={user}>{user}</li>
              ))}
            </ul>
          </CaseStudySection>

          <CaseStudySection title="Product features">
            <ul className="grid gap-3 text-slate-700 sm:grid-cols-2">
              {productFeatures.map((feature) => (
                <li key={feature} className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4">
                  {feature}
                </li>
              ))}
            </ul>
          </CaseStudySection>

          <CaseStudySection title="UX flow">
            <div className="space-y-3 text-slate-700">
              {uxSteps.map((step) => (
                <p key={step}>• {step}</p>
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection title="Key product decisions">
            <ul className="list-disc space-y-3 pl-5 text-slate-700">
              {project.decisions.map((decision) => (
                <li key={decision}>{decision}</li>
              ))}
            </ul>
          </CaseStudySection>

          <SiteAtlasMockups />

          <CaseStudySection title="Product thinking">
            <p className="text-slate-700">
              The activation moment is not when the user enters a prompt. The activation moment is when the user receives a board-ready structure that helps them move from confusion to design direction.
            </p>
          </CaseStudySection>

          <CaseStudySection title="Skills demonstrated">
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "AI product thinking",
                "UX information architecture",
                "Product strategy",
                "Design education knowledge",
                "Prompt design",
                "Web product prototyping",
                "Feature prioritization",
                "English product writing",
              ].map((skill) => (
                <div key={skill} className="rounded-3xl border border-slate-200 bg-white px-5 py-4 text-slate-700">
                  {skill}
                </div>
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection title="Next steps">
            <ul className="list-disc space-y-3 pl-5 text-slate-700">
              <li>Add real precedent database</li>
              <li>Add user-uploaded reference images</li>
              <li>Add editable board layouts</li>
              <li>Add export formats</li>
              <li>Add critique mode</li>
              <li>Add paid tier experiments</li>
            </ul>
          </CaseStudySection>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
