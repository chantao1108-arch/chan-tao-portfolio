import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudySection } from "@/src/components/CaseStudySection";
import { ProductAnalyticsMockups } from "@/src/components/ProductAnalyticsMockups";
import { SiteFooter } from "@/src/components/SiteFooter";
import { SiteHeader } from "@/src/components/SiteHeader";
import { projects } from "@/src/data/projects";

const project = projects.find((item) => item.slug === "product-analytics");

const funnelSteps = [
  "Landing page visit",
  "Sign up",
  "Create project",
  "Generate analysis",
  "Open Board Builder",
  "Save board",
  "Export or share",
];

const simulatedFields = [
  "user_id",
  "signup_date",
  "traffic_source",
  "created_project",
  "generated_analysis",
  "opened_board_builder",
  "saved_board",
  "exported_board",
  "retained_7d",
  "plan_type",
];

export const metadata: Metadata = {
  title: "Product Analytics Case Study — Activation & Retention",
  description: project?.heroSummary ?? "",
  openGraph: {
    title: "Product Analytics Case Study — Activation & Retention",
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
          <p className="max-w-3xl text-lg leading-8 text-slate-700">{project.description}</p>
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-5 text-slate-700">
              <p>{project.overview}</p>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-slate-600">Context</p>
                <p className="mt-2 text-slate-950">This is a simulated dataset and analysis created to demonstrate product thinking and analytics workflows; it does not use real user data.</p>
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
              <li>AI tools can generate outputs, but not every output creates user value.</li>
              <li>Product teams need to know where users drop off and which behaviors predict retention.</li>
              <li>For an AI design education tool, the key question is whether users reach a board-ready structure rather than only producing generated content.</li>
              <li>The challenge was to define meaningful activation and retention signals for a new product concept.</li>
            </ul>
          </CaseStudySection>

          <CaseStudySection title="Product context (hypothetical funnel)">
            <ul className="list-disc space-y-2 pl-5 text-slate-700">
              {funnelSteps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </CaseStudySection>

          <CaseStudySection title="Key metrics">
            <ul className="list-disc space-y-2 pl-5 text-slate-700">
              <li>Activation rate</li>
              <li>Board Builder adoption</li>
              <li>Export rate</li>
              <li>7-day retention</li>
              <li>Free-to-paid conversion intent</li>
              <li>Primary drop-off points</li>
            </ul>
          </CaseStudySection>

          <CaseStudySection title="Simulated dataset">
            <p className="text-slate-700">The dataset is simulated and includes fields such as:</p>
            <ul className="list-disc space-y-2 pl-5 text-slate-700">
              {simulatedFields.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </CaseStudySection>

          <ProductAnalyticsMockups />

          <CaseStudySection title="Analysis questions">
            <ul className="list-disc space-y-2 pl-5 text-slate-700">
              <li>Where do users drop off in the funnel?</li>
              <li>Does opening Board Builder correlate with 7-day retention?</li>
              <li>Which user behavior best indicates activation?</li>
              <li>Which feature should be improved first?</li>
              <li>What should the product team measure next?</li>
            </ul>
          </CaseStudySection>

          <CaseStudySection title="Example SQL queries">
            <div className="space-y-3 text-slate-700">
              <pre className="overflow-x-auto rounded bg-slate-100 p-3 text-sm">-- Activation rate
SELECT
  COUNT(DISTINCT user_id) FILTER (WHERE created_project = 1) * 1.0 / COUNT(DISTINCT user_id) AS activation_rate
FROM events
WHERE signup_date &gt;= '2026-01-01';

-- Board Builder adoption
SELECT
  COUNT(DISTINCT user_id) FILTER (WHERE opened_board_builder = 1) * 1.0 / COUNT(DISTINCT user_id) AS board_builder_adoption
FROM events;

-- Export rate
SELECT
  COUNT(*) FILTER (WHERE exported_board = 1) * 1.0 / COUNT(*) AS export_rate
FROM events; </pre>
            </div>
          </CaseStudySection>

          <CaseStudySection title="Insights">
            <ul className="list-disc space-y-2 pl-5 text-slate-700">
              <li>Users who reach Board Builder appear more likely to retain in the short term.</li>
              <li>Export is a stronger signal of completed value than generation alone.</li>
              <li>The largest risk is users stopping after AI output without organizing it into a board.</li>
              <li>The product should optimize the transition from generated analysis to board structure.</li>
            </ul>
          </CaseStudySection>

          <CaseStudySection title="Product recommendations">
            <ul className="list-disc space-y-3 pl-5 text-slate-700">
              <li>Make Board Builder the core activation moment.</li>
              <li>Add stronger guidance and micro-UX after AI output to help users organize findings.</li>
              <li>Track saved board as a key product event and use it in retention cohorts.</li>
              <li>Test export prompts and a critique checklist as conversion levers.</li>
            </ul>
          </CaseStudySection>

          <CaseStudySection title="Skills demonstrated">
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Product analytics",
                "Funnel analysis",
                "Activation definition",
                "Retention thinking",
                "SQL funnel analysis for funnel and retention analysis",
                "Product decision-making",
                "Metric design",
                "Data storytelling",
              ].map((skill) => (
                <div key={skill} className="rounded-3xl border border-slate-200 bg-white px-5 py-4 text-slate-700 shadow-sm">
                  {skill}
                </div>
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection title="Next steps">
            <ul className="list-disc space-y-3 pl-5 text-slate-700">
              <li>Build a real event tracking plan</li>
              <li>Define analytics events and schema</li>
              <li>Create dashboards to monitor activation and retention</li>
              <li>Run onboarding variant tests</li>
              <li>Measure retention after Board Builder use</li>
              <li>Compare beginner vs advanced user cohorts</li>
            </ul>
          </CaseStudySection>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
