import React, { useState, useEffect, useRef, useCallback } from "react";
import HighlightedText from "./../Utility Components/HighlightedText";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router";

const AUTO_SCROLL_DELAY = 5000; // Increased to 5 seconds for better UX
const ANIMATION_DURATION = 0.6;

const eventsData = [
  {
    id: 1,
    title: "Abhivyakti",
    description: `Abhivyakti by SIIC IIT Kanpur – Celebrating transformative startup success 20+ years of pioneering  incubation, uniting ecosystem enablers to showcase futuristic innovations.`,
    location: "IIT Kanpur",
    date: "19-22 March 2026",
    time: "10:00 AM",
    image: "/UpcomingEvents/Abhivyakti.svg",
  },
  {
    id: 2,
    title: "TechFest 2025",
    description:
      "Annual technical festival showcasing innovation and technology breakthroughs from across the nation...",
    location: "IIT Bombay",
    date: "22-04-2025",
    time: "09:00 AM",
    image: "/UpcomingEvents/Abhivyakti.svg",
  },
];

// Animation variants for better organization
const imageVariants = {
  initial: {
    y: 100,
    opacity: 0,
    scale: 0.9,
    filter: "blur(10px)",
  },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
  },
  exit: {
    y: -100,
    opacity: 0,
    scale: 0.9,
    filter: "blur(10px)",
  },
};

const contentVariants = {
  initial: {
    y: 40,
    opacity: 0,
    filter: "blur(4px)",
  },
  animate: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
  },
  exit: {
    y: -40,
    opacity: 0,
    filter: "blur(4px)",
  },
};

