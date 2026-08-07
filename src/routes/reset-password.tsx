import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { FormEvent, useEffect, useState } from "react";
import { consumeRecoverySessionFromUrl, updatePassword } from "@/lib/account";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/reset-password")({
  head: () => ({ meta: [{ title: "Choose New Password — Tha Fix" }] }),
  component: ResetPasswordPage,
});

function ResetPasswordPage() {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const consumed = await consumeRecoverySessionFromUrl();
        if (active) {
          setReady(consumed);
          if (!consumed) setError("This password-reset link is invalid or expired. Request a new reset email.");
        }
      } catch (err) {
        if (active) setError(err instanceof Error ? err.message : "This password-reset link is invalid or expired.");
      }
    })();
    return () => { active = false; };
  }, []);

  async function submit(event: FormEvent) {
    event.preventDefault();
    setError("");
    setMessage("");
    if (password.length < 8) return setError("Use a password with at least 8 characters.");
    if (password !== confirmPassword) return setError("The passwords do not match.");
    setBusy(true);
    try {
      await updatePassword(password);
      setMessage("Your password has been updated. Sign in with your new password.");
      setReady(false);
      setTimeout(() => void navigate({ to: "/login" }), 1500);
    } catch (err) {
      setError(err instanceof Error ? err.message : "We couldn’t update your password.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <PageHero eyebrow="Account" title="Choose a New Password" description="Set a new password for your Tha Fix account." />
      <section className="py-16 lg:py-20">
        <div className="max-w-xl mx-auto px-6 lg:px-10">
          <form onSubmit={submit} className="bg-surface border border-border p-7 md:p-9 space-y-5">
            {ready && (
              <>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2" htmlFor="password">New Password</label>
                  <input id="password" type="password" required minLength={8} value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border border-border bg-background px-4 py-3" autoComplete="new-password" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2" htmlFor="confirm-password">Confirm New Password</label>
                  <input id="confirm-password" type="password" required minLength={8} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="w-full border border-border bg-background px-4 py-3" autoComplete="new-password" />
                </div>
              </>
            )}
            {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
            {message && <p className="text-sm border border-accent bg-accent/10 p-4">{message}</p>}
            {ready ? (
              <button type="submit" disabled={busy} className="w-full bg-brand text-brand-foreground py-4 text-xs font-bold uppercase tracking-widest disabled:opacity-60">
                {busy ? "Updating…" : "Update Password"}
              </button>
            ) : (
              <p className="text-sm text-center"><Link to="/forgot-password" className="text-brand underline">Request a new reset link</Link></p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
