import React from "react";
import HighlightedText from "./../../components/Utility Components/HighlightedText";

function HomeBanner() {
  return (
    <div className="z-50 relative text-white flex justify-between ">
      <div className="p-18 ">
        <div>
          <div className="text-6xl  font-medium capitalize">
            We incubate <HighlightedText>Your</HighlightedText> innovations
          </div>
          <p className="text-base mt-2.5 py-4 ">
            From crazy concepts to real impact — we’re with you at every step of
            the startup journey.
          </p>
        </div>
      </div>
      <div className="  rounded-2xl  absolute right-0 m-16 z-50">
        <img src="/SIIC_building.png" alt="siic building picture" />
      </div>
    </div>
  );
}

export default HomeBanner;
