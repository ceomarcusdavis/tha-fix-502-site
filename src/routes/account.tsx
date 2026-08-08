import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { FormEvent, useEffect, useState } from "react";
import {
  completeOnboarding,
  createBillingPortalSession,
  getMyAccount,
  getMyMembership,
  getSession,
  MyMembership,
  MyOrganizationAccount,
  signOut,
  updateMyProfile,
} from "@/lib/account";
import { PageHero } from "@/components/page-hero";
import { buildMembershipAccess, MEMBERSHIP_ENTITLEMENTS } from "@/lib/membership-access";

export const Route = createFileRoute("/account")({
  head: () => ({ meta: [{ title: "My Account — Tha Fix" }] }),
  component: AccountPage,
});

function formatMoney(amountCents: number, currency: string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.toUpperCase(),
    maximumFractionDigits: 0,
  }).format(amountCents / 100);
}

function formatDate(value: string | null) {
  if (!value) return null;
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(new Date(value));
}

function AccountPage() {
  const navigate = useNavigate();
  const [account, setAccount] = useState<MyOrganizationAccount | null>(null);
  const [membership, setMembership] = useState<MyMembership | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [givenName, setGivenName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [ageConfirmed, setAgeConfirmed] = useState(false);
  const [busy, setBusy] = useState(false);
  const [billingBusy, setBillingBusy] = useState(false);

  useEffect(() => {
    let active = true;
    (async () => {
      const session = await getSession();
      if (!session) {
        await navigate({ to: "/login" });
        return;
      }
      try {
        const [accountResult, membershipResult] = await Promise.all([
          getMyAccount(),
          getMyMembership().catch(() => null),
        ]);
        if (!active) return;
        setAccount(accountResult);
        setMembership(membershipResult);
        setGivenName(accountResult?.given_name || "");
        setFamilyName(accountResult?.family_name || "");
        setDisplayName(accountResult?.display_name || "");
        setAgeConfirmed(Boolean(accountResult?.age_18_plus_attested_at));
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
      const wasComplete = Boolean(account?.onboarding_complete);
      const result = wasComplete
        ? await updateMyProfile({ givenName, familyName, displayName })
        : await completeOnboarding({ givenName, familyName, displayName, confirmedAge18Plus: ageConfirmed });
      setAccount(result);
      setAgeConfirmed(Boolean(result.age_18_plus_attested_at));
      setMessage(wasComplete ? "Profile updated." : "Your Tha Fix account is ready. You can now choose a membership.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "We couldn’t save your account.");
    } finally {
      setBusy(false);
    }
  }

  async function manageBilling() {
    setError("");
    setBillingBusy(true);
    try {
      const result = await createBillingPortalSession();
      window.location.assign(result.portal_url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "We couldn’t open billing management.");
    } finally {
      setBillingBusy(false);
    }
  }

  async function logout() {
    await signOut();
    await navigate({ to: "/login" });
  }

  const periodEnd = formatDate(membership?.current_period_end || membership?.access_ends_at || null);
  const isRecurringMembership = membership?.plan_code === "audience" || membership?.plan_code === "network";
  const access = buildMembershipAccess(membership);
  const hasMemberWatch =
    access.has(MEMBERSHIP_ENTITLEMENTS.earlyAccess) ||
    access.has(MEMBERSHIP_ENTITLEMENTS.bonusClips) ||
    access.has(MEMBERSHIP_ENTITLEMENTS.afterHours) ||
    access.has(MEMBERSHIP_ENTITLEMENTS.behindTheScenes) ||
    access.has(MEMBERSHIP_ENTITLEMENTS.documentaryContent);
  const hasMemberCommunity = access.has(MEMBERSHIP_ENTITLEMENTS.memberDiscussions);

  return (
    <>
      <PageHero eyebrow="Account" title="My Tha Fix Account" description="Manage your profile, membership status, and billing." />
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
                {membership ? (
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                      <div>
                        <h2 className="font-display text-3xl font-bold">{membership.plan_name}</h2>
                        <p className="text-sm text-muted-foreground mt-1 capitalize">Status: {membership.membership_status.replaceAll("_", " ")}</p>
                      </div>
                      <div className="sm:text-right">
                        <p className="font-display text-2xl font-bold">{formatMoney(membership.amount_cents, membership.currency)}{isRecurringMembership ? "/mo" : " one-time"}</p>
                        {membership.price_protected && <p className="text-xs text-brand font-bold mt-1">Introductory rate protected while continuously active</p>}
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4 text-sm mb-5">
                      <div className="border border-border bg-surface p-4">
                        <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Renewal</div>
                        <p className="font-semibold capitalize">{membership.renewal_status.replaceAll("_", " ")}</p>
                      </div>
                      <div className="border border-border bg-surface p-4">
                        <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">{isRecurringMembership ? "Current Period" : "Access"}</div>
                        <p className="font-semibold">{periodEnd ? `${membership.renewal_status === "cancel_at_period_end" ? "Access through" : "Through"} ${periodEnd}` : "Continuing access subject to membership terms"}</p>
                      </div>
                    </div>

                    {access.hasActiveAccess && (hasMemberWatch || hasMemberCommunity) ? (
                      <div className="mb-5 border border-border bg-surface p-5">
                        <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand mb-3">Your Member Areas</div>
                        <div className="flex flex-wrap gap-3">
                          {hasMemberWatch ? (
                            <Link to="/watch/member" className="bg-brand text-brand-foreground px-5 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#6A33A5] transition-colors">Open Member Watch</Link>
                          ) : null}
                          {hasMemberCommunity ? (
                            <Link to="/community/member" className="border border-brand text-brand bg-background px-5 py-3 text-xs font-bold uppercase tracking-widest hover:bg-brand/5">Open Member Community</Link>
                          ) : null}
                        </div>
                      </div>
                    ) : null}

                    <div className="flex flex-wrap gap-3">
                      {isRecurringMembership && (
                        <button type="button" onClick={manageBilling} disabled={billingBusy} className="bg-brand text-brand-foreground px-5 py-3 text-xs font-bold uppercase tracking-widest disabled:opacity-60">
                          {billingBusy ? "Opening Billing…" : "Manage Billing"}
                        </button>
                      )}
                      <Link to="/memberships" className="border border-border bg-surface px-5 py-3 text-xs font-bold uppercase tracking-widest hover:bg-muted">View Membership Benefits</Link>
                    </div>
                  </div>
                ) : (
                  <div>
                    <h2 className="font-display text-2xl font-bold mb-2">No paid membership yet.</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">Your Tha Fix account is separate from a paid membership. Complete your profile, then choose the membership level that fits how you want to participate.</p>
                    <Link to="/memberships" className="inline-block bg-brand text-brand-foreground px-5 py-3 text-xs font-bold uppercase tracking-widest">Choose a Membership</Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
