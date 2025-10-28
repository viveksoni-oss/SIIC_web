import React from "react";
import HighlightedText from "../../components/Utility Components/HighlightedText";

function HomePagePara() {
  const hightLightedStyle = { weight: 500 };

  return (
    <div className="text-[28px] md:text-[36px] px-[4%] md:px-0 flex items-center justify-center   content-center mx-auto my-16">
      <div className="max-w-3xl text-center font-[200] mx-auto">
        <HighlightedText {...hightLightedStyle}>We </HighlightedText>
        empower startups through innovation, bridging research and market with{" "}
        <HighlightedText {...hightLightedStyle}> funding</HighlightedText>,
        <HighlightedText {...hightLightedStyle}> mentorship</HighlightedText>,
        and
        <HighlightedText {...hightLightedStyle}> incubation</HighlightedText> .
      </div>
    </div>
  );
}

export default HomePagePara;
