import React from "react";
import "./shortcutHint.css";

export default function ShortcutHint() {
  const mod = typeof navigator !== "undefined" && /Mac/.test(navigator.platform) ? "⌘" : "Ctrl";
  return (
    <button
      type="button"
      className="shortcut-hint"
      onClick={() => window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true }))}
      aria-label="Open command palette"
    >
      <kbd>{mod}</kbd>
      <kbd>K</kbd>
    </button>
  );
}
