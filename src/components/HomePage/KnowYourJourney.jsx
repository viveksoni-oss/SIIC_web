import React, { useEffect, useRef, useState } from "react";
import HighlightedText from "../Utility Components/HighlightedText";
import PathButton from "./PathButton";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function KnowYourJourney() {
  const [currentPath, setCurrentPath] = useState(null);
  const [previousPath, setPreviousPath] = useState(null);
  const [scrollTo, setScrollTo] = useState(null);
  const pathRef = useRef(null);

  const paths = [
    {
      title: "idea",
      content: "idea content",
      path: "Bulb.svg",
      hoverPath: "bulb-hover.svg",
      CardContent: {
        title: "Ideation",
        paragraph: "Technological Readiness Level - 1 to 3",
        RoadmapLink: "Ideation",
        values: [
          { title: "Mentorship", icon: "Mentorship" },
          { title: "Lab-Facilities", icon: "Lab-Facilities" },
          { title: "Investments", icon: "Investments" },
        ],
      },
    },
    {
      title: "Prototype",
      content: "Prototype content",
      path: "Prototype.svg",
      hoverPath: "prototype-hover.svg",
      CardContent: {
        title: "Prototype Development",
        paragraph: "Technological Readiness Level - 4 to 6",
        RoadmapLink: "Prototype",
        values: [
          { title: "Mentorship", icon: "Mentorship" },
          { title: "Lab-facilities", icon: "Lab-Facilities" },
          { title: "Investments", icon: "Investments" },
          { title: "Office-Facilities", icon: "Office-Facilities" },
        ],
      },
    },
    {
      title: "Scale up",
      content: "Market",
      path: "ScaleUp.svg",
      hoverPath: "scaleUp-hover.svg",
      CardContent: {
        title: "Scale Up",
        paragraph: "Technological Readiness Level - 7 to 9",
        RoadmapLink: "ScaleUp",
        values: [
          { title: "Mentorship", icon: "Mentorship" },
          { title: "Lab-Facilities", icon: "Lab-Facilities" },
          { title: "Investments", icon: "Investments" },
          { title: "Office - Facilities", icon: "Office-Facilities" },
          { title: "Portfolio Manager", icon: "Portfolio Manager" },
          { title: "Legal Compliance", icon: "Legal Compliance" },
          { title: "Media & Branding", icon: "Media & Branding" },
        ],
      },
    },
    {
      title: "Market",
      content: "Market content",
      path: "moneyDollar.svg",
      hoverPath: "moneyDollar-hover.svg",
      CardContent: {
        title: "Market Ready",
        paragraph: "Technological Readiness Level - 9+",
        RoadmapLink: "Market",
        values: [
          { title: "Mentorship", icon: "Mentorship" },
          { title: "Lab-Facilities", icon: "Lab-Facilities" },
          { title: "Investments", icon: "Investments" },
          { title: "Office - Facilities", icon: "Office-Facilities" },
          { title: "Portfolio Manager", icon: "Portfolio Manager" },
          { title: "Legal Compliance", icon: "Legal Compliance" },
          { title: "Media & Branding", icon: "Media & Branding" },
          { title: "Global Connect", icon: "Global Connect" },
        ],
      },
    },
  ];
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
    container.addEventListener("click", handleClickOutside);

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
    <div id="containerClass" className="w-full">
      <div
        className="mx-auto mt-26 container w-3/4 mb-45  p-6 rounded-2xl border-2 border-primary flex flex-col items-center justify-center"
        ref={pathRef}
      >
        <div className="flex justify-center items-center gap-2 flex-col">
          <h1 className="text-[40px] font-light" id="knowYourJourney">
            Know your{" "}
            <HighlightedText weight={600} size={"40px"}>
              Journey
            </HighlightedText>
          </h1>
          <p>
            Explore your startup's path -- SIIC guides you with support and
            resources.
          </p>
        </div>

        <div
          id="start"
          className="flex flex-row items-center justify-center gap-18 mt-10 container flex-wrap "
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
                <div className="w-full h-auto mt-6 p-4 border-t-1 border-black/50 relative">
                  <div className="relative overflow-hidden">
                    <motion.button
                      onClick={() => {
                        setCurrentPath(null);
                        setPreviousPath(null);
                      }}
                      className="absolute top-2 right-3 rounded-full p-2 text-primary"
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
                      <X className="transition-colors duration-200" />
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
                        <div className="flex flex-col gap-2 my-10 justify-center items-center">
                          <h2 className="text-4xl font-[600]">
                            {currentPath?.CardContent.title}
                          </h2>
                          <p className="text-base font-medium">
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
                          className="w-full h-auto p-20"
                        />

                        <div className="mt-10 flex justify-center items-center gap-6 flex-col">
                          <h2 className="text-[40px] font-[400]">
                            The{" "}
                            <HighlightedText weight={600} size="40px">
                              Value{" "}
                            </HighlightedText>{" "}
                            we Provide...
                          </h2>

                          <div className="flex gap-6 justify-center items-center flex-wrap mx-20">
                            {currentPath.CardContent.values.map(
                              (value, idx) => (
                                <motion.div
                                  key={idx}
                                  className="bg-[rgba(227,227,227,0.4)] h-38 flex-col gap-5 w-38 rounded-xl flex justify-center items-center p-4"
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
                                  <div className="flex justify-center items-center border-primary-highlight border-2 rounded-full bg-white w-16 h-16">
                                    <img
                                      src={`/KnowYourJourney/JourneySection/icons/${value.icon}.svg`}
                                      alt={`${value.title} icon`}
                                    />
                                  </div>
                                  <p className="text-center text-sm">
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
