import { useCallback, useState } from "react";
import { NEWSLETTER_API_BASE } from "../../constants/newsletter";
import { DEFAULT_CADENCE } from "../../constants/cadences";

export function useDigestPreference(email) {
  const [cadence, setCadence] = useState(DEFAULT_CADENCE);
  const [pending, setPending] = useState(false);

  const save = useCallback(
    async (nextCadence) => {
      setCadence(nextCadence);
      setPending(true);
      try {
        const res = await fetch(`${NEWSLETTER_API_BASE}/digest`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, cadence: nextCadence }),
        });
        if (!res.ok) throw new Error("Failed to save digest cadence");
        return await res.json();
      } finally {
        setPending(false);
      }
    },
    [email]
  );

  return { cadence, save, pending };
}
