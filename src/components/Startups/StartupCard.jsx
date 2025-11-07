// components/Startups/StartupCard.js
import React from "react";

function StartupCard({ data }) {
  // Only wrap in <a> if website is present
  const content = (
    <div className="text-white rounded-md group inline-flex w-[240px] h-[270px] hover:-translate-y-4 transition-all duration-600 ease-in-out flex-col cursor-pointer">
      <img
        src={data.image}
        className="border-1 group-hover:border-transparent border-white"
        alt={data.title}
      />
      <div className="bg-secondary rounded-b-md flex flex-col gap-1 px-3 py-2 pb-2.5 group-hover:text-black group-hover:bg-white transition-all duration-300 border-2 border-transparent group-hover:border-2 box-border group-hover:border-primary-highlight group-hover:shadow-[0px_3px_3px_0px_rgba(0,0,0,0.20)] ">
        <h1 className="text-sm font-bold">{data.title}</h1>
        <p className="text-[10px]">{data.shortDescription}</p>
      </div>
    </div>
  );

  return data.website ? (
    <a
      href={data.website}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
      className="focus:outline-none"
    >
      {content}
    </a>
  ) : (
    content
  );
}

export default StartupCard;
