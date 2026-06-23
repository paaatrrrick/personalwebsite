import React from "react";
import { CADENCES } from "../../constants/cadences";
import "./cadencePicker.css";

export default function CadencePicker({ value, onChange }) {
  return (
    <div className="cadence-picker" role="radiogroup" aria-label="Digest cadence">
      {CADENCES.map((cadence) => (
        <button
          key={cadence.id}
          type="button"
          role="radio"
          aria-checked={value === cadence.id}
          className={value === cadence.id ? "is-active" : ""}
          onClick={() => onChange(cadence.id)}
        >
          <span className="cadence-label">{cadence.label}</span>
          <span className="cadence-desc">{cadence.description}</span>
        </button>
      ))}
    </div>
  );
}
