import React, { useEffect, useState } from "react";
import "./comments.css";

export default function Comments({ postId, fetchComments, postComment }) {
  const [comments, setComments] = useState([]);
  const [draft, setDraft] = useState("");

  useEffect(() => {
    let active = true;
    fetchComments(postId).then((c) => active && setComments(c));
    return () => { active = false; };
  }, [postId, fetchComments]);

  const submit = async (e) => {
    e.preventDefault();
    if (!draft.trim()) return;
    const created = await postComment(postId, draft.trim());
    setComments((prev) => [...prev, created]);
    setDraft("");
  };

  return (
    <section className="comments">
      <h3>{comments.length} comments</h3>
      <ul>
        {comments.map((c) => (
          <li key={c.id}><strong>{c.author}</strong>: {c.body}</li>
        ))}
      </ul>
      <form onSubmit={submit}>
        <textarea value={draft} onChange={(e) => setDraft(e.target.value)} placeholder="Add a comment" />
        <button type="submit">Post</button>
      </form>
    </section>
  );
}
