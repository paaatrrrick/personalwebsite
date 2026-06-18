import { useEffect, useState } from "react";
import { NEWSLETTER_API_BASE } from "../../constants/newsletter";

export function useSubscriberCount(listId = "weekly") {
  const [count, setCount] = useState(null);

  useEffect(() => {
    let active = true;
    fetch(`${NEWSLETTER_API_BASE}/lists/${listId}/count`)
      .then((res) => (res.ok ? res.json() : { count: null }))
      .then((data) => {
        if (active) setCount(typeof data.count === "number" ? data.count : null);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, [listId]);

  return count;
}
