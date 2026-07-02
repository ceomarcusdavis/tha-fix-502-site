import { createFileRoute } from "@tanstack/react-router";
import { episodes } from "@/data/content";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Tha Fix" },
      { name: "description", content: "Notes from the network. Long-form writing, episode breakdowns, and community essays." },
      { property: "og:title", content: "Blog — Tha Fix" },
      { property: "og:description", content: "Notes from the network." },
    ],
  }),
  component: BlogPage,
});

const posts = [
  { title: "Why community conversation outlasts the news cycle", category: "Essay", read: "6 min", excerpt: "Hot takes fade in a week. The conversations that matter happen at the kitchen table." },
  { title: "Five episodes that changed how we see leadership", category: "Roundup", read: "8 min", excerpt: "A retrospective on the moments that reframed what real leadership looks like." },
  { title: "Notes from the road: Atlanta kickoff", category: "Field Notes", read: "5 min", excerpt: "The first night of the summer tour, in the hosts' own words." },
];

function BlogPage() {
  return (
    <>
      <PageHero eyebrow="Blog" title="Notes from the network." description="Long-form writing, episode breakdowns, and conversations we couldn't fit on the mic." />
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((p, i) => (
            <article key={p.title} className="group cursor-pointer">
              <div className="aspect-[5/4] overflow-hidden bg-surface border border-border mb-5">
                <img src={episodes[i % episodes.length].image} alt="" loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex gap-4 text-xs uppercase tracking-widest text-brand font-bold mb-3">
                <span>{p.category}</span><span className="text-muted-foreground">{p.read} read</span>
              </div>
              <h2 className="font-display text-2xl font-bold leading-tight mb-3 group-hover:text-accent transition-colors">{p.title}</h2>
              <p className="text-sm text-muted-foreground">{p.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}