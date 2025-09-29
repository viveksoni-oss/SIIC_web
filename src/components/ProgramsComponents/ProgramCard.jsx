import React, { useEffect, useState } from "react";
import HighlightedText from "./../Utility Components/HighlightedText";

function ProgramCard({ data = {} }) {
  const [isHovered, setIsHovered] = useState(false);
  const [blinking, setBlinking] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlinking((prev) => !prev);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group aspect-square border-[#F1F1F1] border-2 overflow-hidden w-[304px] rounded-xl cursor-pointer transition-all duration-500 ease-out ${
        isHovered ? "shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]" : ""
      }`}
    >
      <div className="relative overflow-hidden h-[245px]">
        <img
          src={data.imgLink}
          className="w-full  transition-transform duration-500 object-fill min-h-[245px] ease-out group-hover:scale-105"
          alt="Program preview"
        />
        {data.type === "Active" && data.DirectApplyLink && (
          <>
            <button className="absolute -bottom-1 right-7 text-sm font-semibold bg-primary-highlight text-white  px-4 py-2 pb-3.5 transition-all duration-300 ease-in-out  group-hover:-translate-y-1  group-hover:shadow-lg hover:bg-white  hover:outline-3 hover:outline-primary-highlight hover:text-black  active:scale-95 rounded-t-lg ">
              Apply Now
            </button>
            <div className="w-[106px] h-1 absolute bg-primary-highlight right-7 bottom-[6.5px]  "></div>
          </>
        )}
      </div>

      <div className="bg-white pb-1 pt-2 px-4  z-20 -translate-y-2">
        <div className="text-lg line-clamp-1 capitalize font-bold transition-transform duration-200 ">
          {data.title}
        </div>

        <div className="flex justify-between items-center mt-1">
          {blinking ? (
            <div className="  text-xs font-[400] cursor-pointer transition-all duration-200  hover:underline">
              Know more <span className="ml-2">{">"}</span>
            </div>
          ) : (
            <div className="text-primary-highlight italic   text-xs font-[400] cursor-pointer transition-all duration-200  hover:underline">
              Know more <span className="ml-2">{">>"}</span>
            </div>
          )}

          {data.type === "Active" && (
            <div className="text-[10px] transition-transform font-[400] duration-200  group-hover:scale-105">
              <HighlightedText size="12px" weight={600}>
                29{"    "}
              </HighlightedText>{" "}
              days left
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProgramCard;
