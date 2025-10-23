import React, { useState, useEffect, useRef } from "react";
import HighlightedText from "./../Utility Components/HighlightedText";
import { motion, AnimatePresence } from "framer-motion";

const AUTO_SCROLL_DELAY = 5000;

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
  const [isInView, setIsInView] = useState(false);

  const upcomingRef = useRef(null);
  const containerRef = useRef(null);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (upcomingRef.current) {
      observer.observe(upcomingRef.current);
    }

    return () => {
      if (upcomingRef.current) {
        observer.unobserve(upcomingRef.current);
      }
    };
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isHovered && isInView) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === eventsData.length - 1 ? 0 : prevIndex + 1
        );
      }, AUTO_SCROLL_DELAY);

      return () => clearInterval(interval);
    }
  }, [isHovered, isInView]);

  // Wheel scroll handler
  const handleWheel = (e) => {
    e.preventDefault();
    if (e.deltaY > 0) {
      setCurrentIndex((prev) =>
        prev === eventsData.length - 1 ? 0 : prev + 1
      );
    } else {
      setCurrentIndex((prev) =>
        prev === 0 ? eventsData.length - 1 : prev - 1
      );
    }
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const currentEvent = eventsData[currentIndex];

  return (
    <motion.div className="w-full pb-50 overflow-hidden relative">
      <div className="absolute right-20 translate-y-1/8 flex gap-18 justify-between z-20">
        <div className="relative w-full">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentEvent.id}
              src="/UpcomingEvents/Abhivyakti.svg"
              alt={currentEvent.title}
              initial={{
                y: 100,
                opacity: 0,
                scale: 0.9,
                filter: "blur(10px)",
              }}
              animate={{
                y: 0,
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
              }}
              exit={{
                y: -100,
                opacity: 0,
                scale: 0.9,
                filter: "blur(10px)",
              }}
              transition={{
                duration: 1,
                ease: [0.43, 0.13, 0.23, 0.96], // Custom bezier for smoother feel
                opacity: { duration: 0.5 },
                scale: { duration: 0.6 },
                filter: { duration: 0.4 },
              }}
              className="max-w-full h-auto relative"
            />
          </AnimatePresence>
        </div>

        {/* Vertical carousel indicator dots */}
        <div className="flex flex-col justify-center gap-3 ml-2 z-30">
          {eventsData.map((_, index) => (
            <motion.div
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-[20px] h-[20px] rounded-full bg-white border-2 border-secondary-gray flex items-center justify-center cursor-pointer transition-all duration-300`}
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

      <div className="mx-16 flex flex-col gap-8">
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

        <motion.div
          ref={(containerRef, upcomingRef)}
          className="rounded-2xl bg-gray-100 pt-6 pb-8 pl-18 relative overflow-hidden"
          initial={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          onWheel={handleWheel}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="w-1/2 flex flex-col gap-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentEvent.id}
                initial={{
                  y: 40,
                  opacity: 0,
                  filter: "blur(4px)",
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                  filter: "blur(0px)",
                }}
                exit={{
                  y: -40,
                  opacity: 0,
                  filter: "blur(4px)",
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuad
                  opacity: { duration: 0.4 },
                  filter: { duration: 0.3 },
                }}
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

            {/* Location, Date, Time - Smooth 3D Cylinder Roll Effect */}
            <div className="flex gap-16 items-start mt-12 w-xl overflow-hidden h-[60px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${currentEvent.id}-details`}
                  className="flex gap-16"
                  initial={{
                    rotateX: 90,
                    opacity: 0,
                    y: 30,
                    scale: 0.95,
                  }}
                  animate={{
                    rotateX: 0,
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    rotateX: -90,
                    opacity: 0,
                    y: -30,
                    scale: 0.95,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.34, 1.56, 0.64, 1], // easeOutBack for bounce effect
                    opacity: { duration: 0.5 },
                    scale: { duration: 0.5 },
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "1000px",
                  }}
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
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default UpcomingEvents;
