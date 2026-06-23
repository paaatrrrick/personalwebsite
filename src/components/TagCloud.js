import React from "react";
import { projects } from "../constants/projects";
import "./tagCloud.css";

export default function TagCloud({ onSelect }) {
  const counts = {};
  (projects || []).forEach((p) => (p.tags || []).forEach((t) => (counts[t] = (counts[t] || 0) + 1)));
  const entries = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  const max = entries.length ? entries[0][1] : 1;

  return (
    <div className="tag-cloud">
      {entries.map(([tag, count]) => (
        <button
          key={tag}
          type="button"
          style={{ fontSize: `${0.85 + (count / max) * 0.9}rem` }}
          onClick={() => onSelect && onSelect(tag)}
        >
          {tag}
          <span className="tag-cloud-count">{count}</span>
        </button>
      ))}
    </div>
  );
}
