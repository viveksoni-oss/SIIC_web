import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SepratorLine from "./../Utility Components/SepratorLine";

const AUTO_SCROLL_DELAY = 5000;

const eventsData = [
  {
    id: 1,
    title: "Abhivyakti",
    description:
      "Abhivyakti by SIIC IIT Kanpur – Celebrating transformative startup success 20+ years of pioneering incubation.",
    location: "IIT Kanpur",
    date: "15-12-2025",
    time: "10:00 AM",
    image: "/UpcomingEvents/Abhivyakti.svg  ",
  },
  {
    id: 2,
    title: "Tech Summit 2025",
    description:
      "Annual technology summit bringing together industry leaders and innovators.",
    location: "Main Auditorium",
    date: "20-01-2026",
    time: "09:00 AM",
    image: "/UpcomingEvents/Abhivyakti.svg", // Assuming this exists or use placeholder
  },
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

function UpcomingEventsMobile() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [paused, setPaused] = useState(false);

  // Calculate current index safely
  const index = Math.abs(page % eventsData.length);
  const currentEvent = eventsData[index];

  // Navigation Handlers
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const setPageIndex = (newIndex) => {
    const newDirection = newIndex > index ? 1 : -1;
    setPage([newIndex, newDirection]);
  };

  // Auto-scroll functionality
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      paginate(1);
    }, AUTO_SCROLL_DELAY);
    return () => clearInterval(interval);
  }, [page, paused]);

  return (
    <div
      // Updated container: max-w-md for mobile, max-w-2xl for tablet (md), hidden on large (lg)
      className="w-full max-w-md md:max-w-2xl mx-auto px-4 my-16 lg:hidden block"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <div className="bg-secondary-gray/40 rounded-xl border border-secondary-gray/50 p-6 md:p-8 overflow-hidden relative min-h-[700px] flex flex-col">
        {/* Carousel Content Area */}
        <div className="relative flex-grow">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="flex flex-col gap-6 w-full h-full items-center" // Added items-center to center the image
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x;
                if (swipe < -10000) {
                  paginate(1);
                } else if (swipe > 10000) {
                  paginate(-1);
                }
              }}
            >
              {/* Header Section */}
              <div className="space-y-3 w-full">
                <h1 className="flex gap-3 items-center text-xl md:text-2xl font-bold text-gray-800">
                  <span className="flex-shrink-0">
                    <div className="bg-primary rounded-full w-5 h-5 flex justify-center items-center">
                      <div className="bg-white rounded-full w-2.5 h-2.5"></div>
                    </div>
                  </span>
                  <span className="text-primary">{currentEvent.title}</span>
                </h1>

                <p className="text-sm md:text-base text-gray-600 leading-relaxed line-clamp-3">
                  {currentEvent.description}
                </p>
              </div>

              {/* Info Grid */}
              <div className="bg-white/50 rounded-lg p-4 flex justify-between items-center w-full text-sm md:text-base shadow-sm">
                <div className="flex flex-col items-center gap-1 min-w-[60px]">
                  <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                    Date
                  </span>
                  <span className="font-medium text-gray-800 text-center">
                    {currentEvent.date}
                  </span>
                </div>

                <div className="h-10 mx-2">
                  <SepratorLine className="h-full w-[1px] bg-gray-300" />
                </div>

                <div className="flex flex-col items-center gap-1 min-w-[80px]">
                  <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                    Location
                  </span>
                  <span className="font-medium text-gray-800 text-center line-clamp-1">
                    {currentEvent.location}
                  </span>
                </div>

                <div className="h-10 mx-2">
                  <SepratorLine className="h-full w-[1px] bg-gray-300" />
                </div>

                <div className="flex flex-col items-center gap-1 min-w-[60px]">
                  <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                    Time
                  </span>
                  <span className="font-medium text-gray-800 text-center">
                    {currentEvent.time}
                  </span>
                </div>
              </div>

              {/* Image Section with FIXED dimensions */}
              <div className="flex-grow flex items-center justify-center py-4">
                <img
                  src={currentEvent.image}
                  // Enforcing 250px width and 300px height strictly
                  className="w-[250px] h-[300px] rounded-2xl object-cover bg-red-100 shadow-md"
                  alt={currentEvent.title}
                  draggable="false"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Custom Dot Navigation */}
        <div className="flex justify-center items-center gap-3 mt-4 pt-2 z-10">
          {eventsData.map((_, idx) => {
            const isActive = idx === index;
            return (
              <button
                key={idx}
                onClick={() => setPageIndex(idx)}
                className="focus:outline-none group p-1"
                aria-label={`Go to slide ${idx + 1}`}
              >
                {/* Outer Circle */}
                <motion.div
                  initial={false}
                  animate={{
                    backgroundColor: isActive ? "white" : "transparent",
                    borderColor: "#e3e3e3",
                  }}
                  className={`rounded-full flex justify-center items-center border-2 transition-colors duration-300
                    ${isActive ? "w-4 h-4" : "w-2 h-2 "}
                  `}
                >
                  {/* Inner Circle (Only visible when active) */}
                  {isActive && (
                    <motion.div
                      layoutId="activeDot"
                      className="bg-primary-highlight rounded-full w-[11px] h-[11px]"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    />
                  )}
                </motion.div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default UpcomingEventsMobile;
