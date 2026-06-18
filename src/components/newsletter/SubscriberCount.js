import React from "react";
import { useSubscriberCount } from "./useSubscriberCount";

export default function SubscriberCount({ listId = "weekly" }) {
  const count = useSubscriberCount(listId);
  if (count === null) return null;
  return (
    <p className="subscriber-count">
      Join {count.toLocaleString()} subscribers.
    </p>
  );
}
