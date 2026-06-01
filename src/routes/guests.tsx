import { createFileRoute } from "@tanstack/react-router";
import { guests } from "@/data/content";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/guests")({
  head: () => ({
    meta: [
      { title: "Guests — Tha Fix" },
      { name: "description", content: "Real people, real perspective. Meet the guests of Tha Fix." },
      { property: "og:title", content: "Guests — Tha Fix" },
      { property: "og:description", content: "Meet the guests of Tha Fix." },
    ],
  }),
  component: GuestsPage,
});

function GuestsPage() {
  return (
    <>
      <PageHero eyebrow="Guests" title="The voices we sit down with." description="Founders. Athletes. Faith leaders. Organizers. Everyday people with extraordinary stories." />
      <section className="py-16">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {guests.map((g) => (
            <div key={g.slug} className="group">
              <div className="aspect-[3/4] overflow-hidden bg-surface border border-border mb-4">
                <img src={g.image} alt={g.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <h2 className="font-display text-2xl font-bold">{g.name}</h2>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{g.title}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}