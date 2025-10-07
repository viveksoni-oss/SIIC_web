import { SquareArrowOutUpRight } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router";
import HighlightedText from "./../components/Utility Components/HighlightedText";
import FAQ from "../components/ProgramsComponents/FAQ";
import { programs } from "../data/ProgramsDetailsData";

function OurOfferings({ offerings }) {
  return (
    <div className="col-span-3 p-6 space-x-8 relative">
      <h1 className="text-[40px] font-thin mb-7">
        Our{" "}
        <HighlightedText size={"40px"} weight={700}>
          Offerings
        </HighlightedText>
      </h1>

      <div className="flex justify-center items-end gap-[70px] flex-wrap">
        {offerings.map(({ icon, title, description }, idx) => (
          <div
            className="w-60 h-50 bg-secondary-gray/30 rounded-2xl p-5 flex justify-center items-center flex-col gap-6"
            key={title + idx}
          >
            <img src={`/ProgramsDashboard/${icon}.png`} alt={`icon-${title}`} />
            <p className="text-xs text-center line-clamp-2">{description}</p>
          </div>
        ))}
      </div>
      {/* <div className="border-b-1 container absolute bottom-10 left-20 border-black/50 w-[415px] opacity-25 mt-10 place-items-start"></div> */}
    </div>
  );
}

function EligibilityCriteria({ eligibility }) {
  return (
    <div className="col-span-3 p-6">
      <h1 className="text-[40px] font-thin mb-8">
        <HighlightedText size={"40px"} weight={700}>
          Eligibility{" "}
        </HighlightedText>
        Criteria
      </h1>
      <div className="max-w-[800px] space-y-2">
        {eligibility.map((criteria, idx) => (
          <div className="flex gap-3 text-base" key={idx}>
            <img src="/Icons/list-icon.svg" alt="list icon" />
            <p className="line-clamp-2">{criteria}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProgramOverview() {
  const [isHovered, setIsHovered] = useState(false);
  const { id: slug } = useParams();

  const currentProgramData = programs.find((p) => p.slug === slug);

  if (!currentProgramData) {
    return (
      <div className="min-h-screen font-extrabold text-gray-500/20 text-8xl content-center text-center">
        Program Not Found
      </div>
    );
  }

  const {
    name,
    title,
    brief,
    headBanner,
    process,
    offerings,
    eligibility,
    faq,
  } = currentProgramData;

  return (
    <div className="min-h-screen rounded-2xl mb-15 bg-white p-12">
      <div className="flex gap-10">
        <div className="relative flex-1 max-w-[350px] max-h-[320px] rounded-2xl overflow-hidden">
          <img
            src="/ProgramsDashboard/gradient.svg"
            alt="gradient"
            className="backdrop-blur-3xl absolute inset-0"
          />
          <img
            src="/ProgramsDashboard/noise.svg"
            alt="noise gradient"
            className="backdrop-blur-3xl absolute inset-0"
          />
          <div className="absolute inset-0 px-7.5 py-5.5 flex flex-col justify-between">
            <div className="text-white flex flex-col gap-2">
              <h1 className="text-5xl font-bold capitalize">{name}</h1>
              <p className="text-[12px] leading-[-2%] max-w-[211px]">{title}</p>
            </div>
            <button
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="border-2 text-[12px] flex items-center border-white justify-between group duration-300 ease-in-out text-white rounded-2xl max-w-[200px] px-4 py-1 hover:bg-white hover:text-black transition-all"
              onClick={() => window.open(headBanner.applyLink, "_blank")}
            >
              <span>Apply now</span>

              {!isHovered ? (
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
                    fill="black"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className="bg-secondary-gray/30 flex-1/2 w-full min-h-[307px] rounded-2xl overflow-hidden">
          <SquareArrowOutUpRight />
        </div>
      </div>

      <p className="mt-9 max-w-3xl text-[18px] leading-7 font-light">{brief}</p>

      {/* Grid Layout Section */}
      <div
        className="grid grid-cols-4 gap-8 mt-12"
        style={{ gridTemplateRows: "repeat(3, 1fr)", minHeight: "600px" }}
      >
        {/* The Process */}
        <div className="row-span-3 col-span-1 flex flex-col">
          <div className="text-[40px] font-thin text-black mb-8">
            The{" "}
            <HighlightedText size="40px" weight={700}>
              Process
            </HighlightedText>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <div className="flex flex-col items-center justify-center space-y-2 border-1 rounded-2xl py-6 px-15 w-full">
              {process.map((content, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-center items-center space-y-2"
                >
                  <div className="flex relative">
                    <div
                      className={`w-[120px] text-lg absolute  ${
                        idx % 2 === 0 ? "left-10" : " right-2"
                      }`}
                    >
                      {content.step}
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white border-2 border-primary flex justify-center items-center">
                      <div className="w-6 h-6 rounded-full bg-secondary-gray"></div>
                    </div>
                  </div>
                  {idx < process.length - 1 && (
                    <div className="h-16 border-dashed border-l-2 border-[rgba(31,31,31,0.30)]"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <OurOfferings offerings={offerings} />
        <EligibilityCriteria eligibility={eligibility} />
        <FAQ faqList={faq} />
      </div>
    </div>
  );
}

export default ProgramOverview;
