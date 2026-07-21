import { Link } from "@tanstack/react-router";
import type { BlogPost } from "@/data/content";

export function BlogCard({ post, size = "md" }: { post: BlogPost; size?: "sm" | "md" | "lg" }) {
  const widths = {
    sm: "min-w-[260px] w-[260px]",
    md: "min-w-[340px] w-[340px]",
    lg: "min-w-[420px] w-[420px]",
  };
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: post.slug }}
      className={`${widths[size]} group block`}
    >
      <div className="relative aspect-[5/4] overflow-hidden rounded-sm border border-border bg-surface mb-4">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-70" />
        <div className="absolute top-2 left-2 bg-background/85 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest px-2 py-1 text-brand">
          {post.category}
        </div>
        <div className="absolute bottom-2 right-2 bg-background/85 backdrop-blur-sm text-[10px] font-medium px-2 py-1">
          {post.read} read
        </div>
      </div>
      <h3 className="font-display font-bold text-lg leading-tight group-hover:text-accent transition-colors">
        {post.title}
      </h3>
      <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
        By {post.author} · {post.publishedAt}
      </p>
    </Link>
  );
}