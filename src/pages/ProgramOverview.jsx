import { SquareArrowOutUpRight } from "lucide-react";
import { useEffect, useState } from "react"; // Added useEffect here
import { useNavigate, useParams } from "react-router";
import HighlightedText from "./../components/Utility Components/HighlightedText";
import FAQ from "../components/ProgramsComponents/FAQ";
import { programs } from "../data/ProgramsDetailsData";

import EligibilityCriteria from "./../components/ProgramsComponents/EligibilityCriteria";
import OurOfferings from "../components/ProgramsComponents/OurOfferings";

const ProgramTitleContainer = ({
  isHovered,
  setIsHovered,
  title,
  headBanner,
  name,
}) => {
  return (
    <div className="relative grid-span-1 min-w-[350px] min-h-[320px] rounded-2xl overflow-hidden">
      <img
        src="/ProgramsDashboard/gradient.svg"
        alt="gradient"
        className="absolute inset-0"
      />
      <img
        src="/ProgramsDashboard/noise.svg"
        alt="noise gradient"
        className="backdrop-blur-2xl absolute inset-0"
      />
      <div className="absolute inset-0 px-7.5 py-5.5 flex flex-col justify-between ">
        <div className="text-white flex flex-col  gap-2">
          <h1 className="text-4xl font-bold capitalize wrap-anywhere ">
            {name}
          </h1>
          <p className="text-[12px]  max-w-[211px]  ">{title}</p>
        </div>
        <button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="border-2 text-[12px] flex items-center border-white justify-between group duration-300 ease-in-out text-white rounded-2xl max-w-[200px] px-4 py-1 hover:bg-white hover:text-black hover:font-semibold transition-all"
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
              width="26"
              height="15"
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
  );
};
function ProgramOverview() {
  const [isHovered, setIsHovered] = useState(false);
  const { id: slug } = useParams();
  const navigate = useNavigate();
  const currentProgramData = programs.find((p) => p.slug === slug);
  useEffect(() => {
    if (!currentProgramData) {
      navigate("/programs?notFound=true");
    }
  }, [currentProgramData]);

  if (!currentProgramData) {
    return null;
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
      <div className="grid grid-cols-4 gap-44">
        <ProgramTitleContainer
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          name={name}
          title={title}
          headBanner={headBanner}
        />
        <div className="bg-secondary-gray/30 col-span-3 w-full min-h-[307px] rounded-2xl overflow-hidden relative p-7.5 ">
          <div className="absolute bottom-0 right-8 bg-secondary p-2 rounded-tr-lg">
            <SquareArrowOutUpRight color="white" />
          </div>

          <div className="flex justify-between">
            <div>
              <h1 className="text-4xl font-thin">
                Program <HighlightedText weight={700}>Brief</HighlightedText>
              </h1>
              <p className="mt-9  text-[16px] leading-7 font-light max-w-[500px]">
                {brief}
              </p>
            </div>
            <div className=" rounded-2xl">
              <img
                src={headBanner.imageUrl}
                className="w-[340px] h-[230px] "
                alt="headbanner img"
              />
            </div>
            <div className="absolute flex gap-4 left-8 bottom-0 p-2">
              {Array.from({ length: 3 }, (_, idx) => (
                <img
                  src={`/ProgramBrief/logos/image ${62 + idx}.png`}
                  alt={idx}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grid Layout Section */}
      <div
        className="grid grid-cols-[350px_auto_auto_auto] gap-20 gap-y-15 mt-12"
        style={{ gridTemplateRows: "repeat(4,auto)", minHeight: "600px" }}
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
            <div className="flex flex-col items-center justify-center space-y-2 border-1 rounded-2xl py-8 px- w-full">
              {process.map((content, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-center items-center space-y-2"
                >
                  <div className="flex relative">
                    <div
                      className={`w-[130px] text-[20px] absolute capitalize  flex flex-wrap ${
                        idx % 2 === 0
                          ? "left-8 justify-start"
                          : " right-8 justify-end"
                      }`}
                    >
                      {content.step.split(" ").map((word, idx) => {
                        if (idx == 0) {
                          return (
                            <span key={idx} className="inline-block mr-1">
                              <HighlightedText weight={600}>
                                {word + " "}
                              </HighlightedText>
                            </span>
                          );
                        }
                        return (
                          <span key={idx} className="inline-block mr-1">
                            {word + " "}
                          </span>
                        );
                      })}
                    </div>
                    <div className="w-8 h-8 -mx-2 rounded-full bg-white border-3 border-primary flex justify-center items-center">
                      <div className="w-[21px] h-[21px] rounded-full bg-secondary-gray"></div>
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
