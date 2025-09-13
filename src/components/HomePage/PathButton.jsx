import React, { useState } from "react";

function PathButton({ details, setCurrentPath }) {
  const { title, content, path } = details;
  return (
    <div>
      <div className="flex flex-col gap-4 justify-center">
        {/* Icon div */}

        <div className="relative inline-block">
          <img src="/KnowYourJourney/Ellipse.svg" alt="background of icon" />
          <img
            src={`/KnowYourJourney/${path}`}
            alt="icon"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>

        <button
          onClick={() =>
            setCurrentPath((prev) => {
              console.log(prev);
              return prev == null || prev?.title != details.title
                ? details
                : null;
            })
          }
          className="border-2  border-primary rounded-2xl py-2 px-6 capitalize"
        >
          {title}
        </button>
      </div>
    </div>
  );
}

export default PathButton;
