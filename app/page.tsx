import type { Metadata } from "next";
import { ProjectCard } from "@/src/components/ProjectCard";
import { SiteFooter } from "@/src/components/SiteFooter";
import { SiteHeader } from "@/src/components/SiteHeader";
import { SkillsGrid } from "@/src/components/SkillsGrid";
import { projects } from "@/src/data/projects";

export const metadata: Metadata = {
  title: "Chan Tao — AI Product & UX Analyst",
  description:
    "I build AI-powered product prototypes, UX flows, and content systems using AI tools, web technologies, and product analytics.",
  openGraph: {
    title: "Chan Tao — AI Product & UX Analyst",
    description:
      "AI product and UX analyst portfolio for editorial design systems, AI workflows, and product case studies.",
    type: "website",
    url: "https://chan-tao-portfolio.vercel.app",
    siteName: "Chan Tao Portfolio",
  },
};

const featuredProjects = projects.slice(0, 4);

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f2eb] text-slate-950">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-6 pb-20 pt-10 lg:px-8">
        <section className="grid gap-12 rounded-[2.25rem] border border-slate-200/80 bg-white/75 p-8 shadow-sm lg:grid-cols-[minmax(0,1.12fr)_340px] lg:p-10">
          <div className="space-y-8">
            <div className="space-y-5">
              <p className="text-[0.7rem] uppercase tracking-[0.38em] text-slate-600">AI Product &amp; UX Analyst</p>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-[3.35rem] lg:leading-[1.02]">
                I design AI-powered product prototypes, UX flows, and content systems.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
                Then I use product thinking and analytics to turn ambiguous ideas into structured, buildable experiences. My work sits at the intersection of product strategy, UX systems, AI-assisted workflows, and visual storytelling.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5 shadow-sm">
                <p className="text-[0.66rem] uppercase tracking-[0.34em] text-slate-500">Role summary</p>
                <p className="mt-3 text-xl font-semibold tracking-tight text-slate-950">AI Product &amp; UX Analyst</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">Product prototypes / UX systems / AI workflows / Analytics thinking</p>
              </div>
              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-[0.66rem] uppercase tracking-[0.34em] text-slate-500">Current focus</p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Early-stage product ideas, independent prototypes, and tools that need clearer structure before they can scale.
                </p>
                <p className="mt-3 text-sm font-medium text-slate-950">chantao1108@gmail.com</p>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-[0.66rem] uppercase tracking-[0.34em] text-slate-500">Featured work</p>
              <p className="mt-3 text-lg leading-7 text-slate-700">
                AI product design, narrative systems, and analytics-driven strategy across prototype work and case studies.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-[#f8f4ee] p-6 shadow-[0_12px_36px_rgba(16,21,31,0.05)]">
            <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-4">
              <p className="text-[0.66rem] uppercase tracking-[0.34em] text-slate-500">Capabilities</p>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Editorial system</p>
            </div>
            <div className="mt-5 space-y-4 text-slate-700">
              <p className="text-sm leading-7">Product analytics, AI workflows, UX systems, landscape design thinking, and editorial product storytelling.</p>
              <SkillsGrid
                skills={[
                  "AI product strategy",
                  "UX research",
                  "Content workflows",
                  "Design systems",
                  "Prototyping",
                  "Analytics storytelling",
                ]}
              />
            </div>
          </div>
        </section>

        <section className="mt-14 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-[0.7rem] uppercase tracking-[0.34em] text-slate-500">What I do</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-slate-950">AI Product Prototyping</h4>
                <p className="mt-2 text-slate-700">Turning vague product ideas into structured flows, feature systems, and testable prototypes.</p>
              </div>
              <div className="rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-slate-950">UX &amp; Information Architecture</h4>
                <p className="mt-2 text-slate-700">Designing user journeys, onboarding logic, interface structures, and decision flows.</p>
              </div>
              <div className="rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-slate-950">AI Workflow Systems</h4>
                <p className="mt-2 text-slate-700">Building repeatable pipelines for content, research, design education, and creative production.</p>
              </div>
              <div className="rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-slate-950">Product Analytics Thinking</h4>
                <p className="mt-2 text-slate-700">Defining activation, retention, funnel events, and product signals for early-stage tools.</p>
              </div>
            </div>
          </div>
          <aside className="rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-sm">
            <h4 className="text-[0.7rem] uppercase tracking-[0.34em] text-slate-500">Currently focused on</h4>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>AI product strategy</li>
              <li>UX case studies</li>
              <li>Product analytics</li>
              <li>Interactive narrative systems</li>
              <li>AI-assisted content workflows</li>
            </ul>
          </aside>
        </section>

        <section className="mt-20 space-y-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.34em] text-slate-500">Work</p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-950">Selected case studies and prototypes</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-700">
              These projects explore how AI, interaction design, narrative systems, and analytics can turn complex ideas into usable product experiences.
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
