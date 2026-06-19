import { articles } from "../constants/articles";

const SITE_URL = "https://paaatrrrick.com";

export function generateJsonFeed(posts = articles) {
  return {
    version: "https://jsonfeed.org/version/1.1",
    title: "Patrick's Blog",
    home_page_url: `${SITE_URL}/blog`,
    feed_url: `${SITE_URL}/feed.json`,
    items: (posts || []).map((post) => ({
      id: `${SITE_URL}/blog/${post.id}`,
      url: `${SITE_URL}/blog/${post.id}`,
      title: post.title,
      summary: post.summary,
    })),
  };
}
