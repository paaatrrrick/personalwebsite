import React, { useState } from "react";
import { NEWSLETTER_LISTS } from "../../constants/newsletter";
import { usePreferences } from "./usePreferences";

export default function PreferencesForm({ email, initialLists = [] }) {
  const [selected, setSelected] = useState(new Set(initialLists));
  const { savePreferences, pending } = usePreferences(email);

  const toggle = (id) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <form
      className="preferences-form"
      onSubmit={(e) => {
        e.preventDefault();
        void savePreferences([...selected]);
      }}
    >
      {Object.values(NEWSLETTER_LISTS).map((list) => (
        <label key={list.id}>
          <input type="checkbox" checked={selected.has(list.id)} onChange={() => toggle(list.id)} />
          {list.label}
        </label>
      ))}
      <button type="submit" disabled={pending}>
        {pending ? "Saving..." : "Save preferences"}
      </button>
    </form>
  );
}
