import type { Metadata } from "next";
import { SiteFooter } from "@/src/components/SiteFooter";
import { SiteHeader } from "@/src/components/SiteHeader";

export const metadata: Metadata = {
  title: "Resume — Chan Tao",
  description:
    "Resume for Chan Tao, AI Product & UX Analyst. Contact: chantao1108@gmail.com",
  openGraph: {
    title: "Resume — Chan Tao",
    description: "Resume for Chan Tao, AI Product & UX Analyst.",
    type: "website",
    url: "https://chan-tao-portfolio.vercel.app/resume",
  },
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#f8f3ec] text-slate-950">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-6 pb-24 pt-10 lg:px-8">
        <header className="space-y-4">
          <h1 className="text-4xl font-semibold">Chan Tao</h1>
          <p className="text-lg text-slate-700">AI Product &amp; UX Analyst</p>
          <p className="text-sm text-slate-700">Email: chantao1108@gmail.com</p>
          <p className="text-sm text-slate-700">Portfolio: chan-tao-portfolio.vercel.app</p>
        </header>

        <section className="mt-10 space-y-6 text-slate-700">
          <h2 className="text-2xl font-semibold text-slate-950">Professional summary</h2>
          <p>
            AI Product &amp; UX Analyst focused on turning ambiguous ideas into structured product flows, AI-assisted workflows, web prototypes, and data-informed case studies. Background in design thinking, visual storytelling, landscape architecture, and independent product prototyping.
          </p>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold text-slate-950">Core skills</h3>
            <div className="mt-4 space-y-4 text-slate-700">
              <div>
                <h4 className="font-medium">Product &amp; UX</h4>
                <ul className="mt-2 list-disc pl-5">
                  <li>Product strategy</li>
                  <li>UX flows</li>
                  <li>Information architecture</li>
                  <li>Feature planning</li>
                  <li>User journey mapping</li>
                  <li>Case study writing</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium">AI &amp; Workflow</h4>
                <ul className="mt-2 list-disc pl-5">
                  <li>AI-assisted prototyping</li>
                  <li>Prompt systems</li>
                  <li>OpenAI API concepts</li>
                  <li>AI content workflows</li>
                  <li>Creative production pipelines</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-slate-950">Technical &amp; Creative</h3>
            <div className="mt-4 space-y-4 text-slate-700">
              <div>
                <h4 className="font-medium">Technical</h4>
                <ul className="mt-2 list-disc pl-5">
                  <li>Next.js / Vercel prototyping</li>
                  <li>GitHub workflow</li>
                  <li>SQL basics</li>
                  <li>Product analytics concepts</li>
                  <li>Unity prototype planning</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium">Creative systems</h4>
                <ul className="mt-2 list-disc pl-5">
                  <li>Visual storytelling</li>
                  <li>Narrative systems</li>
                  <li>Game UX</li>
                  <li>Horror pacing</li>
                  <li>Bilingual content structure</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 text-slate-700">
          <h3 className="text-2xl font-semibold text-slate-950">Selected projects</h3>
          <ul className="mt-4 space-y-3 list-disc pl-5">
            <li>
              <strong>SiteAtlas — AI Design Education Tool</strong>
              <ul className="mt-1 list-disc pl-5">
                <li>Prototype and teaching tool for AI-assisted design research and presentation.</li>
                <li>Focus on translating open-ended research prompts into structured educational outputs.</li>
              </ul>
            </li>
            <li>
              <strong>LIFT — Narrative Horror Game Prototype</strong>
              <ul className="mt-1 list-disc pl-5">
                <li>Prototyped interactive narrative systems emphasizing pacing, atmosphere, and UX affordances.</li>
                <li>Explored mechanics for player-driven storytelling and horror tension.</li>
              </ul>
            </li>
            <li>
              <strong>AI Content Pipeline — Horror Video Workflow</strong>
              <ul className="mt-1 list-disc pl-5">
                <li>Designed repeatable AI-assisted pipelines for ideation, scripting, and media generation.</li>
                <li>Emphasized editorial control and production repeatability for creative teams.</li>
              </ul>
            </li>
            <li>
              <strong>Product Analytics Case Study — Activation &amp; Retention</strong>
              <ul className="mt-1 list-disc pl-5">
                <li>Created frameworks for early-stage product metrics and event definitions.</li>
                <li>Used simulated datasets to illustrate activation and retention analysis concepts.</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="mt-10 text-slate-700">
          <h3 className="text-2xl font-semibold text-slate-950">Role fit</h3>
          <ul className="mt-4 list-disc pl-5">
            <li>AI Product Analyst</li>
            <li>Technical Business Analyst</li>
            <li>UX / Product Designer</li>
            <li>Product Operations Analyst</li>
            <li>AI Workflow Designer</li>
            <li>Content Systems Designer</li>
          </ul>
        </section>

        <section className="mt-10 text-slate-700">
          <h3 className="text-2xl font-semibold text-slate-950">Tools</h3>
          <p className="mt-4">Next.js, Vercel, GitHub, OpenAI API concepts, Figma planning, SQL basics, Unity planning, AI image/video tools, English product writing.</p>
        </section>

        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 text-slate-700">
          <h3 className="text-lg font-semibold text-slate-950">Call to action</h3>
          <p className="mt-3">Downloadable PDF resume coming soon.</p>
          <p className="mt-2">Contact: chantao1108@gmail.com</p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
