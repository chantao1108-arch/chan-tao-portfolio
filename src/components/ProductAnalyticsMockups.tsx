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
          Simulated analytics mockup
        </span>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function DataCell({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">{children}</div>
  );
}

function StatusTag({ label }: { label: string }) {
  return (
    <span className="rounded-full bg-slate-100 px-2 py-1 text-[0.65rem] uppercase tracking-[0.28em] text-slate-500 ring-1 ring-slate-200">
      {label}
    </span>
  );
}

export function ProductAnalyticsMockups() {
  return (
    <div className="space-y-10">
      <PrototypeMockup title="Simulated dataset table">
        <div className="overflow-x-auto rounded-[1.75rem] border border-slate-200 bg-slate-50">
          <table className="min-w-full border-collapse text-left text-sm text-slate-700">
            <thead className="bg-slate-100 text-slate-500">
              <tr>
                {[
                  "user_id",
                  "traffic_source",
                  "created_project",
                  "generated_analysis",
                  "opened_board_builder",
                  "saved_board",
                  "exported_board",
                  "retained_7d",
                  "plan_type",
                ].map((header) => (
                  <th key={header} className="border-b border-slate-200 px-3 py-3 font-medium uppercase tracking-[0.15em]">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["u001", "organic", "1", "1", "1", "0", "0", "0", "free"],
                ["u002", "ad", "1", "1", "1", "1", "0", "1", "starter"],
                ["u003", "referral", "1", "1", "0", "0", "0", "0", "free"],
                ["u004", "organic", "1", "1", "1", "1", "1", "1", "starter"],
                ["u005", "social", "1", "1", "1", "0", "0", "0", "free"],
                ["u006", "ad", "1", "0", "0", "0", "0", "0", "free"],
              ].map((row, rowIndex) => (
                <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="border-b border-slate-200 px-3 py-3">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </PrototypeMockup>

      <PrototypeMockup title="Activation funnel">
        <div className="space-y-4 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
          {[
            { step: "Landing page visit", value: "100%" },
            { step: "Sign up", value: "65%" },
            { step: "Create project", value: "52%" },
            { step: "Generate analysis", value: "48%" },
            { step: "Open Board Builder", value: "31%" },
            { step: "Save board", value: "22%" },
            { step: "Export/share", value: "14%" },
          ].map((item, index) => (
            <div key={item.step} className="flex items-center gap-4 text-sm text-slate-700">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600">{index + 1}</div>
              <div className="min-w-[150px] font-semibold text-slate-950">{item.step}</div>
              <div className="flex-1 h-2 rounded-full bg-slate-200">
                <div className={`h-2 rounded-full bg-slate-950`} style={{ width: item.value }} />
              </div>
              <span className="text-xs uppercase tracking-[0.28em] text-slate-500">simulated {item.value}</span>
            </div>
          ))}
        </div>
      </PrototypeMockup>

      <PrototypeMockup title="Board Builder adoption comparison">
        <div className="grid gap-4 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 sm:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
            <p className="font-semibold text-slate-950">Opened Board Builder</p>
            <p className="mt-3 text-3xl font-semibold text-slate-950">31%</p>
            <p className="mt-2 text-xs text-slate-500">Simulated users who took the next organizational step.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
            <p className="font-semibold text-slate-950">Stopped after AI output</p>
            <p className="mt-3 text-3xl font-semibold text-slate-950">17%</p>
            <p className="mt-2 text-xs text-slate-500">Simulated users who did not move into board creation.</p>
          </div>
          <div className="sm:col-span-2 rounded-3xl border border-slate-200 bg-slate-100 p-4 text-sm text-slate-700">
            <p className="font-semibold text-slate-950">Retention signal note</p>
            <p className="mt-2 text-xs text-slate-500">A higher Board Builder rate may indicate a stronger path toward longer-term retention.</p>
          </div>
        </div>
      </PrototypeMockup>

      <PrototypeMockup title="Example SQL queries">
        <div className="space-y-3 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
          {[
            "SELECT COUNT(DISTINCT user_id) FILTER (WHERE created_project = 1) * 1.0 / COUNT(DISTINCT user_id) AS activation_rate;",
            "SELECT COUNT(DISTINCT user_id) FILTER (WHERE opened_board_builder = 1) * 1.0 / COUNT(DISTINCT user_id) AS board_builder_adoption;",
            "SELECT COUNT(*) FILTER (WHERE exported_board = 1) * 1.0 / COUNT(*) AS export_rate;",
            "SELECT plan_type, AVG(retained_7d) AS retention_rate FROM events GROUP BY plan_type;",
          ].map((snippet) => (
            <pre key={snippet} className="overflow-x-auto rounded-3xl border border-slate-200 bg-white p-4 text-sm text-slate-700">{snippet}</pre>
          ))}
        </div>
      </PrototypeMockup>

      <PrototypeMockup title="Product insight cards">
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            "Generation is not the activation moment",
            "Saved board is a stronger value signal",
            "Board Builder needs stronger handoff",
            "Export behavior may indicate conversion intent",
          ].map((insight) => (
            <div key={insight} className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
              <p className="font-semibold text-slate-950">{insight}</p>
            </div>
          ))}
        </div>
      </PrototypeMockup>

      <PrototypeMockup title="Event tracking plan">
        <div className="grid gap-3 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
          {[
            "landing_viewed",
            "signup_completed",
            "project_created",
            "analysis_generated",
            "board_builder_opened",
            "board_saved",
            "board_exported",
            "critique_checklist_opened",
            "retained_7d",
          ].map((event) => (
            <div key={event} className="flex items-center justify-between rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
              <span>{event}</span>
              <StatusTag label="event" />
            </div>
          ))}
        </div>
      </PrototypeMockup>
    </div>
  );
}
