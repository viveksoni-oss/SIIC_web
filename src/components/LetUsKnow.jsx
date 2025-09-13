import React from "react";
import HighlightedText from "./Utility Components/HighlightedText";

function LetUsKnow() {
  const inputStyle =
    "px-4 py-2 bg-white min-w-80 border-primary rounded-lg text-base -mt-4 font-[500] focus:outline-none  focus:ring-2  focus:ring-primary-highlight focus:ring-offset-0 transition-all duration-300";
  const textareaStyle =
    "resize-none focus:outline-none focus:ring-2 focus:ring-primary-highlight focus:right-offset-0 transition-all duration-300 px-4 py-2 bg-white lg:col-span-2 h-30 w-full  -mt-4 rounded-lg text-base font-[500]";
  return (
    <div className="max-w-4xl bg-[#E3E3E3]/50 rounded-t-4xl p-12 px-24 mx-auto h-auto flex flex-col gap-16 ">
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

      <button className="border-2 border-primary-highlight self-end py-2 px-4 justify-end rounded-full ">
        Send us
      </button>
    </div>
  );
}

export default LetUsKnow;
