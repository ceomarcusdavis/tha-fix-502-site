import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { FormEvent, useEffect, useState } from "react";
import {
  completeOnboarding,
  getMyAccount,
  getSession,
  MyOrganizationAccount,
  signOut,
  updateMyProfile,
} from "@/lib/account";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/account")({
  head: () => ({ meta: [{ title: "My Account — Tha Fix" }] }),
  component: AccountPage,
});

function AccountPage() {
  const navigate = useNavigate();
  const [account, setAccount] = useState<MyOrganizationAccount | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [givenName, setGivenName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [ageConfirmed, setAgeConfirmed] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let active = true;
    (async () => {
      const session = await getSession();
      if (!session) {
        await navigate({ to: "/login" });
        return;
      }
      try {
        const result = await getMyAccount();
        if (!active) return;
        setAccount(result);
        setGivenName(result?.given_name || "");
        setFamilyName(result?.family_name || "");
        setDisplayName(result?.display_name || "");
        setAgeConfirmed(Boolean(result?.age_18_plus_attested_at));
      } catch (err) {
        if (active) setError(err instanceof Error ? err.message : "We couldn’t load your account.");
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => { active = false; };
  }, [navigate]);

  async function save(event: FormEvent) {
    event.preventDefault();
    setError("");
    setMessage("");
    setBusy(true);
    try {
      const result = account?.onboarding_complete
        ? await updateMyProfile({ givenName, familyName, displayName })
        : await completeOnboarding({ givenName, familyName, displayName, confirmedAge18Plus: ageConfirmed });
      setAccount(result);
      setAgeConfirmed(Boolean(result.age_18_plus_attested_at));
      setMessage(account?.onboarding_complete ? "Profile updated." : "Your Tha Fix account is ready.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "We couldn’t save your account.");
    } finally {
      setBusy(false);
    }
  }

  async function logout() {
    await signOut();
    await navigate({ to: "/login" });
  }

  return (
    <>
      <PageHero eyebrow="Account" title="My Tha Fix Account" description="Manage your identity now. Membership and billing controls will appear here when checkout is activated." />
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          {loading ? (
            <p className="text-muted-foreground">Loading your account…</p>
          ) : (
            <div className="space-y-6">
              <div className="border border-border bg-surface p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand mb-1">Account Status</div>
                  <p className="font-display text-2xl font-bold">{account?.onboarding_complete ? "Account Ready" : "Finish Your Profile"}</p>
                  <p className="text-sm text-muted-foreground mt-1">{account?.email}</p>
                </div>
                <button type="button" onClick={logout} className="border border-border px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-muted">Sign Out</button>
              </div>

              <form onSubmit={save} className="border border-border bg-surface p-7 md:p-9 space-y-5">
                <div>
                  <h2 className="font-display text-3xl font-bold">{account?.onboarding_complete ? "Profile" : "Complete Your Account"}</h2>
                  <p className="text-sm text-muted-foreground mt-2">Your email stays private. Your display name can be used later for community and blog participation.</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2" htmlFor="given-name">First Name</label>
                    <input id="given-name" required value={givenName} onChange={(e) => setGivenName(e.target.value)} className="w-full border border-border bg-background px-4 py-3" autoComplete="given-name" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2" htmlFor="family-name">Last Name</label>
                    <input id="family-name" required value={familyName} onChange={(e) => setFamilyName(e.target.value)} className="w-full border border-border bg-background px-4 py-3" autoComplete="family-name" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2" htmlFor="display-name">Public Display Name</label>
                  <input id="display-name" required value={displayName} onChange={(e) => setDisplayName(e.target.value)} className="w-full border border-border bg-background px-4 py-3" />
                </div>
                {!account?.onboarding_complete && (
                  <label className="flex items-start gap-3 text-sm leading-relaxed border border-border p-4">
                    <input type="checkbox" checked={ageConfirmed} onChange={(e) => setAgeConfirmed(e.target.checked)} className="mt-1" />
                    <span>I confirm that I am at least 18 years old. Tha Fix accounts used for memberships, purchases, comments, and member participation are limited to adults 18 or older.</span>
                  </label>
                )}
                {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
                {message && <p className="text-sm border border-accent bg-accent/10 p-4">{message}</p>}
                <button type="submit" disabled={busy} className="bg-brand text-brand-foreground px-6 py-4 text-xs font-bold uppercase tracking-widest disabled:opacity-60">
                  {busy ? "Saving…" : account?.onboarding_complete ? "Save Profile" : "Complete Account"}
                </button>
              </form>

              <div className="border border-border bg-[#F7F8FA] p-7">
                <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand mb-2">Membership</div>
                <h2 className="font-display text-2xl font-bold mb-2">Checkout activation is next.</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">Your account is separate from a paid membership. Once Stripe is activated, this area will show your plan, renewal status, benefits, and billing-management link.</p>
                <Link to="/memberships" className="text-brand text-sm font-bold underline">View membership plans</Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
