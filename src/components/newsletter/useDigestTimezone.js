import { useCallback, useState } from "react";
import { NEWSLETTER_API_BASE } from "../../constants/newsletter";

function guessTimezone() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
  } catch (err) {
    return "UTC";
  }
}

export function useDigestTimezone(email) {
  const [timezone, setTimezone] = useState(guessTimezone);
  const [pending, setPending] = useState(false);

  const save = useCallback(
    async (tz) => {
      setTimezone(tz);
      setPending(true);
      try {
        const res = await fetch(`${NEWSLETTER_API_BASE}/digest/timezone`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, timezone: tz }),
        });
        if (!res.ok) throw new Error("Failed to save timezone");
        return await res.json();
      } finally {
        setPending(false);
      }
    },
    [email]
  );

  return { timezone, save, pending };
}
