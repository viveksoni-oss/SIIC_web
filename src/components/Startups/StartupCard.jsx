// components/Startups/StartupCard.js
import React, { useState } from "react";

function StartupCard({ data }) {
  // Only wrap in <a> if website is present
  const [error, setError] = useState(false);
  const FALL_BACK_IMAGE = "fallback.png";
  const content = (
    <div className="text-white rounded-md group inline-flex w-[260px]  hover:-translate-y-4 transition-all duration-600 ease-in-out flex-col cursor-pointer">
      <div className="w-[260px] h-[260px] flex items-center justify-center">
        <img
          src={error ? FALL_BACK_IMAGE : data.image}
          onError={() => setError(true)}
          className="border-1 group-hover:border-transparent object-cover text-black border-white"
          alt={data.title}
        />
      </div>
      <div className="bg-secondary-blue rounded-b-md flex flex-col gap-1 px-3 py-2 pb-2.5 group-hover:text-black group-hover:bg-white transition-all duration-300 border-2 border-transparent group-hover:border-2 box-border group-hover:border-primary-highlight group-hover:shadow-[0px_3px_3px_0px_rgba(0,0,0,0.20)] ">
        <h1 className="text-sm font-bold line-clamp-1">{data.title}</h1>
        <p className="text-[10px] line-clamp-1">{data.shortDescription}</p>
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
