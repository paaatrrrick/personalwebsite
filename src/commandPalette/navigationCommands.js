import { COMMAND_GROUPS } from "../constants/commands";

// Additional navigation commands registered into the ⌘K palette.
export const navigationCommands = [
  { id: "nav-projects", label: "Go to Projects", group: "Navigation", keywords: ["projects", "work"], href: "/projects" },
  { id: "nav-bookmarks", label: "Go to Bookmarks", group: "Navigation", keywords: ["bookmarks", "links"], href: "/bookmarks" },
  { id: "nav-faq", label: "Go to FAQ", group: "Navigation", keywords: ["faq", "questions"], href: "/faq" },
];

export function withNavigationCommands(commands) {
  const base = commands.filter((c) => !navigationCommands.some((n) => n.id === c.id));
  return [...base, ...navigationCommands].filter((c) => COMMAND_GROUPS.includes(c.group));
}
