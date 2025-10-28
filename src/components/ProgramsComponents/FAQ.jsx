import React, { useState } from "react";
import { motion } from "framer-motion";
import HighlightedText from "../Utility Components/HighlightedText";
import { faqData } from "./../../data/FAQdata";

function FAQ() {
  const [expandedItems, setExpandedItems] = useState(new Set());
  const [isHovered, setIsHovered] = useState(false);
  const toggleExpanded = (id) => {
    setIsHovered(false);
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const shouldTruncate = (text) => {
    return text.length > 100;
  };

  const getTruncatedText = (text) => {
    return text.length > 100 ? text.substring(0, 100) + "..." : text;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="col-span-3 p-6">
      {/* Header Section */}
      <div className="mb-8 ">
        <h1 className="text-[40px] font-thin mb-4">
          Frequently Asked{" "}
          <HighlightedText size={"40px"} weight={700}>
            Questions
          </HighlightedText>
        </h1>
      </div>

      {/* FAQ Items */}
      <div className="relative ">
        <motion.div
          className="max-h-[485px] overflow-y-auto space-y-4 pr-3 scrollbar-container py-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {faqData.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="bg-secondary-gray/30 rounded-2xl  border-gray-100 py-3 px-5"
            >
              {/* Question */}
              <h3 className="text-sm font-semibold text-[#1f1f1f] mb-3 leading-tight">
                {item.question}
              </h3>

              {/* Answer with Read More functionality */}
              <div className="text-gray-600 text-base leading-relaxed">
                <motion.div
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.3 },
                  }}
                  className="overflow-hidden"
                >
                  <p className="mb-2 text-gray-600 text-base leading-relaxed">
                    {expandedItems.has(item.id)
                      ? item.answer
                      : getTruncatedText(item.answer)}

                    {/* Read More / Read Less Button - Inline */}
                    {shouldTruncate(item.answer) && (
                      <motion.button
                        onClick={() => toggleExpanded(item.id)}
                        className="ml-2 text-gray-600 text-sm hover:text-gray-600 font-medium transition-colors duration-200 focus:outline-none underline decoration-1 underline-offset-2"
                        whileHover={{
                          scale: 1.02,
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {expandedItems.has(item.id) ? (
                          <div
                            onMouseEnter={() => setIsHovered(item.id)}
                            onMouseLeave={() => setIsHovered(null)}
                          >
                            {item.id !== isHovered ? (
                              <span>{"Read less >"}</span>
                            ) : (
                              <span className="text-primary-highlight font-semibold italic underline decoration-1 underline-offset-2 ">
                                {"Read less >>"}
                              </span>
                            )}
                          </div>
                        ) : (
                          <div
                            onMouseEnter={() => setIsHovered(item.id)}
                            onMouseLeave={() => setIsHovered(null)}
                          >
                            {item.id !== isHovered ? (
                              <span>{"Read more >"}</span>
                            ) : (
                              <span className="text-primary-highlight font-semibold italic underline decoration-1 underline-offset-2 ">
                                {"Read more >>"}
                              </span>
                            )}
                          </div>
                        )}
                      </motion.button>
                    )}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .scrollbar-container {
          scrollbar-width: thin;
          scrollbar-color: #2d415c transparent;
        }
        .scrollbar-container::-webkit-scrollbar {
          width: 6px;
          background-color: #aaaaaa;
        }

        .scrollbar-container::-webkit-scrollbar-track {
          background: #f3f4f6;
          border-radius: 3px;
          margin: 8px 0;
        }

        .scrollbar-container::-webkit-scrollbar-thumb {
          background: #6b7280;
          border-radius: 10px;
          box-shadow: -3px 0 0 #6b7280, 3px 0 0 #6b7280;
          transition: all 0.3s ease;
        }

        .scrollbar-container::-webkit-scrollbar-button {
          scroll-behavior: smooth;
          width: 0px;
          height: 0px;
        }
      `}</style>
    </div>
  );
}

export default FAQ;
