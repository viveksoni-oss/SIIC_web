import React from "react";

function TestimonialCard({ data }) {
  const { testimonial, userImg, name, position, domain } = data;
  return (
    <div className="flex flex-col shrink-0 justify-between items-center gap-10 w-[325px] h-[500px] border-3  border-secondary-gray/60  rounded-2xl px-6 py-16">
      <img src="/WhoWeAre/icons/Frame-4.svg" alt="" />
      <div className="opacity-75">{testimonial}</div>
      <div className="flex justify-start gap-4 items-center w-full">
        <img src={`/WhoWeAre/${userImg}.png`} alt="user img" />
        <div className="flex flex-col text-[#1f1f1f] gap-1">
          <div className="text-[18px] opacity-75">{name}</div>
          <div>
            <div className="text-[12px] opacity-55">{position}</div>
            <div className="text-[10px] opacity-40">{domain}</div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
