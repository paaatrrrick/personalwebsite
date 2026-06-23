import { useCallback, useEffect, useMemo, useState } from "react";
import { projects } from "../constants/projects";

export function allTags(list = projects) {
  const set = new Set();
  (list || []).forEach((p) => (p.tags || []).forEach((t) => set.add(t)));
  return [...set].sort();
}

function tagFromUrl() {
  if (typeof window === "undefined") return null;
  return new URLSearchParams(window.location.search).get("tag");
}

export function useProjectFilter(list = projects) {
  const [activeTag, setActiveTagState] = useState(tagFromUrl);

  const setActiveTag = (tag) => {
    setActiveTagState(tag);
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (tag) params.set("tag", tag);
      else params.delete("tag");
      const query = params.toString();
      window.history.replaceState(null, "", query ? `?${query}` : window.location.pathname);
    }
  };

  useEffect(() => {
    const onPopState = () => setActiveTagState(tagFromUrl());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const filtered = useMemo(() => {
    if (!activeTag) return list;
    return (list || []).filter((p) => (p.tags || []).includes(activeTag));
  }, [activeTag, list]);

  return { activeTag, setActiveTag, filtered, tags: allTags(list) };
}
