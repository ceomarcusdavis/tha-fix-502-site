import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { createEmbeddedMembershipCheckout, STRIPE_PUBLISHABLE_KEY } from "@/lib/embedded-checkout";
import { getSession } from "@/lib/account";

export const Route = createFileRoute("/membership-checkout")({
  validateSearch: (search: Record<string, unknown>) => ({
    plan: typeof search.plan === "string" ? search.plan : "",
  }),
  head: () => ({
    meta: [
      { title: "Secure Membership Checkout — Tha Fix" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: MembershipCheckoutPage,
});

type StripeEmbeddedCheckout = {
  mount: (selector: string) => void;
  destroy: () => void;
};

type StripeClient = {
  initEmbeddedCheckout: (options: { clientSecret: string }) => Promise<StripeEmbeddedCheckout>;
};

declare global {
  interface Window {
    Stripe?: (publishableKey: string) => StripeClient;
  }
}

function loadStripeJs() {
  return new Promise<void>((resolve, reject) => {
    if (window.Stripe) return resolve();
    const existing = document.querySelector<HTMLScriptElement>('script[src="https://js.stripe.com/v3/"]');
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error("Stripe.js could not be loaded.")), { once: true });
      return;
    }
    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/";
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Stripe.js could not be loaded."));
    document.head.appendChild(script);
  });
}

function MembershipCheckoutPage() {
  const { plan } = Route.useSearch();
  const allowedPlan = useMemo(() => /^TFM-MPN-00000[1-3]$/.test(plan), [plan]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const checkoutRef = useRef<StripeEmbeddedCheckout | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function initialize() {
      if (!allowedPlan) {
        setError("This membership plan is not available for checkout.");
        setLoading(false);
        return;
      }
      if (!STRIPE_PUBLISHABLE_KEY) {
        setError("Secure checkout is not configured yet. Please contact Tha Fix support.");
        setLoading(false);
        return;
      }

      const session = await getSession();
      if (!session) {
        window.location.replace(`/login?returnTo=${encodeURIComponent(`/membership-checkout?plan=${plan}`)}`);
        return;
      }

      try {
        const result = await createEmbeddedMembershipCheckout(plan);
        await loadStripeJs();
        if (cancelled || !window.Stripe) return;
        const stripe = window.Stripe(STRIPE_PUBLISHABLE_KEY);
        const checkout = await stripe.initEmbeddedCheckout({ clientSecret: result.client_secret });
        if (cancelled) {
          checkout.destroy();
          return;
        }
        checkoutRef.current = checkout;
        checkout.mount("#stripe-embedded-checkout");
        setLoading(false);
      } catch (err) {
        if (cancelled) return;
        const message = err instanceof Error ? err.message : "We couldn’t start secure checkout.";
        setError(message);
        setLoading(false);
        if (/complete account|18|onboarding/i.test(message)) {
          window.setTimeout(() => window.location.replace("/account"), 1400);
        }
      }
    }

    initialize();
    return () => {
      cancelled = true;
      checkoutRef.current?.destroy();
      checkoutRef.current = null;
    };
  }, [allowedPlan, plan]);

  return (
    <main className="min-h-screen bg-[#F7F8FA] py-10 lg:py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="mb-8 flex items-center justify-between gap-4 flex-wrap">
          <Link to="/memberships" className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-accent">
            <ArrowLeft className="w-4 h-4" /> Back to Memberships
          </Link>
          <div className="inline-flex items-center gap-2 text-xs text-muted-foreground">
            <ShieldCheck className="w-4 h-4 text-brand" /> Secure payment powered by Stripe
          </div>
        </div>

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 items-start">
          <section className="bg-surface border border-border p-7 lg:p-9 lg:sticky lg:top-8">
            <div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-3">Tha Fix Membership</div>
            <h1 className="font-display text-4xl lg:text-5xl font-black tracking-tight mb-5">Complete Your Membership</h1>
            <p className="text-muted-foreground leading-relaxed mb-6">Your payment form stays inside Tha Fix while Stripe securely handles your payment information.</p>
            <div className="border-t border-border pt-5 space-y-3 text-sm text-muted-foreground">
              <p>Membership activates only after Stripe confirms successful payment.</p>
              <p>Monthly plans renew automatically until canceled. Founder is a one-time payment.</p>
              <p>By completing checkout, you agree to the <Link to="/membership-terms" className="underline text-brand">Membership Terms</Link> and <Link to="/terms" className="underline text-brand">Terms of Use</Link>.</p>
            </div>
          </section>

          <section className="bg-surface border border-border min-h-[640px] p-3 sm:p-5 lg:p-7">
            {loading && !error && (
              <div className="min-h-[560px] flex items-center justify-center text-sm text-muted-foreground">Loading secure checkout…</div>
            )}
            {error && (
              <div className="min-h-[360px] flex flex-col items-center justify-center text-center p-8">
                <p role="alert" className="text-destructive max-w-xl mb-5">{error}</p>
                <Link to="/memberships" className="bg-brand text-brand-foreground px-6 py-3 text-xs font-bold uppercase tracking-widest">Return to Memberships</Link>
              </div>
            )}
            <div id="stripe-embedded-checkout" className={loading || error ? "hidden" : "block"} />
          </section>
        </div>
      </div>
    </main>
  );
}
