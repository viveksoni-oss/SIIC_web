import React from "react";
import HighlightedText from "./HighlightedText";

function CounterBox({ count, label, className = "" }) {
  return (
    <div
      className={`w-full max-w-[250px] h-[108px] border border-black/20 rounded-2xl flex flex-col justify-center items-center p-4 transition-all duration-300 hover:border-primary/40 hover:shadow-md ${className}`}
    >
      <HighlightedText size="24px" weight={700}>
        {count || "0"}
      </HighlightedText>
      <p className="text-sm font-medium text-center text-gray-700 mt-1">
        {label || "Label"}
      </p>
    </div>
  );
}

export default CounterBox;
