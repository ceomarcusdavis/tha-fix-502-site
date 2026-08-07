import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { ContentRail } from "@/components/content-rail";
import { EpisodeCard } from "@/components/episode-card";
import { PageHero } from "@/components/page-hero";
import { getContentPlacements, getWatchFeed } from "@/lib/public-content";

export const Route = createFileRoute("/watch/")({
  head: () => ({
    meta: [
      { title: "Watch Episodes — Tha Fix" },
      {
        name: "description",
        content:
          "The full archive of Tha Fix. Filter by topic, search by guest, or just hit play.",
      },
      { property: "og:title", content: "Watch Episodes — Tha Fix" },
      {
        property: "og:description",
        content:
          "The full archive of Tha Fix. Filter by topic, search by guest, or just hit play.",
      },
    ],
  }),
  component: WatchPage,
});

type FormatFilter = "all" | "episode" | "clip";

function WatchPage() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [format, setFormat] = useState<FormatFilter>("all");
  const [topic, setTopic] = useState("all");

  useEffect(() => {
    const timer = window.setTimeout(() => setDebouncedQuery(query.trim()), 400);
    return () => window.clearTimeout(timer);
  }, [query]);

  const featuredQuery = useQuery({
    queryKey: ["public-watch-featured"],
    queryFn: () => getContentPlacements(["watch_featured"]),
    staleTime: 5 * 60 * 1000,
  });

  const topicsQuery = useQuery({
    queryKey: ["public-watch-topics"],
    queryFn: () => getWatchFeed({ limit: 100 }),
    staleTime: 5 * 60 * 1000,
  });

  const feedQuery = useQuery({
    queryKey: ["public-watch-feed", format, topic, debouncedQuery],
    queryFn: () =>
      getWatchFeed({
        formatCode: format === "all" ? null : format,
        topicSlug: topic === "all" ? null : topic,
        search: debouncedQuery || null,
        limit: 24,
      }),
  });

  const topics = useMemo(() => {
    const topicMap = new Map<string, string>();
    for (const item of topicsQuery.data ?? []) {
      for (const itemTopic of item.topics) {
        topicMap.set(itemTopic.topic_slug, itemTopic.topic_name);
      }
    }
    return [...topicMap.entries()].sort((a, b) => a[1].localeCompare(b[1]));
  }, [topicsQuery.data]);

  const featured = useMemo(
    () =>
      (featuredQuery.data ?? [])
        .slice()
        .sort((a, b) => a.placement_position - b.placement_position),
    [featuredQuery.data],
  );

  const hasFilters = format !== "all" || topic !== "all" || query !== "";
  const clearFilters = () => {
    setQuery("");
    setDebouncedQuery("");
    setFormat("all");
    setTopic("all");
  };

  return (
    <>
      <PageHero
        eyebrow="Watch"
        title="Every conversation. Every episode."
        description="The full archive of Tha Fix. Filter by topic, search by guest, or just hit play."
      />

      {featured.length > 0 && (
        <ContentRail
          eyebrow="Featured"
          title="Start with the conversations moving Tha Fix."
          episodes={featured}
          size="md"
        />
      )}

      <section className="py-10 border-y border-border bg-[#F7F8FA]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10 space-y-5">
          <div className="flex flex-col lg:flex-row lg:items-center gap-5">
            <label className="relative flex-1 max-w-xl">
              <span className="sr-only">Search conversations</span>
              <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search conversations, topics, hosts, or guests..."
                className="w-full bg-background border border-border pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-brand"
              />
            </label>

            <div className="flex flex-wrap gap-2" aria-label="Content format">
              {[
                ["all", "All Content"],
                ["episode", "Full Episodes"],
                ["clip", "Clips"],
              ].map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setFormat(value as FormatFilter)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider border transition-colors ${
                    format === value
                      ? "bg-brand text-brand-foreground border-brand"
                      : "border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setTopic("all")}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider border transition-colors ${
                topic === "all"
                  ? "bg-foreground text-background border-foreground"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              All Topics
            </button>
            {topics.map(([slug, name]) => (
              <button
                key={slug}
                type="button"
                onClick={() => setTopic(slug)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider border transition-colors ${
                  topic === slug
                    ? "bg-foreground text-background border-foreground"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {name}
              </button>
            ))}
            {hasFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-brand"
              >
                <X className="w-3.5 h-3.5" /> Clear Filters
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="py-14" aria-live="polite">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="mb-10">
            <div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-2">
              The Archive
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
              Every published conversation
            </h2>
          </div>

          {feedQuery.isPending ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10" aria-hidden="true">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="aspect-video bg-surface border border-border mb-3" />
                  <div className="h-3 w-28 bg-surface mb-3" />
                  <div className="h-5 w-4/5 bg-surface mb-2" />
                  <div className="h-3 w-1/2 bg-surface" />
                </div>
              ))}
            </div>
          ) : feedQuery.isError ? (
            <div className="border border-border bg-surface p-8 text-center">
              <p className="font-display text-2xl font-bold mb-2">
                We couldn’t load these conversations right now.
              </p>
              <p className="text-muted-foreground mb-5">
                Please refresh the page and try again.
              </p>
              <button
                type="button"
                onClick={() => feedQuery.refetch()}
                className="bg-brand text-brand-foreground px-6 py-3 text-xs font-bold uppercase tracking-widest"
              >
                Try Again
              </button>
            </div>
          ) : (feedQuery.data?.length ?? 0) === 0 ? (
            <div className="text-center py-20">
              <p className="font-display text-2xl font-bold mb-2">
                No conversations match those filters yet.
              </p>
              <p className="text-muted-foreground mb-5">
                Try another topic or clear your search.
              </p>
              <button
                type="button"
                onClick={clearFilters}
                className="bg-brand text-brand-foreground px-6 py-3 text-xs font-bold uppercase tracking-widest"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
              {feedQuery.data?.map((content) => (
                <div key={content.content_public_id} className="w-full overflow-hidden">
                  <EpisodeCard ep={content} size="lg" />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
