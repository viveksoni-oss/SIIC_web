import React from "react";
import BannerTemplate from "./BannerTemplate";
import HighlightedText from "../Utility Components/HighlightedText";

function JoinAsMentorBanner() {
  const Heading = (
    <>
      {" "}
      Mould the
      <HighlightedText>Future</HighlightedText>.
    </>
  );
  const Description =
    "Guide SIIC startups, sharing expertise to shape impactful, scalable innovations.";
  return (
    <div>
      <BannerTemplate Heading={Heading} Description={Description} />
    </div>
  );
}

export default JoinAsMentorBanner;
