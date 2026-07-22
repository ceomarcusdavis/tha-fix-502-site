import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Play } from "lucide-react";

const links = [
  { to: "/watch", label: "Watch" },
  { to: "/hosts", label: "Hosts" },
  { to: "/guests", label: "Guests" },
  { to: "/memberships", label: "Memberships" },
  { to: "/shop", label: "Shop" },
  { to: "/community", label: "Community" },
  { to: "/events", label: "Events" },
  { to: "/blog", label: "Blog" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-[#1A1A1A] border-b border-white/10 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src="/images/thafix-logo-horizontal.png" alt="Tha Fix — We lived it. Now we talk it." className="h-9 md:h-11 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium tracking-wide uppercase text-white/80">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="hover:text-[#FDB927] transition-colors data-[status=active]:text-[#FDB927] data-[status=active]:underline data-[status=active]:decoration-[#FDB927] data-[status=active]:decoration-2 data-[status=active]:underline-offset-4"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/support"
            className="hidden md:inline-flex text-[12px] font-semibold uppercase tracking-widest text-white/80 hover:text-[#FDB927] transition-colors"
          >
            Support Tha Fix
          </Link>
          <Link
            to="/memberships"
            className="inline-flex items-center gap-2 bg-[#FDB927] text-white px-4 py-2 rounded-sm text-[11px] md:text-xs font-bold uppercase tracking-widest hover:bg-[#E5A623] transition-colors"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            Join
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-white"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-[#1A1A1A]">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium uppercase tracking-wider text-white/80 hover:text-[#FDB927] border-b border-white/10"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/support"
              onClick={() => setOpen(false)}
              className="py-3 text-sm font-medium uppercase tracking-wider text-white/80 hover:text-[#FDB927]"
            >
              Support Tha Fix
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}