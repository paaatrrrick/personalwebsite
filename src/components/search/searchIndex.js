import { projects } from "../../constants/projects";
import { articles } from "../../constants/articles";

function tokenize(text) {
  return String(text || "").toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
}

export function buildSearchIndex() {
  const docs = [];
  (projects || []).forEach((p) =>
    docs.push({ type: "project", title: p.title, url: p.link, tokens: tokenize(`${p.title} ${p.description}`) })
  );
  (articles || []).forEach((a) =>
    docs.push({ type: "article", title: a.title, url: `/blog/${a.id}`, tokens: tokenize(`${a.title} ${a.summary}`) })
  );
  return docs;
}

export function searchIndex(index, query) {
  const terms = tokenize(query);
  if (terms.length === 0) return [];
  return index
    .map((doc) => ({ doc, score: terms.filter((t) => doc.tokens.includes(t)).length }))
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((r) => r.doc);
}
