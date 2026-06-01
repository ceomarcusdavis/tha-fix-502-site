import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-episode.jpg";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Tha Fix" },
      { name: "description", content: "Tha Fix is a media network for real conversations. We lived it. Now we talk it." },
      { property: "og:title", content: "About — Tha Fix" },
      { property: "og:description", content: "We lived it. Now we talk it." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="We lived it. Now we talk it." />
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-start">
          <div className="aspect-[4/5] overflow-hidden border border-border">
            <img src={heroImg} alt="The hosts of Tha Fix" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>Tha Fix started in a back room with two microphones and a question: <em>what would real talk look like if no one was performing?</em></p>
            <p>Today it's a media network built on the same principle. We bring lived experience and earned perspective to the conversations that shape our culture — sports, politics, business, faith, recovery, organizing, the block, the boardroom, all of it.</p>
            <p>The hosts have been where these conversations live. The guests are people whose names you know and people whose names you should. The community is the family.</p>
            <p className="font-display text-3xl font-bold text-brand italic">"We lived it. Now we talk it."</p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-surface border-y border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid md:grid-cols-3 gap-10">
          {[
            ["Authentic", "Lived experience, not talking points."],
            ["Community-driven", "Built for and by the people we serve."],
            ["Purpose-driven", "Every episode points somewhere."],
          ].map(([t, b]) => (
            <div key={t}>
              <h3 className="font-display text-3xl font-black mb-3">{t}</h3>
              <p className="text-muted-foreground">{b}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}