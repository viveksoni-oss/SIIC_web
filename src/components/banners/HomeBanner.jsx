import React, { useState } from "react";
import HighlightedText from "../Utility Components/HighlightedText";
import { motion } from "framer-motion";
import AnimatedButton from "./../Utility Components/AnimatedButton";
import { useNavigate } from "react-router";
import AnimatedLogo from "./../LogoAnimation/Logo";

function HomeBanner() {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="relative text-white flex w-full justify-start">
      {/* Content div */}
      <motion.div
        className="p-6 sm:px-10 md:px-16 lg:px-12 2xl:px-20 pt-16 sm:pt-20 md:pt-15 2xl:pt-24 max-w-full sm:max-w-[500px] md:max-w-[550px] 2xl:max-w-[650px] min-h-[400px] sm:min-h-[450px] md:h-[500px] flex flex-col gap-3 sm:gap-4 -mt-9"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <AnimatedLogo
          setIsHovered={setIsHovered}
          isHovered={isHovered}
        ></AnimatedLogo>
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
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="border-2 rounded-full px-[30px] py-[14px] flex items-center justify-center 
             hover:bg-white text-sm xl:text-base text-center 
             transition-colors duration-100 ease-in-out 
             hover:text-black hover:border-white 
             w-[203px] h-[46px]"
            >
              {" "}
              Incubate with us
            </div>
          </motion.button>

          <motion.div
            onClick={() => navigate("/programs")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatedButton>Active programs</AnimatedButton>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Banner Image - Coming from bottom */}
      <motion.div
        className="rounded-2xl absolute right-0 -bottom-20 sm:-bottom-26 md:-bottom-42 m-4 sm:m-8 md:m-12 lg:m-16 hidden lg:w-[600px] lg:h-[480px] 2xl:w-[650px] 2xl:h-[510px] xl:max-w-none xl:flex xl:justify-end "
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
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </div>
  );
}

export default HomeBanner;
