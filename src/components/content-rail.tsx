import type { Episode } from "@/data/content";
import { EpisodeCard } from "./episode-card";
import { Link } from "@tanstack/react-router";

export function ContentRail({
  eyebrow,
  title,
  episodes,
  size = "md",
}: {
  eyebrow: string;
  title: string;
  episodes: Episode[];
  size?: "sm" | "md" | "lg";
}) {
  return (
    <section className="py-14 lg:py-16">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 mb-6 flex items-end justify-between gap-6">
        <div>
          <div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-2">{eyebrow}</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
        </div>
        <Link
          to="/watch"
          className="text-[11px] font-bold uppercase tracking-widest border-b border-brand text-brand pb-1 shrink-0 hover:brightness-110"
        >
          View All
        </Link>
      </div>
      <div className="flex gap-5 overflow-x-auto no-scrollbar pl-6 lg:pl-10 pr-6 lg:pr-10 pb-4">
        {episodes.map((ep) => (
          <EpisodeCard key={ep.slug} ep={ep} size={size} />
        ))}
      </div>
    </section>
  );
}