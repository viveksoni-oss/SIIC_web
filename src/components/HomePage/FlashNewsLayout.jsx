import React from "react";
import FlashNewsCard from "./FlashNewsCard";
import HighlightedText from "./../Utility Components/HighlightedText";

function FlashNewsLayout() {
  const newsDetails = [
    {
      title:
        "IIT Kanpur Startup in Aerospace, Defence & Agri-Tech to Receive $3.5 M CSR Boost.title1",
      imageLink: "/FlashNewsCard1.png",
      externalLink: "",
      PostedAt: "",
    },
    {
      title:
        "SBI Foundation Innovators for Bharat - an Initiative Supported by SBI Foundation.",
      imageLink: "/FlashNewsCard2.png",
      externalLink: "",
      PostedAt: "",
    },
    {
      title:
        "SIIC IIT Kanpur & MP-IDSA bring together Experts for Done & Autonomous Systems. ",
      imageLink: "/FlashNewsCard3.png",
      externalLink: "",
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
      <div className="flex items-center justify-between gap-8 ">
        {newsDetails.map((newsDetail) => {
          return <FlashNewsCard newsDetail={newsDetail} />;
        })}
      </div>
    </div>
  );
}

export default FlashNewsLayout;
