import React, { useState } from "react";
import HighlightedText from "./HighlightedText";

function LetUsKnow() {
  const [isHovered, setIsHovered] = useState(false);
  const inputStyle =
    "px-4 py-2 bg-white min-w-80 border-primary rounded-lg text-base -mt-4 font-[500] focus:outline-none  focus:ring-2  focus:ring-primary-highlight focus:ring-offset-0 transition-all duration-300";
  const textareaStyle =
    "resize-none focus:outline-none focus:ring-2 focus:ring-primary-highlight focus:right-offset-0 transition-all duration-300 px-4 py-2 bg-white lg:col-span-2 h-30 w-full  -mt-4 rounded-lg text-base font-[500]";
  return (
    <div className="max-w-4xl bg-[#E3E3E3]/50 rounded-t-4xl p-12 px-24 mx-auto h-auto flex flex-col gap-16 mt-30 ">
      <h1 className="text-5xl text-center font-[200]">
        Let us{" "}
        <HighlightedText size="48px" weight={600}>
          Know
        </HighlightedText>
      </h1>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-8 justify-center items-center">
          <input type="text" placeholder="First Name" className={inputStyle} />
          <input type="text" placeholder="Last Name" className={inputStyle} />
          <input
            type="text"
            placeholder="Email Address"
            className={inputStyle}
          />
          <input
            type="text"
            placeholder="Contact Number"
            className={inputStyle}
          />
          <textarea
            type="text"
            placeholder="Query/Message"
            className={textareaStyle}
          />
        </div>
      </div>

      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="border-3 flex justify-between w-[100px] h-[30px] items-center border-primary-highlight self-end py-2 px-4 rounded-full text-[12px] transition-all duration-300 hover:bg-primary-highlight hover:text-white hover:font-semibold"
      >
        <span>Send</span>
        <div className="relative w-5 h-5 flex items-center   ">
          {!isHovered ? (
            // Default arrow (horizontal)
            <svg
              width="11"
              height="9"
              viewBox="0 0 11 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-all duration-300 ease-in-out"
            >
              <path
                d="M5.104 9L9.888 4.232L9.904 5.032L5.104 0.504H6.384L10.496 4.328V4.952L6.384 9H5.104ZM0.8 5.128V4.216H9.68V5.128H0.8Z"
                fill="currentColor"
              />
            </svg>
          ) : (
            // Hovered arrow (diagonal)
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-all duration-300 ease-in-out transform "
            >
              <path
                d="M14.1416 16.1533L14.0394 6.07052L15.1113 7.13718L5.11813 6.88418L7.18176 4.87524L15.4459 4.96925L16.2327 5.7775L16.2052 14.1444L14.1416 16.1533ZM5.98964 16.553L4.49968 15.0225L13.7688 5.999L15.2588 7.52952L5.98964 16.553Z"
                fill="white"
              />
            </svg>
          )}
        </div>
      </button>
    </div>
  );
}

export default LetUsKnow;
