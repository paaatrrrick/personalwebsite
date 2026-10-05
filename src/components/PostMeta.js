import React from "react";
import ReadingTime from "./ReadingTime";
import ViewCounter from "./ViewCounter";
import "./postMeta.css";

export default function PostMeta({
  post,
  showViews = true,
  showDate = true,
  showReadingTime = true,
  separator = "·",
  className = "",
}) {
  const segments = [
    showDate && post.date && <span className="post-meta-date">{post.date}</span>,
    showReadingTime && <ReadingTime content={(post.body || []).join(" ")} />,
    showViews && <ViewCounter postId={post.id} />,
  ].filter(Boolean);
  return (
    <div className={["post-meta", className].filter(Boolean).join(" ")}>
      {segments.map((segment, index) => (
        <React.Fragment key={index}>
          {index > 0 && <span className="post-meta-separator">{separator}</span>}
          {segment}
        </React.Fragment>
      ))}
    </div>
  );
}
