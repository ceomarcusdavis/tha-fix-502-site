import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { PackageCheck, ShieldCheck, ShoppingBag } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { formatMerchPrice, getPublicMerchCatalog } from "@/lib/commerce";

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
  const catalogQuery = useQuery({
    queryKey: ["public-merch-catalog"],
    queryFn: getPublicMerchCatalog,
    staleTime: 5 * 60 * 1000,
  });

  const products = catalogQuery.data ?? [];

  return (
    <>
      <PageHero eyebrow="The Supply" title="Represent Tha Fix." description="Wear the message. Support the network." />

      <section className="py-16">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          {catalogQuery.isPending ? (
            <div className="border border-border bg-surface p-8 text-sm text-muted-foreground">Loading official Tha Fix merchandise…</div>
          ) : null}

          {catalogQuery.isError ? (
            <div className="border border-destructive/30 bg-destructive/5 p-8">
              <h2 className="font-display text-2xl font-bold mb-2">The shop is temporarily unavailable.</h2>
              <p className="text-sm text-muted-foreground">We couldn’t load the official merchandise catalog right now. Please check back shortly.</p>
            </div>
          ) : null}

          {!catalogQuery.isPending && !catalogQuery.isError && products.length === 0 ? (
            <div className="max-w-3xl border border-border bg-surface p-8 md:p-10">
              <div className="inline-flex items-center gap-2 text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-4">
                <PackageCheck className="w-4 h-4" /> Store Setup In Progress
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-black tracking-tight mb-4">The first official Tha Fix drop is being prepared.</h2>
              <p className="text-muted-foreground leading-relaxed">
                Merchandise will appear here only after the final product, variant, price, and fulfillment details are connected to the official Tha Fix store. No prototype products are available for purchase.
              </p>
            </div>
          ) : null}

          {products.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => {
                const prices = product.variants.map((variant) => variant.price_cents);
                const minimumPrice = Math.min(...prices);
                const maximumPrice = Math.max(...prices);
                const image = product.primary_image_url || product.variants.find((variant) => variant.variant_image_url)?.variant_image_url || null;
                const currency = product.variants[0]?.currency || "usd";

                return (
                  <article key={product.product_public_id} className="group border border-border bg-background">
                    <div className="aspect-[4/5] overflow-hidden bg-surface relative">
                      {image ? (
                        <img src={image} alt={product.product_name} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">Product image coming soon</div>
                      )}
                      <div className="absolute bottom-3 right-3 bg-brand text-brand-foreground p-3 rounded-full" aria-hidden="true">
                        <ShoppingBag className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <h2 className="font-bold uppercase text-sm tracking-wider">{product.product_name}</h2>
                          {product.category ? <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{product.category}</p> : null}
                        </div>
                        <span className="font-display text-lg font-black text-brand whitespace-nowrap">
                          {minimumPrice === maximumPrice
                            ? formatMerchPrice(minimumPrice, currency)
                            : `${formatMerchPrice(minimumPrice, currency)}+`}
                        </span>
                      </div>
                      {product.description ? <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{product.description}</p> : null}
                      <p className="text-xs text-muted-foreground mt-4">{product.variants.length} purchase option{product.variants.length === 1 ? "" : "s"} available.</p>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : null}
        </div>
      </section>

      <section className="py-12 border-t border-border bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="font-display text-2xl font-bold mb-1">Member Discounts</div>
            <p className="text-xs text-muted-foreground uppercase tracking-widest">Applied only when eligible at checkout</p>
          </div>
          <div>
            <div className="font-display text-2xl font-bold mb-1">Fulfillment-Based Shipping</div>
            <p className="text-xs text-muted-foreground uppercase tracking-widest">Rates calculated from the final order</p>
          </div>
          <div>
            <div className="font-display text-2xl font-bold mb-1 inline-flex items-center justify-center gap-2"><ShieldCheck className="w-5 h-5" /> Secure Checkout</div>
            <p className="text-xs text-muted-foreground uppercase tracking-widest">Payment processing will be handled through Stripe</p>
          </div>
        </div>
      </section>
    </>
  );
}
