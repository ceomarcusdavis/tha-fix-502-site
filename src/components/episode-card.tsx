import { Link } from "@tanstack/react-router";
import { Play } from "lucide-react";
import type { Episode } from "@/data/content";

export function EpisodeCard({ ep, size = "md" }: { ep: Episode; size?: "sm" | "md" | "lg" }) {
  const widths = {
    sm: "min-w-[260px] w-[260px]",
    md: "min-w-[340px] w-[340px]",
    lg: "min-w-[420px] w-[420px]",
  };
  return (
    <Link
      to="/watch/$slug"
      params={{ slug: ep.slug }}
      className={`${widths[size]} group block`}
    >
      <div className="relative aspect-video overflow-hidden rounded-sm border border-border bg-surface mb-3">
        <img
          src={ep.image}
          alt={ep.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-80" />
        <div className="absolute top-2 left-2 bg-background/80 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest px-2 py-1 text-brand">
          S{ep.season} • E{ep.number}
        </div>
        <div className="absolute bottom-2 right-2 bg-background/80 backdrop-blur-sm text-[10px] font-medium px-2 py-1">
          {ep.duration}
        </div>
        <div className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="size-14 rounded-full bg-brand text-brand-foreground grid place-items-center">
            <Play className="w-5 h-5 fill-current" />
          </div>
        </div>
      </div>
      <div className="flex items-start justify-between gap-3">
        <div className="w-full">
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">
            {ep.releasedAt} · {ep.views} Plays
          </p>
          <h3 className="font-display font-bold text-base leading-tight group-hover:text-accent transition-colors">
            {ep.title}
          </h3>
        </div>
      </div>
      <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
        {ep.category} · with {ep.guest}
      </p>
    </Link>
  );
}