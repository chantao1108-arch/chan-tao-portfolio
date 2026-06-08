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
    <div className="min-h-screen bg-[#f8f3ec] text-slate-950">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-6 pb-20 pt-10 lg:px-8">
        <section className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_320px] lg:items-start">
          <div className="space-y-10">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-600">AI Product & UX Analyst</p>
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
                I design AI-powered product prototypes, UX flows, and content systems — then use product thinking and analytics to turn ambiguous ideas into structured, buildable experiences.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-700">
                My work sits at the intersection of product strategy, UX systems, AI-assisted workflows, and visual storytelling. I focus on early-stage product ideas, independent prototypes, and tools that need clearer structure before they can scale.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-4xl border border-slate-300/70 bg-white p-6">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-600">Featured work</p>
                <p className="mt-4 text-2xl font-semibold text-slate-950">AI product design, narrative systems, and analytics-driven strategy.</p>
              </div>
              <div className="rounded-4xl border border-slate-300/70 bg-white p-6">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-600">Contact</p>
                <p className="mt-4 text-2xl font-semibold text-slate-950">chantao1108@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-600">Skills</p>
            <div className="mt-6 space-y-4 text-slate-700">
              <p>Product analytics, AI workflows, UX systems, landscape design thinking, and editorial product storytelling.</p>
              <SkillsGrid skills={[
                "AI product strategy",
                "UX research",
                "Content workflows",
                "Design systems",
                "Prototyping",
                "Analytics storytelling",
              ]} />
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-sm uppercase tracking-[0.3em] text-slate-600">What I do</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h4 className="text-lg font-semibold text-slate-950">AI Product Prototyping</h4>
                <p className="mt-2 text-slate-700">Turning vague product ideas into structured flows, feature systems, and testable prototypes.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h4 className="text-lg font-semibold text-slate-950">UX &amp; Information Architecture</h4>
                <p className="mt-2 text-slate-700">Designing user journeys, onboarding logic, interface structures, and decision flows.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h4 className="text-lg font-semibold text-slate-950">AI Workflow Systems</h4>
                <p className="mt-2 text-slate-700">Building repeatable pipelines for content, research, design education, and creative production.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h4 className="text-lg font-semibold text-slate-950">Product Analytics Thinking</h4>
                <p className="mt-2 text-slate-700">Defining activation, retention, funnel events, and product signals for early-stage tools.</p>
              </div>
            </div>
          </div>
          <aside className="rounded-2xl border border-slate-200 bg-white p-6">
            <h4 className="text-sm uppercase tracking-[0.28em] text-slate-600">Currently focused on</h4>
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
              <p className="text-sm uppercase tracking-[0.3em] text-slate-600">Work</p>
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
