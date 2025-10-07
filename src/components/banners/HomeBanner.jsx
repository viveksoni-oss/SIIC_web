import React from "react";
import HighlightedText from "../Utility Components/HighlightedText";
import { motion } from "framer-motion";
import AnimatedButton from "./../Utility Components/AnimatedButton";
import { useNavigate } from "react-router";

function HomeBanner() {
  const navigate = useNavigate();
  return (
    <div className="z-50 relative text-white flex justify-between">
      {/* Content div */}
      <motion.div
        className="p-6 sm:px-10 md:px-16 lg:px-12 2xl:px-20 pt-16 sm:pt-20 md:pt-15 2xl:pt-24 max-w-full sm:max-w-[500px] md:max-w-[550px] 2xl:max-w-[650px] min-h-[400px] sm:min-h-[450px] md:h-[500px] flex flex-col gap-3 sm:gap-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.img
          src="logo1.svg"
          alt="logo"
          className="shrink-0 self-start w-24 sm:w-28 md:w-32 lg:w-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        <div>
          <motion.div
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl w-full font-medium capitalize"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We incubate <HighlightedText>your</HighlightedText> innovations
          </motion.div>

          <motion.p
            className="text-sm sm:text-base font-normal mt-2 sm:mt-2.5 py-2 sm:py-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            From crazy concepts to real impact — we're with you at every step of
            the startup journey.
          </motion.p>
        </div>

        <motion.div
          className="flex  gap-4 sm:gap-6 md:gap-8 lg:gap-11 text-sm sm:text-base justify-start mt-3 sm:mt-5 font-semibold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.button className="border-2 rounded-full px-4 py-0 sm:px-5 sm:py-2.5 md:px-6 md:py-3 hover:bg-white text-xs sm:text-sm transition-colors duration-700 ease-in-out hover:text-black hover:border-white">
            Incubate with us
          </motion.button>

          <motion.button
            onClick={() => navigate("/programs")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatedButton>Active programs</AnimatedButton>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Banner Image - Coming from bottom */}
      <motion.div
        className="rounded-2xl absolute right-0 -bottom-20 sm:-bottom-25 md:-bottom-30 m-4 sm:m-8 md:m-12 lg:m-16 z-50 hidden xl:block max-w-[400px] lg:max-w-[500px] xl:max-w-none"
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
          alt="siic building picture"
          className="w-full h-auto"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </div>
  );
}

export default HomeBanner;
