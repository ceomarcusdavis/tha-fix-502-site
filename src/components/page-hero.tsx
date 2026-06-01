export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 border-b border-border overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_oklch(0.22_0.04_75_/_0.3),_transparent_60%)]" />
      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-10">
        <div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-4">{eyebrow}</div>
        <h1 className="font-display text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] max-w-4xl text-balance">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">{description}</p>
        )}
      </div>
    </section>
  );
}