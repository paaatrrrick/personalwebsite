import { useEffect } from "react";

const ROUTES = {
  h: "/",
  b: "/blog",
  t: "/timeline",
  n: "/now",
  r: "/reading-list",
};

export default function KeyboardShortcuts({ navigate }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const tag = (e.target.tagName || "").toLowerCase();
      if (tag === "input" || tag === "textarea") return;
      const dest = ROUTES[e.key.toLowerCase()];
      if (dest) navigate(dest);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigate]);

  return null;
}
