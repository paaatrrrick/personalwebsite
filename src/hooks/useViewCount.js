import { useEffect, useState } from "react";

const VIEWS_API = "https://api.paaatrrrick.com/views";

export function useViewCount(postId, { increment = true } = {}) {
  const [count, setCount] = useState(null);

  useEffect(() => {
    let active = true;
    const method = increment ? "POST" : "GET";
    fetch(`${VIEWS_API}/${postId}`, { method })
      .then((res) => (res.ok ? res.json() : { count: null }))
      .then((data) => {
        if (active) setCount(typeof data.count === "number" ? data.count : null);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, [postId, increment]);

  return count;
}
