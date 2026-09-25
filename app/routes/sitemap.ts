import { post } from "@/database/schema";
import { dbContext } from "@/lib/context";
import { SITE_URL } from "@/lib/site";
import { eq } from "drizzle-orm";
import type { Route } from "./+types/sitemap";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function day(date: Date | null) {
  if (!date) return null;
  return date.toISOString().slice(0, 10);
}

export async function loader({ context }: Route.LoaderArgs) {
  const posts = await context
    .get(dbContext)
    .select({
      slug: post.slug,
      publishedDate: post.publishedDate,
      updatedAt: post.updatedAt,
    })
    .from(post)
    .where(eq(post.status, "published"));

  const newest = posts.reduce<Date | null>((latest, entry) => {
    const date = entry.publishedDate ?? entry.updatedAt;
    if (!latest || date > latest) return date;
    return latest;
  }, null);
  const blogUpdated = day(newest);

  const urls: { loc: string; lastmod?: string }[] = [
    { loc: `${SITE_URL}/` },
    { loc: `${SITE_URL}/resume` },
    {
      loc: `${SITE_URL}/blog`,
      ...(blogUpdated ? { lastmod: blogUpdated } : {}),
    },
    ...posts.map((entry) => {
      const lastmod = day(entry.publishedDate ?? entry.updatedAt);
      return {
        loc: `${SITE_URL}/blog/${encodeURIComponent(entry.slug)}`,
        ...(lastmod ? { lastmod } : {}),
      };
    }),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((url) => {
    const lastmod = url.lastmod
      ? `\n    <lastmod>${url.lastmod}</lastmod>`
      : "";
    return `  <url>\n    <loc>${escapeXml(url.loc)}</loc>${lastmod}\n  </url>`;
  })
  .join("\n")}
</urlset>
`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
