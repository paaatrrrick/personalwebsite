import React from "react";
import { articles } from "../constants/articles";
import { relatedPosts } from "../utils/relatedPosts";
import "./relatedPosts.css";

export default function RelatedPosts({ current, limit = 3 }) {
  const related = relatedPosts(current, articles, limit);
  if (related.length === 0) return null;
  return (
    <section className="related-posts">
      <h3>Related posts</h3>
      <ul>
        {related.map((post) => (
          <li key={post.id}>
            <a href={`/blog/${post.id}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}
