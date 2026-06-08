import type { ReactNode } from "react";

type PrototypeMockupProps = {
  title: string;
  children: ReactNode;
};

function PrototypeMockup({ title, children }: PrototypeMockupProps) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-4 pb-4">
        <p className="text-sm uppercase tracking-[0.32em] text-slate-600">{title}</p>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs uppercase tracking-[0.28em] text-slate-600 ring-1 ring-slate-200">
          Prototype mockup
        </span>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
      <p className="text-[0.65rem] uppercase tracking-[0.32em] text-slate-500">{label}</p>
      <p className="mt-2 font-semibold text-slate-950">{value}</p>
    </div>
  );
}

function BulletCard({ title, detail }: { title: string; detail: string }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 shadow-sm">
      <p className="font-semibold text-slate-950">{title}</p>
      <p className="mt-2 text-xs text-slate-600">{detail}</p>
    </div>
  );
}

function AnalyticsPanel({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
      <p className="uppercase tracking-[0.28em] text-slate-500">{label}</p>
      <p className="mt-2 text-lg font-semibold text-slate-950">{value}</p>
    </div>
  );
}

export function AiContentPipelineMockups() {
  return (
    <div className="space-y-10">
      <div className="grid gap-10 lg:grid-cols-2">
        <PrototypeMockup title="Concept input">
          <div className="space-y-4 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
            <InfoItem label="Concept seed" value="A person finds a video file that should not exist." />
            <InfoItem label="Format" value="Short-form horror" />
            <InfoItem label="Platform" value="YouTube Shorts / TikTok" />
            <InfoItem label="Tone" value="uncanny, restrained, found-footage" />
            <button className="mt-4 inline-flex w-full items-center justify-center rounded-3xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              Generate workflow
            </button>
          </div>
        </PrototypeMockup>

        <PrototypeMockup title="Hook and script output">
          <div className="space-y-4 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
            <div className="space-y-3 rounded-3xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-950">Hook options</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>• A lost file appears in your gallery at midnight.</li>
                <li>• The tape is labeled with a name you do not recognize.</li>
                <li>• Every viewer says the ending changes.</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
              <p className="font-semibold text-slate-950">Script preview</p>
              <p className="mt-2">You open the file, and the screen flickers. The voice says, “This should not exist.”</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <BulletCard title="Pacing notes" detail="Keep scenes short, build tension with silence." />
              <BulletCard title="3-sec retention" detail="Show the strange file name immediately." />
            </div>
          </div>
        </PrototypeMockup>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        <PrototypeMockup title="Shot list">
          <div className="space-y-3 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
            {[
              "Opening object",
              "Screen recording",
              "File name close-up",
              "Playback glitch",
              "Impossible frame",
              "Reaction silence",
              "Final reveal",
            ].map((item) => (
              <div key={item} className="rounded-3xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
                <p className="font-semibold text-slate-950">{item}</p>
              </div>
            ))}
          </div>
        </PrototypeMockup>

        <PrototypeMockup title="Visual prompt board">
          <div className="space-y-4 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
            {[
              {
                title: 'Frame description',
                detail: 'Dim room, blinking screen, low angle',
              },
              {
                title: 'Camera style',
                detail: 'Handheld, slightly skewed, close focus',
              },
              {
                title: 'Lighting',
                detail: 'Muted, cool shadows, tungsten spill',
              },
              {
                title: 'Continuity notes',
                detail: 'Match screen reflections across cuts',
              },
              {
                title: 'Negative prompt',
                detail: 'No overt gore, no text overlays',
              },
            ].map((card) => (
              <div key={card.title} className="rounded-3xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
                <p className="font-semibold text-slate-950">{card.title}</p>
                <p className="mt-2 text-xs text-slate-600">{card.detail}</p>
              </div>
            ))}
          </div>
        </PrototypeMockup>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        <PrototypeMockup title="Editing checklist">
          <div className="space-y-3 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
            {[
              'First-frame clarity',
              'Sound cue',
              'Silence beat',
              'Subtitle timing',
              'Cut before over-explanation',
              'Thumbnail still selected',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-3xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
                <div className="mt-1 h-4 w-4 rounded-full border border-slate-300 bg-slate-100" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </PrototypeMockup>

        <PrototypeMockup title="Performance review">
          <div className="space-y-4 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
            <AnalyticsPanel label="Hook retention" value="72%" />
            <AnalyticsPanel label="Completion rate" value="54%" />
            <AnalyticsPanel label="Rewatch signal" value="18%" />
            <AnalyticsPanel label="Comment pattern" value="Mystery / uncanny" />
            <div className="rounded-3xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
              <p className="font-semibold text-slate-950">Next iteration note</p>
              <p className="mt-2 text-xs text-slate-600">Increase first-second intrigue and tighten the final reveal.</p>
            </div>
          </div>
        </PrototypeMockup>
      </div>
    </div>
  );
}
