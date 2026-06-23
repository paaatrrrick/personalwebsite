import React from "react";
import { useDigestTimezone } from "./useDigestTimezone";

const COMMON_ZONES = ["America/Los_Angeles", "America/New_York", "Europe/London", "Europe/Berlin", "Asia/Tokyo", "UTC"];

export default function TimezonePicker({ email }) {
  const { timezone, save, pending } = useDigestTimezone(email);
  return (
    <label className="timezone-picker">
      Digest time zone
      <select value={timezone} disabled={pending} onChange={(e) => void save(e.target.value)}>
        {COMMON_ZONES.map((zone) => (
          <option key={zone} value={zone}>
            {zone.replace(/_/g, " ")}
          </option>
        ))}
      </select>
    </label>
  );
}
