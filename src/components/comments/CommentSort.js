import React from "react";

export default function CommentSort({ value, onChange }) {
  return (
    <div className="comment-sort">
      {["newest", "oldest", "top"].map((option) => (
        <button
          key={option}
          type="button"
          className={value === option ? "is-active" : ""}
          onClick={() => onChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
