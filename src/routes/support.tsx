import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { memberships, products } from "@/data/content";


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
            <strong>Important disclosure:</strong> Tha Fix is a for-profit media business. Payments made through this page are voluntary support payments and are not charitable donations or tax-deductible contributions. Payments are secured through Stripe checkout. Learn more at our <Link to="/support-terms" className="underline hover:text-accent">Support Terms</Link> page.
          </p>
        </div>
      </section>

      {/* MEMBERSHIP PROMO */}
      <section className="relative py-24 lg:py-32 bg-brand text-brand-foreground overflow-hidden">
        <div className="absolute -top-20 -right-20 size-[500px] rounded-full bg-foreground/5" />
        <div className="absolute -bottom-32 -left-20 size-[400px] rounded-full bg-foreground/5" />
        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.3em] mb-5 opacity-70">Join The Movement</div>
            <h2 className="font-display text-5xl md:text-7xl font-black tracking-tighter leading-[0.85] mb-6 text-balance">
              This isn't a subscription.<br />
              <span className="italic">It's a family.</span>
            </h2>
            <p className="text-lg max-w-xl mb-10 opacity-80">
              Get the uncut episodes, early access, behind-the-scenes content, member livestreams, and a private community of people who get it.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/memberships" className="bg-white text-brand px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-gray-100 transition-colors">
                See Membership Plans
              </Link>
              <Link to="/community" className="border border-brand-foreground/30 px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-brand-foreground/10 transition-colors">
                Explore Community
              </Link>
            </div>
          </div>
          <div className="grid gap-4">
            {memberships.map((m) => (
              <div
                key={m.name}
                className={`p-6 border ${m.featured ? "bg-background text-foreground border-background" : "border-brand-foreground/20"}`}
              >
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <h3 className="font-display text-2xl font-black">{m.name}</h3>
                  <div className="font-display text-3xl font-black">
                    ${m.price}
                    <span className={`text-xs font-medium ${m.featured ? "text-muted-foreground" : "opacity-60"}`}>{m.period}</span>
                  </div>
                </div>
                <p className={`text-sm ${m.featured ? "text-muted-foreground" : "opacity-70"}`}>{m.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MERCH */}
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
    </>

  );
}