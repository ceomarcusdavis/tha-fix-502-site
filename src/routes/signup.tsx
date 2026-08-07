import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { FormEvent, useState } from "react";
import { signUp } from "@/lib/account";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/signup")({
  head: () => ({ meta: [{ title: "Create Account — Tha Fix" }] }),
  component: SignupPage,
});

function SignupPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event: FormEvent) {
    event.preventDefault();
    setError("");
    setMessage("");
    if (password.length < 8) return setError("Use a password with at least 8 characters.");
    if (password !== confirmPassword) return setError("The passwords do not match.");
    setBusy(true);
    try {
      const result = await signUp(email, password);
      if (result?.access_token) {
        await navigate({ to: "/account" });
      } else {
        setMessage("Check your email to verify your account. After verification, sign in to finish your Tha Fix profile.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "We couldn’t create your account.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <PageHero eyebrow="Account" title="Create Your Tha Fix Account" description="Your account connects you to memberships, community access, and member features." />
      <section className="py-16 lg:py-20">
        <div className="max-w-xl mx-auto px-6 lg:px-10">
          <form onSubmit={submit} className="bg-surface border border-border p-7 md:p-9 space-y-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest mb-2" htmlFor="email">Email</label>
              <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border border-border bg-background px-4 py-3" autoComplete="email" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest mb-2" htmlFor="password">Password</label>
              <input id="password" type="password" required minLength={8} value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border border-border bg-background px-4 py-3" autoComplete="new-password" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest mb-2" htmlFor="confirm-password">Confirm Password</label>
              <input id="confirm-password" type="password" required minLength={8} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="w-full border border-border bg-background px-4 py-3" autoComplete="new-password" />
            </div>
            {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
            {message && <p className="text-sm border border-accent bg-accent/10 p-4">{message}</p>}
            <button type="submit" disabled={busy} className="w-full bg-brand text-brand-foreground py-4 text-xs font-bold uppercase tracking-widest disabled:opacity-60">
              {busy ? "Creating Account…" : "Create Account"}
            </button>
            <p className="text-xs text-muted-foreground leading-relaxed">By creating an account, you agree to the <Link to="/terms" className="underline">Terms of Use</Link>. Membership enrollment is limited to adults 18 or older and requires a separate age confirmation during onboarding.</p>
            <p className="text-sm text-center">Already have an account? <Link to="/login" className="text-brand underline">Sign in</Link>.</p>
          </form>
        </div>
      </section>
    </>
  );
}
