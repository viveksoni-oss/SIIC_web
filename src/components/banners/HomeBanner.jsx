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
        className="p-20 pt-24 max-w-[650px] h-[500px] flex flex-col gap-4"
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
            className="text-5xl w-full font-medium capitalize md:text4xl lg:text-5xl 2xl:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We incubate <HighlightedText>your</HighlightedText> innovations
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
            className="border-2 rounded-full  hover:bg-white text-xs transition-colors duration-700 ease-in-out hover:text-black hover:border-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              scale: { duration: 0.2, ease: "easeInOut" },
            }}
          >
            <span className="hover:scale-110 duration-300 inline-block">
              Incubate with us
            </span>
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
        className="rounded-2xl absolute right-0 -bottom-30 m-16 z-50 hidden xl:block "
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
