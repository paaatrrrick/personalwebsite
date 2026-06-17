import React, { useState } from "react";
import "./subscribeForm.css";

export default function SubscribeForm({ onSubscribe }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setStatus("invalid");
      return;
    }
    setStatus("loading");
    try {
      await onSubscribe(email);
      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <form className="subscribe-form" onSubmit={handleSubmit}>
      <label htmlFor="subscribe-email">Get new posts in your inbox</label>
      <div className="subscribe-row">
        <input
          id="subscribe-email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </button>
      </div>
      {status === "invalid" && <p className="subscribe-hint">Enter a valid email.</p>}
      {status === "success" && <p className="subscribe-hint">Check your inbox to confirm!</p>}
      {status === "error" && <p className="subscribe-hint">Something went wrong, try again.</p>}
    </form>
  );
}
