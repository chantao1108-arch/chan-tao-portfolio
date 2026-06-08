import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudySection } from "@/src/components/CaseStudySection";
import { SiteFooter } from "@/src/components/SiteFooter";
import { SiteHeader } from "@/src/components/SiteHeader";
import { projects } from "@/src/data/projects";

const project = projects.find((item) => item.slug === "lift");

const playerStates = ["Passenger", "Recognized", "Integrated", "Resident"];

const levelFramework = [
  "A human-life myth or surreal rule",
  "A spatial anomaly",
  "A resident secret",
  "A player action",
  "A consequence",
  "A condition for moving forward",
];

const exampleFloor = [
  "Elevator opens into a hallway",
  "Resident board lists apartments",
  "Doorbells and room numbers create interaction rules",
  "The 102/Vacant anomaly becomes a trigger",
  "The player must observe the board and environment to understand progression",
  "Discovery is player-driven rather than explicitly explained",
];

export const metadata: Metadata = {
  title: "LIFT — Narrative Horror Game Prototype",
  description: project?.heroSummary ?? "",
  openGraph: {
    title: "LIFT — Narrative Horror Game Prototype",
    description: project?.heroSummary ?? "",
    type: "article",
    url: "https://chan-tao-portfolio.vercel.app/work/lift",
  },
};

export default function LiftPage() {
  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#f8f3ec] text-slate-950">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-6 pb-24 pt-10 lg:px-8">
        <section className="space-y-6 rounded-[2rem] border border-slate-300/75 bg-white p-10 shadow-sm">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-600">{project.label}</p>
          <h1 className="text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">{project.title}</h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-700">{project.description}</p>
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-5 text-slate-700">
              <p>{project.overview}</p>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-slate-600">Role</p>
                <div className="mt-2 space-y-2 text-slate-950">
                  {project.role}
                </div>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-slate-600">Tools</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span key={tool} className="rounded-full bg-white px-3 py-1 text-sm text-slate-700 shadow-sm ring-1 ring-slate-200">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-16 py-16">
          <CaseStudySection title="Project overview">
            <p className="text-slate-700">{project.overview}</p>
          </CaseStudySection>

          <CaseStudySection title="Problem">
            <ul className="list-disc space-y-4 pl-5 text-slate-700">
              <li>Many mobile horror games rely heavily on jump scares or passive observation, which can limit narrative depth.</li>
              <li>Narrative games can become overly text-heavy if interaction is not carefully balanced with discovery.</li>
              <li>The goal was to design a compact, replayable structure where each floor operates as a self-contained surreal puzzle contributing to a larger progression system.</li>
              <li>The prototype needed to remain feasible for a solo creator while providing clear paths for expansion.</li>
            </ul>
          </CaseStudySection>

          <CaseStudySection title="Target users">
            <ul className="list-disc space-y-3 pl-5 text-slate-700">
              <li>Players interested in surreal horror</li>
              <li>Narrative puzzle game players</li>
              <li>Mobile horror audiences</li>
              <li>Players who enjoy liminal spaces, analog horror, and rule-based mysteries</li>
              <li>Fans of compact but layered indie games</li>
            </ul>
          </CaseStudySection>

          <CaseStudySection title="Core concept">
            <p className="text-slate-700">The elevator functions as the primary interface. Each floor is a rule-based narrative chamber: the player observes, interacts, triggers anomalies, and is slowly registered by the building. This structure emphasizes discovery and environmental logic over exposition.</p>
          </CaseStudySection>

          <CaseStudySection title="Player state system">
            <p className="text-slate-700">I designed a four-state progression to track how the building perceives the player:</p>
            <ul className="list-disc space-y-2 pl-5 text-slate-700">
              {playerStates.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <p className="mt-2 text-slate-700">This system records how much the player has been noticed, recorded, absorbed, or transformed by the environment, and it feeds back into floor behaviors and narrative beats.</p>
          </CaseStudySection>

          <CaseStudySection title="Level design framework">
            <p className="text-slate-700">Each floor was broken down into modular components to keep design consistent and scalable:</p>
            <ul className="list-disc space-y-2 pl-5 text-slate-700">
              {levelFramework.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </CaseStudySection>

          <CaseStudySection title="Example prototype floor — Floor 01">
            <ul className="list-disc space-y-2 pl-5 text-slate-700">
              {exampleFloor.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </CaseStudySection>

          <CaseStudySection title="Key product / UX decisions">
            <ul className="list-disc space-y-3 pl-5 text-slate-700">
              <li>Elevator as the main navigation system to focus player attention.</li>
              <li>Favor rule discovery over tutorial-heavy explanation to preserve mystery.</li>
              <li>Adopt modular floors for scalable production and iterative content design.</li>
              <li>Use player-state progression as emotional and mechanical feedback.</li>
            </ul>
          </CaseStudySection>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-10">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-600">Prototype placeholders</p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-dashed border-slate-300 bg-white px-6 py-10 text-center text-slate-600 shadow-sm">Elevator interface</div>
              <div className="rounded-[1.75rem] border border-dashed border-slate-300 bg-white px-6 py-10 text-center text-slate-600 shadow-sm">Resident board</div>
              <div className="rounded-[1.75rem] border border-dashed border-slate-300 bg-white px-6 py-10 text-center text-slate-600 shadow-sm">Hallway interaction</div>
              <div className="rounded-[1.75rem] border border-dashed border-slate-300 bg-white px-6 py-10 text-center text-slate-600 shadow-sm">Floor rule system</div>
              <div className="rounded-[1.75rem] border border-dashed border-slate-300 bg-white px-6 py-10 text-center text-slate-600 shadow-sm">Player-state progression</div>
            </div>
          </div>

          <CaseStudySection title="Skills demonstrated">
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Game UX",
                "Interactive narrative design",
                "Systems thinking",
                "Level design",
                "Mobile prototype planning",
                "Unity workflow",
                "Horror pacing",
                "Bilingual narrative structure",
              ].map((skill) => (
                <div key={skill} className="rounded-3xl border border-slate-200 bg-white px-5 py-4 text-slate-700">
                  {skill}
                </div>
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection title="Next steps">
            <ul className="list-disc space-y-3 pl-5 text-slate-700">
              <li>Refine Floor 01 onboarding</li>
              <li>Build Floor 02 with stronger contrast</li>
              <li>Add player-state UI feedback</li>
              <li>Add audio cues and environmental storytelling</li>
              <li>Test whether players understand rule discovery without over-explanation</li>
              <li>Package the first chapter as a playable vertical slice</li>
            </ul>
          </CaseStudySection>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
