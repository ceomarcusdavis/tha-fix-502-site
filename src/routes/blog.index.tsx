import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Search, PenLine } from "lucide-react";
import { blogPosts } from "@/data/content";
import { BlogCard } from "@/components/blog-card";
import { PageHero } from "@/components/page-hero";
import { useMembershipAccess } from "@/hooks/use-membership-access";
import { MEMBERSHIP_ENTITLEMENTS } from "@/lib/membership-access";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Tha Fix" },
      { name: "description", content: "Notes from the network. Long-form writing, episode breakdowns, and community essays." },
      { property: "og:title", content: "Blog — Tha Fix" },
      { property: "og:description", content: "Notes from the network." },
    ],
  }),
  component: BlogPage,
});

const categories = ["All", "Community", "Sports", "Business", "Politics", "Faith", "Culture"];
const sorts = ["Latest", "Popular"] as const;

function BlogPage() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("All");
  const [sort, setSort] = useState<(typeof sorts)[number]>("Latest");
  const access = useMembershipAccess();
  const canPublish = access.has(MEMBERSHIP_ENTITLEMENTS.blogPublish);

  const filtered = useMemo(() => {
    let list = blogPosts.filter((p) =>
      (cat === "All" || p.category === cat) &&
      (query === "" ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.author.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(query.toLowerCase()))
    );
    if (sort === "Popular") list = list.slice().sort((a, b) => parseFloat(b.views) - parseFloat(a.views));
    return list;
  }, [query, cat, sort]);

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Notes from the network."
        description="Long-form perspectives and conversations beyond the mic — with members joining the discussion in the comments and eligible members publishing content of their own."
      />

      {!access.isLoading && (
        <section className="border-b border-border bg-surface">
          <div className="max-w-[1600px] mx-auto px-6 lg:px-10 py-6">
            {canPublish ? (
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-start gap-3">
                  <PenLine className="w-5 h-5 text-brand mt-0.5" />
                  <div>
                    <h2 className="font-display text-xl font-bold">Your membership includes blog publishing.</h2>
                    <p className="text-sm text-muted-foreground mt-1">Member authoring and submission tools are being connected to the Tha Fix review workflow before launch.</p>
                  </div>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-brand">Publishing Access Active</span>
              </div>
            ) : access.isSignedIn ? (
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h2 className="font-display text-lg font-bold">Want to publish on Tha Fix?</h2>
                  <p className="text-sm text-muted-foreground mt-1">Blog publishing is included with eligible Network and Founder memberships.</p>
                </div>
                <Link to="/memberships" className="text-brand text-xs font-bold uppercase tracking-widest border-b border-brand self-start md:self-auto">Compare Memberships →</Link>
              </div>
            ) : (
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h2 className="font-display text-lg font-bold">Members can join the conversation.</h2>
                  <p className="text-sm text-muted-foreground mt-1">Paid members can comment, and eligible Network and Founder members can publish content.</p>
                </div>
                <Link to="/memberships" className="text-brand text-xs font-bold uppercase tracking-widest border-b border-brand self-start md:self-auto">Explore Memberships →</Link>
              </div>
            )}
          </div>
        </section>
      )}

      <section className="py-10 border-b border-border">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10 flex flex-col lg:flex-row lg:items-center gap-5">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search authors, titles, topics..."
              className="w-full bg-surface border border-border pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-brand"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider border transition-colors ${
                  cat === c ? "bg-brand text-brand-foreground border-brand" : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="lg:ml-auto flex gap-2">
            {sorts.map((s) => (
              <button
                key={s}
                onClick={() => setSort(s)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider border transition-colors ${
                  sort === s ? "bg-foreground text-background border-foreground" : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="py-14">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          {filtered.length === 0 ? (
            <p className="text-muted-foreground text-center py-20">No posts match your search.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
              {filtered.map((post) => (
                <div key={post.slug} className="w-full">
                  <BlogCard post={post} size="lg" />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
