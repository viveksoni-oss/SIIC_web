import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HighlightedText from "../Utility Components/HighlightedText";

function FAQ({ faqData }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <div className="col-span-3 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-[40px] font-thin mb-4">
          Frequently Asked{" "}
          <HighlightedText size={"40px"} weight={700}>
            Questions
          </HighlightedText>
        </h1>
      </div>

      {/* FAQ Items */}
      <div className="relative">
        <motion.div
          className="max-h-[485px] overflow-y-auto space-y-4 pr-3 scrollbar-container py-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-secondary-gray/30 rounded-2lx border border-gray-100"
              >
                {/* Question row */}
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between py-3 px-5 text-left"
                >
                  <h3 className="text-sm font-semibold text-[#1f1f1f] leading-tight">
                    {item.question}
                  </h3>
                  <motion.span
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="ml-4 text-gray-600 text-xl font-semibold"
                  >
                    {isOpen ? "-" : "+"}
                  </motion.span>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-4 text-gray-600 text-sm md:text-base leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

export default FAQ;
