import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Tha Fix" },
      { name: "description", content: "Terms governing use of the Tha Fix Media Network website and services." },
      { property: "og:title", content: "Terms & Conditions" },
      { property: "og:description", content: "Terms of use for Tha Fix." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Legal" title="Terms & Conditions" />
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 space-y-6 text-foreground/80 leading-relaxed">
          <p>By accessing or using the Tha Fix Media Network website you agree to these terms.</p>
          <h2 className="font-display text-2xl font-bold mt-8">Use of content</h2>
          <p>All content is owned by Tha Fix or its licensors. You may not reproduce, distribute, or create derivative works without permission.</p>
          <h2 className="font-display text-2xl font-bold mt-8">Membership</h2>
          <p>Memberships are billed on a recurring basis and can be cancelled at any time. Refunds are handled case by case.</p>
          <h2 className="font-display text-2xl font-bold mt-8">Contact</h2>
          <p>Questions about these terms? Email hello@thafix.media.</p>
        </div>
      </section>
    </>
  ),
});