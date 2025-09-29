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
  {
    id: 2,
    imgSrc: "phool.png",
    title: "4",
    desc: "Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit.2",
  },
  {
    id: 3,
    imgSrc: "fertilizer.png",
    title: "5",
    desc: "Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit.3",
  },
  {
    id: 6,
    imgSrc: "fertilizer.png",
    title: "6",
    desc: "Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit.3",
  },
  {
    id: 7,
    imgSrc: "fertilizer.png",
    title: "7",
    desc: "Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit.3",
  },
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
    <div className="relative flex items-center ml-8 px-10 py-4 justify-center">
      <ChevronLeft
        className="absolute left-0 top-1/2 cursor-pointer select-none"
        size={64}
        onClick={handlePrev}
      />

      <div className="relative w-[1000px] flex justify-center items-center">
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
            x = -160;
            zIndex = 8;
            filter = "brightness(0.85)";
          } else if (idx === cycleIndex(currentIndex - 2)) {
            scale = 0.85;
            x = -320;
            zIndex = 5;
            filter = "brightness(0.7)";
          } else if (idx === cycleIndex(currentIndex + 1)) {
            scale = 0.95;
            x = 160;
            zIndex = 8;
            filter = "brightness(0.85)";
          } else if (idx === cycleIndex(currentIndex + 2)) {
            scale = 0.85;
            x = 320;
            zIndex = 5;
            filter = "brightness(0.7)";
          }

          return (
            <motion.div
              key={card.id}
              animate={{ scale, x, zIndex, filter, y }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute cursor-pointer"
              style={{ width: 260 }}
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
