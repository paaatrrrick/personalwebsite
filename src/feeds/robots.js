const SITE_URL = "https://paaatrrrick.com";

export function generateRobots() {
  return `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml`;
}
