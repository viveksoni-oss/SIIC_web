import React from "react";
import HighlightedText from "./../Utility Components/HighlightedText";

function UpcomingEvents() {
  return (
    <div className="mx-16 mb-50 flex flex-col gap-8">
      <h1 className="flex gap-2" style={{ fontSize: "48px", fontWeight: 200 }}>
        Upcoming{" "}
        <HighlightedText size="48px" weight={800}>
          Events
        </HighlightedText>
      </h1>
      <div className="rounded-2xl bg-gray-100 pt-6 pb-8 pl-18 relative ">
        <div className="w-1/2 flex flex-col gap-4 ">
          <div className="flex items-center gap-2 -ml-6 text-base font-[600]">
            <div className="w-5 aspect-square bg-black flex justify-center items-center rounded-full">
              <div className="w-2.5 aspect-square  bg-white rounded-full"></div>
            </div>
            Abhivyakti 26{" "}
          </div>

          <p className="font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            sequi officia inventore consectetur architecto quae tempora...
            <span className="font-semibold ml-2">
              {" "}
              {"  "}Know More {">>"}{" "}
            </span>
          </p>

          <div className="flex  gap-16 items-start mt-12 w-xl ">
            {/* Items with right border except last */}
            <div className=" flex justify-center items-center gap-2 flex-col  ">
              <div className="font-bold">Location</div>
              <div>IIT Kanpur</div>
            </div>
            <div className="h-12 border-l-2 "></div>
            <div className=" flex justify-center items-center gap-2 flex-col ">
              <div className="font-bold">Date</div>
              <div>XX-XX-2025</div>
            </div>
            <div className="h-12 border-l-2 "></div>
            <div className=" flex justify-center items-center gap-2 flex-col ">
              <div className="font-bold">Time</div>
              <div>XX:XX:XX</div>
            </div>
          </div>
        </div>

        {/* Image carousel with vertical indicator */}
        <div className="absolute right-0 w-1/3 -top-1/6 flex justify-between pr-4 ">
          <div>
            <img src="/UpcomingEvents/Abhivyakti.svg" alt="events" />
          </div>

          {/* Vertical carousel indicator dots */}
          <div className="flex flex-col justify-center gap-3 ml-4">
            {/* Active circle */}
            <div className="w-[18px] h-[18px] rounded-full bg-white border-1 border-black/10 flex items-center justify-center shadow-md">
              <div className="w-3 h-3 rounded-full bg-primary-highlight"></div>
            </div>

            <div className="w-[18px] h-[18px] rounded-full bg-white border-1 border-black/10 flex items-center justify-center shadow-md">
              <div className="w-3 h-3 rounded-full bg-primary-highlight"></div>
            </div>
            <div className="w-[18px] h-[18px] rounded-full bg-white border-1 border-black/10 flex items-center justify-center shadow-md">
              <div className="w-3 h-3 rounded-full bg-primary-highlight"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpcomingEvents;
