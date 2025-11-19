import React, { useState } from "react";
import ArrowBg from "./ArrowBg";

const FILLER_IMG = "https://via.placeholder.com/140x180.png?text=No+Image";

function CardArrow({ data, arrowColor }) {
  const { name, role, domain, image, linkedin } = data;
  const [imgErr, setImgErr] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [arrowRef, setArrowRef] = useState(null);

  return (
    // hover:shadow-[1px_0_4px_0px_rgba(0,0,0,0.2)]
    <div
      className="relative border border-secondary-gray/60 rounded-2xl p-4 pl-24 w-[400px] transition-all duration-300 ml-20 mb-10 mt-15  outline-none hover:shadow-[1px_1px_20px_2px] hover:shadow-primary-highlight/40 hover:outline outline-2 outline-primary-highlight"
      onMouseEnter={() => setIsHovered(true)}
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
      {/* Image Container: rounded and overflow-hidden */}
      <div className="absolute -left-20 -top-2/3 w-[180px] h-[220px] rounded-2xl flex items-center justify-center">
        <div className="relative w-[140px] h-[180px] ">
          <div className="z-10 rounded-full  overflow-hidden flex justify-center items-center  absolute inset-0 -left-10 -top-5 ">
            <img
              src={imgErr || !image ? FILLER_IMG : image}
              alt={name}
              className="object-cover"
              onError={() => setImgErr(true)}
            />
          </div>
          <div className="absolute -left-4 -top-4 z-0">
            <div
              ref={setArrowRef}
              style={
                isHovered
                  ? { animation: "triangle-bounce 2s ease-in-out infinite" }
                  : {}
              }
            >
              {/* <ArrowBg color={arrowColor} /> */}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-2">
        <h1 className="text-[18px] font-semibold text-primary-highlight line-clamp-2">
          {name}
        </h1>
        <div className="flex justify-between">
          <div className="text-[12px] font-medium">
            <p className="uppercase  ">{role}</p>
            <p className="text-[#1f1f1f]/80 line-clamp-1">{domain}</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-full w-0 rounded-full border-l-3 border-secondary" />
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity flex-shrink-0"
              style={{ minWidth: 20, minHeight: 20 }}
            >
              <img
                src="ManagePortfolios/Icons/Linkedin.svg"
                alt="linkedin-icon"
                className="h-[20px] w-[20px]"
                style={{ minWidth: 20, minHeight: 20 }}
              />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes triangle-bounce {
          0%, 100% {
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
