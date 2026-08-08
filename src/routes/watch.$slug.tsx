import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Calendar, Clock, ExternalLink } from "lucide-react";
import { EpisodeCard } from "@/components/episode-card";
import { useMembershipAccess } from "@/hooks/use-membership-access";
import { MEMBERSHIP_ENTITLEMENTS } from "@/lib/membership-access";
import {
  formatDuration,
  formatPublishedDate,
  getContentBySlug,
  getPublicAssetUrl,
  getWatchFeed,
  type PublicContentCredit,
} from "@/lib/public-content";

export const Route = createFileRoute("/watch/$slug")({
  loader: async ({ params }) => {
    const content = await getContentBySlug(params.slug);
    if (!content) throw notFound();

    const related = (await getWatchFeed({ limit: 8 }))
      .filter((item) => item.content_public_id !== content.content_public_id)
      .slice(0, 3);

    return { content, related };
  },
  head: ({ loaderData }) => {
    const content = loaderData?.content;
    if (!content) return { meta: [] };

    const image = getPublicAssetUrl(content.primary_media_public_url_path);
    return {
      meta: [
        { title: content.seo_title || `${content.title} — Tha Fix` },
        {
          name: "description",
          content: content.seo_description || content.excerpt || content.description || "",
        },
        { property: "og:title", content: content.title },
        {
          property: "og:description",
          content: content.excerpt || content.description || "",
        },
        ...(image ? [{ property: "og:image", content: image }] : []),
        ...(image ? [{ name: "twitter:image", content: image }] : []),
        ...(content.exclude_from_search_engines
          ? [{ name: "robots", content: "noindex, nofollow" }]
          : []),
      ],
      links: content.canonical_url
        ? [{ rel: "canonical", href: content.canonical_url }]
        : [],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center px-6">
      <div className="text-center">
        <h1 className="font-display text-4xl font-bold mb-3">Conversation not found</h1>
        <Link to="/watch" className="text-brand uppercase tracking-widest text-xs font-bold">
          Browse all conversations →
        </Link>
      </div>
    </div>
  ),
  errorComponent: () => (
    <div className="min-h-screen grid place-items-center px-6">
      <div className="text-center max-w-md">
        <h1 className="font-display text-3xl font-bold mb-3">This conversation didn’t load</h1>
        <p className="text-muted-foreground mb-5">
          Please refresh the page or return to the Watch archive.
        </p>
        <Link to="/watch" className="text-brand uppercase tracking-widest text-xs font-bold">
          Browse all conversations →
        </Link>
      </div>
    </div>
  ),
  component: ContentPage,
});

function CreditList({ credits }: { credits: PublicContentCredit[] }) {
  const grouped = credits.reduce<Record<string, PublicContentCredit[]>>(
    (result, credit) => {
      const role = credit.credit_role_code;
      result[role] = [...(result[role] || []), credit];
      return result;
    },
    {},
  );

  const labels: Record<string, string> = {
    host: "Hosts",
    guest: "Guest",
    interviewer: "Interviewers",
    producer: "Producers",
    contributor: "Contributors",
    author: "Author",
  };

  return (
    <div className="space-y-5">
      {Object.entries(grouped).map(([role, roleCredits]) => (
        <div key={role}>
          <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand mb-2">
            {labels[role] || role}
          </div>
          <div className="space-y-1">
            {roleCredits.map((credit) => {
              const profilePath =
                credit.profile_slug && role === "host"
                  ? `/hosts/${credit.profile_slug}`
                  : credit.profile_slug && role === "guest"
                    ? `/guests/${credit.profile_slug}`
                    : null;

              return profilePath ? (
                <a
                  key={`${role}-${credit.organization_person_public_id}`}
                  href={profilePath}
                  className="block font-display text-xl font-bold hover:text-brand transition-colors"
                >
                  {credit.display_name}
                </a>
              ) : (
                <div
                  key={`${role}-${credit.organization_person_public_id}`}
                  className="font-display text-xl font-bold"
                >
                  {credit.display_name}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

function ContentPage() {
  const { content, related } = Route.useLoaderData();
  const access = useMembershipAccess();
  const hasMemberWatchAccess =
    access.has(MEMBERSHIP_ENTITLEMENTS.earlyAccess) ||
    access.has(MEMBERSHIP_ENTITLEMENTS.bonusClips) ||
    access.has(MEMBERSHIP_ENTITLEMENTS.afterHours) ||
    access.has(MEMBERSHIP_ENTITLEMENTS.behindTheScenes) ||
    access.has(MEMBERSHIP_ENTITLEMENTS.documentaryContent);
  const image = getPublicAssetUrl(content.primary_media_public_url_path);
  const category =
    content.primary_topic_name ||
    content.primary_category_name ||
    (content.format_code === "episode" ? "Full Episode" : "Clip");

  return (
    <>
      <section className="pt-24 pb-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="aspect-video relative bg-surface border border-border overflow-hidden">
            {content.primary_platform_code === "youtube" &&
            content.primary_external_content_id ? (
              <iframe
                src={`https://www.youtube.com/embed/${content.primary_external_content_id}?rel=0`}
                title={`Watch ${content.title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 w-full h-full"
              />
            ) : image ? (
              <img
                src={image}
                alt={content.primary_media_alt_text || content.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : null}
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-3">
              {category}
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-black tracking-tighter leading-[0.95] mb-6 text-balance">
              {content.title}
            </h1>
            {content.subtitle && (
              <p className="text-xl text-foreground/75 leading-relaxed mb-6">
                {content.subtitle}
              </p>
            )}
            <div className="flex flex-wrap gap-5 text-xs uppercase tracking-widest text-muted-foreground mb-8">
              <span className="inline-flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5" />
                {formatPublishedDate(content.published_at)}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="w-3.5 h-3.5" />
                {formatDuration(content.duration_seconds)}
              </span>
              <span>{content.format_code === "episode" ? "Full Episode" : "Clip"}</span>
            </div>

            <p className="text-lg leading-relaxed text-foreground/80 mb-8">
              {content.description || content.excerpt}
            </p>

            {content.topics.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {content.topics.map((topic) => (
                  <span
                    key={topic.topic_public_id}
                    className="border border-border bg-surface px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest"
                  >
                    {topic.topic_name}
                  </span>
                ))}
              </div>
            )}

            {content.parent_episode_slug && (
              <div className="border-l-4 border-brand bg-surface p-5 mb-8">
                <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand mb-2">
                  From the full conversation
                </div>
                <Link
                  to="/watch/$slug"
                  params={{ slug: content.parent_episode_slug }}
                  className="font-display text-xl font-bold hover:text-brand transition-colors"
                >
                  Watch the complete interview →
                </Link>
              </div>
            )}

            {content.primary_destination_url && (
              <a
                href={content.primary_destination_url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-surface border border-border px-5 py-3 text-xs font-bold uppercase tracking-widest hover:border-brand"
              >
                <ExternalLink className="w-4 h-4" /> Watch on YouTube
              </a>
            )}
          </div>

          <aside className="space-y-6">
            <div className="bg-surface border border-border p-6">
              <CreditList credits={content.credits} />
            </div>
            <Link
              to={hasMemberWatchAccess ? "/watch/member" : "/memberships"}
              className="block bg-brand text-brand-foreground p-6 hover:bg-[#6A33A5] transition-colors"
            >
              <div className="text-[11px] font-bold uppercase tracking-[0.3em] opacity-70 mb-2">
                {hasMemberWatchAccess ? "Your Membership" : "Members Get More"}
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">
                {hasMemberWatchAccess ? "More is waiting in Member Watch" : "Go beyond the public conversation"}
              </h3>
              <p className="text-sm opacity-80 mb-4">
                {hasMemberWatchAccess
                  ? "Open the early releases and exclusive video content currently included with your membership."
                  : "Early access, bonus clips, behind-the-scenes content, and member discussions."}
              </p>
              <span className="text-xs font-bold uppercase tracking-widest border-b border-current pb-0.5">
                {hasMemberWatchAccess ? "Open Member Library →" : access.isSignedIn ? "Unlock Member Content →" : "Become a Member →"}
              </span>
            </Link>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16 border-t border-border">
          <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
            <div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-2">
              Up Next
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-10">
              More to watch
            </h2>
            <div className="grid md:grid-cols-3 gap-x-6 gap-y-10">
              {related.map((item) => (
                <EpisodeCard key={item.content_public_id} ep={item} size="lg" />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
