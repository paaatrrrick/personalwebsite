import React from "react";
import { useDigestPause } from "./useDigestPause";

export default function DigestPauseToggle({ email }) {
  const { paused, setPaused, pending } = useDigestPause(email);
  return (
    <button type="button" disabled={pending} onClick={() => void setPaused(!paused)}>
      {paused ? "Resume digest" : "Pause digest"}
    </button>
  );
}
