import React from "react";
import PageLayout from "../components/PageLayout";
import HighlightedText from "./../components/Utility Components/HighlightedText";
import { DirectorData } from "./../data/DirectorsData";
import CardArrow from "./../components/Utility Components/CardArrow";
import ArrowBg from "./../components/Utility Components/ArrowBg";

function BoardOfDirectors() {
  return (
    <div className="min-h-screen -mb-20 bg-white relative rounded-b-2xl px-4 sm:px-8 lg:px-16 py-8 pb-16">
      {/* Gradient top bar */}
      <div className="relative mx-auto bg-white h-[203px] rounded-2xl overflow-hidden flex justify-start items-center">
        {/* Blurred backdrop */}
        <div className="backdrop-blur-xl absolute z-20 w-full h-full"></div>
        {/* Background image */}
        <img
          src="/knowUsGradient.svg"
          className="absolute z-10 object-center w-full h-full"
          alt=""
        />
        <div className="relative z-30 text-white p-4 sm:p-8">
          <h2 className="text-3xl sm:text-4xl lg:text-[56px] font-medium mb-2">
            The Power <HighlightedText weight={800}>Brains</HighlightedText>.
          </h2>
          <p className="text-sm sm:text-base">
            Visionary leaders guiding SIIC's mission to empower{" "}
            <br className="hidden sm:block" />
            startups and innovators.
          </p>
        </div>
      </div>

      <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-thin ml-0 sm:ml-18 mt-8.5">
        Our <HighlightedText weight={700}>Directors</HighlightedText>
      </h1>

      <div className="px-0 sm:px-12 2xl:px-44">
        <div className="px-4 sm:px-8 xl:px-12 py-8 sm:py-12 xl:py-16 grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-10 xl:gap-22 xl:gap-y-10 xl:border relative xl:border-black/10 xl:rounded-2xl items-center justify-items-center">
          {DirectorData.map((data, index) => (
            <CardArrow
              key={index}
              arrowColor={"#6c3231"}
              data={data}
            ></CardArrow>
          ))}
          {DirectorData.length % 2 == 1 && (
            <div className="absolute -right-5 -bottom-5 xl:block hidden overflow-hidden">
              <img src="/Polygon 5.svg" alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BoardOfDirectors;
