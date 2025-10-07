import React, { useState } from "react";
import CarouselCard from "./CarouselCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    id: 1,
    imgSrc: "lenek.png",
    title: "1",
    desc: "Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. 1",
  },
  {
    id: 4,
    imgSrc: "lenek.png",
    title: "222",
    desc: "Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. 1",
  },
  {
    id: 5,
    imgSrc: "lenek.png",
    title: "3 ",
    desc: "Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. 1",
  },
  // Other cards commented out
];

function CarouselLayout() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const total = cards.length;

  const cycleIndex = (i) => (i + total) % total;

  const visible = [
    cycleIndex(currentIndex - 2),
    cycleIndex(currentIndex - 1),
    currentIndex,
    cycleIndex(currentIndex + 1),
    cycleIndex(currentIndex + 2),
  ];

  const handlePrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  const handleNext = () =>
    setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex items-center justify-between py-4 min-h-[280px] sm:min-h-[320px] md:min-h-[360px] lg:min-h-[400px] px-4 sm:px-8 md:px-12 lg:px-16">
        <ChevronLeft
          className="cursor-pointer select-none z-20 text-gray-700 hover:text-primary-highlight transition"
          size={48}
          onClick={handlePrev}
        />
        {/* Card Container */}
        <div className="flex justify-center items-center w-[550px] h-[250px] sm:h-[280px] md:h-[320px] lg:h-[350px] px-4 sm:px-8 md:px-12 lg:px-16 relative">
          {cards.map((card, idx) => {
            if (!visible.includes(idx)) return null;

            let scale = 0.85,
              x = 0,
              zIndex = 1,
              filter = "brightness(0.7)",
              y = 0;

            if (idx === currentIndex) {
              scale = 1.1;
              x = 0;
              zIndex = 10;
              filter = "none";
              y = -10;
            } else if (idx === cycleIndex(currentIndex - 1)) {
              scale = 0.95;
              x = -80;
              zIndex = 8;
              filter = "brightness(0.85)";
            } else if (idx === cycleIndex(currentIndex - 2)) {
              scale = 0.85;
              x = -140;
              zIndex = 5;
              filter = "brightness(0.7)";
            } else if (idx === cycleIndex(currentIndex + 1)) {
              scale = 0.95;
              x = 80;
              zIndex = 8;
              filter = "brightness(0.85)";
            } else if (idx === cycleIndex(currentIndex + 2)) {
              scale = 0.85;
              x = 140;
              zIndex = 5;
              filter = "brightness(0.7)";
            }

            return (
              <motion.div
                key={card.id}
                animate={{ scale, x, zIndex, filter, y }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute cursor-pointer w-[200px] sm:w-[240px] md:w-[260px] lg:w-[280px]"
              >
                <CarouselCard isMain={idx === currentIndex} cardData={card} />
              </motion.div>
            );
          })}
        </div>
        <ChevronRight
          className="cursor-pointer select-none z-20 text-gray-700 hover:text-primary-highlight transition"
          size={48}
          onClick={handleNext}
        />
      </div>
    </div>
  );
}

export default CarouselLayout;
