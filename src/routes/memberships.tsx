import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Check, Eye, MessageSquare, Users, Sparkles, ArrowRight } from "lucide-react";
import { getPublicMembershipPlans, PublicMembershipPlan } from "@/lib/account";
import { PageHero } from "@/components/page-hero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/memberships")({
  head: () => ({
    meta: [
      { title: "Memberships — Tha Fix" },
      { name: "description", content: "Join the Tha Fix family. Exclusive content, early access, community, and live events." },
      { property: "og:title", content: "Memberships — Tha Fix" },
      { property: "og:description", content: "Exclusive content, early access, and community." },
    ],
  }),
  component: MembershipsPage,
});

const membershipNotes: Record<string, string> = {
  audience: "*First-wave price: $7 per month for the first 100 qualifying Audience members. Standard price: $9 per month after the first-wave allocation is filled.",
  network: "*First-wave price: $19 per month for the first 100 qualifying Network members. Standard price: $29 per month after the first-wave allocation is filled.",
  founder: "*Availability: Limited to 100 approved and fully paid Founder members.",
};

const cardDisclosures: Record<string, string> = {
  audience: "Renews automatically each month until canceled. Eligible first-wave members keep the $7 monthly rate while their membership remains continuously active.",
  network: "Renews automatically each month until canceled. Eligible first-wave members keep the $19 monthly rate while their membership remains continuously active.",
};

const taglines: Record<string, string> = {
  audience: "Stay Connected",
  network: "Get In The Room",
  founder: "Build It With Us",
};

const whyCards = [
  { icon: Eye, title: "Go Behind the Conversation", body: "Get early episodes, bonus clips, After Hours content, and behind-the-scenes discussions that are not available to the general public." },
  { icon: MessageSquare, title: "Make Your Voice Heard", body: "Submit questions, recommend topics, comment on posts, participate in discussions, and help influence future content." },
  { icon: Users, title: "Build Real Connections", body: "Connect with members, creators, entrepreneurs, community leaders, and others who want to turn conversation into relationships and opportunity." },
  { icon: Sparkles, title: "Get Closer to Tha Fix", body: "Access member sessions, special opportunities, future events, collaborations, and other experiences based on your membership level." },
];

const howSteps = [
  { title: "Choose your membership", body: "Select The Audience, The Network, or the limited Founder offer." },
  { title: "Create your account", body: "Memberships are personal, available only to adults 18 or older, and cannot be shared or transferred." },
  { title: "Complete secure checkout", body: "Payments will be processed securely through Stripe when checkout is activated." },
  { title: "Access your benefits", body: "Sign in to your member account and follow the onboarding instructions sent by email." },
  { title: "Stay connected", body: "Receive member announcements, content updates, session information, and applicable opportunities." },
];

const faqs = [
  { q: "Are Tha Fix memberships available to everyone?", a: "Memberships are available only to people who are at least 18 years old and meet the applicable account and payment requirements." },
  { q: "Do The Audience and The Network renew automatically?", a: "Yes. These plans automatically renew monthly until canceled." },
  { q: "Can I cancel at any time?", a: "Yes. Cancellation stops future renewals, and access ordinarily continues through the end of the current paid billing period." },
  { q: "Will I receive a refund if I cancel?", a: "Membership payments are generally nonrefundable except in limited situations described in the Membership Terms, including certain duplicate, unauthorized, or technical-error charges and where required by law." },
  { q: "Will my introductory price increase?", a: "Eligible first-wave Audience and Network members retain their introductory rate while their membership remains continuously active. If they cancel and later rejoin, the then-current price applies." },
  { q: "Is The Founder a lifetime membership?", a: "The Founder provides access for as long as Tha Fix continues operating as a business, subject to the Membership Terms and account standing requirements." },
  { q: "What happens after the first 100 Founder memberships are sold?", a: "The Founder offer closes and is replaced by The Inner Circle, currently planned at $497 one-time." },
  { q: "Are higher-tier benefits cumulative?", a: "Yes. The Network includes The Audience benefits, and The Founder includes The Network and The Audience benefits." },
  { q: "Does priority access guarantee an event ticket or collaboration?", a: "No. Priority or early access provides an earlier or prioritized opportunity, but availability, capacity, eligibility, scheduling, and other requirements still apply." },
  { q: "Can I share my membership?", a: "No. Each membership and account is intended for one person and cannot be shared, transferred, or resold." },
  { q: "How do I access the private community?", a: "Approved Network and Founder members will receive access instructions after enrollment. Access requires an active membership and compliance with the Community Guidelines." },
  { q: "How do I receive my Founder T-shirt?", a: "Tha Fix will collect the member's size and shipping information during onboarding. Production and delivery estimates should be disclosed at that time." },
  { q: "Where can I get help?", a: "Contact info@thafix502.com with membership or account questions." },
];

