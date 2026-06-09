type CaseStudySectionProps = {
  title: string;
  children: React.ReactNode;
};

export function CaseStudySection({ title, children }: CaseStudySectionProps) {
  return (
    <section className="space-y-5 border-t border-slate-200 pt-10 first:border-t-0 first:pt-0">
      <p className="text-[0.66rem] uppercase tracking-[0.34em] text-slate-500">Case study section</p>
      <h3 className="text-xl font-semibold tracking-tight text-slate-950">{title}</h3>
      <div className="space-y-4 text-slate-700">{children}</div>
    </section>
  );
}
