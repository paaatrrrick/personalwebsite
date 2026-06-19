// Command registry for the ⌘K command palette.
// Each command: { id, label, group, keywords, shortcut?, href?, run? }
export const COMMAND_GROUPS = ["Navigation", "Blog", "Social", "Actions"];

export const commands = [
  { id: "home", label: "Go to Home", group: "Navigation", keywords: ["home", "start"], href: "/" },
  { id: "blog", label: "Go to Blog", group: "Navigation", keywords: ["blog", "posts", "writing"], href: "/blog" },
  { id: "timeline", label: "Go to Timeline", group: "Navigation", keywords: ["timeline", "history"], href: "/timeline" },
  { id: "uses", label: "Go to Uses", group: "Navigation", keywords: ["uses", "tools", "setup"], href: "/uses" },
  { id: "now", label: "Go to Now", group: "Navigation", keywords: ["now", "current"], href: "/now" },
  { id: "reading", label: "Go to Reading list", group: "Navigation", keywords: ["reading", "books"], href: "/reading-list" },
  { id: "talks", label: "Go to Talks", group: "Navigation", keywords: ["talks", "speaking"], href: "/talks" },
  { id: "rss", label: "Subscribe via RSS", group: "Blog", keywords: ["rss", "feed", "subscribe"], href: "/feed.xml" },
  { id: "github", label: "Open GitHub", group: "Social", keywords: ["github", "code"], href: "https://github.com/paaatrrrick" },
  { id: "linkedin", label: "Open LinkedIn", group: "Social", keywords: ["linkedin"], href: "https://linkedin.com" },
  { id: "copy-url", label: "Copy current URL", group: "Actions", keywords: ["copy", "link", "share"], shortcut: "c", run: async () => { await navigator.clipboard.writeText(window.location.href); } },
  { id: "top", label: "Scroll to top", group: "Actions", keywords: ["top", "scroll"], shortcut: "t", run: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
];

export function commandsByGroup(list = commands) {
  return COMMAND_GROUPS.map((group) => ({ group, items: list.filter((c) => c.group === group) })).filter(
    (g) => g.items.length > 0
  );
}
