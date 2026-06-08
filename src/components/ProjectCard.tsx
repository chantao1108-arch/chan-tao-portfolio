import Link from "next/link";
import type { Project } from "@/src/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group">
      <Link href={project.path} className="block rounded-4xl border border-slate-300/70 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
        <div className="flex h-52 items-center justify-center rounded-3xl border border-slate-200 bg-slate-100 text-sm uppercase tracking-[0.24em] text-slate-500">
          Screenshot placeholder
        </div>
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
        </div>
      </Link>
    </article>
  );
}
