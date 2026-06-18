import React from "react";
import { NEWSLETTER_LISTS } from "../../constants/newsletter";

export default function ListPicker({ value, onChange }) {
  return (
    <select
      className="list-picker"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      aria-label="Choose a newsletter"
    >
      {Object.values(NEWSLETTER_LISTS).map((list) => (
        <option key={list.id} value={list.id}>
          {list.label}
        </option>
      ))}
    </select>
  );
}
