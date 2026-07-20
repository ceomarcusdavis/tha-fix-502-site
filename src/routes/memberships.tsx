import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { memberships } from "@/data/content";
import { PageHero } from "@/components/page-hero";

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

function MembershipsPage() {
  return (
    <>
      <PageHero eyebrow="Memberships" title="Join the family." description="This isn't a subscription. It's an invitation to keep the conversation going every single day." />
      <section className="py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid md:grid-cols-3 gap-6">
          {memberships.map((m) => (
            <div
              key={m.name}
              className={`relative p-8 flex flex-col border ${
                m.featured ? "bg-brand text-brand-foreground border-brand shadow-2xl md:scale-105" : "bg-surface border-border"
              }`}
            >
              {m.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-foreground text-background text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                  Most Popular
                </div>
              )}
              <div className="text-[11px] font-bold uppercase tracking-[0.3em] opacity-70 mb-3">{m.tagline}</div>
              <h3 className="font-display text-4xl font-black mb-4">{m.name}</h3>
              <div className="mb-8">
                <span className="font-display text-6xl font-black">${m.price}</span>
                <span className="text-sm opacity-70">{m.period}</span>
              </div>
              <ul className="space-y-3 mb-10 flex-1">
                {m.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-4 text-xs font-bold uppercase tracking-widest transition-colors ${
                  m.featured
                    ? "bg-foreground text-background hover:bg-background hover:text-foreground"
                    : "bg-brand text-brand-foreground hover:brightness-110"
                }`}
              >
                {m.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-10">Compare every benefit</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 font-medium text-muted-foreground uppercase tracking-widest text-xs">Benefit</th>
                  {memberships.map((m) => (
                    <th key={m.name} className="text-center py-4 font-display text-base">{m.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Early access to new episodes", true, true, true],
                  ["Members-only bonus clips", true, true, true],
                  ["Community feed access", true, true, true],
                  ["Submit questions & topics", true, true, true],
                  ["Tha Fix After Hours (unfiltered)", false, true, true],
                  ["Behind-the-scenes + raw discussions", false, true, true],
                  ["Voting power on topics", false, true, true],
                  ["Merch discount", false, "10%", "15%"],
                  ["Monthly live webinar / networking", false, true, true],
                  ["Private community access", false, true, true],
                  ["Ability to create & publish blog posts", false, true, true],
                  ["Lifetime access to all content", false, false, true],
                  ["Free exclusive Tha Fix T-shirt", false, false, true],
                  ["Listed as Founding Member on site", false, false, true],
                  ["Quarterly private strategy session", false, false, true],
                  ["Members-only documentary content", false, false, true],
                  ["Priority collab & guest placement", false, false, true],
                  ["Featured brand spotlight", false, false, true],
                  ["Early access to events & platform features", false, false, true],
                  ["Opportunity drops", false, false, true],
                  ["Priority Q&A (guaranteed response)", false, false, true],
                ].map(([label, ...vals]) => (
                  <tr key={label as string} className="border-b border-border/40">
                    <td className="py-4">{label as string}</td>
                    {vals.map((v, i) => (
                      <td key={i} className="text-center py-4">
                        {v === true ? (
                          <Check className="w-4 h-4 text-brand inline" />
                        ) : v === false ? (
                          <span className="text-muted-foreground">—</span>
                        ) : (
                          <span className="text-sm font-bold text-brand">{v}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}