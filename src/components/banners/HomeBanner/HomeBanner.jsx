import React, { useState, memo } from "react";
import { motion } from "framer-motion";
import ContentSection from "./ContentSection";

// Animation variants for better reusability and performance
const imageVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      delay: 0.3,
      ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier for smoother easing
    },
  },
};

function HomeBanner() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative flex w-full justify-start text-white">
      <ContentSection isHovered={isHovered} setIsHovered={setIsHovered} />

      <motion.div
        className="absolute right-0 -bottom-20 m-4 hidden rounded-2xl sm:-bottom-26 sm:m-8 md:-bottom-42 md:m-12 lg:m-16 lg:h-[480px] lg:w-[600px] xl:flex xl:max-w-none xl:justify-end 2xl:h-[510px] 2xl:w-[650px]"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <img
          src="/SIIC_building.png"
          alt="SIIC building at IIT Kanpur"
          className="h-auto w-full"
          loading="lazy"
          width="650"
          height="510"
        />
      </motion.div>
    </div>
  );
}

export default memo(HomeBanner);
