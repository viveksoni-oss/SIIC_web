import React, { useEffect, useRef, useState } from "react";
import HighlightedText from "../Utility Components/HighlightedText";
import PathButton from "./PathButton";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function KnowYourJourney() {
  const [currentPath, setCurrentPath] = useState(null);
  const [previousPath, setPreviousPath] = useState(null);
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
    const handleClickOutside = (e) => {
      if (pathRef.current && !pathRef.current.contains(e.target)) {
        setCurrentPath(null);
        setPreviousPath(null);
      }
    };

    document
      .getElementById("containerClass")
      .addEventListener("click", handleClickOutside);

    return () => {
      document
        .getElementById("containerClass")
        .removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Get current and previous inkkjdices for direction calculation
  const currentIndex = currentPath
    ? paths.findIndex((p) => p.title === currentPath.title)
    : -1;
  const previousIndex = previousPath
    ? paths.findIndex((p) => p.title === previousPath.title)
    : null;
  const direction = getTransitionDirection(currentIndex, previousIndex);

  return (
    <div className="w-full " id="containerClass">
      <div
        className="mx-auto mt-26 max-w-5xl mb-45 w-full p-6 rounded-2xl border-2 border-primary flex flex-col items-center justify-center"
        ref={pathRef}
      >
        <div className="flex justify-center items-center gap-2 flex-col">
          <h1 className="text-[40px] font-light">
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

        <div className="flex flex-row items-center justify-center gap-18 mt-10 w-full">
          {paths.map((path) => (
            <PathButton
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
                  <motion.button
                    onClick={() => {
                      setCurrentPath(null);
                      setPreviousPath(null);
                    }}
                    className="hover:scale-110 duration-300 absolute top-2 right-3 ease-in-out hover:bg-neutral-100 rounded-full p-2 text-primary"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <X />
                  </motion.button>

                  <div className="relative overflow-hidden">
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
                          className="w-full h-auto"
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
