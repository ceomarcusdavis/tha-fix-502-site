import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Calendar, Clock, ExternalLink, LockKeyhole } from "lucide-react";
import { useMembershipAccess } from "@/hooks/use-membership-access";
import { getMyMemberContentBySlug } from "@/lib/member-content";
import { formatDuration, formatPublishedDate, getPublicAssetUrl } from "@/lib/public-content";

export const Route = createFileRoute("/watch/member/$slug")({
  head: () => ({
    meta: [
      { title: "Member Watch — Tha Fix" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: MemberContentPage,
});

function MemberContentPage() {
  const { slug } = Route.useParams();
  const access = useMembershipAccess();
  const contentQuery = useQuery({
    queryKey: ["member-content", slug],
    queryFn: () => getMyMemberContentBySlug(slug),
    enabled: access.isSignedIn,
    retry: false,
  });

  if (access.isLoading) {
    return <div className="min-h-[60vh] grid place-items-center text-muted-foreground">Loading member access…</div>;
  }

  if (!access.isSignedIn) {
    return <AccessMessage title="Sign in to watch" body="This content is part of the Tha Fix member library." action="Sign In" to="/login" />;
  }

  if (contentQuery.isLoading) {
    return <div className="min-h-[60vh] grid place-items-center text-muted-foreground">Loading this conversation…</div>;
  }

  if (contentQuery.isError) {
    return <AccessMessage title="This member content didn’t load" body={(contentQuery.error as Error).message} action="Member Library" to="/watch/member" />;
  }

  const result = contentQuery.data;
  if (!result) throw notFound();

  if (!result.has_access) {
    return (
      <AccessMessage
        title={result.access_label ? `${result.access_label} access required` : "Your membership doesn’t include this content"}
        body="Compare memberships to see which plan includes this member-only release."
        action="Compare Memberships"
        to="/memberships"
      />
    );
  }

  const content = result.content;
  const image = getPublicAssetUrl(content.primary_media_public_url_path);
  const category = content.primary_topic_name || content.primary_category_name || (content.format_code === "episode" ? "Full Episode" : "Clip");

  return (
    <>
      <section className="pt-24 pb-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-brand">
              <LockKeyhole className="w-4 h-4" /> {result.access_label || "Member Exclusive"}
            </span>
            <Link to="/watch/member" className="text-xs font-bold uppercase tracking-widest text-brand">Member Library →</Link>
          </div>
          <div className="aspect-video relative bg-surface border border-border overflow-hidden">
            {content.primary_platform_code === "youtube" && content.primary_external_content_id ? (
              <iframe
                src={`https://www.youtube.com/embed/${content.primary_external_content_id}?rel=0`}
                title={`Watch ${content.title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 w-full h-full"
              />
            ) : image ? (
              <img src={image} alt={content.primary_media_alt_text || content.title} className="absolute inset-0 w-full h-full object-cover" />
            ) : (
              <div className="absolute inset-0 grid place-items-center text-center px-6">
                <div>
                  <LockKeyhole className="w-10 h-10 text-brand mx-auto mb-4" />
                  <p className="font-display text-2xl font-bold mb-2">Playback source not available yet</p>
                  <p className="text-muted-foreground">This member item is available to your plan, but its protected media source has not been configured for browser playback.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-3">{category}</div>
            <h1 className="font-display text-4xl md:text-6xl font-black tracking-tighter leading-[0.95] mb-6 text-balance">{content.title}</h1>
            {content.subtitle ? <p className="text-xl text-foreground/75 leading-relaxed mb-6">{content.subtitle}</p> : null}
            <div className="flex flex-wrap gap-5 text-xs uppercase tracking-widest text-muted-foreground mb-8">
              <span className="inline-flex items-center gap-2"><Calendar className="w-3.5 h-3.5" />{formatPublishedDate(content.published_at)}</span>
              <span className="inline-flex items-center gap-2"><Clock className="w-3.5 h-3.5" />{formatDuration(content.duration_seconds)}</span>
              <span>{content.format_code === "episode" ? "Full Episode" : "Clip"}</span>
            </div>
            <p className="text-lg leading-relaxed text-foreground/80 mb-8">{content.description || content.excerpt}</p>
            {result.public_release_at ? (
              <div className="border-l-4 border-accent bg-surface p-5 mb-8">
                <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand mb-2">Member Early Access</div>
                <p className="text-sm text-muted-foreground">Scheduled public release: {new Date(result.public_release_at).toLocaleString()}</p>
              </div>
            ) : null}
            {content.primary_destination_url ? (
              <a href={content.primary_destination_url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-surface border border-border px-5 py-3 text-xs font-bold uppercase tracking-widest hover:border-brand">
                <ExternalLink className="w-4 h-4" /> Open Source
              </a>
            ) : null}
          </div>
          <aside className="space-y-6">
            <div className="bg-surface border border-border p-6">
              <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand mb-2">Access</div>
              <h3 className="font-display text-2xl font-bold mb-2">{result.access_label || "Member Exclusive"}</h3>
              <p className="text-sm text-muted-foreground">Included with your current {access.membership?.plan_name || "Tha Fix"} membership.</p>
            </div>
            <Link to="/community/member" className="block bg-brand text-brand-foreground p-6 hover:bg-[#6A33A5] transition-colors">
              <div className="text-[11px] font-bold uppercase tracking-[0.3em] opacity-70 mb-2">Keep Talking</div>
              <h3 className="font-display text-2xl font-bold mb-3">Continue in the member community</h3>
              <span className="text-xs font-bold uppercase tracking-widest border-b border-current pb-0.5">Open Community →</span>
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}

function AccessMessage({ title, body, action, to }: { title: string; body: string; action: string; to: "/login" | "/memberships" | "/watch/member" }) {
  return (
    <div className="min-h-[70vh] grid place-items-center px-6 py-20">
      <div className="max-w-xl text-center border border-border bg-surface p-10">
        <LockKeyhole className="w-9 h-9 text-brand mx-auto mb-5" />
        <h1 className="font-display text-3xl font-bold mb-3">{title}</h1>
        <p className="text-muted-foreground mb-7">{body}</p>
        <Link to={to} className="cta">{action}</Link>
      </div>
    </div>
  );
}
