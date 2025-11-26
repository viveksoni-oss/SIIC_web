import React from "react";
import HighlightedText from "./../Utility Components/HighlightedText";

function MissionAndVision() {
  return (
    <div className="flex flex-col gap-12 mt-20 lg:mt-10 px-4 md:px-10">
      {/* Mission Block */}
      <div className="flex flex-col-reverse lg:flex-row lg:gap-20 items-center w-full relative max-h-none lg:max-h-[240px]">
        {/* Mission Text */}
        <div className="flex flex-col items-start z-10 flex-1">
          <h1 className="text-2xl md:text-[32px] lg:text-[40px] font-thin mb-2 lg:mb-4">
            Our <HighlightedText weight={700}>Mission</HighlightedText>
          </h1>
          <p className="text-secondary-blue text-base md:text-2xl lg:text-[32px] font-extralight text-start leading-relaxed md:leading-[150%] tracking-wide ml-0 lg:ml-10">
            Empowering startups with <strong>mentorship</strong>,{" "}
            <strong>research</strong>,
            <br className="hidden md:inline" /> and <strong>resources</strong>{" "}
            to scale transformative ventures
            <br className="hidden md:inline" /> revolutionizing{" "}
            <strong>global industries</strong>.
          </p>
        </div>
        {/* Mission Line - Only on Desktop */}
        <div className="hidden lg:block bg-secondary-gray h-[1px] absolute bottom-6 right-0 w-[60vw]"></div>
        {/* Mission Illustration */}
        <img
          src="/WhoWeAre/icons/Approval 2.svg"
          className="z-10 mb-6 lg:mb-0 w-[120px] md:w-[180px] lg:w-[220px] flex-shrink-0"
          alt="Mission Illustration"
        />
      </div>

      {/* Vision Block */}
      <div className="flex flex-col lg:flex-row-reverse lg:gap-16 items-center w-full relative max-h-none lg:max-h-[240px]">
        {/* Vision Text */}
        <div className="flex flex-col items-end z-10 flex-1">
          <h1 className="text-2xl md:text-[32px] lg:text-[40px] font-thin mb-2 lg:mb-4">
            Our <HighlightedText weight={700}>Vision</HighlightedText>
          </h1>
          <p className="text-secondary-blue text-base md:text-2xl lg:text-[32px] font-extralight text-end leading-relaxed md:leading-[150%] tracking-wide mr-0 lg:mr-10">
            To be the <strong>nation’s leading incubator</strong>, empowering
            <br className="hidden md:inline" />
            innovators to build <strong>successful ventures</strong>
            <br className="hidden md:inline" />
            that drive <strong>positive</strong> change.
          </p>
        </div>
        {/* Vision Line - Only on Desktop */}
        <div className="hidden lg:block bg-secondary-gray h-[1px] absolute bottom-6 left-0 w-[60vw]"></div>
        {/* Vision Illustration */}
        <img
          src="/WhoWeAre/icons/Approval 1.svg"
          className="z-10 mb-6 lg:mb-0 w-[120px] md:w-[180px] lg:w-[220px] flex-shrink-0"
          alt="Vision Illustration"
        />
      </div>
    </div>
  );
}

export default MissionAndVision;
