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
                I help teams shape AI-enabled products and UX systems with a grounded, editorial approach.
              </h1>
            </div>
            <div className="space-y-8 text-slate-700">
              <p>
                I am an AI product and UX analyst with a background in landscape architecture. I care deeply about how visual storytelling, systems thinking, and product analytics can come together to make AI experiences feel clear, useful, and memorable.
              </p>
              <p>
                My practice includes AI-assisted product development, interactive system design, and editorial presentation. I build workflows that turn research into prototypes, narrative experiences, and measurable product decisions.
              </p>
              <p>
                I look for work that balances practical product outcomes with thoughtful UX — projects that are strategic, elegant, and designed to scale beyond the initial prototype.
              </p>
            </div>
          </div>
          <aside className="rounded-[2rem] border border-slate-300/70 bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-600">Capabilities</p>
            <div className="mt-6 space-y-6 text-slate-700">
              <p>
                My strengths combine AI product thinking, landscape design sensibility, and analytics-led UX — so I can communicate ideas clearly and move quickly from concept to product-ready detail.
              </p>
              <SkillsGrid skills={[
                "AI product strategy",
                "Landscape architecture thinking",
                "UX systems",
                "Content workflows",
                "Data storytelling",
                "Interactive prototypes",
              ]} />
            </div>
          </aside>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
