import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { getPersonPlacements, getWatchFeed } from "@/lib/public-content";

const BASE_URL = "";

const staticPaths = [
  "/",
  "/watch",
  "/hosts",
  "/guests",
  "/memberships",
  "/community",
  "/events",
  "/blog",
  "/shop",
  "/sponsors",
  "/about",
  "/contact",
  "/support",
  "/privacy",
  "/terms",
  "/membership-terms",
  "/guidelines",
  "/shipping-returns",
  "/support-terms",
  "/accessibility",
  "/event-terms",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        let dynamicPaths: string[] = [];

        try {
          const [content, people] = await Promise.all([
            getWatchFeed({ limit: 100 }),
            getPersonPlacements(["hosts_primary", "guests_featured"]),
          ]);

          dynamicPaths = [
            ...content.map((item) => `/watch/${item.slug}`),
            ...people.map((person) =>
              person.slot_code === "hosts_primary"
                ? `/hosts/${person.slug}`
                : `/guests/${person.slug}`,
            ),
          ];
        } catch (error) {
          console.error("Dynamic sitemap routes failed to load", error);
        }

        const paths = [...new Set([...staticPaths, ...dynamicPaths])];
        const urls = paths
          .map((path) => `  <url><loc>${BASE_URL}${path}</loc></url>`)
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
