import { createFileRoute } from "@tanstack/react-router";
import { hosts } from "@/data/content";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/hosts")({
  head: () => ({
    meta: [
      { title: "Hosts — Tha Fix" },
      { name: "description", content: "Meet the hosts of Tha Fix." },
      { property: "og:title", content: "Hosts — Tha Fix" },
      { property: "og:description", content: "Meet the hosts of Tha Fix." },
    ],
  }),
  component: HostsPage,
});

function HostsPage() {
  return (
    <>
      <PageHero eyebrow="The Hosts" title="The voices behind the mic." description="Two perspectives, one mission. Real talk powered by real experience." />
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 space-y-24">
          {hosts.map((h, i) => (
            <div key={h.slug} className={`grid md:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}>
              <div className="aspect-[4/5] overflow-hidden bg-surface border border-border">
                <img src={h.image} alt={h.name} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-3">{h.role}</div>
                <h2 className="font-display text-5xl md:text-7xl font-black tracking-tighter leading-[0.85] mb-6">{h.name}</h2>
                {h.bio.split("\n\n").map((paragraph, idx) => (
                  <p key={idx} className="text-lg text-foreground/80 leading-relaxed mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}