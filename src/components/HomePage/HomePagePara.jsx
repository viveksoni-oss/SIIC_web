import React from "react";
import HighlightedText from "../../components/Utility Components/HighlightedText";
import useIsMobile from "@/Hooks/useIsMobile";

function HomePagePara() {
  const isMobile = useIsMobile();
  return (
    <div
      className={`text-[32px]  sm:text-[30px] md:text-[34px] px-[10%] flex items-center justify-center   content-center  my-16   -mt-20 ${
        isMobile ? "pt-20 -mt-40 " : "pt-40"
      }`}
    >
      <div className="md:max-w-3xl max-w-sm text-center font-[200] mx-auto">
        We empower startups with{" "}
        <HighlightedText weight={500}>funding,</HighlightedText>{" "}
        <HighlightedText weight={500}> mentorship</HighlightedText>, and{" "}
        <HighlightedText weight={500}>incubation</HighlightedText>, helping them
        transform
        <HighlightedText weight={500}> research</HighlightedText> into{" "}
        <HighlightedText weight={500}>real-world innovation</HighlightedText>
      </div>
    </div>
  );
}

export default HomePagePara;
