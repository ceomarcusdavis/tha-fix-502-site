import { Link } from "@tanstack/react-router";
import { Instagram, Youtube, Facebook } from "lucide-react";

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
    <footer className="border-t border-border bg-[#1A1A1A] mt-24">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2 max-w-sm">
            <img src="/images/thafix-logo-horizontal.png" alt="Tha Fix" className="h-28 w-auto mb-5" />
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              We lived it. Now we talk it. A media network for real conversations on
              culture, community, entrepreneurship, and transformation.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/thafix502/"
                target="_blank"
                rel="noopener noreferrer"
                className="size-9 rounded-sm border border-white/20 grid place-items-center text-white/60 hover:text-accent hover:border-accent transition-colors"
                aria-label="Tha Fix on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@ThaFix502"
                target="_blank"
                rel="noopener noreferrer"
                className="size-9 rounded-sm border border-white/20 grid place-items-center text-white/60 hover:text-accent hover:border-accent transition-colors"
                aria-label="Tha Fix on YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61583653498765"
                target="_blank"
                rel="noopener noreferrer"
                className="size-9 rounded-sm border border-white/20 grid place-items-center text-white/60 hover:text-accent hover:border-accent transition-colors"
                aria-label="Tha Fix on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-display text-xs uppercase tracking-[0.2em] text-white mb-5">
                {c.title}
              </h4>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row gap-4 items-center justify-between text-xs text-white/60">
          <span>© {new Date().getFullYear()} Tha Fix Media Network. All rights reserved.</span>
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Use</Link>
            <Link to="/membership-terms" className="hover:text-white">Membership Terms</Link>
            <Link to="/guidelines" className="hover:text-white">Guidelines</Link>
            <Link to="/shipping-returns" className="hover:text-white">Shipping & Returns</Link>
            <Link to="/support-terms" className="hover:text-white">Support Terms</Link>
            <Link to="/accessibility" className="hover:text-white">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}