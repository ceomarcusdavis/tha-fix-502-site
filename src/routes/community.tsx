import { createFileRoute, Link } from "@tanstack/react-router";
import { Users, MessageCircle, Mic, Calendar } from "lucide-react";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community — Tha Fix" },
      { name: "description", content: "Join 10,000+ members of the Tha Fix family. Discord, livestreams, member-only Q&A." },
      { property: "og:title", content: "Community — Tha Fix" },
      { property: "og:description", content: "Join the Tha Fix community." },
    ],
  }),
  component: CommunityPage,
});

const features = [
  { icon: MessageCircle, title: "Private Discord", body: "Daily conversation with members, hosts, and special guests." },
  { icon: Mic, title: "Member Q&A", body: "Monthly livestream where the hosts answer your questions live." },
  { icon: Calendar, title: "Virtual Meetups", body: "City-by-city virtual gatherings to connect with members near you." },
  { icon: Users, title: "Accountability Crews", body: "Small member groups holding each other to their goals." },
];

function CommunityPage() {
  return (
    <>
      <PageHero eyebrow="Community" title="The family is the point." description="Tha Fix isn't a show you watch. It's a circle you belong to." />
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid sm:grid-cols-2 gap-6">
          {features.map((f) => (
            <div key={f.title} className="p-8 border border-border bg-surface hover:border-accent transition-colors">
              <f.icon className="w-7 h-7 text-brand mb-5" />
              <h3 className="font-display text-2xl font-bold mb-3">{f.title}</h3>
              <p className="text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-20 border-t border-border bg-brand text-brand-foreground">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-6xl font-black tracking-tighter mb-5">Pull up.</h2>
          <p className="mb-8 opacity-80">Membership unlocks the community. One click and you're in.</p>
          <Link to="/memberships" className="inline-block bg-accent text-accent-foreground px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-accent/90 transition-colors">
            Join The Family
          </Link>
        </div>
      </section>
    </>
  );
}