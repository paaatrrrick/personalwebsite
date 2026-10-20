import React from "react";
import { useViewCount } from "../hooks/useViewCount";

const MILESTONES = [
  { at: 1000, label: "🔥 1k+ reads" },
  { at: 5000, label: "🚀 5k+ reads" },
  { at: 10000, label: "🏆 10k+ reads" },
];

export default function ViewMilestone({ postId }) {
  const count = useViewCount(postId, { increment: false });
  if (count === null) return null;
  const reached = [...MILESTONES].reverse().find((m) => count >= m.at);
  if (!reached) return null;
  return <span className="view-milestone">{reached.label}</span>;
}
