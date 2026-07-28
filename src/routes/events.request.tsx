import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/events/request")({
  head: () => ({
    meta: [
      { title: "Submit an Event Request — Tha Fix" },
      { name: "description", content: "Request a Tha Fix appearance, on-location episode, panel, interview, or partnership activation." },
      { property: "og:title", content: "Submit an Event Request — Tha Fix" },
      { property: "og:description", content: "Bring Tha Fix to your event or activation." },
    ],
  }),
  component: EventRequestPage,
});

const fields = [
  { name: "organization", label: "Organization", type: "text", required: true },
  { name: "eventName", label: "Event name", type: "text", required: true },
  { name: "contactName", label: "Contact name", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "phone", label: "Phone", type: "tel", required: false },
  { name: "eventDate", label: "Event date", type: "date", required: true },
  { name: "eventTime", label: "Event time", type: "text", required: false, placeholder: "e.g., 6:00–8:00 p.m. EST" },
  { name: "venue", label: "Venue and location", type: "text", required: true },
  { name: "attendance", label: "Estimated attendance", type: "text", required: false },
] as const;

function EventRequestPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero eyebrow="Bookings & Partnerships" title="Submit an Event Request" description="Tell us about your event, appearance opportunity, or partnership idea." />
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <Link to="/events" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-brand mb-8">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Events
          </Link>

          {submitted ? (
            <div className="text-center border border-border bg-surface p-12">
              <CheckCircle2 className="w-14 h-14 text-brand mx-auto mb-5" />
              <h2 className="font-display text-3xl font-black mb-3">Request Received</h2>
              <p className="text-muted-foreground max-w-md mx-auto mb-8">
                Thanks for reaching out. The Tha Fix team will review your request and follow up if it's a fit for our audience, availability, and mission.
              </p>
              <Link to="/events" className="inline-flex items-center gap-2 bg-brand text-brand-foreground px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#6A33A5] transition-colors">
                View Upcoming Events
              </Link>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="space-y-5"
            >
              <div className="grid md:grid-cols-2 gap-5">
                {fields.map((f) => (
                  <div key={f.name} className={f.name === "venue" || f.name === "eventName" ? "md:col-span-2" : ""}>
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-foreground/70 mb-2">
                      {f.label}{f.required && <span className="text-brand"> *</span>}
                    </label>
                    <input
                      type={f.type}
                      required={f.required}
                      placeholder={"placeholder" in f ? f.placeholder : undefined}
                      className="w-full px-4 py-3 border border-border bg-surface focus:border-brand focus:outline-none text-sm"
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-foreground/70 mb-2">
                  Description of the event <span className="text-brand">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-border bg-surface focus:border-brand focus:outline-none text-sm resize-y"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-foreground/70 mb-2">
                  Requested role for Tha Fix <span className="text-brand">*</span>
                </label>
                <select required className="w-full px-4 py-3 border border-border bg-surface focus:border-brand focus:outline-none text-sm">
                  <option value="">Select a role</option>
                  <option>Host or moderate a conversation</option>
                  <option>Record a Tha Fix episode on location</option>
                  <option>Interview event participants</option>
                  <option>Appear on a panel</option>
                  <option>Livestream or cover an event</option>
                  <option>Promote an eligible event</option>
                  <option>Sponsor-supported activation</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-foreground/70 mb-2">
                  Livestream or recording expectations
                </label>
                <textarea
                  rows={3}
                  placeholder="Will the event be livestreamed or recorded? Any restrictions?"
                  className="w-full px-4 py-3 border border-border bg-surface focus:border-brand focus:outline-none text-sm resize-y"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-foreground/70 mb-2">
                  Sponsorship or partnership interest
                </label>
                <select className="w-full px-4 py-3 border border-border bg-surface focus:border-brand focus:outline-none text-sm">
                  <option value="">Select one</option>
                  <option>None</option>
                  <option>Sponsor-supported event</option>
                  <option>Interested in ongoing partnership</option>
                  <option>Open to discussion</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-foreground/70 mb-2">
                  Additional information
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-border bg-surface focus:border-brand focus:outline-none text-sm resize-y"
                />
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full sm:w-auto bg-brand text-brand-foreground px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#6A33A5] transition-colors">
                  Submit Event Request
                </button>
                <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
                  Submission does not guarantee acceptance, coverage, promotion, attendance, or a partnership. Tha Fix will evaluate requests based on fit, availability, production requirements, safety, and business considerations.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}