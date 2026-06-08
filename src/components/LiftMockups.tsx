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

function InfoBadge({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
      <p className="text-[0.65rem] uppercase tracking-[0.32em] text-slate-500">{label}</p>
      <p className="mt-2 font-semibold text-slate-950">{value}</p>
    </div>
  );
}

function Tile({ children }: { children: ReactNode }) {
  return <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">{children}</div>;
}

export function LiftMockups() {
  return (
    <div className="space-y-10">
      <div className="grid gap-10 lg:grid-cols-2">
        <PrototypeMockup title="Elevator interface">
          <div className="space-y-5 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
            <div className="rounded-3xl bg-slate-950 px-4 py-3 text-white">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.32em] text-slate-300">
                <span>Elevator panel</span>
                <span>Floor 01</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {['1','2','3','B','?'].map((button) => (
                <button
                  key={button}
                  className="rounded-3xl bg-white py-4 text-lg font-semibold text-slate-950 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-100"
                >
                  {button}
                </button>
              ))}
            </div>
            <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
              <p className="uppercase tracking-[0.28em] text-slate-500">Status</p>
              <p className="font-semibold text-slate-950">Passenger</p>
              <p className="text-xs text-slate-500">Press E / Tap to inspect</p>
            </div>
          </div>
        </PrototypeMockup>

        <PrototypeMockup title="Resident board anomaly">
          <div className="space-y-4 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
            <div className="space-y-3">
              {[
                { label: '101', name: 'Chen', status: '' },
                { label: '102', name: 'Vacant', status: 'Anomaly' },
                { label: '103', name: 'Wang', status: '' },
                { label: '104', name: 'Lee', status: '' },
              ].map((resident) => (
                <div key={resident.label} className="flex items-center justify-between rounded-3xl border border-slate-200 bg-white px-4 py-3">
                  <div>
                    <p className="text-sm font-semibold text-slate-950">{resident.label}</p>
                    <p className="text-xs text-slate-500">{resident.name}</p>
                  </div>
                  {resident.status ? (
                    <span className="rounded-full bg-amber-100 px-3 py-1 text-[0.65rem] uppercase tracking-[0.28em] text-amber-700">
                      {resident.status}
                    </span>
                  ) : null}
                </div>
              ))}
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm text-slate-600">
              <p className="font-medium text-slate-950">102 remains listed as vacant.</p>
            </div>
          </div>
        </PrototypeMockup>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        <PrototypeMockup title="Hallway interaction system">
          <div className="space-y-5 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
            <div className="grid gap-4">
              <div className="rounded-3xl border border-slate-200 bg-white p-4">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Door 101</p>
                <p className="mt-2 text-lg font-semibold text-slate-950">Chen</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-4">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Door 102</p>
                <p className="mt-2 text-lg font-semibold text-slate-950">Vacant</p>
              </div>
              <div className="grid grid-cols-[1fr_auto] gap-4">
                <div className="rounded-3xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
                  <p className="uppercase tracking-[0.28em] text-slate-500">Package</p>
                  <p className="mt-2 font-semibold text-slate-950">Parcel crate</p>
                </div>
                <button className="rounded-3xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                  Doorbell
                </button>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-100 p-4 text-sm text-slate-700">
                <p className="font-semibold text-slate-950">Inspection note</p>
                <p className="mt-1 text-slate-600">A package and corridor detail hint at whether the player can proceed.</p>
              </div>
            </div>
          </div>
        </PrototypeMockup>

        <PrototypeMockup title="Floor rule system">
          <div className="space-y-4 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
            {[
              "Observe board",
              "Ring doorbell",
              "Trigger anomaly",
              "Re-check board",
              "Unlock elevator condition",
            ].map((step, index) => (
              <div key={step} className="flex items-center gap-4 text-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 text-xs font-semibold text-white">
                  {index + 1}
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-4 text-slate-700">
                  {step}
                </div>
              </div>
            ))}
          </div>
        </PrototypeMockup>
      </div>

      <PrototypeMockup title="Player-state progression">
        <div className="grid gap-4 sm:grid-cols-4">
          {[
            { state: 'Passenger', description: 'unrecorded visitor' },
            { state: 'Recognized', description: 'noticed by the building' },
            { state: 'Integrated', description: 'rules begin to include the player' },
            { state: 'Resident', description: 'no longer leaving' },
          ].map((item) => (
            <div key={item.state} className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
              <p className="font-semibold text-slate-950">{item.state}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.28em] text-slate-500">{item.description}</p>
            </div>
          ))}
        </div>
      </PrototypeMockup>
    </div>
  );
}
