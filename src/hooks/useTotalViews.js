import { useEffect, useState } from "react";

const VIEWS_API = "https://api.paaatrrrick.com/views";

export function useTotalViews() {
  const [total, setTotal] = useState(null);

  useEffect(() => {
    let active = true;
    fetch(`${VIEWS_API}/total`)
      .then((res) => (res.ok ? res.json() : { total: null }))
      .then((data) => {
        if (active) setTotal(typeof data.total === "number" ? data.total : null);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  return total;
}
