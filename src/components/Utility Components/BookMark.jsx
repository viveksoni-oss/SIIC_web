import React from "react";
import { motion } from "framer-motion";
import HighlightedText from "./HighlightedText";

function BookMark() {
  return (
    <div className="relative ml-24 -translate-y-3 z-60">
      {/* Bookmark body */}
      <div className="h-26 w-11 rounded-b-2xl rounded-t-lg bg-primary-highlight shadow-2xl group cursor-pointer">
        <div className="bg-white rounded-full w-9 h-9 absolute bottom-[4px] left-[4px] flex justify-center items-center">
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

        {/* Latest Events & News div - positioned below the bookmark */}
        <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 text-[18px] px-5 py-2 w-[240px] bg-white/95 backdrop-blur-sm border-[#f1f1f1]/80 border-2 rounded-[17.5px] opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-[-10px] transition-all duration-500 ease-out shadow-lg z-50">
          <HighlightedText size={"18px"}>Latest</HighlightedText> Events & News
        </div>
      </div>
    </div>
  );
}

export default BookMark;
