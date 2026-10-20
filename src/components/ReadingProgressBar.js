import React from "react";
import { useReadingProgress } from "../hooks/useReadingProgress";
import "./readingProgressBar.css";

export default function ReadingProgressBar({ targetRef }) {
  const progress = useReadingProgress(targetRef);
  return (
    <div className="reading-progress" aria-hidden="true">
      <div className="reading-progress-bar" style={{ transform: `scaleX(${progress})` }} />
    </div>
  );
}
