import { useCallback, useState } from "react";
import { NEWSLETTER_API_BASE } from "../../constants/newsletter";

export function useUnsubscribe() {
  const [pending, setPending] = useState(false);

  const unsubscribe = useCallback(async (email, listId = "weekly") => {
    setPending(true);
    try {
      const res = await fetch(`${NEWSLETTER_API_BASE}/unsubscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, list: listId }),
      });
      if (!res.ok) throw new Error("Unsubscribe failed");
      return await res.json();
    } finally {
      setPending(false);
    }
  }, []);

  return { unsubscribe, pending };
}
