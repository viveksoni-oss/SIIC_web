import React from "react";
import { motion } from "framer-motion";
import HighlightedText from "./HighlightedText";

function BookMark() {
  return (
    <div className="h-26 w-11 rounded-b-2xl relative rounded-t-lg ml-24 -translate-y-3 bg-primary-highlight shadow-2xl group">
      {/* Bookmark body */}
      <div className="bg-white rounded-full w-9 h-9 absolute bottom-[4px] left-[4px] z-30 flex justify-center items-center cursor-pointer">
        <motion.img
          initial={{ y: 0 }}
          animate={{ y: [-4, 4, -5] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "reverse",
          }}
          src="Icons/arrow-left.svg"
          alt="arrow"
          className="mx-auto"
        />
      </div>

      {/* Latest Events & News div - positioned behind and animated on hover */}
      <div className="absolute bottom-0 text-[18px] px-5 py-2 pl-8 left-6 w-[240px] bg-[#ffff]/3 border-[#f1f1f1]/80 border-2 rounded-r-[17.5px] z-10 -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out">
        <HighlightedText size={"18px"}>Latest</HighlightedText> Events & News
      </div>
    </div>
  );
}

export default BookMark;
