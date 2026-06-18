import React, { useState } from "react";

export default function CommentForm({ onSubmit }) {
  const [body, setBody] = useState("");
  const [status, setStatus] = useState("idle");

  const submit = async (e) => {
    e.preventDefault();
    if (!body.trim()) return;
    setStatus("loading");
    try {
      await onSubmit(body.trim());
      setBody("");
      setStatus("idle");
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <form className="comment-form" onSubmit={submit}>
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Add a comment…"
      />
      <button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Posting…" : "Post comment"}
      </button>
      {status === "error" && <p className="comment-error">Could not post your comment.</p>}
    </form>
  );
}
