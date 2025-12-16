import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import HighlightedText from "./../Utility Components/HighlightedText";
import AnimatedButton from "./../Utility Components/AnimatedButton";

function LabBanner() {
  return (
    <div className="z-50 relative text-white flex justify-between">
      {/* Content div */}
      <motion.div
        className="p-20 pt-24 flex flex-col gap-4"
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
            Lab Facilities to Realize <br />
            <HighlightedText>your </HighlightedText> Ideas
          </motion.div>

          <motion.p
            className="text-base font-normal mt-2.5 py-4 pr-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            SIIC labs equip startups, transforming innovative ideas into working
            prototypes.
          </motion.p>

          <motion.div
            className="flex gap-4 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {/* Explore Button */}
           
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default LabBanner;
