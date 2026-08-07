import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { getPersonPlacements, getPublicAssetUrl } from "@/lib/public-content";

export const Route = createFileRoute("/guests/")({
  loader: () => getPersonPlacements(["guests_featured"]),
  head: () => ({
    meta: [
      { title: "Guests — Tha Fix" },
      {
        name: "description",
        content: "Meet the founders, artists, faith leaders, organizers, and community voices who join Tha Fix.",
      },
    ],
  }),
  errorComponent: () => (
    <div className="min-h-[70vh] grid place-items-center px-6 text-center">
      <div>
        <h1 className="font-display text-3xl font-bold mb-3">The guests didn’t load</h1>
        <p className="text-muted-foreground">Please refresh the page and try again.</p>
      </div>
    </div>
  ),
  component: GuestsPage,
});

function GuestsPage() {
  const guests = Route.useLoaderData();

  return (
    <>
      <PageHero
        eyebrow="The Guests"
        title="The voices we sit down with."
        description="Founders. Athletes. Faith leaders. Organizers. Everyday people with extraordinary stories."
      />
      <section className="py-20 lg:py-28">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          {guests.length === 0 ? (
            <div className="border border-border bg-surface p-10 text-center">
              <h2 className="font-display text-3xl font-bold mb-3">Guest conversations are coming.</h2>
              <p className="text-muted-foreground">Check back as new interviews are published.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {guests.map((guest) => {
                const image = getPublicAssetUrl(guest.profile_media_public_url_path);
                return (
                  <Link
                    key={guest.organization_person_public_id}
                    to="/guests/$slug"
                    params={{ slug: guest.slug }}
                    className="group border border-border bg-background overflow-hidden"
                  >
                    <div className="aspect-[4/5] overflow-hidden bg-surface">
                      {image && (
                        <img
                          src={image}
                          alt={guest.profile_media_alt_text || guest.display_name}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      )}
                    </div>
                    <div className="p-6">
                      <div className="text-brand text-[10px] font-bold uppercase tracking-[0.25em] mb-2">
                        Featured Guest
                      </div>
                      <h2 className="font-display text-3xl font-black tracking-tight mb-2">
                        {guest.display_name}
                      </h2>
                      {guest.headline && (
                        <p className="text-sm text-muted-foreground mb-5">{guest.headline}</p>
                      )}
                      <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand">
                        View Profile <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
