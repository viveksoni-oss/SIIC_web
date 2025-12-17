import React, { useEffect, useState, useMemo } from "react";
import HighlightedText from "./../Utility Components/HighlightedText";
import { useNavigate } from "react-router";
import { calculateDaysLeft } from "@/Util/HelperFunctions";

function ProgramCard({
  data = {
    title: "",
    cardImage: "default.jpg",
    type: "", // This will be overridden by our calculated status
    applyLink: "",
    slug: "",
    deadline: null,
  },
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [blinking, setBlinking] = useState(false);
  const navigate = useNavigate();

  // 1. Calculate Status based on deadline
  const programStatus = useMemo(() => {
    if (!data.deadline) return "Upcoming"; // No deadline = Upcoming (or whatever default you prefer)

    const deadlineDate = new Date(data.deadline);
    const today = new Date();

    // Set time to midnight for accurate day comparison
    today.setHours(0, 0, 0, 0);
    deadlineDate.setHours(0, 0, 0, 0);

    return deadlineDate < today ? "Past" : "Active";
  }, [data.deadline]);

  // 2. Calculate daysLeft only if Active
  const daysLeft = useMemo(
    () =>
      programStatus === "Active" && data.deadline
        ? calculateDaysLeft(data.deadline)
        : null,
    [data.deadline, programStatus]
  );

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

  return (
    <div
      tabIndex={0}
      role="button"
      aria-label={`Open program details for ${data.title}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group bg-white border-[#F1F1F1] border-2 overflow-hidden 
        max-w-xs rounded-xl cursor-pointer transition-all duration-500 ease-out 
        focus:outline-none focus:shadow-lg flex flex-col
        ${isHovered ? "shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]" : ""}
      `}
    >
      <div className="relative overflow-hidden h-[245px]">
        <div className="relative">
          {/* 3. Apply Grayscale Logic: Grayscale if "Past", remove on hover */}
          <img
            src={`/ProgramsDashboard/Card-Image/${data.cardImage}`}
            className={`absolute inset-0 w-full h-full transition-all duration-500 object-fill min-h-[245px] ease-out group-hover:scale-105
              ${
                programStatus === "Past"
                  ? "grayscale group-hover:grayscale-0"
                  : ""
              }
            `}
            alt={data.title ? `${data.title} preview` : "Program preview"}
            loading="lazy"
          />
          <div className="absolute inset-0 w-full h-full min-h-[245px] z-20"></div>
        </div>

        {/* 4. Show Apply Button only if "Active" */}
        {programStatus === "Active" && data.applyLink && (
          <div className="group/apply-btn">
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

      <div className="bg-white pb-1 flex flex-col flex-1 justify-between p-4 z-20 -translate-y-2">
        <div className="text-lg line-clamp-2 capitalize font-bold transition-transform duration-200">
          {data.title}
        </div>

        <div
          onClick={() => navigate(`${data.slug}`)}
          className="flex justify-between items-center"
          role="link"
          aria-label={`Know more about ${data.title}`}
        >
          {blinking ? (
            <div className="text-[14px] font-[400] cursor-pointer transition-all duration-200 hover:underline">
              Know more <span className="ml-2">{">"}</span>
            </div>
          ) : (
            <div className="text-primary-highlight italic text-[14px] font-[400] cursor-pointer transition-all duration-200 hover:underline">
              Know more <span className="ml-2">{">>"}</span>
            </div>
          )}

          {/* 5. Show Days Left only if "Active" */}
          {programStatus === "Active" && daysLeft !== null && (
            <div className="text-[10px] transition-transform font-[400] duration-200 group-hover:scale-105">
              <HighlightedText size="13px" weight={600}>
                {daysLeft}
              </HighlightedText>{" "}
              {daysLeft === 1 ? "day left" : "days left"}
            </div>
          )}

          {/* Optional: Show status badge for Past/Upcoming if you want */}
          {programStatus === "Past" && (
            <div className="text-[12px] font-semibold text-gray-500">
              Closed
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProgramCard;
