import { createFileRoute } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — Tha Fix" },
      { name: "description", content: "Support independent media. Every donation keeps the conversations going." },
      { property: "og:title", content: "Donate — Tha Fix" },
      { property: "og:description", content: "Support independent media." },
    ],
  }),
  component: DonatePage,
});

function DonatePage() {
  return (
    <>
      <PageHero eyebrow="Donate" title="Fuel the mission." description="Tha Fix is independent media. Every donation keeps the conversations free, the production sharp, and the community growing." />
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {[15, 25, 50, 100].map((amt) => (
              <button key={amt} className="border border-border bg-surface hover:border-accent hover:bg-accent hover:text-accent-foreground transition-colors py-5 font-display text-2xl font-bold">
                ${amt}
              </button>
            ))}
          </div>
          <div className="flex gap-3">
            <input placeholder="Custom amount" className="flex-1 bg-surface border border-border px-4 py-4 text-sm focus:outline-none focus:border-accent" />
            <button className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-accent/90 transition-colors">
              <Heart className="w-4 h-4 fill-current" /> Donate
            </button>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-6">Secure payment processing. Receipt sent to your email.</p>
        </div>
      </section>
    </>
  );
}