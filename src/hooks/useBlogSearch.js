import { useMemo, useState } from "react";
import { articles } from "../constants/articles";

export function useBlogSearch(posts = articles) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return posts;
    return (posts || []).filter((post) => {
      const haystack = `${post.title} ${post.summary} ${(post.tags || []).join(" ")}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [query, posts]);

  return { query, setQuery, results };
}
