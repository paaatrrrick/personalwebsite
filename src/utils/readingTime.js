const WORDS_PER_MINUTE = 200;

export function estimateReadingTime(text) {
  const words = String(text || "").trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / WORDS_PER_MINUTE));
  return { words, minutes, label: `${minutes} min read` };
}
