import React from "react";
import Reactions from "./Reactions";

export default function Comment({ comment, onReact }) {
  return (
    <article className="comment">
      <header className="comment-meta">
        <strong>{comment.author}</strong>
        <time>{comment.date}</time>
      </header>
      <p>{comment.body}</p>
      <Reactions targetId={comment.id} initialCounts={comment.reactions} onReact={onReact} />
    </article>
  );
}
