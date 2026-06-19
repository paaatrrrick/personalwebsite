// Lightweight subsequence fuzzy matcher with simple scoring.
export function fuzzyScore(query, text) {
  const q = query.toLowerCase();
  const t = text.toLowerCase();
  if (!q) return 1;
  let qi = 0;
  let score = 0;
  let streak = 0;
  for (let ti = 0; ti < t.length && qi < q.length; ti += 1) {
    if (t[ti] === q[qi]) {
      streak += 1;
      score += 1 + streak;
      qi += 1;
    } else {
      streak = 0;
    }
  }
  return qi === q.length ? score : 0;
}

export function rankCommands(query, list) {
  if (!query.trim()) return list;
  return list
    .map((cmd) => {
      const haystack = [cmd.label, ...(cmd.keywords || [])].join(" ");
      return { cmd, score: fuzzyScore(query, haystack) };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((r) => r.cmd);
}
