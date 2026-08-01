import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageHero } from "@/components/page-hero";
import {
  Mic2, Radio, Clapperboard, Globe2, Mail, Share2, Video, Tag,
  BadgeCheck, BarChart3, Users, Handshake, MapPin, CheckCircle2, Check,
} from "lucide-react";

export const Route = createFileRoute("/sponsors")({
  head: () => ({
    meta: [
      { title: "Sponsors, Advertising & Partnerships | Tha Fix" },
      {
        name: "description",
        content:
          "Explore advertising, sponsorship, branded-content, event, and partnership opportunities with Tha Fix across video, social media, livestreams, the website, newsletters, and live experiences.",
      },
      { property: "og:title", content: "Sponsors, Advertising & Partnerships | Tha Fix" },
      {
        property: "og:description",
        content:
          "Advertising, sponsorship, branded content, events, and partnerships with Tha Fix.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://fix-stream-nexus.lovable.app/sponsors" }],
  }),
  component: SponsorsPage,
});

const OPPORTUNITIES = [
  "Advertising Package",
  "Episode Sponsor",
  "Sponsored Segment",
  "Network Sponsor",
  "Founding Sponsor",
  "Sponsored Interview",
  "Branded Content",
  "Custom Commercial Production",
  "Event Sponsorship — Community Sponsor",
  "Event Sponsorship — Supporting Sponsor",
  "Event Sponsorship — Presenting Sponsor",
  "Tha Fix on Location",
  "Strategic or Community Partnership",
  "In-kind Partnership",
  "Not Sure — Requesting Guidance",
] as const;

const foundingBenefits = [
  "Official Founding Sponsor designation",
  "Founding Sponsor profile, logo, offer, and website link",
  "Weekly episode recognition",
  "Up to one 30–60-second advertisement per weekly episode",
  "Opening or closing sponsor rotation",
  "Recognition in selected short clips",
  "Two dedicated social-media acknowledgments per month",
  "Monthly email-newsletter placement",
  "Livestream recognition when applicable",
  "Priority access to event and on-location sponsorships",
  "One sponsored interview or branded feature during the initial term, when appropriate",
  "Approved discount code, giveaway, or member offer",
  "Category exclusivity during the agreement",
  "Monthly campaign-performance reporting",
];

const offers = [
  {
    title: "Advertising Package",
    price: "$300 per month",
    desc: "Build affordable, recurring visibility across Tha Fix content and digital channels.",
    cta: "Ask About Advertising",
    value: "Advertising Package",
    benefits: [
      "One 15–30-second advertisement per weekly full episode",
      "Four episode placements per month",
      "Link in applicable episode descriptions",
      "Rotating website logo and link",
      "One email-newsletter placement per month",
      "One social-media acknowledgment per month",
      "Approved discount code or special offer",
      "Monthly campaign-performance report",
    ],
  },
  {
    title: "Episode Sponsor",
    price: "$750 per month",
    desc: "Associate your business with Tha Fix's weekly conversations.",
    cta: "Sponsor Tha Fix Episodes",
    value: "Episode Sponsor",
    benefits: [
      "Weekly sponsor recognition",
      "One 30–60-second host-read or prerecorded message per episode",
      "Sponsor logo displayed during applicable episodes",
      "Links in episode descriptions",
      "Website logo and link",
      "Monthly social-media acknowledgment",
      "Monthly newsletter placement",
      "Approved offer, discount code, or giveaway",
      "Category exclusivity within sponsored episodes",
      "Monthly campaign-performance report",
    ],
  },
  {
    title: "Sponsored Segment",
    price: "$1,000 per month",
    desc: "Put your brand behind a recurring conversation aligned with your audience and industry.",
    cta: "Sponsor a Segment",
    value: "Sponsored Segment",
    examples: [
      "Tha Community Fix",
      "Tha Business Fix",
      "Tha Sports Fix",
      "Tha Culture Fix",
      "Tha Opportunity Fix",
      "Tha Louisville Fix",
    ],
    benefits: [
      "Recurring sponsored segment in weekly episodes",
      "“Presented by” opening and closing recognition",
      "Sponsor logo or branded segment graphic",
      "Sponsor message during the segment",
      "Episode and segment-description links",
      "Selected short clips from the sponsored segment",
      "Social-media tags on applicable content",
      "Website sponsor profile",
      "Newsletter placement",
      "Approved offer or giveaway",
      "Category exclusivity",
      "Monthly campaign-performance report",
    ],
  },
  {
    title: "Tha Fix Network Sponsor",
    price: "$2,000 per month",
    desc: "Build a prominent and recurring presence across the broader Tha Fix media network.",
    cta: "Become a Network Sponsor",
    value: "Network Sponsor",
    benefits: [
      "Prominent recognition across weekly episodes",
      "Opening and closing sponsor acknowledgments",
      "Sponsor graphics in full episodes",
      "Inclusion in selected short clips",
      "Detailed website sponsor profile",
      "Prominent rotating website placement",
      "Two dedicated social-media posts per month",
      "Newsletter sponsor recognition",
      "Livestream recognition when applicable",
      "Priority access to event and on-location opportunities",
      "Approved discount code, giveaway, or member offer",
      "One sponsored interview or branded feature per three-month term, when appropriate",
      "Category exclusivity",
      "Monthly reports and an end-of-campaign review",
    ],
  },
] as const;

