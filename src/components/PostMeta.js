import React from "react";
import ReadingTime from "./ReadingTime";
import ViewCounter from "./ViewCounter";
import "./postMeta.css";

export default function PostMeta({
  post,
  showViews = true,
  showDate = true,
  showReadingTime = true,
}) {
  return (
    <div className="post-meta">
      {showDate && post.date && <span className="post-meta-date">{post.date}</span>}
      {showReadingTime && <ReadingTime content={(post.body || []).join(" ")} />}
      {showViews && <ViewCounter postId={post.id} />}
    </div>
  );
}
