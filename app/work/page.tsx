import type { Metadata } from "next";
import { ProjectCard } from "@/src/components/ProjectCard";
import { SiteFooter } from "@/src/components/SiteFooter";
import { SiteHeader } from "@/src/components/SiteHeader";
import { projects } from "@/src/data/projects";

export const metadata: Metadata = {
  title: "Work — Chan Tao",
  description: "A portfolio of AI product, UX, narrative, and analytics projects.",
  openGraph: {
    title: "Work — Chan Tao",
    description: "A portfolio of AI product, UX, narrative, and analytics projects.",
    type: "website",
    url: "https://chan-tao-portfolio.vercel.app/work",
  },
};

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-[#f8f3ec] text-slate-950">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-6 pb-24 pt-10 lg:px-8">
        <section className="space-y-6">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-600">Work</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
              Projects that span product, UX, AI, storytelling, and analytics.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              Each case study explores a distinct product challenge, from AI education tools to narrative gameplay, content systems, and analytics-driven product decisions.
            </p>
          </div>
        </section>
        <section className="mt-16 grid gap-8 xl:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