const brandedContent = [
  {
    title: "Sponsored Interview",
    price: "$1,000",
    value: "Sponsored Interview",
    cta: "Request a Sponsored Interview",
    benefits: [
      "One professionally recorded interview",
      "Full-length video or special feature",
      "Website and YouTube publication",
      "Social-media promotion",
      "Three to five promotional clips",
      "Approved links and calls to action",
      "Clear sponsorship disclosure",
      "Performance report",
    ],
  },
  {
    title: "Branded Content Feature",
    price: "$750",
    value: "Branded Content",
    cta: "Discuss Branded Content",
    benefits: [
      "One original branded video or feature",
      "Website and social-media distribution",
      "Two to three short clips",
      "Approved call to action",
      "Clear sponsorship disclosure",
      "Performance summary",
    ],
  },
  {
    title: "Custom Commercial Production",
    price: "$300",
    value: "Custom Commercial Production",
    cta: "Request Commercial Production",
    body: "Tha Fix can help create a commercial for your campaign. Production pricing depends on scripting, locations, talent, graphics, equipment, editing requirements, licensing, and turnaround time.",
    benefits: [] as string[],
  },
] as const;

const eventTiers = [
  {
    title: "Community Sponsor",
    price: "$500 per event",
    value: "Event Sponsorship — Community Sponsor",
    cta: "Become a Community Sponsor",
    recommended: false,
    benefits: [
      "Logo on the event page",
      "Inclusion on selected promotional materials",
      "Event acknowledgment",
      "Website link",
      "One social-media acknowledgment",
      "Event-recap recognition",
    ],
  },
  {
    title: "Supporting Sponsor",
    price: "$1,000 per event",
    value: "Event Sponsorship — Supporting Sponsor",
    cta: "Become a Supporting Sponsor",
    recommended: true,
    benefits: [
      "Everything included with Community Sponsor",
      "More prominent logo placement",
      "Host acknowledgment",
      "On-site signage or display",
      "Activation or vendor space when available",
      "Two social-media acknowledgments",
      "Approved giveaway or attendee offer",
      "Complimentary admissions when applicable",
    ],
  },
  {
    title: "Presenting Sponsor",
    price: "$2,500 per event",
    value: "Event Sponsorship — Presenting Sponsor",
    cta: "Become a Presenting Sponsor",
    recommended: false,
    benefits: [
      "Everything included with Supporting Sponsor",
      "“Presented by” naming recognition",
      "Top-level logo placement",
      "Opening and closing host acknowledgments",
      "Featured event-promotion presence",
      "Premium activation space when available",
      "Livestream or recorded-content recognition",
      "Sponsor links in event communications",
      "Category exclusivity",
      "Featured event-recap inclusion",
      "Event campaign report",
    ],
  },
] as const;

const partnershipTypes = [
  "Venue and recording-location partnerships",
  "Production and equipment partnerships",
  "Community-programming partnerships",
  "Media and distribution partnerships",
  "Event-promotion partnerships",
  "Technology partnerships",
  "Merchandise and giveaway partnerships",
  "Catering and hospitality partnerships",
  "Transportation partnerships",
  "Professional-service partnerships",
];

const channels = [
  "Full-length episodes",
  "Short video clips",
  "YouTube",
  "Facebook",
  "Instagram",
  "TikTok",
  "ThaFix502.com",
  "Email newsletters",
  "Livestreams",
  "In-person events",
];

const sponsorValue = [
  { icon: Mic2, label: "Host-read advertisements" },
  { icon: Radio, label: "Prerecorded commercial placement" },
  { icon: Globe2, label: "Website advertising and sponsor profiles" },
  { icon: Tag, label: "Episode and video-description links" },
  { icon: Share2, label: "Social-media promotion" },
  { icon: Mail, label: "Newsletter placement" },
  { icon: Video, label: "Branded short-form video" },
  { icon: Clapperboard, label: "Sponsored interviews or segments" },
  { icon: Radio, label: "Livestream recognition" },
  { icon: Users, label: "Event activation opportunities" },
  { icon: Tag, label: "Discount-code and giveaway promotion" },
  { icon: BadgeCheck, label: "Category exclusivity" },
  { icon: BarChart3, label: "Monthly campaign reporting" },
];

const steps = [
  { n: "01", t: "Tell Us About Your Goals", b: "Complete the partnership inquiry form and identify the opportunity that interests you." },
  { n: "02", t: "Meet With Tha Fix", b: "Qualified applicants will be invited to discuss their audience, objectives, timeline, budget, and campaign concept." },
  { n: "03", t: "Approve the Campaign", b: "Tha Fix will provide the applicable proposal, deliverables, schedule, agreement, and payment requirements." },
  { n: "04", t: "Launch and Measure", b: "After approval, payment, and receipt of the required creative materials, Tha Fix will launch the campaign and provide applicable performance reporting." },
];

