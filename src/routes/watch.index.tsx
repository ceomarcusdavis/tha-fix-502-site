import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { episodes } from "@/data/content";
import { EpisodeCard } from "@/components/episode-card";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/watch/")({
  head: () => ({
    meta: [
      { title: "Watch Episodes — Tha Fix" },
      { name: "description", content: "Browse every episode of Tha Fix. Search by host, guest, category, or season." },
      { property: "og:title", content: "Watch Episodes — Tha Fix" },
      { property: "og:description", content: "Browse every episode of Tha Fix." },
    ],
  }),
  component: WatchPage,
});

const categories = ["All", "Community", "Sports", "Business", "Politics", "Faith", "Culture"];
const sorts = ["Latest", "Popular"] as const;

function WatchPage() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("All");
  const [sort, setSort] = useState<(typeof sorts)[number]>("Latest");

  const filtered = useMemo(() => {
    let list = episodes.filter((e) =>
      (cat === "All" || e.category === cat) &&
      (query === "" ||
        e.title.toLowerCase().includes(query.toLowerCase()) ||
        e.guest.toLowerCase().includes(query.toLowerCase()) ||
        e.host.toLowerCase().includes(query.toLowerCase()))
    );
    if (sort === "Popular") list = list.slice().sort((a, b) => parseFloat(b.views) - parseFloat(a.views));
    return list;
  }, [query, cat, sort]);

  return (
    <>
      <PageHero
        eyebrow="Watch"
        title="Every conversation. Every episode."
        description="The full archive of Tha Fix. Filter by topic, search by guest, or just hit play."
      />
      <section className="py-10 border-b border-border">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10 flex flex-col lg:flex-row lg:items-center gap-5">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search episodes, hosts, guests..."
              className="w-full bg-surface border border-border pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-brand"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider border transition-colors ${
                  cat === c ? "bg-brand text-brand-foreground border-brand" : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="lg:ml-auto flex gap-2">
            {sorts.map((s) => (
              <button
                key={s}
                onClick={() => setSort(s)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider border transition-colors ${
                  sort === s ? "bg-foreground text-background border-foreground" : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="py-14">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          {filtered.length === 0 ? (
            <p className="text-muted-foreground text-center py-20">No episodes match your search.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
              {filtered.map((ep) => (
                <div key={ep.slug} className="w-full">
                  <EpisodeCard ep={ep} size="lg" />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}