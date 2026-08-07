import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { getPersonBySlug, getPublicAssetUrl } from "@/lib/public-content";

export const Route = createFileRoute("/hosts/$slug")({
  loader: async ({ params }) => {
    const person = await getPersonBySlug(params.slug);
    if (!person) throw notFound();
    return person;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.display_name} — Tha Fix Host` },
          {
            name: "description",
            content: loaderData.headline || `Meet ${loaderData.display_name}, host of Tha Fix.`,
          },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="min-h-[70vh] grid place-items-center px-6 text-center">
      <div>
        <h1 className="font-display text-4xl font-bold mb-3">Host not found</h1>
        <Link to="/hosts" className="text-brand text-xs font-bold uppercase tracking-widest">
          Meet the hosts →
        </Link>
      </div>
    </div>
  ),
  component: HostProfilePage,
});

function HostProfilePage() {
  const host = Route.useLoaderData();
  const image = getPublicAssetUrl(host.profile_media_public_url_path);

  return (
    <section className="pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <Link
          to="/hosts"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand mb-10"
        >
          <ArrowLeft className="w-4 h-4" /> All Hosts
        </Link>
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="aspect-[4/5] overflow-hidden bg-surface border border-border">
            {image && (
              <img
                src={image}
                alt={host.profile_media_alt_text || host.display_name}
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div className="md:pt-8">
            <div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-3">
              Tha Fix Host
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-black tracking-tighter leading-[0.85] mb-5">
              {host.display_name}
            </h1>
            {host.headline && (
              <p className="font-display text-2xl font-bold text-foreground/70 mb-8">
                {host.headline}
              </p>
            )}
            {(host.biography || "").split("\n\n").map((paragraph, index) => (
              <p key={index} className="text-lg text-foreground/80 leading-relaxed mb-5 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
