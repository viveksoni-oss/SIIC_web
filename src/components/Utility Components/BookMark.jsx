import React, { useState } from "react";
import { motion } from "framer-motion";
import HighlightedText from "./HighlightedText";
import useIsMobile from "./../../Hooks/useIsMobile";
import { useNavigate } from "react-router";

function BookMark() {
  const isMobile = useIsMobile();
  const [isHovered, setIsHovered] = useState(false); // Fixed: was "false" string, should be boolean
  const blinkVariants = {
    animate: {
      color: ["#000000", "#ff8a40", "#000000"],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };
  const navigate = useNavigate();
  return (
    <motion.div
      className="relative ml-24 -translate-y-3 z-40 inline-block"
      whileHover="hover"
      initial="initial"
      onClick={() => navigate("/flash-news")}
    >
      {/* Bookmark body */}
      <div
        className="h-26 w-11 rounded-b-2xl relative rounded-t-lg bg-primary-highlight shadow-[0px_4px_4px_1px_rgba(0,0,0,0.20)] cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => {
          if (isMobile) {
            setIsHovered((prev) => !prev);
          }
        }}
      >
        <div className="bg-white rounded-full w-9 h-9 absolute bottom-[4px] left-[4px] flex justify-center items-center overflow-hidden">
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

        {/* Latest Events & News div - slides out from behind */}
        <motion.div
          className="absolute bottom-1 left-4 pl-10 mr-2 text-[18px] px-4 py-2 w-[260px] -z-10 bg-white/95 border-[#f1f1f1]/80 border-2 rounded-2xl shadow-lg pointer-events-none font-semibold "
          variants={{
            initial: {
              opacity: 0,
              x: -44, // Starts hidden behind the bookmark (width of bookmark is 44px = w-11)
              scale: 0.95,
            },
            hover: {
              opacity: 1,
              x: 0, // Slides out to the left
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 25,
              },
            },
          }}
        >
          <motion.span
            variants={blinkVariants}
            animate="animate"
            className="inline-block "
          >
            Latest
          </motion.span>{" "}
          Events & News
        </motion.div>
      </div>
    </motion.div>
  );
}

export default BookMark;
