import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Support Tha Fix" },
      { name: "description", content: "Help Tha Fix Media Network continue producing meaningful content." },
      { property: "og:title", content: "Support Tha Fix" },
      { property: "og:description", content: "Help Tha Fix Media Network continue producing meaningful content." },
    ],
  }),
  component: SupportPage,
});

function SupportPage() {
  return (
    <>
      <PageHero eyebrow="Support" title="Support Independent Media" description="Help Tha Fix Media Network continue producing meaningful content." />
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-base text-muted-foreground leading-relaxed mb-8">
            Your support helps Tha Fix Media Network continue elevating important voices, and growing an independent media platform built from lived experience. Every contribution helps us keep the conversations going.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {[10, 25, 50, 100].map((amt) => (
              <button key={amt} className="border border-border bg-surface hover:border-accent hover:bg-accent hover:text-accent-foreground transition-colors py-5 font-display text-2xl font-bold">
                ${amt}
              </button>
            ))}
          </div>
          <div className="flex gap-3">
            <input placeholder="Custom amount" className="flex-1 bg-surface border border-border px-4 py-4 text-sm focus:outline-none focus:border-accent" />
            <button className="inline-flex items-center gap-2 bg-brand text-brand-foreground px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-[#6A33A5] transition-colors">
              <Heart className="w-4 h-4 fill-current" /> Support Tha Fix
            </button>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed mt-6">
            Important disclosure: Tha Fix is a for-profit media business. Payments made through this page are voluntary support payments and are not charitable donations or tax-deductible contributions. Payments are secured through Stripe checkout. Learn more at our <Link to="/support-terms" className="underline hover:text-accent">Support Terms</Link> page.
          </p>
        </div>
      </section>
    </>
  );
}