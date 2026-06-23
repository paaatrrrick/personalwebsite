import { useCallback, useState } from "react";
import { NEWSLETTER_API_BASE } from "../../constants/newsletter";

export function useDigestPause(email) {
  const [paused, setPaused] = useState(false);
  const [pending, setPending] = useState(false);

  const setPausedState = useCallback(
    async (next) => {
      setPaused(next);
      setPending(true);
      try {
        const res = await fetch(`${NEWSLETTER_API_BASE}/digest/pause`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, paused: next }),
        });
        if (!res.ok) throw new Error("Failed to update digest pause state");
        return await res.json();
      } finally {
        setPending(false);
      }
    },
    [email]
  );

  return { paused, setPaused: setPausedState, pending };
}
