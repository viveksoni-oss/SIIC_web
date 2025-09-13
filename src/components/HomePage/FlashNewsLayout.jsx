import React from "react";
import FlashNewsCard from "./FlashNewsCard";
import HighlightedText from "./../Utility Components/HighlightedText";

function FlashNewsLayout() {
  const newsDetails = [
    { title: "title1", imageLink: "", externalLink: "", PostedAt: "" },
    { title: "title2", imageLink: "", externalLink: "", PostedAt: "" },
    { title: "title3", imageLink: "", externalLink: "", PostedAt: "" },
  ];
  return (
    <>
      <h1 className="text-5xl font-[200] px-16 ">
        Flash{" "}
        <HighlightedText size="48px" weight={800}>
          News
        </HighlightedText>{" "}
      </h1>
      <div className="flex justify-start py-5 px-16">
        {newsDetails.map((newsDetail) => {
          return <FlashNewsCard />;
        })}
      </div>
    </>
  );
}

export default FlashNewsLayout;
