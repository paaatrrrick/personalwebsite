import React, { useEffect, useState } from "react";
import { articles } from "../constants/articles";

const VIEWS_API = "https://api.paaatrrrick.com/views";

export default function TrendingPosts({ window = "7d", limit = 5 }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let active = true;
    fetch(`${VIEWS_API}/trending?window=${window}&limit=${limit}`)
      .then((res) => (res.ok ? res.json() : { posts: [] }))
      .then((data) => {
        if (!active) return;
        const byId = new Map((articles || []).map((a) => [a.id, a]));
        setPosts((data.posts || []).map((p) => ({ ...byId.get(p.id), recentViews: p.count })).filter((p) => p.id));
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, [window, limit]);

  if (posts.length === 0) return null;
  return (
    <aside className="trending-posts">
      <h3>Trending this week</h3>
      <ol>
        {posts.map((post) => (
          <li key={post.id}>
            <a href={`/blog/${post.id}`}>{post.title}</a>
            <span className="trending-posts-views">{post.recentViews.toLocaleString()}</span>
          </li>
        ))}
      </ol>
    </aside>
  );
}
