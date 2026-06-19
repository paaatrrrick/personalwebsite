import React, { useState } from "react";
import "./searchBar.css";

export default function SearchBar({ onQuery, placeholder = "Search the site..." }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const next = e.target.value;
    setValue(next);
    onQuery(next.trim().toLowerCase());
  };

  return (
    <div className="search-bar">
      <input
        type="search"
        aria-label="Search"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      <kbd className="search-shortcut">/</kbd>
    </div>
  );
}
