import { Link } from "@tanstack/react-router";
import { Instagram, Youtube, Twitter, Facebook } from "lucide-react";

const cols = [
  {
    title: "Network",
    links: [
      { to: "/watch", label: "Watch Episodes" },
      { to: "/hosts", label: "Hosts" },
      { to: "/guests", label: "Guests" },
      { to: "/blog", label: "Blog" },
    ],
  },
  {
    title: "Join",
    links: [
      { to: "/memberships", label: "Memberships" },
      { to: "/community", label: "Community" },
      { to: "/events", label: "Events" },
      { to: "/donate", label: "Donate" },
    ],
  },
  {
    title: "About",
    links: [
      { to: "/about", label: "About Us" },
      { to: "/sponsors", label: "Sponsors & Partners" },
      { to: "/shop", label: "Shop" },
      { to: "/contact", label: "Contact" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background mt-24">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2 max-w-sm">
            <div className="font-display font-black text-3xl tracking-tighter mb-4">
              <span className="text-brand">THA</span>FIX
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              We lived it. Now we talk it. A media network for real conversations on
              culture, community, entrepreneurship, and transformation.
            </p>
            <div className="flex gap-3">
              {[Instagram, Youtube, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="size-9 rounded-sm border border-border grid place-items-center text-foreground/60 hover:text-brand hover:border-brand transition-colors"
                  aria-label="Social link"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-display text-xs uppercase tracking-[0.2em] text-brand mb-5">
                {c.title}
              </h4>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-border flex flex-col md:flex-row gap-4 items-center justify-between text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Tha Fix Media Network. All rights reserved.</span>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-foreground">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}