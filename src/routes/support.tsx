import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CheckCircle2, Heart, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { memberships } from "@/data/content";
import { createSupportCheckout, type SupportCadence } from "@/lib/support";

const STRIPE_BILLING_PORTAL_URL = "https://billing.stripe.com/p/login/eVq00c8wy671edA7rn53O00";

export const Route = createFileRoute("/support")({
  validateSearch: (search: Record<string, unknown>) => ({
    support: typeof search.support === "string" ? search.support : "",
  }),
  head: () => ({
    meta: [
      { title: "Support Tha Fix" },
      { name: "description", content: "Help Tha Fix Media Network continue producing meaningful content." },
      { property: "og:title", content: "Support Tha Fix" },
      { property: "og:description", content: "Help Tha Fix Media Network continue producing meaningful content." },
    ],
  }),
  component: SupportPage,
});

function SupportPage() {
  const { support } = Route.useSearch();
  const [cadence, setCadence] = useState<SupportCadence>("one_time");
  const [selectedAmount, setSelectedAmount] = useState(25);
  const [customAmount, setCustomAmount] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [message, setMessage] = useState("");
  const [recognitionConsent, setRecognitionConsent] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const amountDollars = useMemo(() => {
    if (customAmount.trim()) {
      const value = Number(customAmount);
      return Number.isFinite(value) ? value : 0;
    }
    return selectedAmount;
  }, [customAmount, selectedAmount]);

  async function beginCheckout() {
    setError("");
    const amountCents = Math.round(amountDollars * 100);
    if (amountCents < 500) {
      setError("Website support through Stripe has a $5 minimum.");
      return;
    }
    if (!termsAccepted) {
      setError("Please confirm that you agree to the Support Terms before continuing.");
      return;
    }
    if (recognitionConsent && !displayName.trim()) {
      setError("Enter the display name you want Tha Fix to use for public recognition.");
      return;
    }

    setBusy(true);
    try {
      const result = await createSupportCheckout({
        amountCents,
        cadence,
        supporterDisplayName: displayName,
        supporterMessage: message,
        publicRecognitionConsent: recognitionConsent,
      });
      window.location.assign(result.checkout_url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "We couldn’t start secure support checkout.");
      setBusy(false);
    }
  }

  return (
    <>
      <PageHero eyebrow="Support" title="Support Independent Media" description="Help Tha Fix Media Network continue producing meaningful content." />
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          {support === "success" ? (
            <div className="mb-8 border border-accent bg-accent/10 p-6 flex gap-4 items-start">
              <CheckCircle2 className="w-6 h-6 text-brand shrink-0 mt-0.5" />
              <div>
                <h2 className="font-display text-2xl font-bold mb-1">Thank you for supporting Tha Fix.</h2>
                <p className="text-sm text-muted-foreground">You returned to Tha Fix after Stripe Checkout. Payment and recurring-support records are finalized only after Stripe confirms them through our secure payment webhook.</p>
                <a href={STRIPE_BILLING_PORTAL_URL} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-xs font-bold uppercase tracking-widest text-brand underline underline-offset-4">Manage Recurring Support</a>
              </div>
            </div>
          ) : null}

          {support === "canceled" ? (
            <div className="mb-8 border border-border bg-surface p-5 text-sm text-muted-foreground">Checkout was canceled. No support payment was completed.</div>
          ) : null}

          <p className="text-base text-muted-foreground leading-relaxed mb-8">Your support helps Tha Fix Media Network continue elevating important voices and growing an independent media platform built from lived experience. Every contribution helps us keep the conversations going.</p>

          <div className="border border-border bg-surface p-6 md:p-8 space-y-7">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand mb-3">1. Choose frequency</div>
              <div className="grid sm:grid-cols-2 gap-3">
                <button type="button" onClick={() => setCadence("one_time")} className={`border px-5 py-4 text-left transition-colors ${cadence === "one_time" ? "border-brand bg-brand/5" : "border-border hover:border-brand"}`}><div className="font-display text-xl font-bold">One-Time Support</div><div className="text-sm text-muted-foreground mt-1">One voluntary payment.</div></button>
                <button type="button" onClick={() => setCadence("monthly")} className={`border px-5 py-4 text-left transition-colors ${cadence === "monthly" ? "border-brand bg-brand/5" : "border-border hover:border-brand"}`}><div className="font-display text-xl font-bold">Monthly Support</div><div className="text-sm text-muted-foreground mt-1">Automatically renews monthly until canceled.</div></button>
              </div>
              <p className="text-xs text-muted-foreground mt-3">Already giving monthly? <a href={STRIPE_BILLING_PORTAL_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand underline">Manage recurring support through Stripe.</a></p>
            </div>

            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand mb-3">2. Choose amount</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                {[10, 25, 50, 100].map((amt) => (
                  <button type="button" key={amt} onClick={() => { setSelectedAmount(amt); setCustomAmount(""); }} className={`border py-5 font-display text-2xl font-bold transition-colors ${!customAmount && selectedAmount === amt ? "border-brand bg-brand text-brand-foreground" : "border-border bg-background hover:border-brand"}`}>${amt}</button>
                ))}
              </div>
              <label className="block"><span className="block text-xs font-bold uppercase tracking-widest mb-2">Custom amount</span><div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">$</span><input inputMode="decimal" value={customAmount} onChange={(event) => setCustomAmount(event.target.value.replace(/[^0-9.]/g, ""))} placeholder="Minimum $5" className="w-full bg-background border border-border pl-8 pr-4 py-4 text-sm focus:outline-none focus:border-brand" /></div></label>
            </div>

            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand mb-3">3. Optional supporter details</div>
              <div className="grid md:grid-cols-2 gap-4">
                <label><span className="block text-xs font-bold uppercase tracking-widest mb-2">Display name</span><input value={displayName} onChange={(event) => setDisplayName(event.target.value)} maxLength={120} placeholder="Name or organization" className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-brand" /></label>
                <label><span className="block text-xs font-bold uppercase tracking-widest mb-2">Message</span><input value={message} onChange={(event) => setMessage(event.target.value)} maxLength={1000} placeholder="Optional note to Tha Fix" className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-brand" /></label>
              </div>
              <label className="mt-4 flex items-start gap-3 text-sm"><input type="checkbox" checked={recognitionConsent} onChange={(event) => setRecognitionConsent(event.target.checked)} className="mt-1" /><span>Tha Fix may publicly recognize my support using the display name above. Leave this unchecked to remain anonymous publicly.</span></label>
            </div>

            <div className="border-t border-border pt-6">
              <label className="flex items-start gap-3 text-sm leading-relaxed mb-5"><input type="checkbox" checked={termsAccepted} onChange={(event) => setTermsAccepted(event.target.checked)} className="mt-1" /><span>I understand this is voluntary support to a for-profit business, is not tax-deductible, does not purchase membership or merchandise, and is governed by the <Link to="/support-terms" className="underline text-brand">Support Terms</Link>.</span></label>
              {error ? <p role="alert" className="text-sm text-destructive mb-4">{error}</p> : null}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <button type="button" disabled={busy} onClick={beginCheckout} className="inline-flex items-center justify-center gap-2 bg-brand text-brand-foreground px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-[#6A33A5] transition-colors disabled:opacity-60"><Heart className="w-4 h-4 fill-current" /> {busy ? "Opening Checkout…" : `Support $${amountDollars > 0 ? amountDollars.toFixed(2) : "0.00"}${cadence === "monthly" ? "/mo" : ""}`}</button>
                <div className="inline-flex items-center gap-2 text-xs text-muted-foreground"><ShieldCheck className="w-4 h-4 text-brand" /> Secure payment handled by Stripe</div>
              </div>
            </div>
          </div>

          <p className="text-xs text-muted-foreground leading-relaxed mt-6"><strong>Important disclosure:</strong> Tha Fix is a for-profit media business. Payments made through this page are voluntary support payments and are not charitable donations or tax-deductible contributions. Website support is processed through Stripe and has a $5 minimum. Learn more at our <Link to="/support-terms" className="underline hover:text-accent">Support Terms</Link> page.</p>
        </div>
      </section>

      <section className="relative py-24 lg:py-32 bg-brand text-brand-foreground overflow-hidden">
        <div className="absolute -top-20 -right-20 size-[500px] rounded-full bg-foreground/5" />
        <div className="absolute -bottom-32 -left-20 size-[400px] rounded-full bg-foreground/5" />
        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.3em] mb-5 opacity-70">Join The Movement</div>
            <h2 className="font-display text-5xl md:text-7xl font-black tracking-tighter leading-[0.85] mb-6 text-balance">This isn't a subscription.<br /><span className="italic">It's a family.</span></h2>
            <p className="text-lg max-w-xl mb-10 opacity-80">Membership is separate from voluntary support. Join for member benefits, early access, discussions, and the private member experience.</p>
            <div className="flex flex-wrap gap-3"><Link to="/memberships" className="bg-white text-brand px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-gray-100 transition-colors">See Membership Plans</Link><Link to="/community" className="border border-brand-foreground/30 px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-brand-foreground/10 transition-colors">Explore Community</Link></div>
          </div>
          <div className="grid gap-4">
            {memberships.map((m) => (
              <div key={m.name} className={`p-6 border ${m.featured ? "bg-background text-foreground border-background" : "border-brand-foreground/20"}`}><div className="flex items-baseline justify-between gap-4 mb-2"><h3 className="font-display text-2xl font-black">{m.name}</h3><div className="font-display text-3xl font-black">${m.price}<span className={`text-xs font-medium ${m.featured ? "text-muted-foreground" : "opacity-60"}`}>{m.period}</span></div></div><p className={`text-sm ${m.featured ? "text-muted-foreground" : "opacity-70"}`}>{m.tagline}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 text-center">
          <div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-3">The Supply Drop</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-5">Wear the message.</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed mb-8">Official merchandise is managed through the Tha Fix Shop. Only finalized, launch-ready products will appear for purchase.</p>
          <Link to="/shop" className="inline-flex items-center justify-center bg-brand text-brand-foreground px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-[#6A33A5] transition-colors">Visit The Shop</Link>
        </div>
      </section>
    </>
  );
}
