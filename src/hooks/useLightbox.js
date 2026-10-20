import { useCallback, useEffect, useState } from "react";

export function useLightbox() {
  const [src, setSrc] = useState(null);

  const open = useCallback((imageSrc) => setSrc(imageSrc), []);
  const close = useCallback(() => setSrc(null), []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setSrc(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return { src, open, close, isOpen: src !== null };
}
