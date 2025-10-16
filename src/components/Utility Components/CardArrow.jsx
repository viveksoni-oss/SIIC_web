import React, { useState } from "react";
import ArrowBg from "./ArrowBg";

function CardArrow({ data }) {
  const { name, role, domain, image, linkedin, strengths } = data;
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [arrowRef, setArrowRef] = useState(null);

  return (
    <div
      className="relative border border-secondary-gray/60 rounded-2xl p-4 pl-24 min-h-[200px] w-[360px] ease-in-out transition-opacity hover:border-transparent duration-500 hover:shadow-[1px_0_4px_0px_rgba(0,0,0,0.2)] ml-20 mt-15"
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        if (arrowRef) {
          const computedStyle = window.getComputedStyle(arrowRef);
          const transform = computedStyle.transform;
          arrowRef.style.animation = "none";
          arrowRef.style.transform = transform;
          setTimeout(() => {
            arrowRef.style.transition = "transform 0.6s ease-out";
            arrowRef.style.transform = "translate(0px, 0px)";
          }, 10);
        }
      }}
    >
      {/* Image Container */}
      <div className="absolute -left-15 -top-10 w-[180px] h-[220px]">
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="absolute inset-0 z-10 h-[180px] w-[140px] object-cover"
          />
          <div className="absolute -left-4 -top-4 z-0">
            <div
              ref={setArrowRef}
              style={
                isHovered
                  ? { animation: "triangle-bounce 2s ease-in-out infinite" }
                  : {}
              }
            >
              <ArrowBg />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-2">
        <h1 className="text-base font-semibold text-primary-highlight line-clamp-2">
          {name}
        </h1>

        <div className="flex justify-between">
          <div className="text-[10px] font-medium">
            <p className="uppercase">{role}</p>
            <p className="text-[#1f1f1f]/30">{domain}</p>
          </div>

          <div className="flex items-center gap-2">
            <div className="h-full w-0 rounded-full border-l-3 border-secondary" />
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              <img
                src="ManagePortfolios/Icons/Linkedin.svg"
                alt="linkedin-icon"
                className="h-[20px] w-[20px]"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Strengths Section */}
      <div className="mt-4 text-[#1f1f1f]">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <h1 className="text-[14px] font-semibold">Strengths</h1>
          <svg
            className={`h-4 w-4 transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        <p
          className={`ml-2 mt-2 text-xs transition-all duration-300 overflow-hidden ${
            isExpanded ? "" : "line-clamp-2"
          }`}
        >
          {strengths}
        </p>
      </div>

      <style>{`
        @keyframes triangle-bounce {
          0%,
          100% {
            transform: translate(0px, 0px);
          }
          50% {
            transform: translate(-8px, -8px);
          }
        }
      `}</style>
    </div>
  );
}

export default CardArrow;
