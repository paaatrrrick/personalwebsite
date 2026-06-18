const SITE_URL = "https://paaatrrrick.com";

export const FEED_LINKS = [
  { rel: "alternate", type: "application/rss+xml", title: "RSS", href: `${SITE_URL}/feed.xml` },
  { rel: "alternate", type: "application/atom+xml", title: "Atom", href: `${SITE_URL}/atom.xml` },
  { rel: "alternate", type: "application/feed+json", title: "JSON Feed", href: `${SITE_URL}/feed.json` },
];

export function renderFeedLinkTags() {
  return FEED_LINKS.map(
    (l) => `<link rel="${l.rel}" type="${l.type}" title="${l.title}" href="${l.href}" />`
  ).join("\n");
}
