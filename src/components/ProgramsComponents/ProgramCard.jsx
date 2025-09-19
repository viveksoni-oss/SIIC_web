import React, { useState } from "react";
import HighlightedText from "./../Utility Components/HighlightedText";

function ProgramCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group aspect-square border border-black/20 overflow-hidden w-xs rounded-xl cursor-pointer transition-all duration-500 ease-out ${
        isHovered ? "shadow-2xl" : "shadow-sm"
      }`}
    >
      <div className="relative overflow-hidden">
        <img
          src="Rectangle 23917.svg"
          className="w-full transition-transform duration-500 ease-out group-hover:scale-110"
          alt="Program preview"
        />

        <button className="absolute -bottom-3 right-10 text-md font-semibold bg-primary-highlight text-white rounded-lg px-4 py-2 pb-6 transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:shadow-lg hover:bg-white  hover:outline-3 hover:outline-primary-highlight hover:text-black  active:scale-95">
          Apply Now
        </button>
      </div>

      <div className="bg-white p-2 px-4 -translate-y-2">
        <div className="text-xl uppercase font-bold transition-transform duration-200 group-hover:scale-[1.02]">
          Udaan
        </div>

        <div className="flex justify-between items-center">
          <div className="text-primary-highlight cursor-pointer transition-all duration-200 group-hover:translate-x-1 hover:underline">
            Know more →
          </div>

          <div className="text-xs transition-transform duration-200 group-hover:scale-105">
            <HighlightedText size="14px" weight={800}>
              29
            </HighlightedText>{" "}
            days left
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgramCard;
