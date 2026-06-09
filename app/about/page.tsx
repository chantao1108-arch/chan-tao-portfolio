import type { Metadata } from "next";
import { SiteFooter } from "@/src/components/SiteFooter";
import { SiteHeader } from "@/src/components/SiteHeader";
import { SkillsGrid } from "@/src/components/SkillsGrid";

export const metadata: Metadata = {
  title: "About — Chan Tao",
  description:
    "About Chan Tao, an AI product and UX analyst with a background in landscape architecture, visual storytelling, and interactive systems.",
  openGraph: {
    title: "About — Chan Tao",
    description:
      "About Chan Tao, an AI product and UX analyst with a background in landscape architecture, visual storytelling, and interactive systems.",
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
                I am an AI Product &amp; UX Analyst with a background in landscape architecture and design thinking. I combine visual storytelling, structured thinking, and systems logic to make AI experiences that are clear, usable, and teachable.
              </p>
              <p>
                I build independent prototypes and workflows — including projects like SiteAtlas and LIFT — that help users move from ambiguous prompts to structured outputs, product logic, and presentation-ready artifacts.
              </p>
              <p>
                My strength is turning abstract ideas into systems, flows, and product concepts that teams can test and iterate on. I focus on early-stage product work: prototyping, UX research, technical business analysis, product operations, and analytics-informed design.
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
                  "UX flows",
                  "Figma / interface planning",
                  "Next.js / Vercel prototyping",
                  "OpenAI API concepts",
                  "SQL basics",
                  "Product analytics",
                  "Unity prototype planning",
                  "AI content workflows",
                  "English product writing",
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
