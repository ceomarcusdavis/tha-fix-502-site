import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { memberships, products } from "@/data/content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Tha Fix" },
      { name: "description", content: "Tha Fix is a media network for real conversations. We lived it. Now we talk it." },
      { property: "og:title", content: "About — Tha Fix" },
      { property: "og:description", content: "We lived it. Now we talk it." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="We Lived It. Now We Talk It." description="A media network created to inform, challenge, entertain, and connect." />

      {/* 1. WHO WE ARE */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10">
          <div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-4">Who We Are</div>
          <img
            src="/images/thafix-logo-horizontal.png"
            alt="Tha Fix"
            className="block w-full h-auto max-w-[50%] mx-auto mb-8"
          />
          <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight mb-8">This Is Tha Fix</h2>
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>Tha Fix brings together two men with decades of lived experience and unfiltered perspectives.</p>
            <p>Hosted by Jon Mic and Marcus Davis - two brothers who met behind bars and rebuilt their lives beyond the walls - Tha Fix breaks down sports, politics, violence, community, and the culture shaping us all.</p>
            <p>From prison to purpose, every conversation is raw, real, and relevant. No fluff. Nothing fake. Just the fix you've been missing.</p>
          </div>
        </div>
      </section>

      {/* 2. OUR MISSION */}
      <section className="py-16 lg:py-20 bg-[#F7F8FA] border-y border-border">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10">
          <div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-4">Our Mission</div>
          <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight mb-8">What Drives Us</h2>
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>Tha Fix exists to create honest conversations shaped by lived experience. We examine the issues affecting our communities, challenge the thinking that keeps people stuck, and make room for perspectives that are often overlooked.</p>
            <p>We do more than identify problems. We talk about accountability, solutions, growth, and what it takes to move forward.</p>
          </div>
        </div>
      </section>

      {/* 3. OUR VISION */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10">
          <div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-4">Our Vision</div>
          <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight mb-8">Where We're Going</h2>
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>Tha Fix is growing beyond a show into a media network where hosts, guests, creators, and members can share perspectives, tell meaningful stories, and participate in conversations that matter.</p>
            <p>Through original shows, interviews, articles, community discussions, events, and partnerships, Tha Fix Media Network will create opportunities for authentic voices to be heard and real connections to be built.</p>
            <p>We lived it. Now we talk it - and we're building a network where others can tell their stories too.</p>
          </div>
        </div>
      </section>

      {/* 4. MEET THE HOSTS */}
      <section className="py-16 lg:py-20 bg-[#F7F8FA] border-y border-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-start">
          <div className="aspect-[4/5] overflow-hidden border border-border">
            <img src="/images/hosts-about.jpg" alt="The hosts of Tha Fix" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-4">Meet the Hosts</div>
            <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight mb-8">Two Voices. One Mission.</h2>
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <div>
                <h3 className="font-display text-2xl font-black mb-2 text-foreground">Jon Mic</h3>
                <p>Jon Mic brings wisdom, directness, and decades of perspective to every conversation. His voice reflects the lessons of experience, personal transformation, and a willingness to speak honestly - even when the truth is uncomfortable.</p>
              </div>
              <div>
                <h3 className="font-display text-2xl font-black mb-2 text-foreground">Marcus Davis</h3>
                <p>Marcus Davis brings a strategic, community-focused perspective shaped by his journey from incarceration to entrepreneurship and leadership. He connects lived experience with practical thinking about culture, business, opportunity, and progress.</p>
              </div>
              <p>Together, Jon Mic and Marcus offer two distinct perspectives connected by one mission: to have real conversations that inform, challenge, entertain, and inspire.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHAT WE STAND FOR */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-4">What We Stand For</div>
          <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 border border-border bg-surface hover:border-accent transition-colors">
              <h3 className="font-display text-2xl font-bold mb-3 text-center">Authenticity</h3>
              <p className="text-muted-foreground">Our conversations come from lived experience - not rehearsed opinions or manufactured controversy. We speak honestly about what we have seen, survived, learned, and become.</p>
            </div>
            <div className="p-8 border border-border bg-surface hover:border-accent transition-colors">
              <h3 className="font-display text-2xl font-bold mb-3 text-center">Accountability</h3>
              <p className="text-muted-foreground">We do more than complain about what is broken. We examine our own choices, challenge each other, and talk about what it takes to create meaningful change.</p>
            </div>
            <div className="p-8 border border-border bg-surface hover:border-accent transition-colors">
              <h3 className="font-display text-2xl font-bold mb-3 text-center">Culture</h3>
              <p className="text-muted-foreground">Tha Fix lives where street knowledge meets strategy. We explore the people, experiences, decisions, and systems shaping our communities and the culture around us.</p>
            </div>
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
          <div className="mt-10 flex justify-center md:hidden">
            <Link to="/shop" className="text-xs font-bold uppercase tracking-widest border-b border-brand text-brand pb-1 inline-flex items-center gap-2">
              Shop All <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}