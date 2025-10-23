import React from "react";
import PageLayout from "../components/PageLayout";
import HighlightedText from "./../components/Utility Components/HighlightedText";
import { DirectorData } from "./../data/DirectorsData";
import CardArrow from "./../components/Utility Components/CardArrow";

function BoardOfDirectors() {
  return (
    <div className="min-h-screen   -mb-20 bg-white relative rounded-b-2xl px-30 py-20">
      <div className="relative mx-auto bg-white   h-[203px] rounded-2xl overflow-hidden  flex justify-start items-center ">
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

      <h1>Our Dirctors</h1>

      <div className="px-8 py-4 grid grid-cols-2  gap-y-10 border-1  border-black/10 rounded-2xl items-center justify-items-center">
        {DirectorData.map((data) => (
          <CardArrow data={data}></CardArrow>
        ))}
      </div>
    </div>
  );
  // return <PageLayout></PageLayout>;
}

export default BoardOfDirectors;
