import React, { useState, useEffect } from "react";
import HighlightedText from "./../Utility Components/HighlightedText";
import { motion, AnimatePresence } from "framer-motion";

// Configurable auto-scroll time (in milliseconds)
const AUTO_SCROLL_DELAY = 2000; // 5 seconds - change this value to adjust timing
//opacity of the texts
//size
//the alignment of the text in
const eventsData = [
  {
    id: 1,
    title: "Abhivyakti 26",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi officia inventore consectetur architecto quae tempora...",
    location: "IIT Kanpur",
    date: "15-03-2025",
    time: "10:00 AM",
  },
  {
    id: 2,
    title: "TechFest 2025",
    description:
      "Annual technical festival showcasing innovation and technology breakthroughs from across the nation...",
    location: "IIT Bombay",
    date: "22-04-2025",
    time: "09:00 AM",
  },
  {
    id: 3,
    title: "StartUp Summit",
    description:
      "Connect with entrepreneurs, investors, and innovators in this premier startup networking event...",
    location: "IIT Delhi",
    date: "10-05-2025",
    time: "11:30 AM",
  },
  {
    id: 4,
    title: "Innovation Hub",
    description:
      "Explore cutting-edge research, participate in workshops, and network with industry leaders...",
    location: "IIT Madras",
    date: "18-06-2025",
    time: "02:00 PM",
  },
];

function UpcomingEvents() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-scroll functionality
  useEffect(() => {
    // Only start auto-scroll if not hovered
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === eventsData.length - 1 ? 0 : prevIndex + 1
        );
      }, AUTO_SCROLL_DELAY);

      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const currentEvent = eventsData[currentIndex];

  return (
    <div className="mx-16 mb-50 flex flex-col gap-8">
      <motion.h1
        className="flex gap-2"
        style={{ fontSize: "48px", fontWeight: 200 }}
        initial={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Upcoming{" "}
        <HighlightedText size="48px" weight={800}>
          Events
        </HighlightedText>
      </motion.h1>

      {/* REMOVED overflow-hidden to let image pop out */}
      <motion.div
        className="rounded-2xl bg-gray-100 pt-6 pb-8 pl-18 relative"
        initial={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="w-1/2 flex flex-col gap-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentEvent.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="flex items-center gap-2 -ml-6 text-base font-[600]">
                <div className="w-5 aspect-square bg-black flex justify-center items-center rounded-full">
                  <div className="w-2.5 aspect-square bg-white rounded-full"></div>
                </div>
                {currentEvent.title}
              </div>

              <p className="font-medium mt-4">
                {currentEvent.description}
                <span className="font-semibold ml-2 text-primary-highlight cursor-pointer hover:underline">
                  Know More {">>"}
                </span>
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.div
            className="flex gap-16 items-start mt-12 w-xl"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentEvent.id}-details`}
                className="flex gap-16"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex justify-center items-center gap-2 flex-col">
                  <div className="font-bold">Location</div>
                  <div>{currentEvent.location}</div>
                </div>
                <div className="h-12 border-l-2"></div>
                <div className="flex justify-center items-center gap-2 flex-col">
                  <div className="font-bold">Date</div>
                  <div>{currentEvent.date}</div>
                </div>
                <div className="h-12 border-l-2"></div>
                <div className="flex justify-center items-center gap-2 flex-col">
                  <div className="font-bold">Time</div>
                  <div>{currentEvent.time}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Image positioned to pop out on top with higher z-index */}
        <div className="absolute right-0 w-1/3 -top-1/6 flex justify-between pr-4 z-20">
          {/* Image container - pops out above the container */}
          <div className="relative w-full">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentEvent.id}
                src="/UpcomingEvents/Abhivyakti.svg"
                alt={currentEvent.title}
                initial={{
                  y: 500,
                  opacity: 1,
                  zIndex: 50,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                  zIndex: 50,
                }}
                exit={{
                  y: -1200,
                  opacity: 1,
                  zIndex: 50,
                }}
                transition={{
                  duration: 0.7,
                  ease: "easeInOut",
                  opacity: { duration: 0.4 },
                }}
                className="max-w-full h-auto relative z-50"
                style={{ zIndex: 50 }}
              />
            </AnimatePresence>
          </div>

          {/* Vertical carousel indicator dots */}
          <div className="flex flex-col justify-center gap-3 ml-4 z-30">
            {eventsData.map((_, index) => (
              <motion.div
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-[19px] h-[19px] rounded-full bg-white border-2 border-secondary-gray flex items-center justify-center or-pointer transition-all duration-300 ${
                  index === currentIndex ? "ring-primary-highlight" : ""
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div
                  className={`w-[12px] h-[12px] rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-primary-highlight" : "bg-white"
                  }`}
                ></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default UpcomingEvents;
