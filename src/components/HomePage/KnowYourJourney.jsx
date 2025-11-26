import React, { useEffect, useRef, useState } from "react";
import HighlightedText from "../Utility Components/HighlightedText";
import PathButton from "./PathButton";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { paths } from "@/data/KnowYourJourneyData";

function KnowYourJourney() {
  const [currentPath, setCurrentPath] = useState(null);
  const [previousPath, setPreviousPath] = useState(null);
  const [scrollTo, setScrollTo] = useState(null);
  const pathRef = useRef(null);

  // Function to get direction of transition
  const getTransitionDirection = (currentIndex, previousIndex) => {
    if (previousIndex === null) return 0;
    return currentIndex > previousIndex ? 1 : -1; // 1 for right, -1 for left
  };

  // Function to handle path change
  const handlePathChange = (newPath) => {
    setPreviousPath(currentPath);
    setCurrentPath(newPath);
  };

  useEffect(() => {
    if (!scrollTo) return;

    // Add a delay to wait for the AnimatePresence animation to complete
    const timeoutId = setTimeout(() => {
      const section = document.getElementById(scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100); // 100ms delay allows the element to render

    return () => clearTimeout(timeoutId);
  }, [scrollTo]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (pathRef.current && !pathRef.current.contains(e.target)) {
        setCurrentPath(null);
        setPreviousPath(null);
        setScrollTo("knowYourJourney");
      }
    };
    const container = document.getElementById("containerClass");
    if (container) {
      container.addEventListener("click", handleClickOutside);
    }

    return () => {
      if (container) {
        container.removeEventListener("click", handleClickOutside);
      }
    };
  }, []);

  // Get current and previous indices for direction calculation
  const currentIndex = currentPath
    ? paths.findIndex((p) => p.title === currentPath.title)
    : -1;
  const previousIndex = previousPath
    ? paths.findIndex((p) => p.title === previousPath.title)
    : null;
  const direction = getTransitionDirection(currentIndex, previousIndex);

  return (
    <div id="containerClass" className="w-full px-4 md:px-0">
      <div
        className="mx-auto mt-10 md:mt-26 container w-full md:w-3/4 mb-20 md:mb-45 p-4 md:p-6 rounded-2xl border-2 border-primary flex flex-col items-center justify-center"
        ref={pathRef}
      >
        <div className="flex justify-center items-center gap-2 flex-col text-center">
          <h1
            className="text-3xl md:text-[40px] font-light"
            id="knowYourJourney"
          >
            Know your{" "}
            <HighlightedText weight={600} size={"clamp(30px, 4vw, 40px)"}>
              Journey
            </HighlightedText>
          </h1>
          <p className="text-sm md:text-base px-4 md:px-0">
            Explore your startup's path -- SIIC guides you with support and
            resources.
          </p>
        </div>

        <div
          id="start"
          className="flex flex-row items-center justify-center gap-6 md:gap-18 mt-8 md:mt-10 container flex-wrap"
        >
          {paths.map((path) => (
            <PathButton
              setScrollTo={setScrollTo}
              details={path}
              key={path.title}
              setCurrentPath={handlePathChange}
              currentPath={currentPath?.title}
            />
          ))}
        </div>

        <div className="w-full overflow-hidden">
          <AnimatePresence mode="wait">
            {currentPath !== null && (
              <motion.div
                id={scrollTo}
                key="content-container"
                initial={
                  previousPath === null
                    ? { height: 0, opacity: 0, y: -20 }
                    : false
                }
                animate={{
                  height: "auto",
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  height: 0,
                  opacity: 0,
                  y: -20,
                }}
                transition={
                  previousPath === null
                    ? {
                        duration: 0.6,
                        ease: [0.25, 0.1, 0.25, 1],
                        opacity: { duration: 0.4 },
                        y: { duration: 0.5 },
                      }
                    : { duration: 0 }
                }
                className="w-full"
              >
                <div className="w-full h-auto mt-6 p-0 md:p-4 border-t-0 md:border-t-1 border-black/50 relative">
                  {/* Mobile Separator */}
                  <div className="w-full h-[1px] bg-black/20 mb-6 md:hidden block" />

                  <div className="relative overflow-hidden">
                    <motion.button
                      onClick={() => {
                        setCurrentPath(null);
                        setPreviousPath(null);
                        setScrollTo("knowYourJourney");
                      }}
                      className="absolute top-0 right-0 md:top-2 md:right-3 rounded-full p-2 text-primary z-10"
                      whileHover={{
                        scale: 1.15,
                        rotate: 90,
                        backgroundColor: "rgba(245, 245, 245, 0.8)",
                      }}
                      whileTap={{
                        scale: 0.85,
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                      }}
                    >
                      <X className="transition-colors duration-200 w-6 h-6" />
                    </motion.button>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentPath.title}
                        initial={
                          previousPath !== null
                            ? { x: direction * 100, opacity: 0 }
                            : { opacity: 0, y: 20 }
                        }
                        animate={{ x: 0, opacity: 1, y: 0 }}
                        exit={
                          previousPath !== null
                            ? { x: -direction * 100, opacity: 0 }
                            : { opacity: 0, y: 20 }
                        }
                        transition={{
                          duration: 0.5,
                          ease: [0.25, 0.1, 0.25, 1],
                        }}
                        className="w-full"
                      >
                        <div className="flex flex-col gap-2 my-6 md:my-10 justify-center items-center text-center px-2">
                          <h2 className="text-2xl md:text-4xl font-[600]">
                            {currentPath?.CardContent.title}
                          </h2>
                          <p className="text-sm md:text-base font-medium">
                            {currentPath.CardContent.paragraph
                              .split(" ")
                              .map((word, idx) => {
                                if (word === "to") {
                                  return <span key={idx}>to </span>;
                                } else {
                                  return (
                                    <span key={idx}>
                                      <span className="font-extrabold">
                                        {word[0]}
                                      </span>
                                      {word.slice(1)}{" "}
                                    </span>
                                  );
                                }
                              })}
                          </p>
                        </div>

                        <img
                          src={`/KnowYourJourney/JourneySection/${currentPath.CardContent.RoadmapLink}.svg`}
                          alt={currentPath.CardContent.RoadmapLink}
                          className="w-full h-auto p-0 md:p-20"
                        />

                        <div className="mt-10 flex justify-center items-center gap-6 flex-col text-center">
                          <h2 className="text-2xl md:text-[40px] font-[400]">
                            The{" "}
                            <HighlightedText
                              weight={600}
                              size="clamp(24px, 4vw, 40px)"
                            >
                              Value{" "}
                            </HighlightedText>{" "}
                            we Provide...
                          </h2>

                          <div className="flex gap-4 md:gap-6 justify-center items-center flex-wrap mx-2 md:mx-20">
                            {currentPath.CardContent.values.map(
                              (value, idx) => (
                                <motion.div
                                  key={idx}
                                  className="bg-[rgba(227,227,227,0.4)] h-32 w-32 md:h-38 md:w-38 flex-col gap-3 md:gap-5 rounded-xl flex justify-center items-center p-2 md:p-4"
                                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                  animate={{ opacity: 1, y: 0, scale: 1 }}
                                  transition={{
                                    delay:
                                      previousPath !== null
                                        ? 0.1 + idx * 0.05
                                        : 0.5 + idx * 0.1,
                                    duration: 0.4,
                                    ease: "easeOut",
                                  }}
                                  whileHover={{
                                    y: -5,
                                    transition: { duration: 0.2 },
                                  }}
                                >
                                  <div className="flex justify-center items-center border-primary-highlight border-2 rounded-full bg-white w-12 h-12 md:w-16 md:h-16">
                                    <img
                                      src={`/KnowYourJourney/JourneySection/icons/${value.icon}.svg`}
                                      alt={`${value.title} icon`}
                                      className="w-6 h-6 md:w-auto md:h-auto"
                                    />
                                  </div>
                                  <p className="text-center text-xs md:text-sm">
                                    {value.title}
                                  </p>
                                </motion.div>
                              )
                            )}
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default KnowYourJourney;
