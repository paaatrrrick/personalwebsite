import React from "react";
import { nextSendLabel } from "./nextSend";

export default function NextSendHint({ cadence }) {
  return <p className="next-send-hint">Your next digest will arrive {nextSendLabel(cadence)}.</p>;
}
