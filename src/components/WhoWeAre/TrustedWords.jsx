import React from "react";
import TestimonialsCarousel from './TestimonialsCarousel';

function TrustedWords() {
  return (
    <div className="mt-10">
      <h1 className="text-[40px] font-thin ">
        {" "}
        Trusted{" "}
        <span className="font-semibold text-primary-highlight">Words</span>
      </h1>
      <p className="opacity-75 text-[#1f1f1f] text-[20px] mt-2">What do our entrepreneurs have to say about us?</p>
      <TestimonialsCarousel></TestimonialsCarousel>
    </div>
  );
}

export default TrustedWords;
