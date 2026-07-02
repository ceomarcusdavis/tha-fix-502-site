import { createFileRoute } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import { products } from "@/data/content";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Tha Fix" },
      { name: "description", content: "Official Tha Fix merchandise. Apparel, accessories, and limited drops." },
      { property: "og:title", content: "Shop — Tha Fix" },
      { property: "og:description", content: "Official Tha Fix merchandise." },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  return (
    <>
      <PageHero eyebrow="The Supply" title="Wear the message." description="Premium streetwear and accessories built to last. A piece of the movement." />
      <section className="py-16">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p.slug} className="group">
              <div className="aspect-[4/5] overflow-hidden bg-surface border border-border mb-4 relative">
                <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <button className="absolute bottom-3 right-3 bg-brand text-brand-foreground p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <ShoppingBag className="w-4 h-4" />
                </button>
              </div>
              <div className="flex justify-between items-start gap-3">
                <div>
                  <h3 className="font-bold uppercase text-sm tracking-wider group-hover:text-accent">{p.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{p.category}</p>
                </div>
                <span className="font-display text-xl font-black text-brand">${p.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-12 border-t border-border bg-surface">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid sm:grid-cols-3 gap-8 text-center">
          <div><div className="font-display text-2xl font-bold mb-1">Members Save 15%</div><p className="text-xs text-muted-foreground uppercase tracking-widest">Auto-applied at checkout</p></div>
          <div><div className="font-display text-2xl font-bold mb-1">Free Shipping $75+</div><p className="text-xs text-muted-foreground uppercase tracking-widest">Continental US</p></div>
          <div><div className="font-display text-2xl font-bold mb-1">Secure Checkout</div><p className="text-xs text-muted-foreground uppercase tracking-widest">Encrypted &amp; Protected</p></div>
        </div>
      </section>
    </>
  );
}