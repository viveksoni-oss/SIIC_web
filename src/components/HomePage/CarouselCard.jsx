import React from "react";

function CarouselCard({ isMain = false, cardData }) {
  const mainBorderColor = "#74363A";

  return (
    <div
      className={`
        w-full max-w-[200px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[315px]
        h-auto rounded-xl transition-all duration-300
        flex flex-col justify-between items-center relative
        bg-white select-none
        ${isMain ? "scale-105 z-10 shadow-xl" : "bg-[#2d415c] shadow-md z-0"}
      `}
      style={
        isMain
          ? { border: `3px solid ${mainBorderColor} `, borderRadius: "16px" }
          : { border: "3px solid #2d415c", borderRadius: "16px" }
      }
    >
      <div
        className={`w-full h-[150px] sm:h-[180px] md:h-[200px] relative ${
          isMain ? "lg:h-[280px]" : "lg:h-[220px]"
        } flex justify-center items-center rounded-t-xl bg-white`}
      >
        <div className="bg-black h-full absolute inset-0 opacity-0"></div>
        <img
          src={cardData?.imgSrc || "/phool.png"}
          alt={cardData?.title || "Phool"}
          className={
            "max-h-[70px] sm:max-h-[85px] md:max-h-[100px] lg:max-h-[200px] object-contain"
          }
          loading="lazy"
        />
      </div>
      <div
        className={`w-full p-3 sm:p-4 md:p-5 rounded-b-xl ${
          isMain ? "bg-[#74363A] text-white" : "bg-[#2d415c] text-white"
        }`}
      >
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
          {cardData?.title || "Phool"}
        </h1>
        <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-[14px] leading-[175%] line-clamp-2">
          {cardData?.desc ||
            "Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit."}
        </p>
      </div>
    </div>
  );
}

export default CarouselCard;
