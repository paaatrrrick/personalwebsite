export function relatedPosts(current, all, limit = 3) {
  if (!current) return [];
  const currentTags = new Set(current.tags || []);
  return (all || [])
    .filter((p) => p.id !== current.id)
    .map((p) => {
      const shared = (p.tags || []).filter((t) => currentTags.has(t)).length;
      return { post: p, score: shared };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((r) => r.post);
}
