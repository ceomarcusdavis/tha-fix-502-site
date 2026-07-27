import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Lightbulb, Users, Radio, PenLine, Sparkles, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { memberships, products } from "@/data/content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community — Tha Fix" },
      { name: "description", content: "Preview the Tha Fix community. Two levels of member access built for honest conversation, participation, and connection." },
      { property: "og:title", content: "Community — Tha Fix" },
      { property: "og:description", content: "Two levels of member access — the community feed and the private network. Preview what members do inside Tha Fix." },
    ],
  }),
  component: CommunityPage,
});

const valueCards = [
  {
    icon: MessageCircle,
    title: "Speak Your Mind",
    body: "Respond to episodes, join members-only discussions, and share your perspective on the issues affecting culture and community.",
  },
  {
    icon: Lightbulb,
    title: "Help Shape Tha Fix",
    body: "Submit questions and topic ideas for future episodes. Eligible members can also vote on selected episode topics.",
  },
  {
    icon: Users,
    title: "Build Real Connections",
    body: "Meet other members, participate in live sessions, and connect around shared experiences, goals, businesses, and ideas.",
  },
];

const insideCards = [
  {
    icon: MessageCircle,
    title: "Continue the Conversation",
    body: "Discuss episodes, clips, cultural issues, community concerns, entrepreneurship, transformation, and the stories behind the content.",
  },
  {
    icon: Lightbulb,
    title: "Submit Questions and Topics",
    body: "Tell Marcus and Jon Mic what you want Tha Fix to discuss. Member questions and suggestions may be considered for episodes, interviews, and live conversations.",
  },
  {
    icon: Radio,
    title: "Join Live Conversations",
    body: "Eligible Network and Founder members can participate in monthly webinars or networking sessions featuring discussion, connection, and community participation.",
  },
  {
    icon: PenLine,
    title: "Publish Your Perspective",
    body: "Network and Founder members can create and submit blog posts for publication, subject to Tha Fix's editorial, formatting, and community requirements.",
  },
  {
    icon: Sparkles,
    title: "Discover Opportunities",
    body: "Founders receive priority consideration for eligible collaborations, guest opportunities, brand spotlights, event features, and other opportunity drops.",
  },
];

const standards = [
  "Debate the point without attacking the person.",
  "Protect private information shared inside member spaces.",
  "Post only content you own or have permission to use.",
  "Do not spam, scam, impersonate, or deliberately disrupt discussions.",
  "Respect moderation decisions and help us protect the community.",
];

const faqs = [
  {
    q: "Is the community open to everyone?",
    a: "Community participation is available to active paid members who are at least 18 years old. Different features are available based on membership level.",
  },
  {
    q: "What does The Audience membership include?",
    a: "The Audience includes access to members-only community-feed discussions, question and topic submissions, blog commenting, early episode access, and bonus clips.",
  },
  {
    q: "What additional community access comes with The Network?",
    a: "Network members receive everything in The Audience, plus private-community access, a monthly webinar or networking session, voting opportunities, behind-the-scenes discussions, and the ability to create and submit blog posts.",
  },
  {
    q: "Can I promote my business in the community?",
    a: "Members may share eligible information when it is relevant to a discussion or permitted community feature. Unapproved spam, repetitive promotion, misleading offers, and solicitation may be removed. Founder spotlights and selected opportunities are governed separately.",
  },
  {
    q: "Will my post or question appear on Tha Fix?",
    a: "Submission does not guarantee selection, publication, promotion, or an on-air response. Tha Fix retains editorial and moderation control. Founder priority Q&A submissions receive a reasonable response under the applicable membership terms.",
  },
  {
    q: "What happens if I cancel?",
    a: "Audience and Network memberships continue through the end of the paid billing period unless access ends for another reason. After membership ends, members lose access to members-only features and can no longer create new comments or posts.",
  },
  {
    q: "Where will the private community be hosted?",
    a: "Eligible members will receive access instructions through their Tha Fix account and registered email address.",
  },
];

const communityFeedBenefits = [
  "Members-only discussions",
  "Episode and topic conversations",
  "Question and topic submissions",
  "Blog commenting",
  "Community announcements",
  "Member polls and selected feedback opportunities",
];

const privateNetworkBenefits = [
  "Everything in the community feed",
  "Private-community access",
  "Monthly live webinar or networking session",
  "Voting opportunities on episode topics",
  "Behind-the-scenes and raw discussions",
  "Ability to create and submit blog posts",
  "Access to eligible collaboration and networking opportunities",
];

