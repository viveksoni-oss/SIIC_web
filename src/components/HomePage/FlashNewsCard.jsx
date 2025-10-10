import React, { useState } from "react";

function FlashNewsCard({ newsDetail }) {
  const [isHovered, setIsHovered] = useState(false); // Start with false for proper initial state

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="border-[#F1F1F1] border-[1.5px] shadow-2xs relative rounded-[10px] overflow-hidden max-w-[416px] flex flex-col  items-center justify-center p-4 md:p-1 lg:p-4 gap-5 duration-300 ease-out hover:bg-[#e3e3e3]/20 hover:shadow-lg hover:border-0 transition-colors   "
    >
      <img
        src={newsDetail.imageLink}
        alt={newsDetail.title + "image"}
        className=""
      />
      <h3 className="font-[500] md:text-xs text-base lg:text-base line-clamp-2 ">
        {newsDetail.title}
      </h3>

      <div className="flex flex-row justify-end w-full z-20 ">
        <div className="relative aspect-square w-8 md:w-4 lg:w-8 h-8 md:p-3">
          <img
            src="Icons/external-link.svg"
            alt="external-link-icon"
            className={`absolute inset-0 aspect-square w-8 h-8 md:w-4 lg:w-8 lg:h-8 cursor-pointer transition-opacity duration-600 ease-in-out ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          />
          <img
            src="Icons/hover-icons/external-link-hover.svg"
            alt="external-link-hover-icon"
            className={`absolute inset-0 w-8 h-8   cursor-pointer transition-opacity duration-600 ease-in-out ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>

      {/* Smooth bottom bar animation */}
      <div
        className={`bg-primary w-full h-14 md:h-10 lg:h-14 absolute  bottom-0 z-10 transition-all duration-500 ease-in-out ${
          isHovered
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-full"
        }`}
      />
    </div>
  );
}

export default FlashNewsCard;
