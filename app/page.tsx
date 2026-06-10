import type { Metadata } from "next";
import { ProjectCard } from "@/src/components/ProjectCard";
import { SiteFooter } from "@/src/components/SiteFooter";
import { SiteHeader } from "@/src/components/SiteHeader";
import { projects } from "@/src/data/projects";

export const metadata: Metadata = {
  title: "Chan Tao — AI Product & UX Analyst",
  description:
    "Portfolio of Chan Tao, an AI Product & UX Analyst working across AI product prototypes, UX systems, product analytics, and AI workflow systems.",
  openGraph: {
    title: "Chan Tao — AI Product & UX Analyst",
    description:
      "Portfolio of Chan Tao, an AI Product & UX Analyst working across AI product prototypes, UX systems, product analytics, and AI workflow systems.",
    type: "website",
    url: "https://chan-tao-portfolio.vercel.app",
    siteName: "Chan Tao Portfolio",
  },
};

const featuredProjects = projects.slice(0, 4);

const credibilityItems = [
  "AI Product Prototypes",
  "UX Systems",
  "Workflow Design",
  "Product Analytics",
  "Interactive Systems",
];

const focusItems = [
  ["Product prototypes", "AI-assisted concepts, structured flows"],
  ["UX systems", "navigation, onboarding, information architecture"],
  ["Workflow design", "repeatable creative and content pipelines"],
  ["Analytics", "activation, retention, event tracking"],
] as const;

const practiceItems = [
  [
    "01",
    "AI Product Prototyping",
    "Turning early ideas into structured product flows, interface systems, and testable web prototypes.",
  ],
  [
    "02",
    "UX & Information Architecture",
    "Designing user journeys, onboarding logic, interface structures, and decision flows.",
  ],
  [
    "03",
    "AI Workflow Systems",
    "Building repeatable pipelines for content, research, design education, and creative production.",
  ],
  [
    "04",
    "Product Analytics Thinking",
    "Defining activation, retention, funnel events, and product signals for early-stage tools.",
  ],
];

const currentFocus = [
  "AI product strategy and prototype direction",
  "UX case studies and information architecture",
  "Product analytics for early-stage tools",
  "AI workflow systems and structured case studies",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f2eb] text-slate-950">
      <SiteHeader />

      <main className="mx-auto max-w-7xl px-6 pb-20 pt-10 lg:px-8">
        <section className="grid gap-10 rounded-[2.25rem] border border-slate-200/80 bg-white/85 p-8 shadow-sm lg:grid-cols-[minmax(0,1.18fr)_380px] lg:p-10">
          <div className="space-y-8">
            <div className="space-y-5">
              <p className="text-[0.68rem] uppercase tracking-[0.42em] text-slate-500">
                Chan Tao
              </p>

              <p className="text-sm uppercase tracking-[0.32em] text-slate-600">
                AI Product &amp; UX Analyst
              </p>

              <h1 className="max-w-4xl text-[clamp(2.8rem,5vw,4.65rem)] font-semibold leading-[1.02] tracking-tight text-slate-950">
                Turning ambiguous ideas into structured AI product experiences.
              </h1>

              <p className="max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
                I design AI-powered product prototypes, UX flows, workflow systems, and product analytics case studies for early-stage ideas that need clearer structure before they can scale.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 border-t border-slate-200 pt-5 text-[0.7rem] uppercase tracking-[0.26em] text-slate-500">
              {credibilityItems.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-white px-3 py-2 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <aside className="rounded-[2rem] border border-slate-200 bg-[#f8f4ee] p-6 shadow-[0_12px_36px_rgba(16,21,31,0.05)]">
            <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <p className="text-[0.66rem] uppercase tracking-[0.34em] text-slate-500">
                  Capability panel
                </p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-600">
                  Product systems / UX / Analytics
                </p>
              </div>

              <div className="rounded-full border border-slate-200 bg-white px-3 py-2 text-[0.62rem] uppercase tracking-[0.28em] text-slate-500 shadow-sm">
                Chan Tao
              </div>
            </div>

            <div className="mt-5 space-y-4 text-slate-700">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-[0.66rem] uppercase tracking-[0.32em] text-slate-500">
                  Working mode
                </p>
                <p className="mt-2 text-sm leading-7">
                  My work focuses on turning unclear product ideas into structured flows, prototype systems, and decision frameworks. I use AI tools, web prototyping, and product analytics thinking to make early concepts easier to test, explain, and build.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {focusItems.map(([title, detail]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <p className="text-[0.62rem] uppercase tracking-[0.32em] text-slate-500">
                      {title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>

        <section className="mt-6 rounded-[1.75rem] border border-slate-200 bg-white px-6 py-4 shadow-sm">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.68rem] uppercase tracking-[0.3em] text-slate-500">
            <span>AI Product Prototypes</span>
            <span>UX Systems</span>
            <span>Workflow Design</span>
            <span>Product Analytics</span>
            <span>Interactive Systems</span>
          </div>
        </section>

        <section className="mt-14 grid gap-10 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <div className="flex items-end justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <h3 className="text-[0.7rem] uppercase tracking-[0.34em] text-slate-500">
                  What I do
                </h3>
                <p className="mt-3 text-lg text-slate-700">
                  Four areas of practice, tuned for early-stage product work.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {practiceItems.map(([index, title, detail]) => (
                <div
                  key={title}
                  className="rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-[0.66rem] uppercase tracking-[0.34em] text-slate-500">
                      {index}
                    </p>
                    <span className="h-px flex-1 bg-slate-200" />
                  </div>

                  <h4 className="mt-4 text-lg font-semibold text-slate-950">{title}</h4>
                  <p className="mt-2 leading-7 text-slate-700">{detail}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-sm">
            <h4 className="text-[0.7rem] uppercase tracking-[0.34em] text-slate-500">
              Currently focused on
            </h4>

            <ul className="mt-4 space-y-3 text-slate-700">
              {currentFocus.map((item, index) => (
                <li
                  key={item}
                  className={index < currentFocus.length - 1 ? "border-b border-slate-100 pb-3" : ""}
                >
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </section>

        <section className="mt-20 space-y-8">
          <div className="flex flex-col gap-4 border-b border-slate-200 pb-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.34em] text-slate-500">
                Work
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950">
                Selected case studies and prototypes
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-slate-700">
              These projects are framed as structured product and UX case studies, with a focus on AI product prototypes, workflow systems, and product analytics.
            </p>
          </div>

          <div className="grid gap-8 xl:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
