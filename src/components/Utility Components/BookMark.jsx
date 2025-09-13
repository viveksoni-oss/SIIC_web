import React from "react";
import { motion } from "framer-motion";

function BookMark() {
  return (
    <div className="h-26 w-11 rounded-b-2xl relative rounded-t-lg ml-24 -translate-y-3 bg-primary-highlight">
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
          className="mx-auto "
        />
      </div>
    </div>
  );
}

export default BookMark;
