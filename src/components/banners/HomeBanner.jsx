import React from "react";
import HighlightedText from "../Utility Components/HighlightedText";
import { motion } from "framer-motion";

function HomeBanner() {
  return (
    <div className="z-50 relative text-white flex justify-between">
      {/* Content div */}
      <motion.div
        className="p-20 pt-24 max-w-[650px] flex flex-col gap-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.img
          src="logo1.svg"
          alt="logo"
          className="shrink-0 self-start"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        <div>
          <motion.div
            className="text-6xl w-full font-medium capitalize"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We incubate <HighlightedText size={"60px"}>your</HighlightedText>{" "}
            innovations
          </motion.div>

          <motion.p
            className="text-base font-normal mt-2.5 py-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            From crazy concepts to real impact — we're with you at every step of
            the startup journey.
          </motion.p>
        </div>

        <motion.div
          className="flex gap-11 text-base justify-start mt-5 font-semibold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.button
            className="border-1 rounded-full px-8 py-3 hover:bg-white ease-in-out duration-300 hover:text-black hover:border-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="hover:scale-110 duration-300">
              Incubate with us
            </span>
          </motion.button>
          <motion.button
            className="border-1 rounded-full px-8 py-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Active Programs
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Banner Image - Coming from bottom */}
      <motion.div
        className="rounded-2xl absolute right-0 m-16 z-50 hidden lg:block"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          delay: 0.3,
          ease: "easeOut",
        }}
      >
        <motion.img
          src="/SIIC_building.png"
          alt="siic building picture hidden lg:block"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </div>
  );
}

export default HomeBanner;
