import React, { useState } from "react";

const EMOJI = ["👍", "❤️", "🎉", "🤔", "😂", "🚀"];

export default function Reactions({ targetId, initialCounts = {}, onReact }) {
  const [counts, setCounts] = useState(initialCounts);

  const react = async (emoji) => {
    setCounts((prev) => ({ ...prev, [emoji]: (prev[emoji] || 0) + 1 }));
    try {
      await onReact(targetId, emoji);
    } catch (err) {
      setCounts((prev) => ({ ...prev, [emoji]: Math.max(0, (prev[emoji] || 1) - 1) }));
    }
  };

  return (
    <div className="reactions">
      {EMOJI.map((emoji) => (
        <button key={emoji} type="button" onClick={() => react(emoji)}>
          {emoji} {counts[emoji] || 0}
        </button>
      ))}
    </div>
  );
}
