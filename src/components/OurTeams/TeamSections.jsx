import React from "react";
import HighlightedText from "../Utility Components/HighlightedText";
import CardArrow from "../Utility Components/CardArrow";

function TeamSections({ heading, TeamData }) {
  let words = heading.split(" ");
  const last_word = words[words.length - 1];
  words = words.slice(0, words.length - 1);
  console.log(words, last_word);
  console.log(heading, TeamData);
  return (
    <div>
      <h1 className="text-[40px] font-thin ml-18 mt-8.5 capitalize">
        {words.join(" ")}{" "}
        <HighlightedText weight={700}>{last_word}</HighlightedText>
      </h1>
      <div className="px-44">
        <div className="px-12 py-16 grid grid-cols-2 gap-22  gap-y-10 border relative  border-black/10 rounded-2xl items-center justify-items-center ">
          {TeamData.map((data) => (
            <CardArrow arrowColor={"#6c3231"} data={data}></CardArrow>
          ))}
          {TeamData.length % 2 === 1 && (
            <div className="absolute -right-5 -bottom-5 xl:block  hidden overflow-hidden  ">
              <img src="/Polygon 5.svg" alt="rounded 222 triangle" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TeamSections;