const comparisonRows: Array<[string, boolean | string, boolean | string, boolean | string]> = [
  ["Early access to new episodes", true, true, true],
  ["Members-only bonus clips", true, true, true],
  ["Community feed access", true, true, true],
  ["Submit questions & topics", true, true, true],
  ["Ability to comment on blog posts", true, true, true],
  ["Tha Fix After Hours (unfiltered)", false, true, true],
  ["Behind-the-scenes + raw discussions", false, true, true],
  ["Voting power on topics", false, true, true],
  ["Merch discount", false, "10%", "15%"],
  ["Monthly live webinar / networking", false, true, true],
  ["Private community access", false, true, true],
  ["Submit blog posts for review", false, true, true],
  ["Access while Tha Fix operates", false, false, true],
  ["Free exclusive Tha Fix T-shirt", false, false, true],
  ["Listed as Founding Member on site", false, false, true],
  ["Quarterly private strategy session", false, false, true],
  ["Members-only documentary content", false, false, true],
  ["Priority consideration for collabs", false, false, true],
  ["Featured member or brand spotlight", false, false, true],
  ["Early access to events & platform features", false, false, true],
];

function priceLabel(plan: PublicMembershipPlan) {
  const amount = new Intl.NumberFormat("en-US", { style: "currency", currency: plan.currency.toUpperCase(), maximumFractionDigits: 0 }).format(plan.current_amount_cents / 100);
  return plan.billing_interval === "month" ? `${amount}/mo` : `${amount} one-time`;
}

function planFeatures(plan: PublicMembershipPlan) {
  return plan.entitlements.map((entitlement) => {
    if (entitlement.code === "merch_discount_percent") return `${entitlement.value}% merch discount`;
    return entitlement.name;
  });
}

