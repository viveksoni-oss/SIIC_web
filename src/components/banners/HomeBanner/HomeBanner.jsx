import React, { useState } from "react";

import { motion } from "framer-motion";

import ContentSection from "./ContentSection";

function HomeBanner() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="relative text-white flex w-full justify-start">
      {/* Content div */}
      <ContentSection isHovered={isHovered} setIsHovered={setIsHovered} />
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
