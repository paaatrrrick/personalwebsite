import { generateRssFeed } from "./rss";
import { generateAtomFeed } from "./atom";
import { generateJsonFeed } from "./jsonFeed";

// Builds every supported feed format in one pass for the static build step.
export function buildAllFeeds(posts) {
  return {
    "feed.xml": generateRssFeed(posts),
    "atom.xml": generateAtomFeed(posts),
    "feed.json": JSON.stringify(generateJsonFeed(posts), null, 2),
  };
}

export const FEED_FORMATS = ["feed.xml", "atom.xml", "feed.json"];
