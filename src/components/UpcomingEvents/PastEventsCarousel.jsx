import React, { useState, useEffect } from "react";
import HighlightedText from "../Utility Components/HighlightedText";
import { PastEventCard } from "./../../pages/UpcomingEvents";

function PastEventsCarousel() {
  const numCards = 10;
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  // Responsive card count
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Total slides for dots
  const numSlides = Math.ceil(numCards / cardsPerView);

  // Slide to exact start of group for dot navigation
  const goToSlide = (slideIdx) => setActiveIndex(slideIdx * cardsPerView);

  // Clamp activeIndex to avoid overshooting last card
  const displayedIndex = Math.min(activeIndex, numCards - cardsPerView);

  return (
    <section className="mt-25 flex gap-8 relative">
      {/* Text section */}
      <div className="max-w-[380px]">
        <h1 className="text-[40px] font-thin">
          A Look Back at our Impactful{" "}
          <HighlightedText weight={700}>Moments</HighlightedText>
        </h1>
        <h3 className="text-[#1f1f1f] font-medium text-[20px] opacity-75 mt-4">
          Relive the milestones that shaped our journey of innovation and
          impact.
        </h3>
        <p className="mt-6 text-[#1f1f1f] opacity-75">
          Our past events showcase the vibrant spirit of collaboration,
          creativity, and growth. Each gathering brought together brilliant
          minds to share ideas, build connections.
          <br />
          <br />
          From insightful talks to hands-on workshops, these moments highlight
          our ongoing commitment to innovation and community-building. Take a
          look back and celebrate the progress we've made together.
        </p>
      </div>

      {/* Carousel section */}
      <div className="overflow-x-hidden h-full max-w-[1000px] flex flex-1 items-center px-10 justify-between ">
        <div
          className="flex gap-15 transition-transform duration-500 ease-in-out relative"
          style={{
            width: `${(numCards / cardsPerView) * 100}%`,
            transform: `translateX(-${(displayedIndex / numCards) * 100}%)`,
          }}
        >
          {Array.from({ length: numCards }, (_, idx) => (
            <PastEventCard />
          ))}
        </div>
      </div>

      {/* Dots navigation */}
      <div className="absolute -bottom-10 left-2/3 -translate-x-2/3 flex gap-4 ">
        {Array.from({ length: numSlides }, (_, slideIdx) => (
          <button
            key={slideIdx}
            onClick={() => goToSlide(slideIdx)}
            className={`rounded-full w-4 h-4 border-2 
              ${
                displayedIndex >= slideIdx * cardsPerView &&
                displayedIndex < (slideIdx + 1) * cardsPerView
                  ? "border-primary-highlight bg-primary-highlight"
                  : "border-gray-300 bg-white"
              } transition-all`}
            aria-label={`Go to slide ${slideIdx + 1}`}
            style={{
              outline: "none",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default PastEventsCarousel;
