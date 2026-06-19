import { articles } from "../constants/articles";

const SITE_URL = "https://paaatrrrick.com";

function escapeXml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function generateCategoryFeed(tag, posts = articles) {
  const filtered = (posts || []).filter((p) => (p.tags || []).includes(tag));
  const items = filtered
    .map(
      (post) => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${SITE_URL}/blog/${post.id}</link>
      <guid>${SITE_URL}/blog/${post.id}</guid>
      <description>${escapeXml(post.summary)}</description>
    </item>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Patrick's Blog — ${escapeXml(tag)}</title>
    <link>${SITE_URL}/blog/tag/${encodeURIComponent(tag)}</link>
    <description>Posts tagged ${escapeXml(tag)}.</description>
${items}
  </channel>
</rss>`;
}
