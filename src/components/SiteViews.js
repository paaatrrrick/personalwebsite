import React from "react";
import { useTotalViews } from "../hooks/useTotalViews";

export default function SiteViews() {
  const total = useTotalViews();
  if (total === null) return null;
  return <p className="site-views">{total.toLocaleString()} total reads across all posts.</p>;
}
