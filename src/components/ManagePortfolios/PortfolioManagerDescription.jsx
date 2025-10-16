import React from "react";
import CounterBox from "./../Utility Components/CounterBox";
import HighlightedText from "./../Utility Components/HighlightedText";

function PortfolioManagerDescription() {
  return (
    <div className="w-full px-4 py-8 md:px-8 lg:px-16">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 xl:gap-32">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <img
            src="ManagePortfolios/portfolioManager.png"
            className="w-full h-auto object-contain max-w-md lg:max-w-none"
            alt="Portfolio Manager"
            loading="lazy"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:gap-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extralight leading-tight">
            Portfolio Managers for{" "}
            <HighlightedText weight={600}>all</HighlightedText>
          </h1>

          <h3 className="text-lg sm:text-xl font-medium text-gray-700">
            Personalized guidance to help your venture grow strategically and
            swiftly.
          </h3>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            At SIIC, every incubated startup is assigned a dedicated portfolio
            manager—offering tailored support, tracking progress, unlocking
            resources, and ensuring you stay focused, aligned, and empowered
            throughout your entrepreneurial journey.
          </p>

          {/* Counter Boxes */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 mt-8 lg:mt-16">
            <CounterBox />
            <CounterBox />
            <CounterBox />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioManagerDescription;
