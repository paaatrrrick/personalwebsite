import React, { useMemo, useState } from "react";
import bookmarks from "../constants/bookmarks";
import "./bookmarkSearch.css";

export default function BookmarkSearch() {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return bookmarks;
    return bookmarks.filter((b) =>
      `${b.title} ${b.note} ${b.tag}`.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="bookmark-search">
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search bookmarks..."
        aria-label="Search bookmarks"
      />
      <ul>
        {results.map((b) => (
          <li key={b.url}>
            <a href={b.url} target="_blank" rel="noreferrer">{b.title}</a>
            <span className="bookmark-search-tag">{b.tag}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
