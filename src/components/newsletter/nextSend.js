import { getCadence } from "../../constants/cadences";

export function nextSendLabel(cadenceId, now = new Date()) {
  const cadence = getCadence(cadenceId);
  const next = new Date(now);
  next.setHours(9, 0, 0, 0);
  if (cadence.id === "daily") {
    if (next <= now) next.setDate(next.getDate() + 1);
  } else if (cadence.id === "weekly") {
    const daysUntilMonday = (8 - next.getDay()) % 7 || 7;
    next.setDate(next.getDate() + daysUntilMonday);
  } else {
    next.setMonth(next.getMonth() + 1, 1);
  }
  return next.toLocaleDateString(undefined, { weekday: "long", month: "short", day: "numeric" });
}
