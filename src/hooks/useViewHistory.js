import { useEffect, useState } from "react";

const VIEWS_API = "https://api.paaatrrrick.com/views";

export function useViewHistory(postId, days = 30) {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    let active = true;
    fetch(`${VIEWS_API}/${postId}/history?days=${days}`)
      .then((res) => (res.ok ? res.json() : { points: [] }))
      .then((data) => {
        if (active) setHistory(data.points || []);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, [postId, days]);

  return history;
}
