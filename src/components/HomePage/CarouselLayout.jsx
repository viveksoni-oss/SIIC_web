import React, { useState } from "react";
import CarouselCard from "./CarouselCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    id: 1,
    imgSrc: "lenek.png",
    title: "LENEK",
    desc: "Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit.",
  },
  {
    id: 2,
    imgSrc: "phool.png",
    title: "Phool",
    desc: "Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit.",
  },
  {
    id: 3,
    imgSrc: "fertilizer.png",
    title: "LCB Fertilizers",
    desc: "Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit.",
  },
];

function CarouselLayout() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const prevIndex = (currentIndex - 1 + cards.length) % cards.length;
  const nextIndex = (currentIndex + 1) % cards.length;

  const handlePrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  const handleNext = () =>
    setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));

  return (
    <div className="relative flex items-center ml-8 px-10 py-4 justify-center">
      <ChevronLeft
        className="absolute left-0 top-1/2 cursor-pointer select-none"
        size={64}
        onClick={handlePrev}
      />

      <div className="relative w-[800px] flex justify-center items-center gap-0">
        {cards.map((card, idx) => {
          let scale = 0.9;
          let x = 0;
          let zIndex = 1;
          let filter = "brightness(0.8)";
          let y = 0;

          if (idx === currentIndex) {
            scale = 1.1;
            x = 0;
            zIndex = 10;
            filter = "none";
            y = -10;
          } else if (idx === prevIndex) {
            scale = 0.97;
            x = -220;
            zIndex = 5;
            filter = "brightness(0.93)";
          } else if (idx === nextIndex) {
            scale = 0.97;
            x = 220;
            zIndex = 5;
            filter = "brightness(0.93)";
          }

          return (
            <motion.div
              key={card.id}
              initial={false}
              animate={{ scale, x, zIndex, filter, y }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="cursor-pointer absolute"
              style={{ width: 315 }}
            >
              <CarouselCard isMain={idx === currentIndex} cardData={card} />
            </motion.div>
          );
        })}
      </div>

      <ChevronRight
        className="absolute right-0 top-1/2 cursor-pointer select-none"
        size={64}
        onClick={handleNext}
      />
    </div>
  );
}

export default CarouselLayout;
