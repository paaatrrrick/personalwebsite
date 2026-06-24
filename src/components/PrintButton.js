import React from "react";
import "./print.css";

export default function PrintButton({ label = "Print" }) {
  return (
    <button type="button" className="print-button" onClick={() => window.print()}>
      {label}
    </button>
  );
}