const faqs = [
  { q: "Do you work only with Louisville businesses?", a: "No. Tha Fix welcomes appropriate local, regional, and national advertisers, sponsors, and partners." },
  { q: "Is there a minimum campaign commitment?", a: "Recurring advertising and sponsorship packages require an initial three-month commitment. Event sponsorships, branded-content projects, sponsored interviews, and on-location activations may be purchased individually." },
  { q: "Can my company receive category exclusivity?", a: "Category exclusivity is available with qualifying packages and is subject to availability. The applicable category, competitors, territory, channels, and campaign period must be defined in the sponsorship agreement." },
  { q: "Can we provide our own commercial?", a: "Yes. Tha Fix accepts approved prerecorded advertisements that meet the required format, quality, length, legal, and editorial standards." },
  { q: "Can Tha Fix create an advertisement for us?", a: "Yes. Custom commercial production starts at $300 and is quoted separately from advertising placement." },
  { q: "Can we offer a discount code or giveaway?", a: "Yes. Approved discount codes, giveaways, and member offers may be included in qualifying campaigns. The sponsor is responsible for providing accurate terms and fulfilling its offer." },
  { q: "Does sponsorship give a business control over Tha Fix content?", a: "No. Tha Fix retains editorial control over its content, opinions, questions, guests, production, and publication decisions." },
  { q: "Do you accept in-kind partnerships?", a: "Yes. Selected partners may contribute facilities, equipment, services, distribution, promotion, merchandise, hospitality, transportation, or other valuable resources instead of or alongside a financial payment." },
  { q: "What performance information will sponsors receive?", a: "Available reporting may include video views, watch time, website traffic, social-media reach, engagement, clicks, and trackable conversions. The exact measurements will be identified in the campaign agreement." },
  { q: "Does submitting an inquiry guarantee approval?", a: "No. Every advertiser, sponsor, campaign, creative asset, and partnership is reviewed before acceptance." },
];

const CHANNEL_CHOICES = [
  "Full episodes", "Short video clips", "YouTube", "Facebook", "Instagram", "TikTok",
  "Tha Fix website", "Email newsletter", "Livestreams", "In-person events", "Not sure—requesting guidance",
];

const BUDGETS = [
  "Under $1,000", "$1,000–$2,499", "$2,500–$4,999", "$5,000–$9,999",
  "$10,000–$24,999", "$25,000 or more", "In-kind contribution", "Not sure—requesting guidance",
];

const LENGTHS = ["One-time project or activation", "Three months", "Six months", "Twelve months", "Ongoing", "Not sure—requesting guidance"];

const COUNTRIES = ["United States", "Canada", "United Kingdom", "Australia", "Mexico", "Other"];

const HEARD = ["Tha Fix website", "YouTube", "Facebook", "Instagram", "TikTok", "Email newsletter", "Tha Fix event", "Referral", "Search engine", "Other"];

const labelCls = "block text-[11px] font-bold uppercase tracking-widest text-foreground/70 mb-2";
const inputCls =
  "w-full px-4 py-3 border border-border bg-surface text-sm focus:outline-none focus:border-brand focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background";
const btnPrimary =
  "inline-flex items-center justify-center bg-brand text-brand-foreground px-7 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#6A33A5] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";
const btnGold =
  "inline-flex items-center justify-center bg-accent text-accent-foreground px-7 py-4 text-xs font-bold uppercase tracking-widest hover:brightness-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background";
const btnOutline =
  "inline-flex items-center justify-center border border-border bg-surface text-foreground px-7 py-4 text-xs font-bold uppercase tracking-widest hover:border-brand hover:text-brand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Bullets({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((b) => (
        <li key={b} className="flex gap-2.5 text-sm text-muted-foreground leading-relaxed">
          <Check aria-hidden="true" className="w-4 h-4 text-brand shrink-0 mt-0.5" />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}

