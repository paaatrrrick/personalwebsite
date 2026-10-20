import { useEffect, useState } from "react";

export function useReadingProgress(targetRef) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = targetRef?.current ?? document.documentElement;
      const total = el.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY - (el.offsetTop || 0);
      setProgress(total > 0 ? Math.min(1, Math.max(0, scrolled / total)) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [targetRef]);

  return progress;
}
