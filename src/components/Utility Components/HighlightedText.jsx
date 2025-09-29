import React from "react";

function HighlightedText({ children, weight = 700, size }) {
  return (
    <span
      style={{
        fontWeight: weight,
        ...(size != "undefined" ? { fontSize: size } : {}),
      }}
      className="text-primary-highlight"
    >
      {children}
    </span>
  );
}
export default HighlightedText;
