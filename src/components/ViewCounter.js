import React from "react";
import { useViewCount } from "../hooks/useViewCount";

export default function ViewCounter({ postId }) {
  const count = useViewCount(postId);
  if (count === null) return null;
  return <span className="view-counter">{count.toLocaleString()} views</span>;
}
