import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Calendar,
  MapPin,
  Clock,
  Search,
  ArrowRight,
  Users,
  Mic,
  MapPinned,
  Ticket,
  Sparkles,
  Radio,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { events, eventCategories, type EventCategory } from "@/data/events";
import { memberships, products } from "@/data/content";

export const Route = createFileRoute("/events/")({
  head: () => ({
    meta: [
      { title: "Events — Tha Fix" },
      { name: "description", content: "Live recordings, community appearances, member meetups, and special events with Tha Fix." },
      { property: "og:title", content: "Events — Tha Fix" },
      { property: "og:description", content: "Pull up when Tha Fix goes live." },
    ],
  }),
  component: EventsPage,
});

const audienceSteps = [
  {
    n: "1",
    title: "Find an Eligible Recording",
    body: "Look for events marked Live Audience in the upcoming-events calendar.",
  },
  {
    n: "2",
    title: "Request Your Seat",
    body: "Complete the RSVP or audience application before the listed deadline. Certain recordings may have limited seating or membership requirements.",
  },
  {
    n: "3",
    title: "Receive Confirmation",
    body: "Submitting a request does not guarantee admission. Approved guests will receive confirmation, arrival instructions, venue information, and any recording requirements by email.",
  },
];

const memberPerks = [
  { icon: Users, title: "Member Meetups", body: "Connect with other Tha Fix members through eligible in-person or virtual gatherings." },
  { icon: Mic, title: "Audience Opportunities", body: "Members may receive access to selected live-recording and audience opportunities when identified in the event listing." },
  { icon: Radio, title: "Networking Sessions", body: "Network and Founder members receive access to the approved monthly webinar or networking session." },
  { icon: Ticket, title: "Early Event Access", body: "Founding Members receive early access to future events and platform initiatives when available." },
  { icon: Sparkles, title: "Special Perks", body: "Selected events may include giveaways, partner offers, merchandise opportunities, reserved access, or other event-specific benefits." },
];

const bookingRequests = [
  "Host or moderate a conversation",
  "Record a Tha Fix episode on location",
  "Interview event participants",
  "Appear on a panel",
  "Livestream or cover an event",
  "Promote an eligible event",
  "Develop a sponsor-supported activation",
];

const faqs = [
  { q: "Do I need a membership to attend?", a: "Not every event will require a membership. Each event listing will identify whether it is public, members-only, invitation-only, or available to specific membership levels." },
  { q: "Does an RSVP guarantee admission?", a: "Only when the event listing expressly states that registration confirms admission. Some events may require an application, approval, separate ticket purchase, or final confirmation." },
  { q: "How will I know whether an event is livestreamed?", a: "Livestream availability and the official viewing platform will appear on the event page. Not every in-person event will be streamed or recorded." },
  { q: "Can I be in the audience during a recording?", a: "When live-audience seating is available, the event will be marked Live Audience and will include instructions for requesting or reserving a seat." },
  { q: "Can I bring a guest?", a: "Guest rules will vary. The event listing and confirmation message will state whether guests are permitted and whether each person must register separately." },
  { q: "Will I be recorded?", a: "Many Tha Fix events may involve photography, audio recording, video recording, or livestreaming. Applicable notices and release requirements will be provided before entry or participation." },
  { q: "Are events limited to people 18 or older?", a: "Tha Fix website accounts and memberships are limited to adults 18 or older. Each event should state its admission age separately, especially when a venue, topic, livestream, or sponsor imposes additional restrictions." },
  { q: "Are tickets refundable?", a: "Refund, transfer, cancellation, and rescheduling rules should be displayed before purchase and included in the applicable event or ticket terms." },
  { q: "How can I request accessibility assistance?", a: "Contact info@thafix502.com as early as reasonably possible with the event name, requested accommodation, and preferred contact method. Tha Fix will provide reasonable assistance when reasonably possible." },
];

function EventsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<EventCategory | "All">("All");

  const filtered = useMemo(() => {
    return events.filter((e) => {
      const matchQ = query.trim().length === 0 ||
        e.title.toLowerCase().includes(query.toLowerCase()) ||
        e.city.toLowerCase().includes(query.toLowerCase()) ||
        e.description.toLowerCase().includes(query.toLowerCase());
      const matchC = category === "All" || e.category === category;
      return matchQ && matchC;
    });
  }, [query, category]);

  return (
    <>
      <PageHero eyebrow="Tha Fix Events" title="Pull Up When Tha Fix Goes Live." />

      {/* WELCOME / INTRO */}
      <section className="py-16 lg:py-20 border-b border-border">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-lg text-foreground/80 leading-relaxed mb-8">
            Join Tha Fix in the room, on location, or online. Find upcoming live recordings, community appearances, member meetups, and special events featuring Jon Mic, Marcus Davis, and the Tha Fix community.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand text-brand-foreground px-7 py-3.5 font-bold uppercase tracking-wider text-sm hover:bg-[#6A33A5] transition-colors"
          >
            Get Event Alerts
          </Link>
          <p className="text-xs text-muted-foreground mt-4">
            New events, audience opportunities, and livestream announcements will be added as they are confirmed.
          </p>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-10">
            <div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-3">What's Coming Up</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              Upcoming Events and Live Appearances
            </h2>
          </div>

          {/* Search + filters */}
          <div className="mb-10">
            <div className="relative mb-5">
              <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search events by title, city, or topic"
                className="w-full pl-11 pr-4 py-3.5 bg-surface border border-border focus:border-brand focus:outline-none text-sm"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {(["All", ...eventCategories] as const).map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c as EventCategory | "All")}
                  className={`text-[11px] font-bold uppercase tracking-widest px-4 py-2 border transition-colors ${
                    category === c
                      ? "bg-brand text-brand-foreground border-brand"
                      : "bg-surface border-border hover:border-accent"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="border border-border bg-surface p-12 text-center">
              <h3 className="font-display text-3xl font-bold mb-4">
                Nothing Announced Yet — but Tha Fix Is Getting Ready to Pull Up.
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're planning live recordings, community appearances, livestreams, and opportunities for members to join us in person. Sign up for event alerts and be among the first to know when a new date is announced.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((e) => (
                <div key={e.slug} className="border border-border bg-surface flex flex-col hover:border-accent transition-colors">
                  <div className="p-6 border-b border-border">
                    <div className="flex items-center justify-between mb-4">
                      <div className="font-display text-2xl font-black tracking-tighter text-brand">{e.displayDay}</div>
                      <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 border ${e.status === "Confirmed" ? "border-brand text-brand" : "border-muted-foreground text-muted-foreground"}`}>
                        {e.status}
                      </span>
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-2">{e.category}</div>
                    <h3 className="font-display text-xl font-bold leading-tight mb-3">{e.shortTitle}</h3>
                    <div className="space-y-1.5 text-xs text-muted-foreground">
                      <div className="flex items-center gap-2"><Clock className="w-3.5 h-3.5" />{e.time}</div>
                      <div className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5" />{e.venue} — {e.city}, {e.state}</div>
                    </div>
                  </div>
                  <div className="p-6 flex items-center justify-between mt-auto">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                        {e.access}
                      </div>
                      <div className="font-display text-lg font-black">
                        {e.price === 0 ? "Free" : `$${e.price}`}
                      </div>
                    </div>
                    <Link
                      to="/events/$slug"
                      params={{ slug: e.slug }}
                      className="inline-flex items-center gap-2 bg-brand text-brand-foreground px-5 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#6A33A5] transition-colors"
                    >
                      View Event <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-3 justify-center mt-12">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-brand text-brand-foreground px-7 py-3.5 font-bold uppercase tracking-wider text-sm hover:bg-[#6A33A5] transition-colors">
              Get Event Alerts
            </Link>
            <Link to="/memberships" className="inline-flex items-center gap-2 border border-border bg-surface px-7 py-3.5 font-bold uppercase tracking-wider text-sm hover:border-accent transition-colors">
              Explore Memberships
            </Link>
          </div>
        </div>
      </section>

      {/* BE IN THE AUDIENCE */}
      <section className="py-20 bg-[#F7F8FA] border-y border-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-12">
            <div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-3">In the Room</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-5">
              Be Part of the Live Audience
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Some Tha Fix episodes and special conversations will be recorded with a live audience. When audience seating becomes available, eligible visitors and members will be able to request a seat through the event listing.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {audienceSteps.map((s) => (
              <div key={s.n} className="p-8 border border-border bg-surface">
                <div className="font-display text-5xl font-black text-brand mb-4">{s.n}</div>
                <h3 className="font-display text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed max-w-3xl">
            Audience members may appear or be heard in photographs, video, audio, or livestream coverage. Each event listing will explain applicable recording notices, releases, age requirements, and admission conditions.
          </p>
        </div>
      </section>

      {/* THA FIX ON LOCATION */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-10">
            <div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-3">Tha Fix On Location</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-5">
              Real Conversations From Where They're Happening
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Tha Fix won't always wait for the conversation to come to the studio. Marcus Davis and Jon Mic may broadcast, record, or appear live from community events, businesses, cultural gatherings, public conversations, and other locations.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">Follow our event listings to find out:</p>
            <ul className="space-y-2 mb-8">
              {[
                "Where Tha Fix will appear next",
                "Whether the appearance is open to the public",
                "When and where a livestream will be available",
                "Who will be joining the conversation",
                "How members can participate",
              ].map((li) => (
                <li key={li} className="flex items-start gap-3 text-sm">
                  <MapPinned className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                  <span>{li}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-brand text-brand-foreground px-7 py-3.5 font-bold uppercase tracking-wider text-sm hover:bg-[#6A33A5] transition-colors">
                Get Event Alerts
              </Link>
              <Link to="/memberships" className="inline-flex items-center gap-2 border border-border bg-surface px-7 py-3.5 font-bold uppercase tracking-wider text-sm hover:border-accent transition-colors">
                Explore Memberships
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MEMBERS GET MORE */}
      <section className="py-20 bg-[#F7F8FA] border-y border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-12">
            <div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-3">Members Get More</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-5">
              Meetups, Access and Member Hookups
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Tha Fix events are about more than watching a show. Selected events may give eligible members opportunities to meet one another, join networking conversations, attend private sessions, receive early event announcements, or participate in special audience opportunities.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {memberPerks.map((p) => (
              <div key={p.title} className="p-8 border border-border bg-surface hover:border-accent transition-colors">
                <p.icon className="w-7 h-7 text-brand mb-5" />
                <h3 className="font-display text-xl font-bold mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed max-w-3xl mb-3">
            Availability, eligibility, capacity, pricing, and membership requirements will vary by event. A membership does not guarantee admission, reserved seating, individual speaking time, a guest introduction, a collaboration, or any particular outcome.
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed max-w-3xl mb-8">
            The existing membership offer gives Network and Founder members the monthly webinar/networking session, while Founders receive early access to future events and priority consideration for event opportunities.{" "}
            <Link to="/memberships" className="text-brand underline hover:text-accent">Memberships</Link>,{" "}
            <Link to="/membership-terms" className="text-brand underline hover:text-accent">Membership Terms</Link>
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/memberships" className="inline-flex items-center gap-2 bg-brand text-brand-foreground px-7 py-3.5 font-bold uppercase tracking-wider text-sm hover:bg-[#6A33A5] transition-colors">
              Explore Memberships
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 border border-border bg-surface px-7 py-3.5 font-bold uppercase tracking-wider text-sm hover:border-accent transition-colors">
              Get Event Alerts
            </Link>
          </div>
        </div>
      </section>

      {/* BOOKINGS AND PARTNERSHIPS */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-8">
            <div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-3">Bookings and Partnerships</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-5">
              Want Tha Fix at Your Event?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Tha Fix is open to considering community appearances, live conversations, interviews, panel participation, event coverage, recording opportunities, and promotional partnerships that fit our audience and mission.
            </p>
          </div>
          <ul className="grid md:grid-cols-2 gap-3 mb-10 max-w-3xl">
            {bookingRequests.map((r) => (
              <li key={r} className="flex items-start gap-3 p-4 bg-surface border border-border text-sm">
                <span className="text-brand font-black mt-0.5">✓</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3 mb-6">
            <Link to="/events/request" className="inline-flex items-center gap-2 bg-brand text-brand-foreground px-7 py-3.5 font-bold uppercase tracking-wider text-sm hover:bg-[#6A33A5] transition-colors">
              Submit an Event Request
            </Link>
            <Link to="/sponsors" className="inline-flex items-center gap-2 border border-border bg-surface px-7 py-3.5 font-bold uppercase tracking-wider text-sm hover:border-accent transition-colors">
              Explore Sponsorship Opportunities
            </Link>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed max-w-3xl">
            Submission does not guarantee acceptance, coverage, promotion, attendance, or a partnership. Tha Fix will evaluate requests based on fit, availability, production requirements, safety, and business considerations.
          </p>
        </div>
      </section>

      {/* EVENT FAQ */}
      <section className="py-20 bg-[#F7F8FA] border-y border-border">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-3">Event FAQ</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-10">
            Before You Pull Up
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border border-border bg-surface mb-3 px-5">
                <AccordionTrigger className="text-left font-display text-lg font-bold hover:no-underline hover:text-brand">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-brand text-brand-foreground text-center">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <h2 className="font-display text-4xl md:text-6xl font-black tracking-tighter leading-[0.9] mb-6 text-balance">
            Tha Fix Is Better When the People Are in the Room.
          </h2>
          <p className="text-lg opacity-85 mb-10 max-w-2xl mx-auto">
            Join us for the conversations, appearances, livestreams, and experiences that happen beyond the regular episodes.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-5">
            <Link to="/memberships" className="bg-white text-brand px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-gray-100 transition-colors">
              Join Tha Fix
            </Link>
            <Link to="/contact" className="border border-brand-foreground/30 px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-brand-foreground/10 transition-colors">
              Get Event Alerts
            </Link>
          </div>
          <p className="text-xs opacity-70">
            Already a member?{" "}
            <Link to="/contact" className="underline hover:text-accent">Sign in</Link> to view events and opportunities available to your membership level.
          </p>
        </div>
      </section>

      {/* THE SUPPLY DROP */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-2">The Supply Drop</div>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">Wear the message.</h2>
            </div>
            <Link to="/shop" className="hidden md:inline-flex text-xs font-bold uppercase tracking-widest border-b border-brand text-brand pb-1">
              Shop All
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((p) => (
              <Link to="/shop" key={p.slug} className="group">
                <div className="aspect-[4/5] overflow-hidden bg-surface border border-border mb-4">
                  <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider group-hover:text-accent transition-colors">{p.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{p.category}</p>
                  </div>
                  <span className="font-display font-black text-brand">${p.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Suppress unused-import warning while keeping memberships pattern parity */}
      <div className="hidden">{memberships.length}</div>
      <Calendar className="hidden" />
    </>
  );
}