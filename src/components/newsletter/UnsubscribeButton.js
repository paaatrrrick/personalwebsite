import React, { useState } from "react";
import { useUnsubscribe } from "./useUnsubscribe";

export default function UnsubscribeButton({ email, listId = "weekly" }) {
  const { unsubscribe, pending } = useUnsubscribe();
  const [done, setDone] = useState(false);

  const handle = async () => {
    try {
      await unsubscribe(email, listId);
      setDone(true);
    } catch (err) {
      /* surfaced by the caller's toast */
    }
  };

  if (done) return <p className="subscribe-hint">You've been unsubscribed.</p>;
  return (
    <button type="button" className="unsubscribe-button" onClick={handle} disabled={pending}>
      {pending ? "Unsubscribing..." : "Unsubscribe"}
    </button>
  );
}
