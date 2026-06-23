import React, { useEffect, useState } from "react";
import { articles } from "../constants/articles";

const VIEWS_API = "https://api.paaatrrrick.com/views";

export default function PopularPosts({ limit = 5 }) {
  const [ranked, setRanked] = useState([]);

  useEffect(() => {
    let active = true;
    fetch(`${VIEWS_API}/popular?limit=${limit}`)
      .then((res) => (res.ok ? res.json() : { posts: [] }))
      .then((data) => {
        if (!active) return;
        const byId = new Map((articles || []).map((a) => [a.id, a]));
        setRanked((data.posts || []).map((p) => ({ ...byId.get(p.id), views: p.count })).filter((p) => p.id));
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, [limit]);

  if (ranked.length === 0) return null;
  return (
    <aside className="popular-posts">
      <h3>Most read</h3>
      <ol>
        {ranked.map((post) => (
          <li key={post.id}>
            <a href={`/blog/${post.id}`}>{post.title}</a>
            <span className="popular-posts-views">{post.views.toLocaleString()}</span>
          </li>
        ))}
      </ol>
    </aside>
  );
}
