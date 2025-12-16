import React from "react";
import { motion } from "framer-motion";
import HighlightedText from "../Utility Components/HighlightedText";

function BannerTemplate({
  heading = "Default Heading",
  highlightedText = "",
  headingSuffix = "",
  description = "Default description",
  maxWidth = "790",
  children,
}) {
  return (
    <div className="z-50 relative text-white flex ">
      {/* Content div */}
      <motion.div
        className={`p-8 md:pl-20 md:pt-20 pt-24 min-w-[${maxWidth}px] flex flex-col gap-4`}
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div>
          <motion.div
            className={`text-4xl lg:text-6xl w-full font-medium capitalize wrap-anywhere`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {heading}{" "}
            {highlightedText && (
              <HighlightedText>{highlightedText}</HighlightedText>
            )}{" "}
            {headingSuffix}
          </motion.div>

          <motion.p
            className="text-base font-normal mt-2.5 py-4 pr-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {description}
          </motion.p>
        </div>

        {/* Children (Buttons/Actions) */}
        {children && (
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {children}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default BannerTemplate;
