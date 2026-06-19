import React from "react";
import Comment from "./Comment";

export default function CommentList({ comments = [], onReact }) {
  if (comments.length === 0) {
    return <p className="comment-empty">No comments yet. Be the first to comment.</p>;
  }
  return (
    <div className="comment-list">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} onReact={onReact} />
      ))}
    </div>
  );
}
