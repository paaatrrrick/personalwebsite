import React, { useRef } from "react";
import { commands as allCommands, commandsByGroup } from "../constants/commands";
import { useCommandPalette } from "./useCommandPalette";
import { useRecentCommands } from "./useRecentCommands";
import "./commandPalette.css";

export default function CommandPalette() {
  const { open, query, setQuery, results, activeIndex, setActiveIndex, move, closePalette } =
    useCommandPalette();
  const inputRef = useRef(null);
  const { record, resolveRecents } = useRecentCommands();
  const recents = query.trim() ? [] : resolveRecents(allCommands);

  const runCommand = (cmd) => {
    record(cmd.id);
    closePalette();
    if (cmd.run) {
      void cmd.run();
    } else if (cmd.href) {
      if (cmd.href.startsWith("http")) {
        window.open(cmd.href, "_blank", "noreferrer");
      } else {
        window.location.assign(cmd.href);
      }
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      move(1);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      move(-1);
    } else if (e.key === "Enter" && results[activeIndex]) {
      e.preventDefault();
      runCommand(results[activeIndex]);
    }
  };

  if (!open) return null;

  const grouped = commandsByGroup(results);

  return (
    <div className="cmdk-overlay" onClick={closePalette}>
      <div className="cmdk-panel" role="dialog" aria-label="Command palette" onClick={(e) => e.stopPropagation()}>
        <input
          ref={inputRef}
          autoFocus
          className="cmdk-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Type a command or search..."
          aria-label="Command palette search"
        />
        <div className="cmdk-results">
          {results.length === 0 && <p className="cmdk-empty">No matching commands.</p>}
          {recents.length > 0 && (
            <div className="cmdk-group">
              <p className="cmdk-group-label">Recent</p>
              {recents.map((cmd) => (
                <button
                  key={`recent-${cmd.id}`}
                  type="button"
                  className="cmdk-item"
                  onClick={() => runCommand(cmd)}
                >
                  <span>{cmd.label}</span>
                </button>
              ))}
            </div>
          )}
          {grouped.map((section) => (
            <div key={section.group} className="cmdk-group">
              <p className="cmdk-group-label">{section.group}</p>
              {section.items.map((cmd) => {
                const index = results.indexOf(cmd);
                return (
                  <button
                    key={cmd.id}
                    type="button"
                    className={`cmdk-item ${index === activeIndex ? "is-active" : ""}`}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => runCommand(cmd)}
                  >
                    <span>{cmd.label}</span>
                    {cmd.shortcut && <kbd>{cmd.shortcut}</kbd>}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
        <div className="cmdk-footer">
          <kbd>↑</kbd><kbd>↓</kbd> to navigate · <kbd>↵</kbd> to select · <kbd>esc</kbd> to close
        </div>
      </div>
    </div>
  );
}
