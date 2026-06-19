import { useCallback, useState } from "react";
import { NEWSLETTER_API_BASE } from "../../constants/newsletter";

export function usePreferences(email) {
  const [pending, setPending] = useState(false);

  const savePreferences = useCallback(
    async (lists) => {
      setPending(true);
      try {
        const res = await fetch(`${NEWSLETTER_API_BASE}/preferences`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, lists }),
        });
        if (!res.ok) throw new Error("Failed to save preferences");
        return await res.json();
      } finally {
        setPending(false);
      }
    },
    [email]
  );

  return { savePreferences, pending };
}