function MembershipsPage() {
  const { data: plans = [], isLoading, isError } = useQuery({
    queryKey: ["public-membership-plans"],
    queryFn: getPublicMembershipPlans,
  });

  return (
    <>
      <PageHero eyebrow="Memberships" title="Your Access Starts Here." description="Get closer to the hosts, the content, and the community behind Tha Fix." />

      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">Tha Fix memberships give you more access to the content, conversations, community, and opportunities behind the show. Choose the level that fits how you want to participate.</p>
          <div className="border border-accent bg-accent/10 p-6 md:p-8 text-left">
            <div className="text-[11px] font-bold uppercase tracking-[0.3em] mb-2 text-brand">Launch Offer</div>
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-3">Founding Member Pricing Is Available for a Limited Time</h2>
            <p className="text-muted-foreground leading-relaxed">The first 100 qualifying members at each available launch level can secure special introductory pricing and benefits, subject to the <Link to="/membership-terms" className="underline text-brand hover:text-accent">Membership Terms</Link>.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F7F8FA] border-y border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-12">
            <div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-3">Why Join Tha Fix</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-5">More Than Exclusive Content</h2>
            <p className="text-muted-foreground leading-relaxed">A Tha Fix membership brings you closer to the conversations, people, and opportunities shaping our growing network.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyCards.map((c) => <div key={c.title} className="bg-surface border border-border p-7"><c.icon className="w-8 h-8 text-brand mb-5" /><h3 className="font-display text-xl font-bold mb-3">{c.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{c.body}</p></div>)}
          </div>
        </div>
      </section>

      <section id="membership-plans" className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 mb-12 text-center">
          <div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-3">Membership Plans</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">Pick Your Level</h2>
        </div>
        {isLoading && <p className="text-center text-muted-foreground">Loading membership plans…</p>}
        {isError && <p className="text-center text-destructive">Membership plans are temporarily unavailable.</p>}
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid md:grid-cols-3 gap-6">
          {plans.map((plan) => {
            const featured = plan.plan_code === "network";
            const remaining = plan.price_enrollment_limit == null ? null : Math.max(0, plan.price_enrollment_limit - plan.price_enrollments_used);
            return (
              <div key={plan.plan_public_id} className={`relative p-8 flex flex-col border ${featured ? "bg-brand text-brand-foreground border-brand shadow-2xl md:scale-105" : "bg-surface border-border"}`}>
                {featured && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-foreground text-background text-[10px] font-bold uppercase tracking-widest px-3 py-1">Most Popular</div>}
                <div className="text-[11px] font-bold uppercase tracking-[0.3em] opacity-70 mb-3">{taglines[plan.plan_code] || "Tha Fix Membership"}</div>
                <h3 className="font-display text-4xl font-black mb-4">{plan.plan_name}</h3>
                <div className="mb-6">
                  <div className="font-display text-5xl font-black">{priceLabel(plan)}</div>
                  {remaining != null && <p className="text-xs mt-2 opacity-80">{remaining} launch-price spot{remaining === 1 ? "" : "s"} currently remaining.</p>}
                  <div className="mt-3 space-y-2">
                    <Link to="/membership-terms" className={`text-xs underline ${featured ? "text-white/90 hover:text-accent" : "text-brand hover:text-accent"}`}>Membership Terms</Link>
                    <p className={`text-[11px] leading-relaxed opacity-80 ${featured ? "text-white/80" : "text-muted-foreground"}`}>{membershipNotes[plan.plan_code]}</p>
                  </div>
                </div>
                <ul className="space-y-3 mb-10 flex-1">
                  {planFeatures(plan).map((feature) => <li key={feature} className="flex items-start gap-3 text-sm"><Check className="w-4 h-4 shrink-0 mt-0.5" /><span>{feature}</span></li>)}
                </ul>
                <Link to="/signup" className={`w-full py-4 text-center text-xs font-bold uppercase tracking-widest transition-colors ${featured ? "bg-foreground text-background hover:bg-background hover:text-foreground" : "bg-brand text-brand-foreground hover:brightness-110"}`}>Create Account to Join</Link>
                <p className={`mt-4 text-[11px] leading-relaxed ${featured ? "text-white/80" : "text-muted-foreground"}`}>Secure Stripe checkout is being activated. Creating your account now prepares you for enrollment; no payment is collected on this button.</p>
                {cardDisclosures[plan.plan_code] && <p className={`mt-3 text-[11px] leading-relaxed ${featured ? "text-white/80" : "text-muted-foreground"}`}>{cardDisclosures[plan.plan_code]}</p>}
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-20 bg-brand text-brand-foreground">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="text-[11px] font-bold uppercase tracking-[0.3em] mb-3 opacity-80">First-Wave Offer</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6 text-balance">Lock In Your First-Wave Membership Rate</h2>
          <p className="leading-relaxed mb-6 opacity-90">Tha Fix is offering special pricing to its earliest members:</p>
          <ul className="space-y-3 mb-6">
            {["The Audience: $7 per month during the first wave; $9 per month afterward", "The Network: $19 per month during the first wave; $29 per month afterward", "The Founder: $297 one-time and limited to 100 memberships", "After The Founder closes, The Inner Circle will become available for $497 one-time"].map((line) => <li key={line} className="flex items-start gap-3"><Check className="w-5 h-5 shrink-0 mt-0.5 text-accent" /><span className="opacity-95">{line}</span></li>)}
          </ul>
          <p className="leading-relaxed opacity-80 text-sm">Eligible Audience and Network members keep their introductory monthly rates as long as their membership remains continuously active. If a membership is canceled and the person later rejoins, the then-current price will apply.</p>
        </div>
      </section>

      <section id="compare-benefits" className="py-16 border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-10">Compare every benefit</h2>
          <div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b border-border"><th className="text-left py-4 font-medium text-muted-foreground uppercase tracking-widest text-xs">Benefit</th>{plans.map((plan) => <th key={plan.plan_public_id} className="text-center py-4 font-display text-base">{plan.plan_name}</th>)}</tr></thead><tbody>{comparisonRows.map(([label, ...vals]) => <tr key={label} className="border-b border-border/40"><td className="py-4">{label}</td>{vals.map((value, index) => <td key={index} className="text-center py-4">{value === true ? <Check className="w-4 h-4 text-brand inline" /> : value === false ? <span className="text-muted-foreground">—</span> : <span className="text-sm font-bold text-brand">{value}</span>}</td>)}</tr>)}</tbody></table></div>
        </div>
      </section>

      <section className="py-20 bg-[#F7F8FA] border-y border-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-12"><div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-3">How Membership Works</div><h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">Joining Tha Fix Is Simple</h2></div>
          <ol className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">{howSteps.map((s, i) => <li key={s.title} className="bg-surface border border-border p-6"><div className="font-display text-4xl font-black text-brand mb-3">{String(i + 1).padStart(2, "0")}</div><h3 className="font-display text-lg font-bold mb-2">{s.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p></li>)}</ol>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-4">Founding Member Invitation</div>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Help Build What Tha Fix Becomes</h2>
          <p className="text-muted-foreground leading-relaxed mb-5">Tha Fix was created to have honest conversations, bring different generations and perspectives together, and turn those conversations into stronger relationships and opportunities.</p>
          <p className="text-muted-foreground leading-relaxed mb-10">Our first members will do more than support the show. They will help shape the community, influence future content, and establish the foundation for what Tha Fix becomes.</p>
          <a href="#membership-plans" className="inline-flex items-center gap-2 bg-brand text-brand-foreground px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#6A33A5] transition-colors">Choose Your Membership <ArrowRight className="w-4 h-4" /></a>
        </div>
      </section>

      <section className="py-20 bg-[#F7F8FA] border-y border-border">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-3">Membership FAQ</div><h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-10">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">{faqs.map((item, idx) => <AccordionItem key={idx} value={`item-${idx}`} className="border border-border bg-surface mb-3 px-5"><AccordionTrigger className="text-left font-display text-lg font-bold hover:no-underline hover:text-brand">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>)}</Accordion>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-brand text-brand-foreground">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-display text-4xl md:text-6xl font-black tracking-tight mb-6 text-balance">Choose How You Want to Be Part of Tha Fix</h2>
          <p className="text-lg opacity-90 leading-relaxed mb-10">Watch more. Say more. Build stronger connections. Join Tha Fix at the level that matches how you want to participate.</p>
          <div className="flex flex-wrap gap-3 justify-center mb-8"><a href="#compare-benefits" className="bg-accent text-foreground px-8 py-4 text-xs font-bold uppercase tracking-widest hover:brightness-110 transition">Compare Memberships</a><Link to="/membership-terms" className="border border-brand-foreground/30 px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-brand-foreground/10 transition">Read the Membership Terms</Link></div>
          <p className="text-xs opacity-75 leading-relaxed max-w-2xl mx-auto">By purchasing a membership, you confirm that you are at least 18 years old and agree to the <Link to="/terms" className="underline hover:text-accent">Terms of Use</Link>, <Link to="/membership-terms" className="underline hover:text-accent">Membership Terms</Link>, <Link to="/privacy" className="underline hover:text-accent">Privacy Policy</Link>, and applicable <Link to="/guidelines" className="underline hover:text-accent">Community Guidelines</Link>.</p>
        </div>
      </section>
    </>
  );
}
