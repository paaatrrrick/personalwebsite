import React from "react";

export default function ReactionSummary({ counts = {} }) {
  const total = Object.values(counts).reduce((sum, n) => sum + (n || 0), 0);
  const top = Object.entries(counts)
    .filter(([, n]) => n > 0)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([emoji]) => emoji);

  if (total === 0) return null;
  return (
    <div className="reaction-summary">
      <span className="reaction-summary-emoji">{top.join(" ")}</span>
      <span className="reaction-summary-count">{total}</span>
    </div>
  );
}
