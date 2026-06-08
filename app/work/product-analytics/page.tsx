import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudySection } from "@/src/components/CaseStudySection";
import { SiteFooter } from "@/src/components/SiteFooter";
import { SiteHeader } from "@/src/components/SiteHeader";
import { projects } from "@/src/data/projects";

const project = projects.find((item) => item.slug === "product-analytics");

export const metadata: Metadata = {
  title: "Product Analytics Case Study — Chan Tao",
  description: project?.heroSummary ?? "",
  openGraph: {
    title: "Product Analytics Case Study — Chan Tao",
    description: project?.heroSummary ?? "",
    type: "article",
    url: "https://chan-tao-portfolio.vercel.app/work/product-analytics",
  },
};

export default function ProductAnalyticsPage() {
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
          <p className="max-w-3xl text-lg leading-8 text-slate-700">{project.heroSummary}</p>
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-5 text-slate-700">
              <p>{project.overview}</p>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-slate-600">Role</p>
                <p className="mt-2 text-slate-950">{project.role}</p>
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
            <p>{project.problem}</p>
          </CaseStudySection>
          <CaseStudySection title="Target users">
            <p>{project.targetUsers}</p>
          </CaseStudySection>
          <CaseStudySection title="Process">
            <ul className="list-disc space-y-3 pl-5 text-slate-700">
              {project.process.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </CaseStudySection>
          <CaseStudySection title="Key product decisions">
            <ul className="list-disc space-y-3 pl-5 text-slate-700">
              {project.decisions.map((decision) => (
                <li key={decision}>{decision}</li>
              ))}
            </ul>
          </CaseStudySection>
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-10">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-600">Prototype / screens</p>
            <div className="mt-6 h-72 rounded-[1.75rem] border border-dashed border-slate-300 bg-white" />
          </div>
          <CaseStudySection title="Outcome / what I learned">
            <p>{project.outcome}</p>
          </CaseStudySection>
          <CaseStudySection title="Next steps">
            <p>{project.nextSteps}</p>
          </CaseStudySection>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
