import React from "react";

function HighlightedText({ children, weight = 700, size = "32px" }) {
  return (
    <span
      style={{ fontWeight: weight, fontSize: size }}
      className={`  text-primary-highlight`}
    >
      {children}
    </span>
  );
}
export default HighlightedText;
