import type { Metadata } from "next";
import { SiteFooter } from "@/src/components/SiteFooter";
import { SiteHeader } from "@/src/components/SiteHeader";
import { SkillsGrid } from "@/src/components/SkillsGrid";

export const metadata: Metadata = {
  title: "About — Chan Tao",
  description:
    "About Chan Tao, an AI Product & UX Analyst with a background in landscape architecture, visual systems, and structured product thinking.",
  openGraph: {
    title: "About — Chan Tao",
    description:
      "About Chan Tao, an AI Product & UX Analyst with a background in landscape architecture, visual systems, and structured product thinking.",
    type: "website",
    url: "https://chan-tao-portfolio.vercel.app/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f8f3ec] text-slate-950">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-6 pb-24 pt-10 lg:px-8">
        <section className="grid gap-16 lg:grid-cols-[1fr_320px] lg:items-start">
          <div className="space-y-10">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-slate-600">About</p>
              <h1 className="mt-4 text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
                I design AI product and UX systems that help teams turn unclear ideas into structured experiences.
              </h1>
            </div>
            <div className="space-y-8 text-slate-700">
              <p>
                I&apos;m an AI Product &amp; UX Analyst focused on turning ambiguous ideas into structured product flows, AI-assisted workflows, and data-informed case studies.
              </p>
              <p>
                My background in landscape architecture and visual systems gives me a strong foundation in spatial thinking, information structure, and presentation logic. I use that foundation to design early-stage product concepts, UX flows, workflow systems, and prototype case studies.
              </p>
              <p>
                I&apos;m currently focused on roles related to AI product analysis, technical business analysis, product operations, UX/product design, and AI workflow systems.
              </p>
            </div>
          </div>
          <aside className="rounded-[2rem] border border-slate-300/70 bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-600">Role fit</p>
            <div className="mt-4 space-y-4 text-slate-700">
              <ul className="list-disc pl-5">
                <li>AI Product Analyst</li>
                <li>Technical Business Analyst</li>
                <li>UX / Product Designer</li>
                <li>Product Operations Analyst</li>
                <li>AI Workflow Designer</li>
                <li>Content Systems Designer</li>
              </ul>
            </div>
            <div className="mt-6">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-600">Tools &amp; skills</p>
              <div className="mt-4">
                <SkillsGrid skills={[
                  "Product strategy",
                  "UX flows & IA",
                  "Figma planning",
                  "Next.js / Vercel deployment deployment deployment deployment",
                  "OpenAI API prototyping",
                  "SQL funnel analysis",
                  "Product analytics",
                  "Unity prototype planning",
                  "AI workflow systems",
                ]} />
              </div>
            </div>
          </aside>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
