import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Tha Fix" },
      { name: "description", content: "How Tha Fix handles your data and privacy." },
      { property: "og:title", content: "Privacy Policy" },
      { property: "og:description", content: "How Tha Fix handles your data and privacy." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 space-y-6 text-foreground/80 leading-relaxed">
          <p>This privacy policy describes how Tha Fix Media Network collects, uses, and protects information you provide when using our website.</p>
          <h2 className="font-display text-2xl font-bold mt-8">Information we collect</h2>
          <p>We collect information you provide directly (email, account details) and information about how you use our services (pages visited, episodes played).</p>
          <h2 className="font-display text-2xl font-bold mt-8">How we use it</h2>
          <p>To deliver content, personalize your experience, communicate updates, and improve our products.</p>
          <h2 className="font-display text-2xl font-bold mt-8">Your choices</h2>
          <p>You can update your information, opt out of communications, or delete your account at any time by contacting hello@thafix.media.</p>
        </div>
      </section>
    </>
  ),
});