import { createFileRoute, Link } from "@tanstack/react-router";
import { sponsors } from "@/data/content";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/sponsors")({
  head: () => ({
    meta: [
      { title: "Sponsors & Partners — Tha Fix" },
      { name: "description", content: "The brands that stand with us, and how your brand can too." },
      { property: "og:title", content: "Sponsors & Partners — Tha Fix" },
      { property: "og:description", content: "Sponsors and partnerships." },
    ],
  }),
  component: SponsorsPage,
});

function SponsorsPage() {
  return (
    <>
      <PageHero eyebrow="Sponsors & Partners" title="Brands that stand with us." description="The partners powering the network — and how your brand can join the conversation." />
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {sponsors.map((s) => (
            <div key={s} className="bg-background aspect-[3/2] grid place-items-center p-6">
              <span className="font-display font-black text-base md:text-xl tracking-tight text-foreground/50">{s}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="py-20 border-t border-border bg-surface">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-4">Partner With Us</div>
          <h2 className="font-display text-4xl md:text-5xl font-black tracking-tighter mb-5">Reach the audience that listens.</h2>
          <p className="text-muted-foreground mb-8">Our audience trusts our voice. If your brand has a story worth telling, let's talk.</p>
          <Link to="/contact" className="inline-block bg-brand text-brand-foreground px-8 py-4 font-bold uppercase tracking-widest text-sm hover:brightness-110">
            Talk to Partnerships
          </Link>
        </div>
      </section>
    </>
  );
}