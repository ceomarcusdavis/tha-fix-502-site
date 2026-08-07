import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { memberships, products } from "@/data/content";
import { PageHero } from "@/components/page-hero";
import { getPersonPlacements, getPublicAssetUrl } from "@/lib/public-content";

export const Route = createFileRoute("/hosts")({
  loader: () => getPersonPlacements(["hosts_primary"]),
  head: () => ({
    meta: [
      { title: "Hosts — Tha Fix" },
      { name: "description", content: "Meet the hosts of Tha Fix." },
      { property: "og:title", content: "Hosts — Tha Fix" },
      { property: "og:description", content: "Meet the hosts of Tha Fix." },
    ],
  }),
  errorComponent: () => (
    <div className="min-h-[70vh] grid place-items-center px-6 text-center">
      <div>
        <h1 className="font-display text-3xl font-bold mb-3">The hosts didn’t load</h1>
        <p className="text-muted-foreground">Please refresh the page and try again.</p>
      </div>
    </div>
  ),
  component: HostsPage,
});

function HostsPage() {
  const hosts = Route.useLoaderData();

  return (
    <>
      <PageHero
        eyebrow="The Hosts"
        title="The Voices Behind Tha Fix."
        description="Two perspectives. One mission. Real talk shaped by real experience."
      />
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 space-y-24">
          {hosts.map((host, index) => {
            const image = getPublicAssetUrl(host.profile_media_public_url_path);
            return (
              <div
                key={host.organization_person_public_id}
                className={`grid md:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  index % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                <Link
                  to="/hosts/$slug"
                  params={{ slug: host.slug }}
                  className="aspect-[4/5] overflow-hidden bg-surface border border-border group"
                >
                  {image && (
                    <img
                      src={image}
                      alt={host.profile_media_alt_text || host.display_name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                </Link>
                <div>
                  <div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-3">
                    {host.headline || "Host"}
                  </div>
                  <h2 className="font-display text-5xl md:text-7xl font-black tracking-tighter leading-[0.85] mb-6">
                    {host.display_name}
                  </h2>
                  {(host.biography || "").split("\n\n").map((paragraph, paragraphIndex) => (
                    <p
                      key={paragraphIndex}
                      className="text-lg text-foreground/80 leading-relaxed mb-4 last:mb-0"
                    >
                      {paragraph}
                    </p>
                  ))}
                  <Link
                    to="/hosts/$slug"
                    params={{ slug: host.slug }}
                    className="inline-flex items-center gap-2 mt-7 text-xs font-bold uppercase tracking-widest text-brand border-b border-brand pb-1"
                  >
                    View Profile <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="relative py-24 lg:py-32 bg-brand text-brand-foreground overflow-hidden">
        <div className="absolute -top-20 -right-20 size-[500px] rounded-full bg-foreground/5" />
        <div className="absolute -bottom-32 -left-20 size-[400px] rounded-full bg-foreground/5" />
        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.3em] mb-5 opacity-70">
              Join The Movement
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-black tracking-tighter leading-[0.85] mb-6 text-balance">
              This isn't a subscription.<br />
              <span className="italic">It's a family.</span>
            </h2>
            <p className="text-lg max-w-xl mb-10 opacity-80">
              Get the uncut episodes, early access, behind-the-scenes content, member livestreams, and a private community of people who get it.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/memberships"
                className="bg-white text-brand px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-gray-100 transition-colors"
              >
                See Membership Plans
              </Link>
              <Link
                to="/community"
                className="border border-brand-foreground/30 px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-brand-foreground/10 transition-colors"
              >
                Explore Community
              </Link>
            </div>
          </div>
          <div className="grid gap-4">
            {memberships.map((membership) => (
              <div
                key={membership.name}
                className={`p-6 border ${
                  membership.featured
                    ? "bg-background text-foreground border-background"
                    : "border-brand-foreground/20"
                }`}
              >
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <h3 className="font-display text-2xl font-black">{membership.name}</h3>
                  <div className="font-display text-3xl font-black">
                    ${membership.price}
                    <span
                      className={`text-xs font-medium ${
                        membership.featured ? "text-muted-foreground" : "opacity-60"
                      }`}
                    >
                      {membership.period}
                    </span>
                  </div>
                </div>
                <p
                  className={`text-sm ${
                    membership.featured ? "text-muted-foreground" : "opacity-70"
                  }`}
                >
                  {membership.tagline}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-2">
                The Supply Drop
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
                Wear the message.
              </h2>
            </div>
            <Link
              to="/shop"
              className="hidden md:inline-flex text-xs font-bold uppercase tracking-widest border-b border-brand text-brand pb-1"
            >
              Shop All
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((product) => (
              <Link to="/shop" key={product.slug} className="group">
                <div className="aspect-[4/5] overflow-hidden bg-surface border border-border mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider group-hover:text-accent transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">{product.category}</p>
                  </div>
                  <span className="font-display font-black text-brand">${product.price}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 flex justify-center md:hidden">
            <Link
              to="/shop"
              className="text-xs font-bold uppercase tracking-widest border-b border-brand text-brand pb-1 inline-flex items-center gap-2"
            >
              Shop All <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
