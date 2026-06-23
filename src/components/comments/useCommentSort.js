import { useMemo, useState } from "react";

export const COMMENT_SORTS = {
  newest: (a, b) => new Date(b.date) - new Date(a.date),
  oldest: (a, b) => new Date(a.date) - new Date(b.date),
  top: (a, b) => totalReactions(b) - totalReactions(a),
};

function totalReactions(comment) {
  return Object.values(comment.reactions || {}).reduce((sum, n) => sum + (n || 0), 0);
}

export function useCommentSort(comments) {
  const [sort, setSort] = useState("newest");
  const sorted = useMemo(() => [...(comments || [])].sort(COMMENT_SORTS[sort]), [comments, sort]);
  return { sort, setSort, sorted };
}
