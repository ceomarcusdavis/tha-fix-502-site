import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Calendar, Clock, MapPin, Users, Ticket, CheckCircle2 } from "lucide-react";
import { events } from "@/data/events";

export const Route = createFileRoute("/events/$slug")({
  loader: ({ params }) => {
    const event = events.find((e) => e.slug === params.slug);
    if (!event) throw notFound();
    return { event };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Event not found — Tha Fix" }, { name: "robots", content: "noindex" }] };
    }
    const { event } = loaderData;
    return {
      meta: [
        { title: `${event.shortTitle} — Tha Fix Events` },
        { name: "description", content: event.description.slice(0, 155) },
        { property: "og:title", content: event.shortTitle },
        { property: "og:description", content: event.description.slice(0, 155) },
      ],
    };
  },
  component: EventDetailPage,
  notFoundComponent: EventNotFound,
});

function EventNotFound() {
  return (
    <section className="py-32 text-center">
      <div className="max-w-xl mx-auto px-6">
        <h1 className="font-display text-4xl font-black mb-4">Event Not Found</h1>
        <p className="text-muted-foreground mb-8">This event may have been rescheduled or removed.</p>
        <Link to="/events" className="inline-flex items-center gap-2 bg-brand text-brand-foreground px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#6A33A5] transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" /> All Events
        </Link>
      </div>
    </section>
  );
}

function EventDetailPage() {
  const { event } = Route.useLoaderData();
  const [rsvped, setRsvped] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", guests: "1", notes: "" });

  return (
    <>
      {/* HERO */}
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 border-b border-border bg-[#F7F8FA]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <Link to="/events" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-brand mb-6">
            <ArrowLeft className="w-3.5 h-3.5" /> All Events
          </Link>
          <div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-3">{event.category}</div>
          <h1 className="font-display text-4xl md:text-6xl font-black tracking-tighter leading-[0.95] max-w-4xl text-balance mb-6">
            {event.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2"><Calendar className="w-4 h-4" />{event.displayDate}</span>
            <span className="inline-flex items-center gap-2"><Clock className="w-4 h-4" />{event.time}</span>
            <span className="inline-flex items-center gap-2"><MapPin className="w-4 h-4" />{event.venue} — {event.city}, {event.state}</span>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 grid lg:grid-cols-[1fr_400px] gap-12">
          <div>
            <h2 className="font-display text-2xl font-bold mb-4">About This Event</h2>
            <p className="text-foreground/85 leading-relaxed mb-8">{event.description}</p>

            {event.program && (
              <>
                <h3 className="font-display text-xl font-bold mb-4">Tentative Program</h3>
              <ul className="space-y-2 mb-8">
                  {event.program.map((p: string) => (
                    <li key={p} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {event.accessRules && (
              <>
                <h3 className="font-display text-xl font-bold mb-4">Access Rules</h3>
                <ul className="space-y-2 mb-8">
                  {event.accessRules.map((r: string) => (
                    <li key={r} className="flex items-start gap-3 text-sm">
                      <span className="text-brand font-black mt-0.5">•</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <div className="p-6 border border-border bg-[#F7F8FA] text-xs text-muted-foreground leading-relaxed">
              This event is currently marked <span className="font-bold text-foreground">{event.status}</span>. Details, venue, timing, and access requirements may change before the event is confirmed. RSVP does not guarantee admission. Approved guests will receive confirmation, arrival instructions, and any recording notices by email.
            </div>
          </div>

          {/* Sidebar / RSVP */}
          <aside className="lg:sticky lg:top-24 self-start border border-border bg-surface p-6">
            <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-border">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1 inline-flex items-center gap-1"><Ticket className="w-3 h-3" /> Price</div>
                <div className="font-display text-2xl font-black">{event.price === 0 ? "Free" : `$${event.price}`}</div>
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1 inline-flex items-center gap-1"><Users className="w-3 h-3" /> Capacity</div>
                <div className="text-sm font-bold">{event.capacity}</div>
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Access</div>
                <div className="text-sm font-bold">{event.access}</div>
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Status</div>
                <div className="text-sm font-bold">{event.status}</div>
              </div>
            </div>

            {rsvped ? (
              <div className="text-center py-4">
                <CheckCircle2 className="w-10 h-10 text-brand mx-auto mb-3" />
                <h3 className="font-display text-xl font-bold mb-2">RSVP Received</h3>
                <p className="text-sm text-muted-foreground">We'll email you with confirmation and next steps.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setRsvped(true); }}
                className="space-y-3"
              >
                <h3 className="font-display text-xl font-bold mb-2">{event.cta}</h3>
                <input
                  required
                  type="text"
                  placeholder="Full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 border border-border bg-background focus:border-brand focus:outline-none text-sm"
                />
                <input
                  required
                  type="email"
                  placeholder="Email address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 border border-border bg-background focus:border-brand focus:outline-none text-sm"
                />
                <select
                  value={form.guests}
                  onChange={(e) => setForm({ ...form, guests: e.target.value })}
                  className="w-full px-4 py-3 border border-border bg-background focus:border-brand focus:outline-none text-sm"
                >
                  <option value="1">1 attendee</option>
                  <option value="2">2 attendees</option>
                  <option value="3">3 attendees</option>
                  <option value="4">4 attendees</option>
                </select>
                <textarea
                  placeholder="Anything we should know? (optional)"
                  rows={3}
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  className="w-full px-4 py-3 border border-border bg-background focus:border-brand focus:outline-none text-sm resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-brand text-brand-foreground px-6 py-3.5 text-xs font-bold uppercase tracking-widest hover:bg-[#6A33A5] transition-colors"
                >
                  {event.cta}
                </button>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  Must be 18 or older. Submitting an RSVP does not guarantee admission.
                </p>
              </form>
            )}
          </aside>
        </div>
      </section>
    </>
  );
}