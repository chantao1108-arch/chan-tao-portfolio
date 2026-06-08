import type { ReactNode } from "react";

type PrototypeMockupProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

function PrototypeMockup({ title, children, className = "" }: PrototypeMockupProps) {
  return (
    <div className={`rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm ${className}`}>
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm uppercase tracking-[0.32em] text-slate-600">{title}</p>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-600 ring-1 ring-slate-200">
            Prototype mockup
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}

function FieldRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{label}</p>
      <p className="mt-2 text-sm font-medium text-slate-900">{value}</p>
    </div>
  );
}

function MockupCard({ title, location, strategy, why }: { title: string; location: string; strategy: string; why: string }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-slate-700 shadow-sm">
      <p className="text-sm font-semibold text-slate-950">{title}</p>
      <p className="mt-2 text-xs uppercase tracking-[0.28em] text-slate-500">{location}</p>
      <div className="mt-4 space-y-3 text-sm">
        <p className="font-semibold text-slate-950">Key strategy</p>
        <p>{strategy}</p>
        <p className="font-semibold text-slate-950">Why it matters</p>
        <p>{why}</p>
      </div>
    </div>
  );
}

export function SiteAtlasMockups() {
  return (
    <div className="space-y-10">
      <div className="grid gap-10 lg:grid-cols-2">
        <PrototypeMockup title="Project input form">
          <div className="space-y-5 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
            <div className="space-y-5">
              <FieldRow label="Site / location" value="High Line, New York" />
              <FieldRow label="Project type" value="Urban public space" />
              <FieldRow label="Design style" value="Ecological / adaptive reuse" />
              <FieldRow label="User level" value="Beginner" />
            </div>
            <button className="mt-4 inline-flex w-full items-center justify-center rounded-3xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              Generate analysis framework
            </button>
          </div>
        </PrototypeMockup>

        <PrototypeMockup title="AI site analysis output">
          <div className="space-y-4 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
            {[
              "Site context",
              "Circulation",
              "Environmental conditions",
              "User groups",
              "Design opportunities",
              "Board structure suggestion",
            ].map((item) => (
              <div key={item} className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-sm font-semibold text-slate-950">{item}</p>
                <p className="mt-2 text-sm text-slate-600">Lorem ipsum placeholder description for product structure.</p>
              </div>
            ))}
          </div>
        </PrototypeMockup>
      </div>

      <PrototypeMockup title="Precedent cards">
        <div className="grid gap-4 sm:grid-cols-3">
          <MockupCard
            title="The High Line"
            location="New York, USA"
            strategy="Adaptive reuse of elevated rail into linear park"
            why="Demonstrates how public spaces can reuse infrastructure and support pedestrian circulation."
          />
          <MockupCard
            title="Superkilen"
            location="Copenhagen, Denmark"
            strategy="Cultural layering in a public plaza"
            why="Shows how site-specific references make urban spaces feel welcoming and legible."
          />
          <MockupCard
            title="Cheonggyecheon Stream"
            location="Seoul, South Korea"
            strategy="Urban daylighting and pedestrian corridor"
            why="Illustrates how ecological restoration can reconnect the city and support movement."
          />
        </div>
      </PrototypeMockup>

      <PrototypeMockup title="Board Builder Lite">
        <div className="grid gap-4 sm:grid-cols-5">
          {[
            { title: "Site Context", notes: ["Site history", "Key users"] },
            { title: "Analysis Diagrams", notes: ["Circulation", "Environmental layers"] },
            { title: "Design Strategy", notes: ["Goals", "Concept statements"] },
            { title: "Precedent Logic", notes: ["References", "Lessons"] },
            { title: "Next Steps", notes: ["Refine board", "Set critique"] },
          ].map((column) => (
            <div key={column.title} className="space-y-3 rounded-3xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-950">{column.title}</p>
              {column.notes.map((note) => (
                <div key={note} className="rounded-3xl bg-white p-3 text-xs text-slate-700 shadow-sm">
                  {note}
                </div>
              ))}
            </div>
          ))}
        </div>
      </PrototypeMockup>

      <PrototypeMockup title="Export center">
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            "PDF board",
            "Image board",
            "Critique checklist",
            "Presentation outline",
            "Future: PSD export",
          ].map((item) => (
            <div key={item} className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-slate-700 shadow-sm">
              <p className="text-sm font-semibold text-slate-950">{item}</p>
              <p className="mt-2 text-xs text-slate-500">Export or prepare the asset for review.</p>
            </div>
          ))}
        </div>
      </PrototypeMockup>
    </div>
  );
}
