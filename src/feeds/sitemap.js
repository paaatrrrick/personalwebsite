import { articles } from "../constants/articles";
import { projects } from "../constants/projects";

const SITE_URL = "https://paaatrrrick.com";
const STATIC_PATHS = ["/", "/blog", "/timeline", "/uses", "/now", "/reading-list", "/talks"];

export function generateSitemap() {
  const urls = [...STATIC_PATHS];
  (articles || []).forEach((a) => urls.push(`/blog/${a.id}`));
  (projects || []).forEach((p) => p.link && p.link.startsWith("/") && urls.push(p.link));

  const body = urls
    .map((path) => `  <url><loc>${SITE_URL}${path}</loc></url>`)
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>`;
}
