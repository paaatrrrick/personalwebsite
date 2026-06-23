import React from "react";
import { useProjectFilter } from "../hooks/useProjectFilter";
import "./projectFilter.css";

export default function ProjectFilter({ onChange }) {
  const { activeTag, setActiveTag, filtered, tags } = useProjectFilter();

  React.useEffect(() => {
    if (onChange) onChange(filtered);
  }, [filtered, onChange]);

  return (
    <div className="project-filter">
      <button
        type="button"
        className={!activeTag ? "is-active" : ""}
        onClick={() => setActiveTag(null)}
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          type="button"
          className={activeTag === tag ? "is-active" : ""}
          onClick={() => setActiveTag(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