const detailsVariants = {
  initial: {
    rotateX: 90,
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  animate: {
    rotateX: 0,
    opacity: 1,
    y: 0,
    scale: 1,
  },
  exit: {
    rotateX: -90,
    opacity: 0,
    y: -30,
    scale: 0.95,
  },
};

function UpcomingEvents() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [direction, setDirection] = useState(1); // Track direction for better animations

  const containerRef = useRef(null);
  const autoScrollTimerRef = useRef(null);

  // Intersection Observer with improved configuration
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.3, // Reduced threshold for earlier trigger
        rootMargin: "0px 0px -100px 0px", // Trigger slightly before fully visible
      }
    );

    const currentContainer = containerRef.current;
    if (currentContainer) {
      observer.observe(currentContainer);
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
    };
  }, []);

  // Improved auto-scroll with proper cleanup
  useEffect(() => {
    if (!isHovered && isInView) {
      autoScrollTimerRef.current = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prevIndex) =>
          prevIndex === eventsData.length - 1 ? 0 : prevIndex + 1
        );
      }, AUTO_SCROLL_DELAY);
    }

    return () => {
      if (autoScrollTimerRef.current) {
        clearInterval(autoScrollTimerRef.current);
      }
    };
  }, [isHovered, isInView]);

  // Optimized dot click handler with useCallback
  const handleDotClick = useCallback(
    (index) => {
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
    },
    [currentIndex]
  );

  // Keyboard navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isInView) return;

      if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        setDirection(-1);
        setCurrentIndex((prev) =>
          prev === 0 ? eventsData.length - 1 : prev - 1
        );
      } else if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        setDirection(1);
        setCurrentIndex((prev) =>
          prev === eventsData.length - 1 ? 0 : prev + 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isInView]);

  const currentEvent = eventsData[currentIndex];

  const navigate = useNavigate();
  return (
    <motion.div
      className="w-full pb-50 overflow-hidden relative lg:block hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Image and Navigation Dots Section */}
      <div className="absolute right-20 translate-y-1/6 flex gap-18 justify-between z-20">
        <div className="relative w-full">
          <div className="rounded-2xl overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.img
                key={currentEvent.id}
                src={currentEvent.image}
                alt={`${currentEvent.title} event banner`}
                variants={imageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                custom={direction}
                transition={{
                  duration: ANIMATION_DURATION,
                  ease: [0.43, 0.13, 0.23, 0.96],
                  opacity: { duration: ANIMATION_DURATION * 0.5 },
                  scale: { duration: ANIMATION_DURATION * 0.6 },
                  filter: { duration: ANIMATION_DURATION * 0.4 },
                }}
                className="max-w-full h-auto relative"
                loading="lazy"
              />
            </AnimatePresence>
          </div>
        </div>

        {/* Vertical carousel indicator dots */}
        <nav
          className="flex flex-col justify-center gap-3 ml-2 z-30"
          aria-label="Event navigation"
          role="tablist"
        >
          {eventsData.map((event, index) => (
            <motion.button
              key={event.id}
              onClick={() => handleDotClick(index)}
              className={`w-[20px] h-[20px] rounded-full bg-white border-2 border-secondary-gray flex items-center justify-center cursor-pointer transition-all duration-300 focus:outline-none  focus:ring-primary-highlight focus:ring-offset-2`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to ${event.title}`}
              aria-selected={index === currentIndex}
              role="tab"
            >
              <div
                className={`w-[12px] h-[12px] rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-primary-highlight" : "bg-white"
                }`}
              ></div>
            </motion.button>
          ))}
        </nav>
      </div>

      {/* Main Content Section */}
      <div className="mx-16 flex flex-col gap-8">
        <motion.h1
          className="flex gap-2 flex-wrap"
          style={{ fontSize: "48px", fontWeight: 200 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Upcoming{" "}
          <HighlightedText size="48px" weight={800}>
            Events
          </HighlightedText>
        </motion.h1>

        <motion.div
          ref={containerRef}
          className="rounded-2xl bg-gray-100 pt-6 pb-8 pl-18 pr-6 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          role="region"
          aria-label="Event details"
          aria-live="polite"
        >
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentEvent.id}
                variants={contentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                custom={direction}
                transition={{
                  duration: ANIMATION_DURATION,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  opacity: { duration: ANIMATION_DURATION * 0.4 },
                  filter: { duration: ANIMATION_DURATION * 0.3 },
                }}
              >
                {/* Event Title */}
                <div className="flex items-center gap-2 -ml-6 text-base font-[600]">
                  <div className="w-5 aspect-square bg-black flex justify-center items-center rounded-full flex-shrink-0">
                    <div className="w-2.5 aspect-square bg-white rounded-full"></div>
                  </div>
                  <h2 className="text-lg font-semibold">
                    {currentEvent.title}
                  </h2>
                </div>

                {/* Event Description */}
                <p className="font-medium mt-4   text-gray-700">
                  <span className="line-clamp-2">
                    {currentEvent.description}
                  </span>

                  <button
                    onClick={() => navigate("/upcoming-events")}
                    className="font-semibold ml-2 text-primary-highlight cursor-pointer hover:underline focus:outline-none focus:ring-2 focus:ring-primary-highlight rounded transition-all"
                    aria-label={`Learn more about ${currentEvent.title}`}
                  >
                    Know More {">>"}
                  </button>
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Event Details - Location, Date, Time */}
            <div className="flex gap-4 xl:gap-16 items-start mt-12 w-full overflow-hidden min-h-[60px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={`${currentEvent.id}-details`}
                  className="flex gap-8 md:gap-16 w-full"
                  variants={detailsVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  custom={direction}
                  transition={{
                    duration: ANIMATION_DURATION * 0.7,
                    ease: [0.34, 1.56, 0.64, 1],
                    opacity: { duration: ANIMATION_DURATION * 0.5 },
                    scale: { duration: ANIMATION_DURATION * 0.5 },
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "1000px",
                  }}
                >
                  <div className="flex justify-center items-center gap-2 flex-col flex-1">
                    <div className="font-bold text-sm text-gray-600">
                      Location
                    </div>
                    <div className="text-center text-sm ">
                      {currentEvent.location}
                    </div>
                  </div>
                  <div className="h-12 border-l-2 border-gray-300"></div>
                  <div className="flex justify-center items-center gap-2 flex-col flex-1">
                    <div className="font-bold text-sm text-gray-600">Date</div>
                    <div className="text-center text-sm ">
                      {currentEvent.date}
                    </div>
                  </div>
                  <div className="h-12 border-l-2 border-gray-300"></div>
                  <div className="flex justify-center items-center gap-2 flex-col flex-1">
                    <div className="font-bold text-sm text-gray-600">Time</div>
                    <div className="text-center text-sm ">
                      {currentEvent.time}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Progress Bar */}
          {!isHovered && isInView && (
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-primary-highlight"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: AUTO_SCROLL_DELAY / 1000,
                ease: "linear",
              }}
              key={currentIndex}
            />
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default UpcomingEvents;
