type SkillsGridProps = {
  skills: string[];
};

export function SkillsGrid({ skills }: SkillsGridProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((skill) => (
        <div key={skill} className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-800 shadow-sm">
          {skill}
        </div>
      ))}
    </div>
  );
}
