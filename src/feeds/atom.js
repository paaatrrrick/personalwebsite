import { articles } from "../constants/articles";

const SITE_URL = "https://paaatrrrick.com";

function escapeXml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function generateAtomFeed(posts = articles) {
  const entries = (posts || [])
    .map(
      (post) => `  <entry>
    <title>${escapeXml(post.title)}</title>
    <link href="${SITE_URL}/blog/${post.id}" />
    <id>${SITE_URL}/blog/${post.id}</id>
    <summary>${escapeXml(post.summary)}</summary>
  </entry>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>Patrick's Blog</title>
  <link href="${SITE_URL}/blog" />
  <id>${SITE_URL}/blog</id>
${entries}
</feed>`;
}
