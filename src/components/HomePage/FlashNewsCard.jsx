import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import useIsMobile from "@/Hooks/useIsMobile";

// Animation variants for better organization
const cardVariants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const bottomBarVariants = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  hover: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const iconVariants = {
  initial: {
    scale: 1,
    rotate: 0,
  },
  hover: {
    scale: 1.1,

    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

function FlashNewsCard({ newsDetail }) {
  const isMobile = useIsMobile();
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const navigate = useNavigate();
  // Handle navigation to news article
  const handleCardClick = () => {
    if (newsDetail.link) {
      window.open(newsDetail.link, "_blank", "noopener,noreferrer");
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleCardClick();
    }
  };

  return (
    <motion.article
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="link"
      aria-label={`Read more about ${newsDetail.title}`}
      className="border-[#F1F1F1] border-[1.5px] mx-auto shadow-2xs relative box-border rounded-[10px] overflow-hidden md:w-[385px]  sm:max-w-[420px] sm:min-w-[300px] sm:w-full flex flex-col items-center justify-start p-4 md:p-3 lg:p-4 gap-4 cursor-pointer transition-all duration-300 ease-out hover:bg-[#e3e3e3]/20 hover:shadow-lg hover:border-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 group"
    >
      {/* Image Container with Loading State */}
      <div className="relative w-full aspect-video bg-gray-100 rounded-lg overflow-hidden">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-gray-300 border-t-primary rounded-full animate-spin" />
          </div>
        )}

        {imageError ? (
          <div className="absolute inset-0 flex  items-center justify-center bg-gray-200">
            <svg
              className="w-12 h-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        ) : (
          <motion.img
            src={newsDetail.imageLink}
            alt={newsDetail.title || "News image"}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={() => {
              setImageError(true);
              setImageLoaded(true);
            }}
            loading="lazy"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </div>

      {/* Title */}
      <h3 className="font-[500] text-base md:text-sm lg:text-base text-left w-full line-clamp-2 min-h-[3rem] text-gray-800 group-hover:text-gray-900 transition-colors duration-200">
        {newsDetail.title}
      </h3>

      {/* Additional metadata (optional - add if available) */}
      {(newsDetail.date || newsDetail.category) && (
        <div className="flex flex-wrap gap-2 w-full text-xs text-gray-500">
          {newsDetail.category && (
            <span className="px-2 py-1 bg-gray-100 rounded-full">
              {newsDetail.category}
            </span>
          )}
          {newsDetail.date && (
            <span className="flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
              {newsDetail.date}
            </span>
          )}
        </div>
      )}

      {/* External Link Icon */}
      <a
        className="flex flex-row justify-end items-center w-full z-20"
        href={newsDetail.externalLink}
        target="_blank"
      >
        <motion.div
          variants={iconVariants}
          className="relative  w-8 h-8 md:w-6 md:h-6 lg:w-8 lg:h-8"
        >
          {!isMobile ? (
            <>
              {/* Default Icon */}
              <motion.img
                src="Icons/external-link.svg"
                alt=""
                aria-hidden="true"
                className="absolute pointer inset-0 w-full h-full transition-opacity duration-300 ease-in-out"
                style={{ opacity: isHovered ? 0 : 1 }}
              />

              {/* Hover Icon */}
              <motion.img
                src="Icons/hover-icons/external-link-hover.svg"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full transition-opacity duration-300 ease-in-out"
                style={{ opacity: isHovered ? 1 :0  }}
              />
            </>
          ) : (
            <motion.img
              src="Icons/external-link.svg"
              alt=""
              aria-hidden="true"
              className="absolute pointer inset-0 w-full h-full transition-opacity duration-300 ease-in-out"
            />
          )}
        </motion.div>
      </a>

      {/* Smooth bottom bar animation */}
      {!isMobile && (
        <motion.div
          variants={bottomBarVariants}
          className="bg-primary w-full h-14 md:h-10 lg:h-14 absolute bottom-0 left-0 z-10"
          aria-hidden="true"
        />
      )}
    </motion.article>
  );
}

// PropTypes for better type checking (optional but recommended)
FlashNewsCard.propTypes = {
  newsDetail: (props, propName, componentName) => {
    const newsDetail = props[propName];
    if (!newsDetail || typeof newsDetail !== "object") {
      return new Error(
        `Invalid prop \`${propName}\` supplied to \`${componentName}\`. Expected an object.`
      );
    }
    if (!newsDetail.title || typeof newsDetail.title !== "string") {
      return new Error(
        `Invalid prop \`${propName}.title\` supplied to \`${componentName}\`. Expected a string.`
      );
    }
    if (!newsDetail.imageLink || typeof newsDetail.imageLink !== "string") {
      return new Error(
        `Invalid prop \`${propName}.imageLink\` supplied to \`${componentName}\`. Expected a string.`
      );
    }
  },
};

export default FlashNewsCard;
