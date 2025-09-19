import React from "react";

function CarouselCard({ isMain = false, cardData }) {
  return (
    <div
      className={`
        w-[315px] min-h-[410px] rounded-xl transition-all duration-300
        flex flex-col justify-between items-center relative
        ${
          isMain
            ? "bg-white border-4 border-[#74363A] shadow-xl scale-105 z-10"
            : "bg-[#2d415c] border-[1.5px] border-[#C3CEDD] shadow-md scale-100 z-0"
        }
      `}
    >
      <div className="bg-white w-full h-[220px] flex justify-center items-center rounded-t-xl">
        <img
          src={cardData?.imgSrc || "/phool.png"}
          alt={cardData?.title || "Phool"}
          className="max-h-[110px]"
        />
      </div>
      <div
        className={`w-full p-5 text-white ${
          isMain ? "bg-primary" : "text-[#2d415c]"
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