function SponsorsPage() {
  const [opportunity, setOpportunity] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function choose(value: string) {
    setOpportunity(value);
    scrollToId("partnership-inquiry");
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const next: Record<string, string> = {};
    const required: [string, string][] = [
      ["fullName", "Enter your full name."],
      ["company", "Enter your business or organization name."],
      ["email", "Enter a valid email address."],
      ["phone", "Enter a phone number."],
      ["city", "Enter your city."],
      ["state", "Enter your state or region."],
      ["country", "Select a country."],
      ["industry", "Enter your industry."],
      ["opportunity", "Select an opportunity of interest."],
      ["goals", "Describe your campaign goals."],
      ["audience", "Describe your target audience."],
      ["budget", "Select an estimated budget."],
      ["length", "Select a desired campaign length."],
      ["exclusivity", "Select an option."],
      ["materials", "Select an option."],
    ];
    for (const [name, msg] of required) {
      if (!String(fd.get(name) ?? "").trim()) next[name] = msg;
    }
    const email = String(fd.get("email") ?? "");
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next["email"] = "Enter a valid email address.";
    if (!fd.get("consent")) next["consent"] = "Please confirm we may contact you.";
    if (String(fd.get("company_website_hp") ?? "")) return; // honeypot
    setErrors(next);
    if (Object.keys(next).length > 0) {
      const first = document.getElementById(`field-${Object.keys(next)[0]}`);
      first?.focus();
      return;
    }
    setSubmitted(true);
    window.scrollTo({ top: document.getElementById("partnership-inquiry")?.offsetTop ?? 0, behavior: "smooth" });
  }

  const Err = ({ name }: { name: string }) =>
    errors[name] ? (
      <p id={`err-${name}`} role="alert" className="mt-1.5 text-xs font-medium text-destructive">
        {errors[name]}
      </p>
    ) : null;

  const showInKind = opportunity === "In-kind Partnership";

  return (
    <>
      {/* 1 — HERO */}
      <section id="sponsor-hero">
        <PageHero
          eyebrow="Sponsors & Partners"
          title="Partner With Tha Fix"
          description="Connect your brand with audiences interested in culture, community, entrepreneurship, entertainment, and transformation - and help power conversations that matter."
        />
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10 pt-10">
          <p className="max-w-3xl text-muted-foreground leading-relaxed">
            Tha Fix offers advertising, sponsorship, branded-content, event, and partnership
            opportunities across full episodes, short video clips, livestreams, social media, our
            website, email newsletter, and in-person experiences.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button type="button" className={btnPrimary} onClick={() => scrollToId("sponsorship-opportunities")}>
              Explore Opportunities
            </button>
            <button type="button" className={btnOutline} onClick={() => scrollToId("founding-sponsor")}>
              Become a Founding Sponsor
            </button>
          </div>
        </div>
      </section>

      {/* 2 — FOUNDING SPONSOR */}
      <section id="founding-sponsor" className="py-20 lg:py-24 mt-14 bg-[#1A1A1A] text-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="text-accent text-[11px] font-bold uppercase tracking-[0.3em] mb-3">
            Five Founding Sponsor Opportunities
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight mb-5 text-white">
            Help Build Tha Fix From the Beginning
          </h2>
          <div className="max-w-3xl space-y-4 text-white/70 leading-relaxed">
            <p>We are inviting five businesses to become official Founding Sponsors of Tha Fix.</p>
            <p>
              Founding Sponsors receive recurring promotion, cross-platform visibility, category
              exclusivity, campaign reporting, and permanent recognition as one of the first
              businesses to invest in the growth of Tha Fix.
            </p>
          </div>

          <div className="mt-10 border-2 border-accent bg-white/[0.03] p-7 md:p-10">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <h3 className="font-display text-2xl md:text-3xl font-black text-white">Founding Sponsor</h3>
              <span className="bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1.5">
                Only 5 Available
              </span>
            </div>
            <div className="text-[11px] font-bold uppercase tracking-widest text-white/50">Starting at</div>
            <div className="font-display text-4xl md:text-5xl font-black text-accent">$1,250 <span className="text-lg font-bold text-white/70">per month</span></div>
            <div className="text-xs font-bold uppercase tracking-widest text-white/50 mt-2">Three-month minimum</div>
            <p className="mt-5 text-white/70 leading-relaxed max-w-2xl">
              Founding Sponsors receive an introductory opportunity to establish their brands
              alongside Tha Fix during the network's launch and early growth.
            </p>

            <h4 className="mt-8 mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-accent">
              Founding Sponsor Benefits
            </h4>
            <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2.5">
              {foundingBenefits.map((b) => (
                <li key={b} className="flex gap-2.5 text-sm text-white/80 leading-relaxed">
                  <Check aria-hidden="true" className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <p className="mt-7 text-xs text-white/50 leading-relaxed">
              Only five Founding Sponsor positions will be offered. Advertising benefits remain
              active only during the paid sponsorship term.
            </p>

            <button type="button" className={`${btnGold} mt-7 w-full sm:w-auto`} onClick={() => choose("Founding Sponsor")}>
              Apply to Become a Founding Sponsor
            </button>
          </div>
        </div>
      </section>

      {/* 3 — OPPORTUNITIES */}
      <section id="sponsorship-opportunities" className="py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-3">Partnership Opportunities</div>
          <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight mb-5">
            Choose How Your Brand Joins the Conversation
          </h2>
          <p className="max-w-3xl text-muted-foreground leading-relaxed">
            Whether you need straightforward advertising, deeper brand integration, or recurring
            visibility across the Tha Fix network, we can build a campaign around your goals.
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {offers.map((o) => (
              <div key={o.title} className="border border-border bg-surface p-7 flex flex-col">
                <h3 className="font-display text-2xl font-black">{o.title}</h3>
                <div className="mt-4 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">Starting at</div>
                <div className="font-display text-3xl font-black text-brand">{o.price}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mt-1.5">Three-month minimum</div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{o.desc}</p>

                {"examples" in o && o.examples && (
                  <div className="mt-5">
                    <div className="text-[11px] font-bold uppercase tracking-widest text-foreground/70 mb-2">Potential segment examples</div>
                    <div className="flex flex-wrap gap-2">
                      {o.examples.map((e) => (
                        <span key={e} className="text-xs font-semibold bg-secondary text-secondary-foreground px-2.5 py-1">{e}</span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-6 mb-7 flex-1">
                  <Bullets items={o.benefits} />
                </div>
                <button type="button" className={`${btnPrimary} w-full`} onClick={() => choose(o.value)}>
                  {o.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — BRANDED CONTENT */}
      <section id="branded-content" className="py-20 lg:py-24 bg-[#F7F8FA] border-y border-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-3">Branded Content</div>
          <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight mb-5">
            Put Your Story in Front of the Right People
          </h2>
          <p className="max-w-3xl text-muted-foreground leading-relaxed">
            When a business, leader, initiative, or subject fits the Tha Fix audience, we can create
            original sponsored content that informs, entertains, and connects.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {brandedContent.map((c) => (
              <div key={c.title} className="border border-border bg-surface p-7 flex flex-col">
                <h3 className="font-display text-xl font-black">{c.title}</h3>
                <div className="mt-4 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">Starting at</div>
                <div className="font-display text-3xl font-black text-brand">{c.price}</div>
                <div className="mt-5 mb-7 flex-1">
                  {"body" in c && c.body ? (
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.body}</p>
                  ) : (
                    <Bullets items={c.benefits} />
                  )}
                </div>
                <button type="button" className={`${btnPrimary} w-full`} onClick={() => choose(c.value)}>
                  {c.cta}
                </button>
              </div>
            ))}
          </div>
          <p className="mt-7 text-xs text-muted-foreground leading-relaxed max-w-3xl">
            Commercial production costs are separate from advertising-placement costs unless a
            written package expressly states otherwise.
          </p>
        </div>
      </section>

      {/* 5 — EVENT SPONSORSHIP */}
      <section id="event-sponsorship" className="py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-3">Event Sponsorship</div>
          <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight mb-5">
            Show Up Where the Conversation Happens
          </h2>
          <p className="max-w-3xl text-muted-foreground leading-relaxed">
            Sponsor Tha Fix live recordings, member meetups, community appearances, special events,
            livestreams, and on-location productions.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {eventTiers.map((t) => (
              <div
                key={t.title}
                className={`bg-surface p-7 flex flex-col ${t.recommended ? "border-2 border-brand shadow-lg" : "border border-border"}`}
              >
                {t.recommended && (
                  <span className="self-start bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 mb-4">
                    Recommended
                  </span>
                )}
                <h3 className="font-display text-xl font-black">{t.title}</h3>
                <div className="mt-4 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">Starting at</div>
                <div className="font-display text-3xl font-black text-brand">{t.price}</div>
                <div className="mt-5 mb-7 flex-1">
                  <Bullets items={t.benefits} />
                </div>
                <button type="button" className={`${btnPrimary} w-full`} onClick={() => choose(t.value)}>
                  {t.cta}
                </button>
              </div>
            ))}
          </div>
          <p className="mt-7 text-xs text-muted-foreground leading-relaxed max-w-3xl">
            Event benefits, admissions, activation space, and placement remain subject to event
            availability, venue capacity, scheduling, safety requirements, and the applicable
            sponsorship agreement.
          </p>
        </div>
      </section>

      {/* 6 — ON LOCATION */}
      <section id="on-location" className="py-20 lg:py-24 bg-brand text-brand-foreground">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12">
          <div>
            <div className="text-accent text-[11px] font-bold uppercase tracking-[0.3em] mb-3">Tha Fix on Location</div>
            <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight mb-5 text-brand-foreground">
              Bring Tha Fix to Your Location
            </h2>
            <p className="text-brand-foreground/75 leading-relaxed">
              Tha Fix on Location brings Marcus Davis, Jon Mic, and the production experience to
              selected businesses, organizations, venues, and community spaces.
            </p>
            <div className="mt-8">
              <div className="text-[11px] font-bold uppercase tracking-widest text-brand-foreground/60">Starting at</div>
              <div className="font-display text-4xl font-black text-accent">$1,500 <span className="text-lg font-bold text-brand-foreground/75">per activation</span></div>
            </div>
            <p className="mt-6 text-xs text-brand-foreground/60 leading-relaxed max-w-md">
              Additional production, staffing, security, equipment, venue, licensing, or travel
              requirements may be quoted separately.
            </p>
            <button type="button" className={`${btnGold} mt-7 w-full sm:w-auto`} onClick={() => choose("Tha Fix on Location")}>
              Bring Tha Fix to Your Location
            </button>
          </div>
          <div className="bg-brand-foreground/10 p-7">
            <MapPin aria-hidden="true" className="w-7 h-7 text-accent mb-4" />
            <ul className="space-y-2.5">
              {[
                "Recording or livestream from the location",
                "Host recognition",
                "Business, organization, venue, or initiative feature",
                "One full-length video or special segment",
                "Three to five short video clips",
                "Website feature",
                "Social-media promotion",
                "Approved calls to action",
                "Campaign-performance report",
              ].map((b) => (
                <li key={b} className="flex gap-2.5 text-sm text-brand-foreground/85 leading-relaxed">
                  <Check aria-hidden="true" className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 7 — STRATEGIC PARTNERSHIPS */}
      <section id="strategic-partnerships" className="py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-3">Strategic &amp; Community Partnerships</div>
          <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight mb-5">
            Let's Build Something That Creates Value for Both Sides
          </h2>
          <p className="max-w-3xl text-muted-foreground leading-relaxed">
            Not every meaningful relationship begins with an advertising purchase. Tha Fix considers
            financial and in-kind partnerships with organizations that can help create stronger
            content, events, community experiences, and distribution.
          </p>
          <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {partnershipTypes.map((p) => (
              <li key={p} className="flex gap-2.5 border border-border bg-surface p-4 text-sm">
                <Handshake aria-hidden="true" className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <p className="mt-7 text-sm text-muted-foreground max-w-3xl leading-relaxed">
            Partnership benefits are based on the documented value, resources, reach, services, and
            opportunities contributed by each party.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button type="button" className={btnPrimary} onClick={() => choose("Strategic or Community Partnership")}>
              Propose a Partnership
            </button>
            <button type="button" className={btnOutline} onClick={() => choose("In-kind Partnership")}>
              Propose an In-Kind Partnership
            </button>
          </div>
        </div>
      </section>

      {/* 8 — WHY THA FIX */}
      <section id="why-tha-fix" className="py-20 lg:py-24 bg-[#F7F8FA] border-y border-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-3">Why Tha Fix</div>
          <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight mb-5">
            Real Conversations. Multiple Channels. Measurable Campaigns.
          </h2>
          <p className="max-w-3xl text-muted-foreground leading-relaxed">
            Tha Fix is hosted by Marcus Davis and Jon Mic—two men who met behind bars, rebuilt their
            lives outside the walls, and now bring different generations and perspectives to
            conversations about sports, politics, violence, community, entrepreneurship,
            entertainment, and culture.
          </p>
          <h3 className="font-display text-xl font-bold mt-10 mb-4">Our Weekly Content and Campaign Channels</h3>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {channels.map((c) => (
              <li key={c} className="flex gap-2.5 border border-border bg-surface p-4 text-sm">
                <Check aria-hidden="true" className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
          <p className="mt-7 text-sm text-muted-foreground max-w-3xl leading-relaxed">
            Campaign reporting may include applicable website traffic, video views, watch time,
            social reach, engagement, link clicks, and conversions.
          </p>
          <button type="button" className={`${btnPrimary} mt-8 w-full sm:w-auto`} onClick={() => scrollToId("partnership-inquiry")}>
            Request Sponsorship Information
          </button>
        </div>
      </section>

      {/* 9 — SPONSOR VALUE */}
      <section id="sponsor-value" className="py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-3">What Sponsors Receive</div>
          <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight mb-5">More Than a Logo Placement</h2>
          <p className="max-w-3xl text-muted-foreground leading-relaxed">
            Tha Fix sponsorships are designed to create meaningful and measurable brand visibility.
          </p>
          <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {sponsorValue.map((v) => (
              <li key={v.label} className="flex items-start gap-3 border border-border bg-surface p-5">
                <v.icon aria-hidden="true" className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-foreground">{v.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 10 — STANDARDS */}
      <section id="sponsor-standards" className="py-20 lg:py-24 bg-[#1A1A1A] text-white">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10">
          <div className="text-accent text-[11px] font-bold uppercase tracking-[0.3em] mb-3">Our Standards</div>
          <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight mb-5 text-white">
            The Conversation Is Real, and Our Standards Matter
          </h2>
          <p className="text-white/70 leading-relaxed">
            Tha Fix reviews every proposed advertiser, sponsor, advertisement, offer, and
            partnership before approval.
          </p>
          <h3 className="font-display text-xl font-bold mt-9 mb-4 text-white">
            Tha Fix Does Not Accept Advertising or Sponsorship Involving:
          </h3>
          <ul className="space-y-2.5">
            {[
              "Illegal drugs or drug-related products",
              "Pharmaceutical products, medicines, or medical-product promotions",
              "Alcohol or alcohol-related brands",
            ].map((r) => (
              <li key={r} className="flex gap-2.5 text-sm text-white/80">
                <Check aria-hidden="true" className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>{r}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-white/70 leading-relaxed">
            All sponsored content will be identified appropriately. Sponsorship does not purchase
            favorable opinions, control over editorial conclusions, or the right to prevent
            legitimate questions or commentary.
          </p>
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            Tha Fix reserves the right to reject any business, message, creative material, offer, or
            partnership that conflicts with our audience, values, legal responsibilities, platform
            requirements, or editorial standards.
          </p>
        </div>
      </section>

      {/* 11 — PROCESS */}
      <section id="partnership-process" className="py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-3">How It Works</div>
          <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight mb-10">
            Start a Partnership in Four Steps
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.n} className="border border-border bg-surface p-6">
                <div className="font-display text-4xl font-black text-accent mb-3">{s.n}</div>
                <h3 className="font-display text-lg font-bold mb-2">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12 — INQUIRY FORM */}
      <section id="partnership-inquiry" className="py-20 lg:py-24 bg-[#F7F8FA] border-y border-border scroll-mt-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-3">Partnership Inquiry</div>
          <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight mb-5">Let's Talk About Your Brand</h2>
          <p className="text-muted-foreground leading-relaxed">
            Tell us what you want to accomplish, and we will determine whether Tha Fix has an
            opportunity that fits.
          </p>

          {submitted ? (
            <div className="mt-10 border border-border bg-surface p-10 text-center">
              <CheckCircle2 aria-hidden="true" className="w-14 h-14 text-brand mx-auto mb-5" />
              <h3 className="font-display text-3xl font-black mb-3">Thank You for Contacting Tha Fix</h3>
              <p className="text-muted-foreground max-w-md mx-auto mb-8 leading-relaxed">
                We received your partnership inquiry. Our team will review the information and
                contact qualified applicants to discuss potential next steps.
              </p>
              <Link to="/" className={btnPrimary}>Return to Tha Fix</Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="mt-10 space-y-5">
              <input type="text" name="company_website_hp" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="field-fullName" className={labelCls}>Full Name <span className="text-brand">*</span></label>
                  <input id="field-fullName" name="fullName" type="text" className={inputCls} aria-invalid={!!errors["fullName"]} aria-describedby={errors["fullName"] ? "err-fullName" : undefined} />
                  <Err name="fullName" />
                </div>
                <div>
                  <label htmlFor="field-jobTitle" className={labelCls}>Job Title or Role</label>
                  <input id="field-jobTitle" name="jobTitle" type="text" className={inputCls} />
                </div>
                <div>
                  <label htmlFor="field-company" className={labelCls}>Business or Organization Name <span className="text-brand">*</span></label>
                  <input id="field-company" name="company" type="text" className={inputCls} aria-invalid={!!errors["company"]} aria-describedby={errors["company"] ? "err-company" : undefined} />
                  <Err name="company" />
                </div>
                <div>
                  <label htmlFor="field-website" className={labelCls}>Website</label>
                  <input id="field-website" name="website" type="url" placeholder="https://" className={inputCls} />
                </div>
                <div>
                  <label htmlFor="field-email" className={labelCls}>Email Address <span className="text-brand">*</span></label>
                  <input id="field-email" name="email" type="email" className={inputCls} aria-invalid={!!errors["email"]} aria-describedby={errors["email"] ? "err-email" : undefined} />
                  <Err name="email" />
                </div>
                <div>
                  <label htmlFor="field-phone" className={labelCls}>Phone Number <span className="text-brand">*</span></label>
                  <input id="field-phone" name="phone" type="tel" className={inputCls} aria-invalid={!!errors["phone"]} aria-describedby={errors["phone"] ? "err-phone" : undefined} />
                  <Err name="phone" />
                </div>
                <div>
                  <label htmlFor="field-city" className={labelCls}>City <span className="text-brand">*</span></label>
                  <input id="field-city" name="city" type="text" className={inputCls} aria-invalid={!!errors["city"]} aria-describedby={errors["city"] ? "err-city" : undefined} />
                  <Err name="city" />
                </div>
                <div>
                  <label htmlFor="field-state" className={labelCls}>State or Region <span className="text-brand">*</span></label>
                  <input id="field-state" name="state" type="text" className={inputCls} aria-invalid={!!errors["state"]} aria-describedby={errors["state"] ? "err-state" : undefined} />
                  <Err name="state" />
                </div>
                <div>
                  <label htmlFor="field-country" className={labelCls}>Country <span className="text-brand">*</span></label>
                  <select id="field-country" name="country" defaultValue="United States" className={inputCls}>
                    {COUNTRIES.map((c) => <option key={c}>{c}</option>)}
                  </select>
                  <Err name="country" />
                </div>
                <div>
                  <label htmlFor="field-industry" className={labelCls}>Industry <span className="text-brand">*</span></label>
                  <input id="field-industry" name="industry" type="text" list="industry-list" className={inputCls} aria-invalid={!!errors["industry"]} aria-describedby={errors["industry"] ? "err-industry" : undefined} />
                  <datalist id="industry-list">
                    {["Retail", "Restaurant & Food", "Real Estate", "Financial Services", "Health & Wellness", "Nonprofit", "Education", "Legal", "Construction & Trades", "Technology", "Entertainment", "Automotive", "Other"].map((i) => <option key={i} value={i} />)}
                  </datalist>
                  <Err name="industry" />
                </div>
              </div>

              <div>
                <label htmlFor="field-opportunity" className={labelCls}>Opportunity of Interest <span className="text-brand">*</span></label>
                <select
                  id="field-opportunity"
                  name="opportunity"
                  className={inputCls}
                  value={opportunity}
                  onChange={(e) => setOpportunity(e.target.value)}
                  aria-invalid={!!errors["opportunity"]}
                  aria-describedby={errors["opportunity"] ? "err-opportunity" : undefined}
                >
                  <option value="">Select an opportunity</option>
                  {OPPORTUNITIES.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
                <Err name="opportunity" />
              </div>

              <div>
                <label htmlFor="field-goals" className={labelCls}>Campaign Goals <span className="text-brand">*</span></label>
                <textarea id="field-goals" name="goals" rows={4} className={`${inputCls} resize-y`} aria-describedby={errors["goals"] ? "err-goals help-goals" : "help-goals"} aria-invalid={!!errors["goals"]} />
                <p id="help-goals" className="mt-1.5 text-xs text-muted-foreground">Tell us what you want this campaign or partnership to accomplish.</p>
                <Err name="goals" />
              </div>

              <div>
                <label htmlFor="field-audience" className={labelCls}>Target Audience <span className="text-brand">*</span></label>
                <textarea id="field-audience" name="audience" rows={3} className={`${inputCls} resize-y`} aria-describedby={errors["audience"] ? "err-audience help-audience" : "help-audience"} aria-invalid={!!errors["audience"]} />
                <p id="help-audience" className="mt-1.5 text-xs text-muted-foreground">Describe the people, customers, or communities you want to reach.</p>
                <Err name="audience" />
              </div>

              <fieldset>
                <legend className={labelCls}>Preferred Channels</legend>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {CHANNEL_CHOICES.map((c) => (
                    <label key={c} className="flex items-center gap-2.5 text-sm bg-surface border border-border px-4 py-3 cursor-pointer hover:border-brand">
                      <input type="checkbox" name="channels" value={c} className="accent-[#552583] size-4" />
                      <span>{c}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="field-budget" className={labelCls}>Estimated Budget <span className="text-brand">*</span></label>
                  <select id="field-budget" name="budget" className={inputCls} defaultValue="" aria-invalid={!!errors["budget"]} aria-describedby={errors["budget"] ? "err-budget" : undefined}>
                    <option value="">Select a budget range</option>
                    {BUDGETS.map((b) => <option key={b}>{b}</option>)}
                  </select>
                  <Err name="budget" />
                </div>
                <div>
                  <label htmlFor="field-startDate" className={labelCls}>Desired Start Date</label>
                  <input id="field-startDate" name="startDate" type="date" className={inputCls} />
                </div>
              </div>

              <div>
                <label htmlFor="field-length" className={labelCls}>Desired Campaign Length <span className="text-brand">*</span></label>
                <select id="field-length" name="length" className={inputCls} defaultValue="" aria-invalid={!!errors["length"]} aria-describedby={errors["length"] ? "err-length" : undefined}>
                  <option value="">Select a campaign length</option>
                  {LENGTHS.map((l) => <option key={l}>{l}</option>)}
                </select>
                <Err name="length" />
              </div>

              <fieldset>
                <legend className={labelCls}>Are You Interested in Category Exclusivity? <span className="text-brand">*</span></legend>
                <div className="flex flex-wrap gap-2.5">
                  {["Yes", "No", "Not sure"].map((c) => (
                    <label key={c} className="flex items-center gap-2.5 text-sm bg-surface border border-border px-4 py-3 cursor-pointer hover:border-brand">
                      <input type="radio" name="exclusivity" value={c} className="accent-[#552583] size-4" id={c === "Yes" ? "field-exclusivity" : undefined} />
                      <span>{c}</span>
                    </label>
                  ))}
                </div>
                <Err name="exclusivity" />
              </fieldset>

              <fieldset>
                <legend className={labelCls}>Do You Already Have Advertising Materials? <span className="text-brand">*</span></legend>
                <div className="flex flex-wrap gap-2.5">
                  {["Yes", "No", "Some materials are ready", "Not applicable"].map((c, i) => (
                    <label key={c} className="flex items-center gap-2.5 text-sm bg-surface border border-border px-4 py-3 cursor-pointer hover:border-brand">
                      <input type="radio" name="materials" value={c} className="accent-[#552583] size-4" id={i === 0 ? "field-materials" : undefined} />
                      <span>{c}</span>
                    </label>
                  ))}
                </div>
                <Err name="materials" />
              </fieldset>

              {showInKind && (
                <div>
                  <label htmlFor="field-inkind" className={labelCls}>Proposed In-Kind Contribution</label>
                  <textarea id="field-inkind" name="inkind" rows={4} className={`${inputCls} resize-y`} aria-describedby="help-inkind" />
                  <p id="help-inkind" className="mt-1.5 text-xs text-muted-foreground">
                    Describe the facilities, equipment, services, distribution, promotion, merchandise, hospitality, transportation, or other resources you propose to contribute.
                  </p>
                </div>
              )}

              <div>
                <label htmlFor="field-additional" className={labelCls}>Additional Information</label>
                <textarea id="field-additional" name="additional" rows={4} className={`${inputCls} resize-y`} />
              </div>

              <div>
                <label htmlFor="field-heard" className={labelCls}>How Did You Hear About Tha Fix?</label>
                <select id="field-heard" name="heard" className={inputCls} defaultValue="">
                  <option value="">Select one</option>
                  {HEARD.map((h) => <option key={h}>{h}</option>)}
                </select>
              </div>

              <div>
                <label htmlFor="field-consent" className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed cursor-pointer">
                  <input id="field-consent" name="consent" type="checkbox" className="accent-[#552583] size-4 mt-0.5" aria-invalid={!!errors["consent"]} />
                  <span>I agree that Tha Fix may contact me regarding this advertising, sponsorship, or partnership inquiry. <span className="text-brand">*</span></span>
                </label>
                <Err name="consent" />
              </div>

              <div className="pt-2">
                <button type="submit" className={`${btnPrimary} w-full sm:w-auto`}>Submit Partnership Inquiry</button>
                <p className="mt-5 text-xs text-muted-foreground leading-relaxed">
                  Submitting an inquiry does not guarantee approval, availability, category
                  exclusivity, or placement. All opportunities are subject to review, scheduling,
                  agreement, payment, and applicable Tha Fix standards.
                </p>
                <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                  The information you submit is used only to review and respond to your inquiry. See
                  our{" "}
                  <Link to="/privacy" className="text-brand font-semibold underline underline-offset-2">
                    Privacy Policy
                  </Link>{" "}
                  for details.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* 13 — FAQ */}
      <section id="sponsor-faq" className="py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-3">Frequently Asked Questions</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-10">
            Questions About Working With Tha Fix
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border border-border bg-surface mb-3 px-5">
                <AccordionTrigger className="text-left font-display text-lg font-bold hover:no-underline hover:text-brand">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 14 — FINAL CTA */}
      <section id="sponsor-final-cta" className="py-20 lg:py-28 bg-brand text-brand-foreground">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <div className="text-accent text-[11px] font-bold uppercase tracking-[0.3em] mb-3">Work With Tha Fix</div>
          <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight mb-5 text-brand-foreground">
            Put Your Brand Behind Conversations That Matter
          </h2>
          <p className="text-brand-foreground/75 leading-relaxed mb-3">
            Reach people through honest conversations, original media, community engagement, and
            live experiences.
          </p>
          <p className="text-brand-foreground/75 leading-relaxed mb-9">
            Advertise with Tha Fix. Sponsor the conversation. Build something meaningful with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button type="button" className={btnGold} onClick={() => scrollToId("partnership-inquiry")}>
              Start a Partnership Conversation
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center border border-brand-foreground/40 px-7 py-4 text-xs font-bold uppercase tracking-widest text-brand-foreground hover:bg-brand-foreground/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand"
              onClick={() => choose("Founding Sponsor")}
            >
              Apply to Become a Founding Sponsor
            </button>
          </div>
          <p className="mt-8 text-sm text-brand-foreground/75">
            Questions? Contact{" "}
            <a href="mailto:info@thafix502.com" className="text-accent font-semibold underline underline-offset-2">
              info@thafix502.com
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
