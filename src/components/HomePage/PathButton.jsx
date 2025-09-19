import React, { useState } from "react";

function PathButton({ details, setCurrentPath, currentPath }) {
  const { title, path, hoverPath } = details;
  const [isHovered, setIsHovered] = useState(false);

  const isActive = currentPath === title;

  const handleClick = () => {
    setCurrentPath((prev) => (prev?.title === title ? null : details));
  };

  return (
    <div
      className="flex flex-col gap-4 justify-center" // Removed items-center
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon Container */}
      <div className="relative inline-block">
        {/* Background Circles */}
        <div className="relative">
          <img
            src="/KnowYourJourney/Ellipse.svg"
            alt="background"
            className={`transition-opacity duration-300 ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          />
          <img
            src="/KnowYourJourney/hover/Ellipse-hover.svg"
            alt="background hover"
            className={`absolute inset-0 scale-110 transition-opacity duration-500 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        {/* Icons */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={`/KnowYourJourney/${path}`}
            alt={`${title} icon`}
            className={`transition-opacity duration-300 ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          />
          <img
            src={`/KnowYourJourney/hover/${hoverPath}`}
            alt={`${title} hover icon`}
            className={`absolute transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>

      {/* Button - Now takes full width of container */}
      <button
        onClick={handleClick}
        className={`
          border-2 border-primary rounded-2xl py-2 px-6 
          font-[400] capitalize duration-300 ease-in-out
          hover:scale-105 active:scale-95 hover:shadow-lg
          transform transition-all cursor-pointer
          w-full text-center  
          ${
            isActive
              ? "bg-primary text-white font-bold shadow-md"
              : isHovered
              ? "bg-primary text-white font-bold shadow-lg"
              : "bg-transparent text-black hover:bg-primary/5"
          }
        `}
      >
        {title}
      </button>
    </div>
  );
}

export default PathButton;
