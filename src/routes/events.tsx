import { createFileRoute } from "@tanstack/react-router";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Tha Fix" },
      { name: "description", content: "Live shows, town halls, member meetups. See where Tha Fix is headed next." },
      { property: "og:title", content: "Events — Tha Fix" },
      { property: "og:description", content: "Live shows and meetups." },
    ],
  }),
  component: EventsPage,
});

const events = [
  { date: "JUN 14", city: "Atlanta, GA", title: "Live Tour Kickoff", venue: "Tabernacle", type: "Live Show" },
  { date: "JUN 21", city: "Detroit, MI", title: "Town Hall: Real Conversations", venue: "Fox Theatre", type: "Town Hall" },
  { date: "JUL 09", city: "Houston, TX", title: "Member Meetup", venue: "Private Venue", type: "Members Only" },
  { date: "JUL 18", city: "New York, NY", title: "Live Recording: Episode 150", venue: "Brooklyn Steel", type: "Live Show" },
  { date: "AUG 02", city: "Los Angeles, CA", title: "Founders Q&A", venue: "The Wiltern", type: "Live Show" },
  { date: "AUG 16", city: "Chicago, IL", title: "Community Night", venue: "Thalia Hall", type: "Members Only" },
];

function EventsPage() {
  return (
    <>
      <PageHero eyebrow="Events" title="On the road." description="Six cities. Live shows, town halls, and member-only meetups. Come stand with us in person." />
      <section className="py-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 divide-y divide-border border-y border-border">
          {events.map((e) => (
            <div key={e.title + e.city} className="py-8 grid md:grid-cols-[120px_1fr_auto] gap-6 items-center hover:bg-surface/50 transition-colors px-4 -mx-4">
              <div className="font-display text-3xl font-black tracking-tighter text-brand">{e.date}</div>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-1">{e.type}</div>
                <h3 className="font-display text-2xl font-bold mb-1">{e.title}</h3>
                <p className="text-sm text-muted-foreground flex flex-wrap items-center gap-4">
                  <span className="inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{e.city}</span>
                  <span className="inline-flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{e.venue}</span>
                </p>
              </div>
              <button className="inline-flex items-center gap-2 bg-brand text-brand-foreground px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#6A33A5] transition-colors w-fit">
                Register <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}