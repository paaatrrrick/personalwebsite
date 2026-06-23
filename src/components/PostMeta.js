import React from "react";
import ReadingTime from "./ReadingTime";
import ViewCounter from "./ViewCounter";
import "./postMeta.css";

export default function PostMeta({ post }) {
  return (
    <div className="post-meta">
      {post.date && <span className="post-meta-date">{post.date}</span>}
      <ReadingTime content={(post.body || []).join(" ")} />
      <ViewCounter postId={post.id} />
    </div>
  );
}
