import React from "react";
import HighlightedText from "./../Utility Components/HighlightedText";

function MissionAndVision() {
  return (
    <div className="flex flex-col gap-12">
      {/* Mission Block (Image right, line right) */}
      <div className="flex gap-20 justify-between pr-10 items-center w-full relative max-h-[240px]">
        {/* Right line for Mission */}
        <div className="bg-secondary-gray h-[1px] absolute bottom-[21px] right-0 w-[60vw] sm:w-[108vh]"></div>

        <div className="flex flex-col items-start z-10">
          <h1 className="text-[40px] font-thin mb-4">
            Our <HighlightedText weight={700}>Mission</HighlightedText>
          </h1>
          <p className="text-secondary-blue text-[32px] font-extralight text-start leading-[150%] tracking-wide ml-10">
            Empowering startups with <strong>mentorship</strong>,{" "}
            <strong>research</strong>,<br /> and <strong>resources</strong> to
            scale transformative ventures <br /> revolutionizing{" "}
            <strong>global industries</strong>.
          </p>
        </div>
        <img
          src="/WhoWeAre/icons/Approval 2.svg"
          className="z-10 mt-9"
          alt="Mission Illustration"
        />
      </div>

      {/* Vision Block (Image left, line left) */}
      <div className="flex gap-16 justify-between pl-14 items-center w-full relative max-h-[240px]">
        {/* Left line for Vision */}
        <div className="bg-secondary-gray h-[1px] absolute bottom-[20.5px] left-0 w-[60vw] sm:w-[135vh]"></div>

        <img
          src="/WhoWeAre/icons/Approval 1.svg"
          className="z-10 mt-14"
          alt="Vision Illustration"
        />
        <div className="flex flex-col items-end z-10">
          <h1 className="text-[40px] font-thin mb-4">
            Our <HighlightedText weight={700}>Vision</HighlightedText>
          </h1>
          <p className="text-secondary-blue text-[32px] font-extralight text-end leading-[150%] tracking-wide mr-10">
            To be the <strong>nation’s leading incubator</strong>, empowering
            <br />
            innovators to build
            <strong> successful ventures</strong> that drive <br />
            <strong>positive</strong> change.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MissionAndVision;
