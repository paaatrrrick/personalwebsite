import React from "react";
import { useViewHistory } from "../hooks/useViewHistory";
import "./viewSparkline.css";

export default function ViewSparkline({ postId, days = 30, width = 120, height = 28 }) {
  const history = useViewHistory(postId, days);
  if (history.length < 2) return null;

  const max = Math.max(...history.map((p) => p.count), 1);
  const step = width / (history.length - 1);
  const points = history
    .map((p, i) => `${(i * step).toFixed(1)},${(height - (p.count / max) * height).toFixed(1)}`)
    .join(" ");

  return (
    <svg className="view-sparkline" width={width} height={height} aria-label="Views over time">
      <polyline points={points} fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
