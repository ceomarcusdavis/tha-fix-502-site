import { createFileRoute, Link } from "@tanstack/react-router";
import { Play, Info, ArrowRight, Calendar, Users, Headphones } from "lucide-react";
import heroImg from "@/assets/hero-episode.jpg";
import { episodes, hosts, guests, products, memberships, sponsors } from "@/data/content";
import { ContentRail } from "@/components/content-rail";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tha Fix — We Lived It. Now We Talk It." },
      { name: "description", content: "A premium streaming media network. Real conversations on culture, community, sports, politics, and transformation." },
      { property: "og:title", content: "Tha Fix Media Network" },
      { property: "og:description", content: "Stream episodes, meet the hosts, join the community." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = episodes[0];
  return (
    <>
      {/* HERO */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <div className="absolute inset-0 animate-ken-burns">
          <img
            src={heroImg}
            alt={featured.title}
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/30 to-transparent" />

        <div className="relative h-full flex flex-col justify-end pb-20 lg:pb-28 px-6 lg:px-10 max-w-[1600px] mx-auto">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="bg-brand text-brand-foreground text-[10px] font-black uppercase px-2 py-1 tracking-wider">
                Latest Episode
              </span>
              <span className="text-foreground/60 text-xs font-semibold uppercase tracking-widest">
                Season {featured.season} · Episode {featured.number} · {featured.duration}
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[0.85] tracking-tighter text-balance mb-6">
              {featured.title}
            </h1>
            <p className="text-base md:text-lg text-foreground/75 max-w-xl leading-relaxed mb-8">
              {featured.description}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/watch/$slug"
                params={{ slug: featured.slug }}
                className="inline-flex items-center gap-2.5 bg-brand text-brand-foreground px-7 py-3.5 font-bold uppercase tracking-wider text-sm hover:bg-[#6A33A5] transition-colors"
              >
                <Play className="w-4 h-4 fill-current" />
                Watch Episode
              </Link>
              <Link
                to="/watch/$slug"
                params={{ slug: featured.slug }}
                className="inline-flex items-center gap-2.5 bg-foreground/10 backdrop-blur-md border border-foreground/20 px-7 py-3.5 font-bold uppercase tracking-wider text-sm hover:bg-foreground/20 transition-colors"
              >
                <Info className="w-4 h-4" />
                Episode Info
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION STRIP */}
      <section className="border-y border-border bg-surface">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-display text-2xl md:text-3xl font-bold tracking-tight italic">
            "We lived it. <span className="text-brand">Now we talk it.</span>"
          </p>
          <Link
            to="/about"
            className="text-xs font-bold uppercase tracking-widest text-foreground/70 hover:text-foreground inline-flex items-center gap-2"
          >
            About the Mission <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      <ContentRail eyebrow="Trending Now" title="The Conversations Moving Culture" episodes={episodes.slice(0, 6)} size="md" />

      <ContentRail eyebrow="New This Week" title="Fresh Drops" episodes={episodes.slice().reverse()} size="md" />

      {/* HOST SPOTLIGHT */}
      <section className="py-20 lg:py-28 bg-surface border-y border-border">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-2">The Hosts</div>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight max-w-2xl">
                The voices behind every episode
              </h2>
            </div>
            <Link to="/hosts" className="hidden md:inline-flex text-xs font-bold uppercase tracking-widest border-b border-brand text-brand pb-1">
              Meet The Team
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
            {hosts.map((h) => (
              <Link key={h.slug} to="/hosts" className="group relative overflow-hidden bg-background border border-border">
                <div className="aspect-[5/4] overflow-hidden">
                  <img src={h.image} alt={h.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand mb-2">{h.role}</div>
                  <h3 className="font-display text-4xl font-black tracking-tighter mb-3">{h.name}</h3>
                  <p className="text-sm text-foreground/70 max-w-md">{h.bio}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED GUESTS */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-2">Featured Voices</div>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
                Real people. Real perspective.
              </h2>
            </div>
            <Link to="/guests" className="hidden md:inline-flex text-xs font-bold uppercase tracking-widest border-b border-brand text-brand pb-1">
              All Guests
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {guests.map((g) => (
              <Link key={g.slug} to="/guests" className="group">
                <div className="aspect-[3/4] overflow-hidden bg-surface border border-border mb-4">
                  <img src={g.image} alt={g.name} loading="lazy" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
                </div>
                <h3 className="font-display text-lg font-bold group-hover:text-accent transition-colors">{g.name}</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{g.title}</p>
              </Link>
            ))}
          </div>
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
              <Link to="/memberships" className="bg-brand text-brand-foreground px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-[#6A33A5] transition-colors">
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

      {/* COMMUNITY + EVENTS */}
      <section className="py-20 bg-surface border-y border-border">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10 grid md:grid-cols-3 gap-6">
          {[
            { icon: Users, eyebrow: "Community", title: "Private Discord", body: "10k+ members trading game, sharing wins, holding each other accountable.", cta: "Join Community", to: "/community" as const },
            { icon: Calendar, eyebrow: "Live Events", title: "Summer Tour 2026", body: "Six cities. Live shows, town halls, and member meetups across the country.", cta: "See Events", to: "/events" as const },
            { icon: Headphones, eyebrow: "Sponsors", title: "Partner With Us", body: "Reach an engaged audience that trusts our voice. Talk to our partnerships team.", cta: "Become a Sponsor", to: "/sponsors" as const },
          ].map((b) => (
            <Link key={b.title} to={b.to} className="p-8 border border-border bg-background hover:border-accent transition-colors group">
              <b.icon className="w-7 h-7 text-brand mb-6" />
              <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-2">{b.eyebrow}</div>
              <h3 className="font-display text-2xl font-bold mb-3">{b.title}</h3>
              <p className="text-sm text-muted-foreground mb-6">{b.body}</p>
              <span className="text-xs font-bold uppercase tracking-widest text-brand inline-flex items-center gap-1.5 group-hover:gap-3 transition-all">
                {b.cta} <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* SPONSORS STRIP */}
      <section className="py-16 border-b border-border">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="text-center text-[11px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-8">
            Powered by partners who believe in the mission
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {sponsors.map((s) => (
              <div key={s} className="font-display font-black text-lg tracking-tight text-foreground/40 hover:text-foreground transition-colors">
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-4">Sunday Dispatch</div>
          <h2 className="font-display text-4xl md:text-6xl font-black tracking-tighter mb-5 text-balance">
            One email. The realest read of your week.
          </h2>
          <p className="text-muted-foreground mb-10">
            New episodes, host notes, and exclusive thoughts you won't hear on the show.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="flex-1 bg-surface border border-border px-5 py-4 text-sm focus:outline-none focus:border-brand"
            />
            <button
              type="submit"
              className="bg-brand text-brand-foreground px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-[#6A33A5] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
