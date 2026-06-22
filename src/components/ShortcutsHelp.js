import React from "react";
import { shortcuts } from "../constants/shortcuts";
import { useShortcutsHelp } from "../hooks/useShortcutsHelp";
import "./shortcutsHelp.css";

export default function ShortcutsHelp() {
  const { open, close } = useShortcutsHelp();
  if (!open) return null;
  return (
    <div className="shortcuts-overlay" onClick={close}>
      <div className="shortcuts-panel" role="dialog" aria-label="Keyboard shortcuts" onClick={(e) => e.stopPropagation()}>
        <h2>Keyboard shortcuts</h2>
        <ul>
          {shortcuts.map((s) => (
            <li key={s.description}>
              <span className="shortcuts-keys">
                {s.keys.map((k) => (
                  <kbd key={k}>{k}</kbd>
                ))}
              </span>
              <span>{s.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
