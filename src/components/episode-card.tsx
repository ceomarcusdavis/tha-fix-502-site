import { Link } from "@tanstack/react-router";
import { Play } from "lucide-react";
import {
  formatDuration,
  formatPublishedDate,
  getPrimaryCredit,
  getPublicAssetUrl,
  type PublicContentCard,
} from "@/lib/public-content";

export function EpisodeCard({
  ep,
  size = "md",
  memberOnly = false,
  badge,
}: {
  ep: PublicContentCard;
  size?: "sm" | "md" | "lg";
  memberOnly?: boolean;
  badge?: string | null;
}) {
  const widths = {
    sm: "min-w-[260px] w-[260px]",
    md: "min-w-[340px] w-[340px]",
    lg: "min-w-[420px] w-[420px]",
  };
  const image = getPublicAssetUrl(ep.primary_media_public_url_path);
  const guest = getPrimaryCredit(ep, "guest");
  const formatLabel = ep.format_code === "episode" ? "Full Episode" : "Clip";
  const category = ep.primary_topic_name || ep.primary_category_name || formatLabel;

  return (
    <Link
      to={memberOnly ? "/watch/member/$slug" : "/watch/$slug"}
      params={{ slug: ep.slug }}
      className={`${widths[size]} group block max-w-full`}
    >
      <div className="relative aspect-video overflow-hidden rounded-sm border border-border bg-surface mb-3">
        {image ? (
          <img
            src={image}
            alt={ep.primary_media_alt_text || ep.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full grid place-items-center text-xs font-bold uppercase tracking-widest text-muted-foreground">
            {formatLabel}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-80" />
        <div className="absolute top-2 left-2 bg-background/80 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest px-2 py-1 text-brand">
          {badge || (ep.season_number != null && ep.episode_number != null
            ? `S${ep.season_number} • E${ep.episode_number}`
            : formatLabel)}
        </div>
        <div className="absolute bottom-2 right-2 bg-background/80 backdrop-blur-sm text-[10px] font-medium px-2 py-1">
          {formatDuration(ep.duration_seconds)}
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
            {formatPublishedDate(ep.published_at)}
          </p>
          <h3 className="font-display font-bold text-base leading-tight group-hover:text-accent transition-colors">
            {ep.title}
          </h3>
        </div>
      </div>
      <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
        {category}
        {guest ? ` · with ${guest.display_name}` : ""}
      </p>
    </Link>
  );
}
