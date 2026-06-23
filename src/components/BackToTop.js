import React from "react";
import { useScrollProgress } from "../hooks/useScrollProgress";
import "./backToTop.css";

export default function BackToTop({ threshold = 0.15 }) {
  const progress = useScrollProgress();
  if (progress < threshold) return null;
  return (
    <button
      type="button"
      className="back-to-top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll back to top"
    >
      ↑
    </button>
  );
}
