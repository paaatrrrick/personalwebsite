import React, { useEffect, useState } from "react";
import { NEWSLETTER_API_BASE } from "../../constants/newsletter";

export default function ConfirmSubscription({ token }) {
  const [state, setState] = useState("confirming");

  useEffect(() => {
    if (!token) {
      setState("missing");
      return;
    }
    fetch(`${NEWSLETTER_API_BASE}/confirm?token=${encodeURIComponent(token)}`)
      .then((res) => setState(res.ok ? "confirmed" : "failed"))
      .catch(() => setState("failed"));
  }, [token]);

  if (state === "confirming") return <p>Confirming your subscription...</p>;
  if (state === "confirmed") return <p>You're in! You'll get the next issue.</p>;
  if (state === "missing") return <p>This confirmation link is missing its token.</p>;
  return <p>We couldn't confirm that link. Try subscribing again.</p>;
}
