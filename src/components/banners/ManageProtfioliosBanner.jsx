import React from "react";
import { motion } from "framer-motion";
import HighlightedText from "../Utility Components/HighlightedText";

function ManagePortfoliosBanner() {
  return (
    <div className="z-50 relative text-white flex justify-between">
      {/* Content div */}
      <motion.div
        className="p-20 pt-24  flex flex-col gap-4"
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div>
          <motion.div
            className="text-2xl md:text-4xl lg:text-[56px] w-full font-medium capitalize"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Portfolio Manager Guiding <br />
            <HighlightedText size="56px"> Your</HighlightedText> Growth
          </motion.div>

          <motion.p
            className="text-base font-normal mt-2.5 py-4 pr-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            SIIC labs equip startups, transforming innovative ideas into <br />{" "}
            working prototypes.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}

export default ManagePortfoliosBanner;
