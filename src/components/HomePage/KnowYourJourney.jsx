import React, { useEffect, useRef, useState } from "react";
import HighlightedText from "../Utility Components/HighlightedText";
import PathButton from "./PathButton";

function KnowYourJourney() {
  const [currentPath, setCurrentPath] = useState(null);
  const pathRef = useRef(null);
  const paths = [
    { title: "idea", content: "idea content", path: "Bulb.svg" },
    { title: "Prototype", content: "Prototype content", path: "Prototype.svg" },
    { title: "Scale up", content: "Market", path: "ScaleUp.svg" },
    { title: "Market", content: "Market content", path: "moneyDollar.svg" },
  ];

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (pathRef.current && !pathRef.current.contains(e.target)) {
        // console.log(pathRef.current.contains(e.target));
        setCurrentPath(null);
      }
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    });
  }, [pathRef]);
  return (
    <div
      className="mx-auto max-w-5xl mb-10 w-full p-6 rounded-2xl border-1 border-primary flex flex-col items-center justify-center"
      ref={pathRef}
    >
      <div>
        <h1 className="text-[40px] font-light">
          Know your{" "}
          <HighlightedText weight={600} size={"40px"}>
            Journey
          </HighlightedText>
        </h1>
        <p>
          Explore your startup's path -- SIIC guides you with support and
          resources.
        </p>
      </div>
      <div className="flex flex-row items-center justify-center gap-18 mt-10 w-full">
        {paths.map((path) => (
          <>
            <PathButton
              details={path}
              key={path.title}
              setCurrentPath={setCurrentPath}
            />
          </>
        ))}
      </div>
      <div className="w-full">
        {currentPath !== null && (
          <div className=" w-full h-50 border mt-6 p-4 rounded border-primary-highlight ">
            <p>{currentPath?.content}</p>
            <button onClick={() => setCurrentPath(null)}>cancel</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default KnowYourJourney;
