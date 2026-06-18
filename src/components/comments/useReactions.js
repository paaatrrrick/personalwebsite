import { useCallback, useEffect, useState } from "react";

const REACTIONS_API = "https://api.paaatrrrick.com/reactions";

export function useReactions(targetId) {
  const [counts, setCounts] = useState({});

  useEffect(() => {
    let active = true;
    fetch(`${REACTIONS_API}/${targetId}`)
      .then((res) => (res.ok ? res.json() : { counts: {} }))
      .then((data) => {
        if (active) setCounts(data.counts || {});
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, [targetId]);

  const react = useCallback(
    async (emoji) => {
      setCounts((prev) => ({ ...prev, [emoji]: (prev[emoji] || 0) + 1 }));
      const res = await fetch(`${REACTIONS_API}/${targetId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ emoji }),
      });
      if (!res.ok) {
        setCounts((prev) => ({ ...prev, [emoji]: Math.max(0, (prev[emoji] || 1) - 1) }));
        throw new Error("React failed");
      }
      return res.json();
    },
    [targetId]
  );

  return { counts, react };
}
