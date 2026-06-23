export const CADENCES = [
  { id: "daily", label: "Daily", cron: "0 9 * * *", description: "Every morning at 9am." },
  { id: "weekly", label: "Weekly", cron: "0 9 * * 1", description: "Monday mornings." },
  { id: "monthly", label: "Monthly", cron: "0 9 1 * *", description: "First of the month." },
];

export const DEFAULT_CADENCE = "weekly";

export function getCadence(id) {
  return CADENCES.find((c) => c.id === id) || CADENCES.find((c) => c.id === DEFAULT_CADENCE);
}
