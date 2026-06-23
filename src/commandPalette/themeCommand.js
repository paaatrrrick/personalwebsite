import { useTheme } from "../hooks/useTheme";

// Registers a "Toggle theme" command for the ⌘K palette.
export function useThemeCommand() {
  const { theme, toggleTheme } = useTheme();
  return {
    id: "toggle-theme",
    label: theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
    group: "Actions",
    keywords: ["theme", "dark", "light", "mode"],
    shortcut: "d",
    run: toggleTheme,
  };
}
