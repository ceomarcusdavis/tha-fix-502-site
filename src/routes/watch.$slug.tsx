import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Play, Share2, Heart, Calendar, Clock } from "lucide-react";
import { episodes } from "@/data/content";
import { EpisodeCard } from "@/components/episode-card";

export const Route = createFileRoute("/watch/$slug")({
  loader: ({ params }) => {
    const ep = episodes.find((e) => e.slug === params.slug);
    if (!ep) throw notFound();
    return ep;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Tha Fix` },
          { name: "description", content: loaderData.description },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.description },
          { property: "og:image", content: loaderData.image },
          { name: "twitter:image", content: loaderData.image },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center px-6">
      <div className="text-center">
        <h1 className="font-display text-4xl font-bold mb-3">Episode not found</h1>
        <Link to="/watch" className="text-brand uppercase tracking-widest text-xs font-bold">Browse all episodes →</Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen grid place-items-center px-6">
      <div className="text-center">
        <h1 className="font-display text-3xl font-bold mb-3">Something went wrong</h1>
        <p className="text-muted-foreground">{error.message}</p>
      </div>
    </div>
  ),
  component: EpisodePage,
});

function EpisodePage() {
  const ep = Route.useLoaderData();
  const related = episodes.filter((e) => e.slug !== ep.slug).slice(0, 3);
  return (
    <>
      <section className="pt-24 pb-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="aspect-video relative bg-surface border border-border overflow-hidden group cursor-pointer">
            <img src={ep.image} alt={ep.title} className="w-full h-full object-cover" width={1920} height={1080} />
            <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors" />
            <div className="absolute inset-0 grid place-items-center">
              <div className="size-20 md:size-24 rounded-full bg-brand text-brand-foreground grid place-items-center group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 fill-current" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 bg-background/85 backdrop-blur-sm px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest">
              S{ep.season} · E{ep.number}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-3">{ep.category}</div>
            <h1 className="font-display text-4xl md:text-6xl font-black tracking-tighter leading-[0.95] mb-6 text-balance">
              {ep.title}
            </h1>
            <div className="flex flex-wrap gap-5 text-xs uppercase tracking-widest text-muted-foreground mb-8">
              <span className="inline-flex items-center gap-2"><Calendar className="w-3.5 h-3.5" />{ep.releasedAt}</span>
              <span className="inline-flex items-center gap-2"><Clock className="w-3.5 h-3.5" />{ep.duration}</span>
              <span>{ep.views} Plays</span>
            </div>
            <p className="text-lg leading-relaxed text-foreground/80 mb-8">{ep.description}</p>
            <p className="text-muted-foreground leading-relaxed">
              In this episode the hosts go deep with {ep.guest} on what shaped their path, the moments that
              changed everything, and the message they carry forward. Real talk, no filter. We lived it.
              Now we talk it.
            </p>
            <div className="flex gap-3 mt-10">
              <button className="inline-flex items-center gap-2 bg-surface border border-border px-5 py-3 text-xs font-bold uppercase tracking-widest hover:border-accent">
                <Share2 className="w-4 h-4" /> Share
              </button>
              <button className="inline-flex items-center gap-2 bg-surface border border-border px-5 py-3 text-xs font-bold uppercase tracking-widest hover:border-accent">
                <Heart className="w-4 h-4" /> Save
              </button>
            </div>
          </div>
          <aside className="space-y-6">
            <div className="bg-surface border border-border p-6">
              <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand mb-2">Featuring</div>
              <h3 className="font-display text-2xl font-bold mb-1">{ep.guest}</h3>
              <p className="text-sm text-muted-foreground">Hosted by {ep.host}</p>
            </div>
            <Link to="/memberships" className="block bg-brand text-brand-foreground p-6 hover:bg-[#6A33A5] transition-colors">
              <div className="text-[11px] font-bold uppercase tracking-[0.3em] opacity-70 mb-2">Members Get More</div>
              <h3 className="font-display text-2xl font-bold mb-3">Unlock the uncut version</h3>
              <p className="text-sm opacity-80 mb-4">Extended interview, post-show debrief, and full member archive.</p>
              <span className="text-xs font-bold uppercase tracking-widest border-b border-current pb-0.5">Become a Member →</span>
            </Link>
            <Link to="/shop" className="block bg-surface border border-border p-6 hover:border-accent transition-colors">
              <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand mb-2">Wear It</div>
              <h3 className="font-display text-lg font-bold">Shop episode-inspired drops</h3>
            </Link>
          </aside>
        </div>
      </section>

      <section className="py-16 border-t border-border">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-2">Up Next</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-10">More to watch</h2>
          <div className="grid md:grid-cols-3 gap-x-6 gap-y-10">
            {related.map((r) => (
              <EpisodeCard key={r.slug} ep={r} size="lg" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}