import Link from "next/link";
import type { Project } from "@/src/data/projects";

type ProjectCardProps = {
  project: Project;
};

function PreviewBadge({ children }: { children: string }) {
  return (
    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.28em] text-slate-500 ring-1 ring-slate-200">
      {children}
    </span>
  );
}

function ProjectPreview({ project }: { project: Project }) {
  if (project.slug === "siteatlas") {
    return (
      <div className="flex h-52 flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-4 text-slate-700">
        <div className="flex items-center justify-between gap-3">
          <PreviewBadge>Prototype preview</PreviewBadge>
          <span className="text-xs uppercase tracking-[0.24em] text-slate-500">AI design tool</span>
        </div>
        <div className="grid gap-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-3">
            <div className="grid gap-2 sm:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-2">
                <div className="h-3 w-24 rounded-full bg-slate-200" />
                <div className="h-8 rounded-2xl border border-slate-200 bg-slate-50" />
              </div>
              <div className="grid gap-2">
                <div className="h-3 w-20 rounded-full bg-slate-200" />
                <div className="h-8 rounded-2xl border border-slate-200 bg-slate-50" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-[1.1fr_0.9fr] gap-3">
            <div className="space-y-2 rounded-2xl border border-slate-200 bg-white p-3">
              <div className="h-3 w-24 rounded-full bg-slate-200" />
              <div className="space-y-2">
                <div className="h-2.5 rounded-full bg-slate-100" />
                <div className="h-2.5 w-5/6 rounded-full bg-slate-100" />
                <div className="h-2.5 w-4/6 rounded-full bg-slate-100" />
              </div>
            </div>
            <div className="space-y-2 rounded-2xl border border-slate-200 bg-white p-3">
              <div className="h-3 w-24 rounded-full bg-slate-200" />
              <div className="grid grid-cols-2 gap-2">
                <div className="h-8 rounded-xl border border-slate-200 bg-slate-50" />
                <div className="h-8 rounded-xl border border-slate-200 bg-slate-50" />
                <div className="h-8 rounded-xl border border-slate-200 bg-slate-50" />
                <div className="h-8 rounded-xl border border-slate-200 bg-slate-50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (project.slug === "lift") {
    return (
      <div className="flex h-52 flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-4 text-slate-700">
        <div className="flex items-center justify-between gap-3">
          <PreviewBadge>Prototype preview</PreviewBadge>
          <span className="text-xs uppercase tracking-[0.24em] text-slate-500">Narrative game system</span>
        </div>
        <div className="grid gap-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-3">
            <div className="flex items-center justify-between">
              <div className="h-10 w-16 rounded-2xl border border-slate-200 bg-slate-50" />
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-center">
                <p className="text-[0.62rem] uppercase tracking-[0.28em] text-slate-500">Floor</p>
                <p className="text-lg font-semibold text-slate-950">01</p>
              </div>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-[0.8fr_1.2fr]">
            <div className="space-y-2 rounded-2xl border border-slate-200 bg-white p-3">
              <div className="h-3 w-24 rounded-full bg-slate-200" />
              <div className="space-y-2">
                <div className="h-2.5 rounded-full bg-slate-100" />
                <div className="h-2.5 w-4/5 rounded-full bg-slate-100" />
                <div className="h-2.5 w-3/5 rounded-full bg-slate-100" />
              </div>
            </div>
            <div className="grid gap-2 rounded-2xl border border-slate-200 bg-white p-3">
              <div className="h-2.5 w-20 rounded-full bg-slate-200" />
              <div className="grid grid-cols-2 gap-2">
                <div className="h-8 rounded-xl border border-slate-200 bg-slate-50" />
                <div className="h-8 rounded-xl border border-slate-200 bg-slate-50" />
                <div className="h-8 rounded-xl border border-slate-200 bg-slate-50" />
                <div className="h-8 rounded-xl border border-slate-200 bg-slate-50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (project.slug === "ai-content-pipeline") {
    return (
      <div className="flex h-52 flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-4 text-slate-700">
        <div className="flex items-center justify-between gap-3">
          <PreviewBadge>Prototype preview</PreviewBadge>
          <span className="text-xs uppercase tracking-[0.24em] text-slate-500">AI workflow</span>
        </div>
        <div className="grid gap-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-3">
            <div className="grid gap-2 sm:grid-cols-3">
              <div className="space-y-2 rounded-2xl border border-slate-200 bg-slate-50 p-2">
                <div className="h-3 w-14 rounded-full bg-slate-200" />
                <div className="h-8 rounded-xl border border-slate-200 bg-white" />
              </div>
              <div className="space-y-2 rounded-2xl border border-slate-200 bg-slate-50 p-2">
                <div className="h-3 w-14 rounded-full bg-slate-200" />
                <div className="h-8 rounded-xl border border-slate-200 bg-white" />
              </div>
              <div className="space-y-2 rounded-2xl border border-slate-200 bg-slate-50 p-2">
                <div className="h-3 w-14 rounded-full bg-slate-200" />
                <div className="h-8 rounded-xl border border-slate-200 bg-white" />
              </div>
            </div>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-3">
              <div className="h-3 w-20 rounded-full bg-slate-200" />
              <div className="mt-2 space-y-2">
                <div className="h-2.5 rounded-full bg-slate-100" />
                <div className="h-2.5 w-5/6 rounded-full bg-slate-100" />
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-3">
              <div className="h-3 w-20 rounded-full bg-slate-200" />
              <div className="mt-2 space-y-2">
                <div className="h-2.5 rounded-full bg-slate-100" />
                <div className="h-2.5 w-4/6 rounded-full bg-slate-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-52 flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-4 text-slate-700">
      <div className="flex items-center justify-between gap-3">
        <PreviewBadge>Simulated preview</PreviewBadge>
        <span className="text-xs uppercase tracking-[0.24em] text-slate-500">Analytics case study</span>
      </div>
      <div className="grid gap-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-3">
          <div className="flex items-end gap-2">
            <div className="h-8 w-4 rounded-t bg-slate-300" />
            <div className="h-12 w-4 rounded-t bg-slate-500" />
            <div className="h-10 w-4 rounded-t bg-slate-400" />
            <div className="h-14 w-4 rounded-t bg-slate-700" />
            <div className="h-9 w-4 rounded-t bg-slate-300" />
          </div>
        </div>
        <div className="grid grid-cols-[1.1fr_0.9fr] gap-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-3">
            <div className="space-y-2">
              <div className="h-2.5 rounded-full bg-slate-100" />
              <div className="h-2.5 w-5/6 rounded-full bg-slate-100" />
              <div className="h-2.5 w-4/6 rounded-full bg-slate-100" />
            </div>
          </div>
          <div className="space-y-2 rounded-2xl border border-slate-200 bg-white p-3">
            <div className="h-3 w-20 rounded-full bg-slate-200" />
            <div className="grid grid-cols-2 gap-2">
              <div className="h-8 rounded-xl border border-slate-200 bg-slate-50" />
              <div className="h-8 rounded-xl border border-slate-200 bg-slate-50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group">
      <Link href={project.path} className="block rounded-4xl border border-slate-300/70 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
        <ProjectPreview project={project} />
        <div className="mt-6 space-y-4">
          <div className="text-xs uppercase tracking-[0.26em] text-slate-600">{project.label}</div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">{project.title}</h2>
          <p className="text-sm leading-7 text-slate-700">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-slate-300/80 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-600">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 text-sm font-semibold text-slate-900">View case study →</div>
        </div>
      </Link>
    </article>
  );
}
