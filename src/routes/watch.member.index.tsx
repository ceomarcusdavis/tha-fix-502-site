import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { LockKeyhole } from "lucide-react";
import { EpisodeCard } from "@/components/episode-card";
import { PageHero } from "@/components/page-hero";
import { useMembershipAccess } from "@/hooks/use-membership-access";
import { getMyMemberWatchFeed } from "@/lib/member-content";

export const Route = createFileRoute("/watch/member/")({
  head: () => ({
    meta: [
      { title: "Member Watch — Tha Fix" },
      { name: "robots", content: "noindex,nofollow" },
      { name: "description", content: "Tha Fix member-only early access, bonus clips, After Hours, behind-the-scenes, and Founder content." },
    ],
  }),
  component: MemberWatchPage,
});

const sectionOrder = [
  "early_access",
  "bonus_clips",
  "after_hours",
  "behind_the_scenes",
  "documentary_content",
];

const sectionCopy: Record<string, { eyebrow: string; title: string; empty: string }> = {
  early_access: { eyebrow: "Early Access", title: "Watch it before the public release.", empty: "No early-access release is available right now." },
  bonus_clips: { eyebrow: "Bonus Clips", title: "More from the conversations.", empty: "No bonus clips are available right now." },
  after_hours: { eyebrow: "After Hours", title: "The conversation after the conversation.", empty: "No After Hours content is available right now." },
  behind_the_scenes: { eyebrow: "Behind the Scenes", title: "See what happens around the cameras.", empty: "No behind-the-scenes content is available right now." },
  documentary_content: { eyebrow: "Founder Exclusive", title: "Documentary content for Founder members.", empty: "No Founder documentary content is available right now." },
};

function MemberWatchPage() {
  const access = useMembershipAccess();
  const feed = useQuery({
    queryKey: ["member-watch-feed"],
    queryFn: () => getMyMemberWatchFeed(),
    enabled: access.isSignedIn,
    retry: false,
  });

  if (access.isLoading) {
    return <div className="min-h-[60vh] grid place-items-center text-muted-foreground">Loading your member content…</div>;
  }

  if (!access.isSignedIn) {
    return <AccessMessage title="Sign in to view member content" body="Member-only video access is tied to your Tha Fix account." action="Sign In" to="/login" />;
  }

  if (!access.hasActiveAccess) {
    return <AccessMessage title="Active membership required" body="Join or reactivate an eligible Tha Fix membership to access member-only video content." action="View Memberships" to="/memberships" />;
  }

  if (feed.isLoading) {
    return <div className="min-h-[60vh] grid place-items-center text-muted-foreground">Loading your member content…</div>;
  }

  if (feed.isError) {
    return <AccessMessage title="Member content didn’t load" body={(feed.error as Error).message} action="Back to Watch" to="/watch" />;
  }

  const items = feed.data ?? [];
  const grouped = new Map<string, typeof items>();
  for (const code of sectionOrder) grouped.set(code, items.filter((item) => item.required_entitlement_code === code));
  const other = items.filter((item) => !sectionOrder.includes(item.required_entitlement_code));
  if (other.length) grouped.set("other", other);

  return (
    <>
      <PageHero
        eyebrow="Member Watch"
        title="More than the public archive."
        description="Your membership library includes the early releases and exclusive content currently available with your plan."
      />

      <section className="py-8 border-b border-border bg-[#F7F8FA]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Current Membership</div>
            <div className="font-display text-2xl font-bold">{access.membership?.plan_name}</div>
          </div>
          <Link to="/watch" className="text-xs font-bold uppercase tracking-widest text-brand">Public Watch Archive →</Link>
        </div>
      </section>

      {items.length === 0 ? (
        <section className="py-20">
          <div className="max-w-2xl mx-auto px-6 text-center border border-dashed border-border p-12">
            <h2 className="font-display text-3xl font-bold mb-3">Your member library is ready.</h2>
            <p className="text-muted-foreground">There isn’t any member-only video assigned to your membership yet. New eligible releases will appear here automatically.</p>
          </div>
        </section>
      ) : (
        [...grouped.entries()].map(([code, sectionItems]) => {
          if (sectionItems.length === 0) return null;
          const copy = sectionCopy[code] ?? { eyebrow: "Member Exclusive", title: "Available with your membership.", empty: "" };
          return (
            <section key={code} className="py-14 border-b border-border last:border-b-0">
              <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
                <div className="mb-8">
                  <div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-2">{copy.eyebrow}</div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">{copy.title}</h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                  {sectionItems.map((item) => (
                    <div key={item.content.content_public_id} className="w-full overflow-hidden">
                      <EpisodeCard ep={item.content} size="lg" memberOnly badge={item.access_label || copy.eyebrow} />
                      {item.public_release_at ? (
                        <p className="text-[11px] text-muted-foreground mt-2">Public release: {new Date(item.public_release_at).toLocaleString()}</p>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        })
      )}
    </>
  );
}

function AccessMessage({ title, body, action, to }: { title: string; body: string; action: string; to: "/login" | "/memberships" | "/watch" }) {
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
