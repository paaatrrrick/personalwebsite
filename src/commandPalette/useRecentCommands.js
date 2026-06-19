import { useCallback, useState } from "react";

const STORAGE_KEY = "cmdk:recents";
const MAX_RECENTS = 5;

function load() {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    return [];
  }
}

export function useRecentCommands() {
  const [recentIds, setRecentIds] = useState(load);

  const record = useCallback((commandId) => {
    setRecentIds((prev) => {
      const next = [commandId, ...prev.filter((id) => id !== commandId)].slice(0, MAX_RECENTS);
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch (err) {
        /* storage unavailable */
      }
      return next;
    });
  }, []);

  const resolveRecents = useCallback(
    (list) => recentIds.map((id) => list.find((cmd) => cmd.id === id)).filter(Boolean),
    [recentIds]
  );

  return { recentIds, record, resolveRecents };
}
