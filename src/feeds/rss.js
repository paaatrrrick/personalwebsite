import { articles } from "../constants/articles";

const SITE_URL = "https://paaatrrrick.com";

function escapeXml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function generateRssFeed(posts = articles) {
  const items = (posts || [])
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
    <title>Patrick's Blog</title>
    <link>${SITE_URL}/blog</link>
    <description>Essays on building software and side projects.</description>
${items}
  </channel>
</rss>`;
}
