import { useCallback, useState } from "react";
import { NEWSLETTER_API_BASE } from "../../constants/newsletter";

export function useNewsletter(listId = "weekly") {
  const [pending, setPending] = useState(false);

  const subscribe = useCallback(
    async (email) => {
      setPending(true);
      try {
        const res = await fetch(`${NEWSLETTER_API_BASE}/subscribe`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, list: listId }),
        });
        if (!res.ok) throw new Error("Subscribe failed");
        return await res.json();
      } finally {
        setPending(false);
      }
    },
    [listId]
  );

  return { subscribe, pending };
}
