import React from "react";

function HighlightedText({ children }) {
  return <div className="font-bold text-primary-highlight">{children}</div>;
}
export default HighlightedText;
