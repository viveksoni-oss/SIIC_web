import React, { useState } from "react";
import CarouselCard from "./CarouselCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    id: 1,
    imgSrc: "Carousel/phool.png",
    title: "Phool",
    desc: "Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. 1",
  },
  {
    id: 2,
    imgSrc: "Carousel/lenek.png",
    title: "Lenek",
    desc: "Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. 1",
  },
  {
    id: 3,
    imgSrc: "Carousel/fertilizer.png",
    title: "Fertilizer",
    desc: "Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. 1",
  },
  {
    id: 4,
    imgSrc: "Carousel/phool.png",
    title: "Phool",
    desc: "Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. 1",
  },
  {
    id: 5,
    imgSrc: "Carousel/lenek.png",
    title: "Lenek",
    desc: "Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. 1",
  },
  {
    id: 6,
    imgSrc: "Carousel/fertilizer.png",
    title: "Fertilizer",
    desc: "Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. 1",
  },
];

function CarouselLayout() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [dragging, setDragging] = useState(false);
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
    <div className="relative w-full max-w-[700px] mx-auto sm:overflow-visible">
      <div className="sm:flex w-full items-center justify-between py-4 min-h-[280px] sm:min-h-[320px] md:min-h-[360px] lg:min-h-[400px] px-4 sm:px-8 md:px-12 lg:px-16">
        <ChevronLeft
          className="md:-left-8 md:absolute cursor-pointer hidden md:block select-none z-20 text-gray-700 hover:text-primary-highlight transition"
          size={48}
          onClick={handlePrev}
        />

        {/* Card Container with Drag/Swipe Support */}
        <motion.div
          className="flex justify-center items-center w-[200px] md:w-[700px] h-[250px] sm:h-[280px] md:h-[320px] lg:h-[350px] px-4 sm:px-8 md:px-12 lg:px-16 relative"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragStart={() => setDragging(true)}
          onDragEnd={(e, { offset, velocity }) => {
            setDragging(false);
            const swipe = Math.abs(offset.x) * velocity.x;

            // Swipe threshold - adjust these values for sensitivity
            if (swipe < -10000) {
              handleNext(); // Swiped left
            } else if (swipe > 10000) {
              handlePrev(); // Swiped right
            }
          }}
        >
          {cards.map((card, idx) => {
            if (!visible.includes(idx)) return null;

            let scale = 0.85,
              x = 0,
              zIndex = 1,
              y = 0;

            if (idx === currentIndex) {
              scale = 1.1;
              x = 0;
              zIndex = 10;
              y = -10;
            } else if (idx === cycleIndex(currentIndex - 1)) {
              scale = 0.95;
              x = -120;
              zIndex = 8;
            } else if (idx === cycleIndex(currentIndex - 2)) {
              scale = 0.85;
              x = -200;
              zIndex = 5;
            } else if (idx === cycleIndex(currentIndex + 1)) {
              scale = 0.95;
              x = 120;
              zIndex = 8;
            } else if (idx === cycleIndex(currentIndex + 2)) {
              scale = 0.85;
              x = 200;
              zIndex = 5;
            }

            return (
              <motion.div
                key={card.id}
                onClick={() => !dragging && setCurrentIndex(idx)}
                animate={{ scale, x, zIndex, y }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute cursor-pointer w-[200px] sm:w-[240px] md:w-[260px] lg:w-[280px]"
                style={{ pointerEvents: "auto" }}
              >
                <CarouselCard isMain={idx === currentIndex} cardData={card} />
              </motion.div>
            );
          })}
        </motion.div>

        <ChevronRight
          className="hidden md:block cursor-pointer select-none md:absolute md:-right-8  z-20 text-gray-700 hover:text-primary-highlight transition"
          size={48}
          onClick={handleNext}
        />
      </div>
    </div>
  );
}

export default CarouselLayout;
