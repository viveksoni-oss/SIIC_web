import React, { useEffect, useState, useMemo } from "react";
import HighlightedText from "./../Utility Components/HighlightedText";
import { useNavigate } from "react-router";
import { calculateDaysLeft } from "@/Util/HelperFunctions";

function ProgramCard({
  data = {
    title: "",
    cardImage: "default.jpg",
    type: "",
    applyLink: "",
    slug: "",
    deadline: null,
  },
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [blinking, setBlinking] = useState(false);
  const navigate = useNavigate();

  // Memoize daysLeft to prevent recalculation on every render
  const daysLeft = useMemo(
    () => (data.deadline ? calculateDaysLeft(data.deadline) : null),
    [data.deadline]
  );

  // Blinking effect only when the card is hovered (optional for performance)
  useEffect(() => {
    if (!isHovered) {
      setBlinking(false);
      return;
    }
    const interval = setInterval(() => {
      setBlinking((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, [isHovered]);

  // Keyboard navigation for card
  const handleKeyPress = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      navigate(`${data.slug}`);
    }
  };

  return (
    <div
      tabIndex={0}
      role="button"
      aria-label={`Open program details for ${data.title}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onKeyPress={handleKeyPress}
      className={`group  bg-white  border-[#F1F1F1] border-2 overflow-hidden  lg:w-[310px] rounded-xl cursor-pointer transition-all duration-500 ease-out focus:outline-none focus:shadow-lg h-[350px] flex flex-col 
        ${isHovered ? "shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]" : ""}
      `}
    >
      <div className="relative overflow-hidden h-[245px]">
        <img
          src={`/ProgramsDashboard/Card-Image/${data.cardImage}`}
          className="w-full transition-transform duration-500 object-fill min-h-[245px] ease-out group-hover:scale-105"
          alt={data.title ? `${data.title} preview` : "Program preview"}
          loading="lazy"
        />
        {data.type === "Active" && data.applyLink && (
          <div className="group/apply-btn ">
            <a
              href={data.applyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -bottom-1 right-7 text-sm font-semibold bg-primary-highlight text-white px-4 py-2 pb-3.5 transition-all duration-300 ease-in-out group-hover:-translate-y-1 group-hover:shadow-lg hover:bg-white hover:outline-3 hover:outline-primary-highlight hover:text-black active:scale-95 rounded-t-lg"
              aria-label={`Apply to ${data.title}`}
            >
              Apply Now
            </a>
            <div className="w-[106px] h-1 absolute bg-primary-highlight right-7 bottom-[6.5px] group-hover/apply-btn:opacity-100 opacity-0 duration-300 transition-colors"></div>
          </div>
        )}
      </div>
      <div className="bg-white pb-1  flex flex-col flex-1 justify-between  p-4 z-20 -translate-y-2">
        <div className="text-lg line-clamp-2 capitalize font-bold   transition-transform duration-200">
          {data.title}
        </div>
        <div
          onClick={() => navigate(`${data.slug}`)}
          className="flex justify-between items-center mt-1  "
          role="link"
          aria-label={`Know more about ${data.title}`}
        >
          {blinking ? (
            <div className="text-[13px] font-[400] cursor-pointer transition-all duration-200 hover:underline">
              Know more <span className="ml-2">{">"}</span>
            </div>
          ) : (
            <div className="text-primary-highlight italic text-[13px]  font-[400] cursor-pointer transition-all duration-200 hover:underline">
              Know more <span className="ml-2">{">>"}</span>
            </div>
          )}
          {data.type === "Active" && daysLeft !== null && (
            <div className="text-[10px] transition-transform font-[400] duration-200 group-hover:scale-105">
              <HighlightedText size="13px" weight={600}>
                {daysLeft}
              </HighlightedText>{" "}
              {daysLeft === 1 ? "day left" : "days left"}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProgramCard;