function CommunityPage() {
  return (
    <>
      <PageHero eyebrow="Community" title="Your Voice Belongs Here." description="Connect with the hosts and members who make Tha Fix more than a show." />

      {/* ABOUT US */}
      <section className="py-16 lg:py-20 border-b border-border">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-4">About Us</div>
          <p className="text-lg text-foreground/80 leading-relaxed mb-8">
            Tha Fix brings together people who have lived through real experiences, formed real opinions, and aren't afraid to talk about them. Join the community to discuss the episodes, submit questions, share your perspective, and connect with people who value honest conversation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/memberships"
              className="inline-flex items-center gap-2 bg-brand text-brand-foreground px-7 py-3.5 font-bold uppercase tracking-wider text-sm hover:bg-[#6A33A5] transition-colors"
            >
              Join the Community
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-border bg-surface px-7 py-3.5 font-bold uppercase tracking-wider text-sm hover:border-accent transition-colors"
            >
              Already a Member? Sign In
            </Link>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            Memberships start at $7/month. Must be 18 or older.
          </p>
        </div>
      </section>

      {/* MORE THAN AN AUDIENCE */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-12">
            <div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-3">More Than An Audience</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-5">
              Don't Just Watch the Conversation. Be Part of It.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Tha Fix was built for participation. Our members help shape the questions we ask, the subjects we explore, and the conversations that continue after every episode. This is where viewers become contributors, connections get made, and different perspectives get heard.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {valueCards.map((f) => (
              <div key={f.title} className="p-8 border border-border bg-surface hover:border-accent transition-colors">
                <f.icon className="w-7 h-7 text-brand mb-5" />
                <h3 className="font-display text-2xl font-bold mb-3">{f.title}</h3>
                <p className="text-muted-foreground">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHOOSE YOUR LEVEL */}
      <section className="py-20 bg-[#F7F8FA] border-y border-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-3">Choose Your Level</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              There's a Place for Every Kind of Member.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Community Feed */}
            <div className="p-8 flex flex-col border border-border bg-surface">
              <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand mb-3">Available to all paid members</div>
              <h3 className="font-display text-3xl font-black mb-4">The Community Feed</h3>
              <p className="text-muted-foreground mb-6">
                The community feed is where members can respond to Tha Fix conversations, discuss episodes, exchange perspectives, submit questions, and stay connected between releases.
              </p>
              <div className="text-[11px] font-bold uppercase tracking-widest text-foreground/70 mb-3">Included</div>
              <ul className="space-y-2 mb-8 flex-1">
                {communityFeedBenefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm">
                    <span className="text-brand mt-1">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/memberships"
                className="block text-center w-full py-4 text-xs font-bold uppercase tracking-widest bg-brand text-brand-foreground hover:bg-[#6A33A5] transition-colors"
              >
                Join The Audience — $7/Month
              </Link>
            </div>

            {/* Private Network */}
            <div className="relative p-8 flex flex-col border border-brand bg-brand text-brand-foreground shadow-2xl md:scale-[1.02]">
              <div className="text-[11px] font-bold uppercase tracking-[0.3em] opacity-80 mb-3">Available to Network and Founder members</div>
              <h3 className="font-display text-3xl font-black mb-4">The Private Network</h3>
              <p className="opacity-85 mb-6">
                Go beyond the general discussion and enter a more connected space built for deeper conversation, networking, participation, and collaboration.
              </p>
              <div className="text-[11px] font-bold uppercase tracking-widest opacity-80 mb-3">Included</div>
              <ul className="space-y-2 mb-8 flex-1">
                {privateNetworkBenefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm">
                    <span className="text-accent mt-1">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/memberships"
                className="block text-center w-full py-4 text-xs font-bold uppercase tracking-widest bg-accent text-accent-foreground hover:brightness-110 transition-all"
              >
                Join The Network — $19/Month
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed max-w-3xl mx-auto text-center mt-8">
            First-wave Audience and Network prices are limited to the first 100 qualifying members in each plan and remain protected while the membership stays continuously active and in good standing. Review the full plan details before joining.{" "}
            <Link to="/membership-terms" className="text-brand underline hover:text-accent">
              Membership Terms
            </Link>
          </p>
        </div>
      </section>

      {/* INSIDE THE COMMUNITY */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-12">
            <div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-3">Inside The Community</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              Watch. Respond. Contribute. Connect.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {insideCards.map((f) => (
              <div key={f.title} className="p-8 border border-border bg-surface hover:border-accent transition-colors">
                <f.icon className="w-7 h-7 text-brand mb-5" />
                <h3 className="font-display text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REAL DOESN'T MEAN RECKLESS */}
      <section className="py-20 bg-[#F7F8FA] border-y border-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-10">
            <div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-3">Real Doesn't Mean Reckless</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-5">
              Honest Conversation. Mutual Respect.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Tha Fix welcomes strong opinions, disagreement, controversial subjects, and ordinary profanity. Members can criticize ideas, challenge viewpoints, and have difficult conversations. What we do not accept is harassment, threats, discrimination, doxxing, impersonation, repeated personal attacks, or behavior that puts other members at risk.
            </p>
          </div>
          <ul className="grid md:grid-cols-2 gap-4 mb-10">
            {standards.map((s) => (
              <li key={s} className="flex items-start gap-3 p-5 bg-surface border border-border">
                <span className="text-brand font-black mt-0.5">✓</span>
                <span className="text-sm">{s}</span>
              </li>
            ))}
          </ul>
          <Link
            to="/guidelines"
            className="inline-flex items-center gap-2 bg-brand text-brand-foreground px-7 py-3.5 font-bold uppercase tracking-wider text-sm hover:bg-[#6A33A5] transition-colors"
          >
            Read the Community Guidelines <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* WHY THIS COMMUNITY IS DIFFERENT */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-3">Why This Community Is Different</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Built From Lived Experience. Open to Real Perspective.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Marcus Davis and Jon Mic didn't build Tha Fix from theory. They built it from lives that have included consequences, transformation, entrepreneurship, community work, and growth. Tha Fix brings that same honesty into its community — a place where people can talk about what is happening, why it is happening, and what it may take to fix it.
          </p>
          <blockquote className="border-l-4 border-accent pl-6 py-2">
            <p className="font-display text-2xl md:text-3xl font-bold italic tracking-tight text-balance">
              "We lived it. Now we talk it — and the community talks back."
            </p>
          </blockquote>
        </div>
      </section>

      {/* COMMUNITY FAQ */}
      <section className="py-20 bg-[#F7F8FA] border-y border-border">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-3">Community FAQ</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-10">
            Before You Join
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border border-border bg-surface mb-3 px-5">
                <AccordionTrigger className="text-left font-display text-lg font-bold hover:no-underline hover:text-brand">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* JOIN THE MOVEMENT */}
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

      {/* THE SUPPLY DROP */}
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