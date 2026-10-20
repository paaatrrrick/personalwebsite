const RECENCY_WEIGHT = 0.25;

export function relatedPosts(current, all, limit = 3) {
  if (!current) return [];
  const currentTags = new Set(current.tags || []);
  const now = Date.now();
  return (all || [])
    .filter((p) => p.id !== current.id)
    .map((p) => {
      const shared = (p.tags || []).filter((t) => currentTags.has(t)).length;
      const ageDays = p.date ? (now - new Date(p.date).getTime()) / 86_400_000 : 365;
      const recency = Math.max(0, 1 - ageDays / 365) * RECENCY_WEIGHT;
      return { post: p, score: shared + recency };
    })
    .filter((r) => r.score >= 1)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((r) => r.post);
}
