import React from "react";
import { motion } from "framer-motion";
import HighlightedText from "../Utility Components/HighlightedText";

function BannerTemplate({
  heading = "Default Heading",
  highlightedText = "",
  headingSuffix = "",
  description = "Default description",
  children,
}) {
  return (
    // Container: Vertically centered (items-center), Left aligned (justify-start)
    <div className="relative text-white flex w-full min-h-[70vh] pt-16 md:pt-10 lg:pt-12 justify-start z-50">
      <motion.div
        // Layout: Left aligned items, Left aligned text
        // Padding: Progressive padding from left (sm:px-12, lg:pl-32) to create that "good spacing"
        className="flex flex-col gap-6 px-6 sm:px-12 md:px-16 lg:pl-24 max-w-5xl w-full items-start text-left"
        // Animation: Bottom Up (y: 60 -> y: 0)
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="w-full">
          <motion.div
            // Text Size: Progressive scaling pattern
            className="font-medium leading-tight capitalize text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {heading}{" "}
            {highlightedText && (
              <HighlightedText>{highlightedText}</HighlightedText>
            )}{" "}
            {headingSuffix}
          </motion.div>

          <motion.p
            // Description: Left aligned, specific max-width for readability
            className="font-normal mt-6 text-base sm:text-lg md:text-xl max-w-2xl text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {description}
          </motion.p>
        </div>

        {/* Children (Buttons): Left aligned */}
        {children && (
          <motion.div
            className="flex flex-wrap gap-4 sm:gap-6 justify-start mt-4 font-semibold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {children}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default BannerTemplate;
