import { useCallback, useEffect, useState } from "react";

const COMMENTS_API = "https://api.paaatrrrick.com/comments";

export function useComments(postId) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    fetch(`${COMMENTS_API}/${postId}`)
      .then((res) => (res.ok ? res.json() : { comments: [] }))
      .then((data) => {
        if (active) setComments(data.comments || []);
      })
      .catch(() => {})
      .finally(() => active && setLoading(false));
    return () => {
      active = false;
    };
  }, [postId]);

  const addComment = useCallback(
    async (body) => {
      const res = await fetch(`${COMMENTS_API}/${postId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ body }),
      });
      if (!res.ok) throw new Error("Failed to post comment");
      const created = await res.json();
      setComments((prev) => [...prev, created]);
      return created;
    },
    [postId]
  );

  return { comments, loading, addComment };
}
