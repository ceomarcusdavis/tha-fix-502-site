import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { FormEvent, useState } from "react";
import { signIn } from "@/lib/account";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Sign In — Tha Fix" }] }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event: FormEvent) {
    event.preventDefault();
    setError("");
    setBusy(true);
    try {
      await signIn(email, password);
      await navigate({ to: "/account" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "We couldn’t sign you in.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <PageHero eyebrow="Account" title="Welcome Back" description="Sign in to manage your Tha Fix account and membership." />
      <section className="py-16 lg:py-20">
        <div className="max-w-xl mx-auto px-6 lg:px-10">
          <form onSubmit={submit} className="bg-surface border border-border p-7 md:p-9 space-y-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest mb-2" htmlFor="email">Email</label>
              <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border border-border bg-background px-4 py-3" autoComplete="email" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest mb-2" htmlFor="password">Password</label>
              <input id="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border border-border bg-background px-4 py-3" autoComplete="current-password" />
            </div>
            {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
            <button type="submit" disabled={busy} className="w-full bg-brand text-brand-foreground py-4 text-xs font-bold uppercase tracking-widest disabled:opacity-60">
              {busy ? "Signing In…" : "Sign In"}
            </button>
            <div className="flex flex-col sm:flex-row justify-between gap-3 text-sm">
              <Link to="/forgot-password" className="text-brand underline">Forgot password?</Link>
              <span>New here? <Link to="/signup" className="text-brand underline">Create an account</Link>.</span>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
