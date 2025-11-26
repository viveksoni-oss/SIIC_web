import React, { useState, useEffect, useRef, useCallback } from "react";
import HighlightedText from "./../Utility Components/HighlightedText";
import { useNavigate } from "react-router";

const AUTO_SCROLL_DELAY = 5000;

const eventsData = [
  {
    id: 1,
    title: "Abhivyakti",
    description:
      "Abhivyakti by SIIC IIT Kanpur – Celebrating transformative startup success 20+ years of pioneering incubation, uniting ecosystem enablers to showcase futuristic innovations.",
    location: "IIT Kanpur",
    date: "15-12-2025",
    time: "10:00 AM",
    image: "/UpcomingEvents/abhivyakti poster.png",
  },
];

function UpcomingEventsMobile() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);

  const containerRef = useRef(null);
  const autoScrollTimerRef = useRef(null);
  const navigate = useNavigate();

  // Intersection Observer: only to know if in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
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

  // Auto-scroll basic
  useEffect(() => {
    if (!isHovered && isInView && eventsData.length > 1) {
      autoScrollTimerRef.current = setInterval(() => {
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

  // Dot click (if you later add dots)
  const handleDotClick = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isInView || eventsData.length <= 1) return;

      if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        setCurrentIndex((prev) =>
          prev === 0 ? eventsData.length - 1 : prev - 1
        );
      } else if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        setCurrentIndex((prev) =>
          prev === eventsData.length - 1 ? 0 : prev + 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isInView]);

  const currentEvent = eventsData[currentIndex];

  return (
    <div className="w-full pb-12 overflow-hidden bg-white">
      {/* Heading */}
      <div className="px-4">
        <h1 className="flex gap-2 flex-wrap text-[2rem] font-extralight pt-6 pb-3 leading-tight">
          Upcoming{" "}
          <HighlightedText size="2rem" weight={800} className="font-bold">
            Events
          </HighlightedText>
        </h1>

        {/* Card */}
        <div
          ref={containerRef}
          className="rounded-2xl bg-gray-100 pt-4 pb-6 px-3 mt-2 shadow-md relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          role="region"
          aria-label="Event details"
          aria-live="polite"
        >
          <div className="flex flex-col gap-4">
            {/* Event Title + Dot */}
            <div className="flex items-center gap-3 text-base font-semibold">
              <span className="w-4 h-4 bg-black rounded-full flex justify-center items-center flex-shrink-0">
                <span className="w-2 h-2 bg-white rounded-full" />
              </span>
              <h2 className="text-lg font-semibold">{currentEvent.title}</h2>
            </div>

            {/* Event Image (if present) */}
            {currentEvent.image && (
              <img
                src={currentEvent.image}
                alt={currentEvent.title}
                className="w-full rounded-xl mt-2 object-cover aspect-[3/2] max-h-48"
                loading="lazy"
              />
            )}

            {/* Event Description */}
            <p className="font-medium mt-1 text-gray-700 text-sm sm:text-base">
              {currentEvent.description}
              <button
                onClick={() => navigate("/upcoming-events")}
                className="font-semibold inline ml-2 text-primary-highlight cursor-pointer hover:underline focus:outline-none focus:ring-2 focus:ring-primary-highlight rounded"
                aria-label={`Learn more about ${currentEvent.title}`}
              >
                Know More &gt;&gt;
              </button>
            </p>

            {/* Event Details - stacked in a row at md, column at base */}
            <div className="flex flex-col xs:flex-row justify-between gap-2 mt-4">
              <div className="flex-1 text-center py-1">
                <div className="font-bold text-xs text-gray-600">Location</div>
                <div className="text-xs">{currentEvent.location}</div>
              </div>
              <div className="flex-1 text-center py-1 xs:border-l xs:border-gray-300">
                <div className="font-bold text-xs text-gray-600">Date</div>
                <div className="text-xs">{currentEvent.date}</div>
              </div>
              <div className="flex-1 text-center py-1 xs:border-l xs:border-gray-300">
                <div className="font-bold text-xs text-gray-600">Time</div>
                <div className="text-xs">{currentEvent.time}</div>
              </div>
            </div>
          </div>

          {/* Progress bar (if needed for scroll), can be omitted for single event */}
          {/* {!isHovered && isInView && eventsData.length > 1 && (
          <div className="absolute bottom-0 left-0 h-1 w-full bg-gray-200">
            <div className="h-full bg-primary-highlight w-full" />
          </div>
        )} */}
        </div>
      </div>
    </div>
  );
}

export default UpcomingEventsMobile;
