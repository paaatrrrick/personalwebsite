import { useMemo, useState } from "react";
import { projects } from "../constants/projects";

export function allTags(list = projects) {
  const set = new Set();
  (list || []).forEach((p) => (p.tags || []).forEach((t) => set.add(t)));
  return [...set].sort();
}

export function useProjectFilter(list = projects) {
  const [activeTag, setActiveTag] = useState(null);

  const filtered = useMemo(() => {
    if (!activeTag) return list;
    return (list || []).filter((p) => (p.tags || []).includes(activeTag));
  }, [activeTag, list]);

  return { activeTag, setActiveTag, filtered, tags: allTags(list) };
}
