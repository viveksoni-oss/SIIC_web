import React from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
function RailCard({ title, hashTag, link }) {
  const navigate = useNavigate();
  return (
    <div className="rounded-2xl border h-[60px] border-gray-100 hover:shadow-[0_2px_4px_rgba(0,0,0,0.25)] transition-shadow duration-700 ease-in-out flex justify-between items-center gap-5 px-6 py-5 group">
      {/* Left Section: Board Title */}
      <div className="flex-1 min-w-0 text-secondary-blue font-semibold truncate text-[20px]">
        {title}
      </div>

      {/* Center Section: Progress Rail + Label */}
      <div className="relative flex-3 min-w-0 flex items-center mx-4">
        <div className="absolute w-full h-px bg-gray-300 z-0"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[12px] bg-white z-10 text-neutral-500 group-hover:text-black   rounded-md whitespace-nowrap  transition-all duration-700 group-hover:translate-x-[-400%] ">
          # {hashTag}
        </div>
      </div>

      {/* Right Section: Button */}
      <motion.button
        onClick={() => navigate(link)}
        className="flex-shrink-0 border-2 border-primary-highlight rounded-2xl opacity-75 h-8 py-2 px-4 flex items-center justify-center  hover:scale-105 font-medium transition-all  duration-300 hover:bg-primary-highlight hover:text-white hover:font-medium"
      >
        Know more
      </motion.button>
    </div>
  );
}
function OurPeople() {
  return (
    <div className="mt-10">
      <h1 className="text-[40px] font-extralight tracking-wide">
        Our <span className="text-primary-highlight font-bold">People</span>
      </h1>
      <p className="text-[20px] text-[#1f1f1f] opacity-75 mt-1">
        Meet the Dreamers, Doers & Deadline Conquerors.
      </p>
      <div className="flex flex-col gap-6 px-10 mt-10">
        {/* Placeholder rows */}
        <RailCard
          title={"Board of Director"}
          hashTag={"The power brain"}
          link="/board-of-directors"
        ></RailCard>
        <RailCard
          title={"Leadership"}
          link="/our-team#staff-of-domains"
          hashTag={"The think tankers"}
        ></RailCard>
        <RailCard
          title={"Personal"}
          hashTag={"The task force"}
          link="/our-team#staff-of-operations"
        ></RailCard>
      </div>
    </div>
  );
}

export default OurPeople;
