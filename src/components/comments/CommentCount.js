import React from "react";
import { useComments } from "./useComments";

export default function CommentCount({ postId }) {
  const { comments, loading } = useComments(postId);
  if (loading) return null;
  const n = comments.length;
  return (
    <span className="comment-count">
      {n === 0 ? "No comments" : `${n} comment${n === 1 ? "" : "s"}`}
    </span>
  );
}
