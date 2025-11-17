import React from "react";
import HighlightedText from "../../components/Utility Components/HighlightedText";
import useIsMobile from "@/Hooks/useIsMobile";

function HomePagePara() {
  const hightLightedStyle = { weight: 500 };
  const isMobile = useIsMobile();
  return (
    <div
      className={`text-[18px] sm:text-[24px] md:text-[36px] px-[4%] md:px-0 flex items-center justify-center   content-center mx-auto my-16 ${
        isMobile ? "pt-15 -mt-40" : ""
      }`}
    >
      <div className="md:max-w-3xl max-w-sm text-center font-[200] mx-auto">
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
