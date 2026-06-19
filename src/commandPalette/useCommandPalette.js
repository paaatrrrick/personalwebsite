import { useCallback, useEffect, useMemo, useState } from "react";
import { commands as defaultCommands } from "../constants/commands";
import { rankCommands } from "./fuzzy";

export function useCommandPalette(list = defaultCommands) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const results = useMemo(() => rankCommands(query, list), [query, list]);

  const openPalette = useCallback(() => {
    setQuery("");
    setActiveIndex(0);
    setOpen(true);
  }, []);
  const closePalette = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  const move = useCallback(
    (delta) => {
      setActiveIndex((prev) => {
        if (results.length === 0) return 0;
        return (prev + delta + results.length) % results.length;
      });
    },
    [results.length]
  );

  return { open, query, setQuery, results, activeIndex, setActiveIndex, move, openPalette, closePalette };
}
