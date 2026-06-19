import React from "react";
import { useBlogSearch } from "../hooks/useBlogSearch";
import "./blogSearch.css";

export default function BlogSearch({ onResults }) {
  const { query, setQuery, results } = useBlogSearch();

  React.useEffect(() => {
    if (onResults) onResults(results);
  }, [results, onResults]);

  return (
    <div className="blog-search">
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search posts..."
        aria-label="Search blog posts"
      />
      <span className="blog-search-count">{results.length} results</span>
    </div>
  );
}
