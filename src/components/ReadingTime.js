import React from "react";
import { estimateReadingTime } from "../utils/readingTime";

export default function ReadingTime({ content }) {
  const { label } = estimateReadingTime(content);
  return <span className="reading-time">{label}</span>;
}
