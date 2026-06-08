type CaseStudySectionProps = {
  title: string;
  children: React.ReactNode;
};

export function CaseStudySection({ title, children }: CaseStudySectionProps) {
  return (
    <section className="space-y-4">
      <h3 className="text-lg font-semibold tracking-[0.03em] text-slate-950">{title}</h3>
      <div className="space-y-4 text-slate-700">{children}</div>
    </section>
  );
}
