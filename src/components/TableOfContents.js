import React from "react";
import "./tableOfContents.css";

function slugify(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function TableOfContents({ headings = [] }) {
  if (headings.length === 0) return null;
  return (
    <nav className="toc" aria-label="Table of contents">
      <p className="toc-title">On this page</p>
      <ul>
        {headings.map((h) => (
          <li key={slugify(h.text)} className={`toc-level-${h.level || 2}`}>
            <a href={`#${slugify(h.text)}`}>{h.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
