import React from "react";
import HighlightedText from "./HighlightedText";

function CounterBox() {
  return (
    <div className="w-[250px] h-[108px] border-1 border-black/20 rounded-2xl flex flex-col justify-center items-center p-12">
      <HighlightedText size={"24px"} weight={700}>
        XXX
      </HighlightedText>
      <div className="text-sm font-medium text-center">Portfolio Managers</div>
    </div>
  );
}

export default CounterBox;
