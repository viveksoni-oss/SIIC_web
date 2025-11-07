import React, { useState } from "react";
import TestimonialCard from "./TestimonialCard";

function TestimonialsCarousel() {
  const testimonialData = [
    {
      userImg: "Sanjay",
      name: "Rahul Sharma",
      position: "Engineering Manager",
      domain: "Product Development",
      testimonial:
        "Working with this team has been a transformative experience. The collaborative culture and passion for innovation are unmatched.",
    },
    {
      userImg: "Rahul",
      name: "Priti Singh",
      position: "Lead Designer",
      domain: "UI/UX",
      testimonial:
        "I'm constantly inspired by the creativity of my peers. Every project challenges us to deliver our best designs.",
    },
    {
      userImg: "Sanjay",
      name: "Anil Gupta",
      position: "Chief Technology Officer",
      domain: "Strategy & Innovation",
      testimonial:
        "The level of technical expertise here pushes me to grow every single day. It's the ideal place for ambitious tech leaders.",
    },
    {
      userImg: "Priti",
      name: "Neha Saxena",
      position: "Marketing Head",
      domain: "Brand Communication",
      testimonial:
        "The enthusiasm in this company is contagious. Everyone works together to deliver remarkable results for our clients.",
    },
    {
      userImg: "Sanjay",
      name: "Rahul Sharma",
      position: "Engineering Manager",
      domain: "Product Development",
      testimonial:
        "Working with this team has been a transformative experience. The collaborative culture and passion for innovation are unmatched.",
    },
    {
      userImg: "Sanjay",
      name: "Rahul Sharma",
      position: "Engineering Manager",
      domain: "Product Development",
      testimonial:
        "Working with this team has been a transformative experience. The collaborative culture and passion for innovation are unmatched.",
    },
    {
      userImg: "Rahul",
      name: "Priti Singh",
      position: "Lead Designer",
      domain: "UI/UX",
      testimonial:
        "I'm constantly inspired by the creativity of my peers. Every project challenges us to deliver our best designs.",
    },
    {
      userImg: "Sanjay",
      name: "Anil Gupta",
      position: "Chief Technology Officer",
      domain: "Strategy & Innovation",
      testimonial:
        "The level of technical expertise here pushes me to grow every single day. It's the ideal place for ambitious tech leaders.",
    },
    {
      userImg: "Priti",
      name: "Neha Saxena",
      position: "Marketing Head",
      domain: "Brand Communication",
      testimonial:
        "The enthusiasm in this company is contagious. Everyone works together to deliver remarkable results for our clients.",
    },
    {
      userImg: "Sanjay",
      name: "Rahul Sharma",
      position: "Engineering Manager",
      domain: "Product Development",
      testimonial:
        "Working with this team has been a transformative experience. The collaborative culture and passion for innovation are unmatched.",
    },
    ,
  ];

  const visibleCount = 3; // Cards to show in viewport
  const [startIdx, setStartIdx] = useState(0);

  // The furthest you can scroll (last 'page' of cards in the viewport)
  const maxStartIdx = Math.max(testimonialData.length - visibleCount, 0);

  // Navigation handlers
  const slidePrev = () => setStartIdx((i) => Math.max(0, i - 1));
  const slideNext = () => setStartIdx((i) => Math.min(maxStartIdx, i + 1));

  // The correct translate logic for the sliding row
  const translateX = `-${startIdx * (100 /testimonialData.length)}%`;

  return (
    <div className="flex items-center justify-center gap-6 overflow-hidden mt-15">
      {/* Left Arrow */}
      <button
        className="border-[2px] border-[#1f1f1f]/25 rounded-full p-2 hover:shadow-xl disabled:opacity-40"
        onClick={slidePrev}
        disabled={startIdx === 0}
      >
        <img src="/WhoWeAre/icons/Frame.svg" alt="prev" />
      </button>

      {/* Card Row */}
      <div className="overflow-hidden flex-1 pl-4 transition-transform duration-500 max-w-[1125px]">
        <div
          className="flex items-center gap-x-12"
          style={{
            width: `${(testimonialData.length * 100) / visibleCount}%`,
            transform: `translateX(${translateX})`,
            transition: "transform 0.5s cubic-bezier(.4,0,.2,1)",
          }}
        >
          {testimonialData.map((data, idx) => (
            <TestimonialCard key={idx} data={data} />
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        className="border-[2px] border-[#1f1f1f]/25 rounded-full p-2 hover:shadow-xl disabled:opacity-40"
        onClick={slideNext}
        disabled={startIdx >= maxStartIdx-1}
      >
        <img
          src="/WhoWeAre/icons/Frame.svg"
          className="rotate-180"
          alt="next"
        />
      </button>
    </div>
  );
}

export default TestimonialsCarousel;
