import { articles } from "../constants/articles";
import { projects } from "../constants/projects";

const SITE_URL = "https://paaatrrrick.com";
const STATIC_PATHS = ["/", "/blog", "/timeline", "/uses", "/now", "/reading-list", "/talks"];

function urlEntry({ path, lastmod, changefreq = "weekly", priority = 0.5 }) {
  const mod = lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : "";
  return `  <url>
    <loc>${SITE_URL}${path}</loc>${mod}
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

export function generateSitemap() {
  const entries = STATIC_PATHS.map((path) =>
    urlEntry({ path, changefreq: path === "/" ? "daily" : "weekly", priority: path === "/" ? 1.0 : 0.6 })
  );

  (articles || []).forEach((a) =>
    entries.push(urlEntry({ path: `/blog/${a.id}`, lastmod: a.date, changefreq: "monthly", priority: 0.7 }))
  );
  (projects || []).forEach(
    (p) => p.link && p.link.startsWith("/") && entries.push(urlEntry({ path: p.link, priority: 0.4 }))
  );

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join("\n")}
</urlset>`;
}
