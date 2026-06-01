import { createFileRoute } from "@tanstack/react-router";
import { Mail, Megaphone, Handshake } from "lucide-react";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Tha Fix" },
      { name: "description", content: "Get in touch with Tha Fix. Press, partnerships, guest pitches, or just to say what's up." },
      { property: "og:title", content: "Contact — Tha Fix" },
      { property: "og:description", content: "Get in touch with Tha Fix." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Holler at us." description="Press, partnerships, guest pitches, or just to say what's up. We read every message." />
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 grid lg:grid-cols-[1fr_1.3fr] gap-12">
          <div className="space-y-6">
            {[
              { icon: Mail, label: "General", value: "hello@thafix.media" },
              { icon: Megaphone, label: "Press", value: "press@thafix.media" },
              { icon: Handshake, label: "Partnerships", value: "partners@thafix.media" },
            ].map((c) => (
              <div key={c.label} className="p-6 bg-surface border border-border">
                <c.icon className="w-6 h-6 text-brand mb-3" />
                <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-1">{c.label}</div>
                <a href={`mailto:${c.value}`} className="font-display text-xl font-bold hover:text-brand">{c.value}</a>
              </div>
            ))}
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input placeholder="Your name" className="bg-surface border border-border px-4 py-3 text-sm focus:outline-none focus:border-brand" />
              <input type="email" placeholder="Email" className="bg-surface border border-border px-4 py-3 text-sm focus:outline-none focus:border-brand" />
            </div>
            <input placeholder="Subject" className="w-full bg-surface border border-border px-4 py-3 text-sm focus:outline-none focus:border-brand" />
            <textarea rows={8} placeholder="Your message..." className="w-full bg-surface border border-border px-4 py-3 text-sm focus:outline-none focus:border-brand resize-none" />
            <button className="bg-brand text-brand-foreground px-8 py-4 font-bold uppercase tracking-widest text-sm hover:brightness-110">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}