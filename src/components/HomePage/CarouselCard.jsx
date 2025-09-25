import React from "react";

function CarouselCard({ isMain = false, cardData }) {
  // Set the main border color to match the brown "primary" used in your screenshot.
  const mainBorderColor = "#74363A"; // update if your theme uses a different primary

  return (
    <div
      className={`
        w-[315px] min-h-[410px] rounded-xl transition-all duration-300
        flex flex-col justify-between items-center relative
        bg-white
        ${isMain ? "scale-105 z-10 shadow-xl" : "bg-[#2d415c] shadow-md z-0"}
      `}
      style={
        isMain
          ? { border: `3px solid ${mainBorderColor}` }
          : { border: "1.5px solid #C3CEDD" }
      }
    >
      <div className="w-full h-[220px] flex justify-center items-center rounded-t-xl bg-white">
        <img
          src={cardData?.imgSrc || "/phool.png"}
          alt={cardData?.title || "Phool"}
          className="max-h-[110px] object-contain"
        />
      </div>
      <div
        className={`w-full p-5 rounded-b-xl ${
          isMain ? "bg-[#74363A] text-white" : "bg-[#2d415c] text-white"
        }`}
      >
        <h1 className="text-2xl font-bold">{cardData?.title || "Phool"}</h1>
        <p className="mt-2 text-[14px] leading-[175%]">
          {cardData?.desc ||
            "Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit."}
        </p>
      </div>
    </div>
  );
}

export default CarouselCard;
