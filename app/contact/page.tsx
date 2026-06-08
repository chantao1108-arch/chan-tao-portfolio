import type { Metadata } from "next";
import { SiteFooter } from "@/src/components/SiteFooter";
import { SiteHeader } from "@/src/components/SiteHeader";

export const metadata: Metadata = {
  title: "Contact — Chan Tao",
  description: "Contact Chan Tao for AI product, UX, and analytics collaboration.",
  openGraph: {
    title: "Contact — Chan Tao",
    description: "Contact Chan Tao for AI product, UX, and analytics collaboration.",
    type: "website",
    url: "https://chan-tao-portfolio.vercel.app/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f8f3ec] text-slate-950">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-6 pb-24 pt-20 lg:px-8">
        <section className="rounded-[2rem] border border-slate-300/70 bg-white p-12 shadow-sm">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-600">Contact</p>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
            Let’s talk about AI product strategy, UX systems, and editorial design.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            If you want to collaborate on product prototypes, AI workflows, or analytics-informed experiences, send a note and I’ll reply with next steps.
          </p>
          <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <p className="text-base font-medium text-slate-950">Email</p>
            <a href="mailto:chantao1108@gmail.com" className="mt-3 inline-block text-lg font-semibold text-slate-900 underline decoration-slate-400 underline-offset-4">
              chantao1108@gmail.com
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
