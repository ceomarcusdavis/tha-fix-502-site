import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Play } from "lucide-react";
import {
  getPersonBySlug,
  getPublicAssetUrl,
  getWatchFeed,
} from "@/lib/public-content";
import { EpisodeCard } from "@/components/episode-card";

export const Route = createFileRoute("/guests/$slug")({
  loader: async ({ params }) => {
    const person = await getPersonBySlug(params.slug);
    if (!person) throw notFound();

    const content = (await getWatchFeed({ search: person.display_name, limit: 12 })).filter(
      (item) => item.credits.some(
        (credit) =>
          credit.organization_person_public_id === person.organization_person_public_id,
      ),
    );

    return { person, content };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.person.display_name} — Tha Fix Guest` },
          {
            name: "description",
            content:
              loaderData.person.headline ||
              `Meet ${loaderData.person.display_name}, a featured guest on Tha Fix.`,
          },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="min-h-[70vh] grid place-items-center px-6 text-center">
      <div>
        <h1 className="font-display text-4xl font-bold mb-3">Guest not found</h1>
        <Link to="/guests" className="text-brand text-xs font-bold uppercase tracking-widest">
          Meet the guests →
        </Link>
      </div>
    </div>
  ),
  component: GuestProfilePage,
});

function GuestProfilePage() {
  const { person, content } = Route.useLoaderData();
  const image = getPublicAssetUrl(person.profile_media_public_url_path);

  return (
    <>
      <section className="pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <Link
            to="/guests"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand mb-10"
          >
            <ArrowLeft className="w-4 h-4" /> All Guests
          </Link>
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div className="aspect-[4/5] overflow-hidden bg-surface border border-border">
              {image && (
                <img
                  src={image}
                  alt={person.profile_media_alt_text || person.display_name}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="md:pt-8">
              <div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-3">
                Featured Guest
              </div>
              <h1 className="font-display text-5xl md:text-7xl font-black tracking-tighter leading-[0.85] mb-5">
                {person.display_name}
              </h1>
              {person.headline && (
                <p className="font-display text-2xl font-bold text-foreground/70 mb-8">
                  {person.headline}
                </p>
              )}
              {(person.biography || "").split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-lg text-foreground/80 leading-relaxed mb-5 last:mb-0">
                  {paragraph}
                </p>
              ))}
              {content[0] && (
                <Link
                  to="/watch/$slug"
                  params={{ slug: content[0].slug }}
                  className="inline-flex items-center gap-2 mt-8 bg-brand text-brand-foreground px-6 py-3 text-xs font-bold uppercase tracking-widest"
                >
                  <Play className="w-4 h-4 fill-current" /> Watch the Conversation
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {content.length > 0 && (
        <section className="py-16 border-t border-border">
          <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
            <div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-2">
              Featuring {person.display_name}
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-10">
              Conversations and highlights
            </h2>
            <div className="grid md:grid-cols-3 gap-x-6 gap-y-10">
              {content.map((item) => (
                <EpisodeCard key={item.content_public_id} ep={item} size="lg" />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
