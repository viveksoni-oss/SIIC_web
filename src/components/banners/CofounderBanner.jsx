import React from "react";
import { motion } from "framer-motion";
import HighlightedText from "../Utility Components/HighlightedText";

function CofounderBanner() {
  return (
    <div className="z-50 relative text-white flex justify-between">
      {/* Content div */}
      <motion.div
        className="p-20 pt-16 max-w-[765px] flex flex-col gap-4"
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div>
          <motion.div
            className="text-2xl lg:text-[50px] w-full font-medium capitalize"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Co-founders to Achieve
            <HighlightedText>Your</HighlightedText> Innovation.
          </motion.div>

          <motion.p
            className="text-base font-normal mt-2.5 py-4 pr-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            SIIC connects innovators to find their co-founders, accelerating
            ventures through shared expertise.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}

export default CofounderBanner;
