import React from "react";
import PageLayout from "../components/PageLayout";
import HighlightedText from "./../components/Utility Components/HighlightedText";
import { DirectorData } from "./../data/DirectorsData";
import CardArrow from "./../components/Utility Components/CardArrow";
import ArrowBg from "./../components/Utility Components/ArrowBg";

function BoardOfDirectors() {
  return (
    <div className="min-h-screen  -mb-20 bg-white relative rounded-b-2xl px-16 py-8 pb-16">
      {/* Gradient top bar */}
      <div className="relative mx-auto bg-white   h-[203px] rounded-2xl overflow-hidden  flex justify-start items-center  ">
        {/* Blurred backdrop */}
        <div className="backdrop-blur-xl absolute z-20 w-full h-full"></div>
        {/* Background image */}
        <img
          src="/knowUsGradient.svg"
          className="absolute z-10 object-cover w-full h-full"
          alt=""
        />
        <div className="relative z-30  text-white p-8">
          <h2 className="text-3xl font-bold mb-6">
            {" "}
            The Power <HighlightedText>Brains</HighlightedText>.
          </h2>
          {/* Add BoardOfDirectors content/components here */}
          <p>
            Visionary leaders guiding SIIC’s mission to empower startups and
            innovators.
          </p>
        </div>
      </div>

      <h1 className="text-[40px] font-thin ml-18 mt-8.5">
        Our <HighlightedText weight={700}>Directors</HighlightedText>
      </h1>
      <div className="px-44">
        <div className="px-12 py-16 grid grid-cols-2 gap-22  gap-y-10 border relative  border-black/10 rounded-2xl items-center justify-items-center ">
          {DirectorData.map((data) => (
            <CardArrow arrowColor={"#6c3231"} data={data}></CardArrow>
          ))}
          {DirectorData.length % 2 == 1 && (
            <div className="absolute -right-5 -bottom-5 xl:block  hidden overflow-hidden  ">
              <img src="/Polygon 5.svg" alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
  // return <PageLayout></PageLayout>;
}

export default BoardOfDirectors;
