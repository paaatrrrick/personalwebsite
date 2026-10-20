import React from "react";
import { useLightbox } from "../hooks/useLightbox";
import "./lightbox.css";

export default function Lightbox({ children }) {
  const { src, open, close, isOpen } = useLightbox();

  const onClick = (e) => {
    const target = e.target;
    if (target.tagName === "IMG" && target.dataset.zoomable !== undefined) {
      open(target.getAttribute("src"));
    }
  };

  return (
    <>
      <div className="lightbox-content" onClick={onClick}>
        {children}
      </div>
      {isOpen && (
        <div className="lightbox-overlay" onClick={close} role="dialog" aria-label="Image preview">
          <img src={src} alt="" />
        </div>
      )}
    </>
  );
}
