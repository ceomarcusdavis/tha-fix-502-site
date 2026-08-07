import { createFileRoute, Link } from "@tanstack/react-router";
import { FormEvent, useState } from "react";
import { sendPasswordReset } from "@/lib/account";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/forgot-password")({
  head: () => ({ meta: [{ title: "Reset Password — Tha Fix" }] }),
  component: ForgotPasswordPage,
});

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event: FormEvent) {
    event.preventDefault();
    setError("");
    setMessage("");
    setBusy(true);
    try {
      await sendPasswordReset(email);
      setMessage("If an account exists for that email, Supabase will send password-reset instructions.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "We couldn’t send reset instructions.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <PageHero eyebrow="Account" title="Reset Your Password" description="Enter the email address connected to your Tha Fix account." />
      <section className="py-16 lg:py-20">
        <div className="max-w-xl mx-auto px-6 lg:px-10">
          <form onSubmit={submit} className="bg-surface border border-border p-7 md:p-9 space-y-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest mb-2" htmlFor="email">Email</label>
              <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border border-border bg-background px-4 py-3" autoComplete="email" />
            </div>
            {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
            {message && <p className="text-sm border border-accent bg-accent/10 p-4">{message}</p>}
            <button type="submit" disabled={busy} className="w-full bg-brand text-brand-foreground py-4 text-xs font-bold uppercase tracking-widest disabled:opacity-60">
              {busy ? "Sending…" : "Send Reset Instructions"}
            </button>
            <p className="text-sm text-center"><Link to="/login" className="text-brand underline">Back to sign in</Link></p>
          </form>
        </div>
      </section>
    </>
  );
}
