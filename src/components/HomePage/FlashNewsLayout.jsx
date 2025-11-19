import React from "react";
import FlashNewsCard from "./FlashNewsCard";
import HighlightedText from "./../Utility Components/HighlightedText";

function FlashNewsLayout() {
  const newsDetails = [
    {
      title:
        "Startup Incubation and (SIIC) at IIT-K - signed a Memorandum of Understanding (MoU) with the NMexus Centre in April 2025 to  support Indian startups entering the U.S. market",
      imageLink: "News/Homepage/FlashNewsCard3.png",
      externalLink:
        "https://www.kanpurwants.com/trending-now/nmexus-siic-iit-kanpur-collaborate-to-introduce-indian-startups-to-the-us-market",
      PostedAt: "",
    },
    {
      title:
        "IIT Kanpur & Pernod Ricard Launch Advaya: Pioneering Plastic Circularity for Sustainable Startups",
      imageLink: "News/Homepage/FlashNewsCard2.png",
      externalLink:
        "http://timesofindia.indiatimes.com/articleshow/125282454.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst",
      PostedAt: "",
    },
    {
      title:
        "FUEL 2025- IIT Kanpur's SIIC Innovation Hub in Noida, reinforced SIIC's mission of accelerating innovation from lab to market. ",
      imageLink: "News/Homepage/FlashNewsCard1.png",
      externalLink:
        "https://timesofindia.indiatimes.com/city/lucknow/up-playing-a-pivotal-role-in-indias-growth-story/articleshow/123874787.cms",
      PostedAt: "",
    },
  ];
  return (
    <div className="px-16">
      <h1 className="text-5xl font-[200] mb-7  ">
        Flash{" "}
        <HighlightedText size="48px" weight={800}>
          News
        </HighlightedText>{" "}
      </h1>
      <div className="flex items-center  flex-col flex-wrap md:flex-row justify-evenly gap-8 ">
        {newsDetails.map((newsDetail) => {
          return <FlashNewsCard newsDetail={newsDetail} />;
        })}
      </div>
    </div>
  );
}

export default FlashNewsLayout;
