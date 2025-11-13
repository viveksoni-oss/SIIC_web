import { Calendar, Clock, SquareArrowOutUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { motion } from "framer-motion";
import HighlightedText from "./../components/Utility Components/HighlightedText";
import FAQ from "../components/ProgramsComponents/FAQ";
import { programsData as programs } from "../data/ProgramsData";
import EligibilityCriteria from "./../components/ProgramsComponents/EligibilityCriteria";
import OurOfferings from "../components/ProgramsComponents/OurOfferings";

const ProgramTitleContainer = ({
  isHovered,
  setIsHovered,
  title,
  applyLink,
  name,
  type,
  cardImage,
}) => {
  // Get status dot color
  const getStatusColor = () => {
    switch (type) {
      case "Active":
        return "bg-green-500";
      case "Upcoming":
        return "bg-blue-500";
      case "Past":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="relative w-full min-h-[280px]  sm:min-h-[320px] rounded-2xl overflow-hidden">
      {/* Background image with reduced gradient overlay */}
      <div className="absolute inset-0">
        <img
          src={`/ProgramsDashboard/Card-Image/${cardImage}`}
          alt={name}
          className="w-full h-full object-cover"
        />
        {/* Lighter gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/60 to-secondary/50"></div>
      </div>

      <img
        src="/ProgramsDashboard/noise.svg"
        alt="noise gradient"
        className="backdrop-blur-sm absolute inset-0 opacity-20"
      />

      <div className="absolute inset-0 px-5 py-4 sm:px-7.5 sm:py-5.5 flex flex-col justify-between">
        <div className="text-white flex flex-col gap-2">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold capitalize wrap-anywhere">
            {name}
          </h1>
          <p className="text-[11px] sm:text-[12px] max-w-[180px] sm:max-w-[211px]">
            {title}
          </p>
          {type && (
            <span className="text-[9px] sm:text-[10px] px-2.5 sm:px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full w-fit flex items-center gap-1.5">
              <span
                className={`w-1.5 h-1.5 rounded-full ${getStatusColor()}`}
              ></span>
              {type}
            </span>
          )}
        </div>
        {applyLink && (
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="border-2 text-[11px] sm:text-[12px] flex items-center border-white justify-between group duration-300 ease-in-out text-white rounded-2xl max-w-[180px] sm:max-w-[200px] px-3 sm:px-4 py-1 hover:bg-white hover:text-black hover:font-semibold transition-all"
            onClick={() => window.open(applyLink, "_blank")}
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
                className="transition-all duration-300 ease-in-out transform"
              >
                <path
                  d="M14.1416 16.1533L14.0394 6.07052L15.1113 7.13718L5.11813 6.88418L7.18176 4.87524L15.4459 4.96925L16.2327 5.7775L16.2052 14.1444L14.1416 16.1533ZM5.98964 16.553L4.49968 15.0225L13.7688 5.999L15.2588 7.52952L5.98964 16.553Z"
                  fill="black"
                />
              </svg>
            )}
          </button>
        )}
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
  }, [currentProgramData, navigate]);

  if (!currentProgramData) {
    return null;
  }

  const {
    name,
    title,
    brief,
    bannerImage,
    cardImage,
    applyLink,
    process,
    offerings,
    eligibility,
    faq,
    type,
    startDate,
    endDate,
    deadline,
    domain,
    centerOfExcellence,
  } = currentProgramData;

  // Format dates
  const formatDate = (dateString) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  // Get status dot color
  const getStatusColor = () => {
    switch (type) {
      case "Active":
        return "bg-green-500";
      case "Upcoming":
        return "bg-blue-500";
      case "Past":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen rounded-b-[20px] sm:rounded-b-[30px] z-30 relative -mb-15 bg-white p-4 sm:p-6 lg:p-12">
      {/* Hero Section - Responsive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-10">
        <ProgramTitleContainer
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          name={name}
          title={title}
          applyLink={applyLink}
          type={type}
          cardImage={cardImage}
        />

        <div className="bg-secondary-gray/30 lg:col-span-3 w-full min-h-[280px] sm:min-h-[307px] rounded-2xl overflow-visible relative p-5 sm:p-7.5">
          {applyLink && (
            <div
              className="absolute bottom-0 right-4 sm:right-8 bg-secondary p-2 rounded-tr-lg cursor-pointer hover:bg-secondary/80 transition-all z-10"
              onClick={() => window.open(applyLink, "_blank")}
            >
              <SquareArrowOutUpRight
                color="white"
                size={18}
                className="sm:w-5 sm:h-5"
              />
            </div>
          )}

          <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-8">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-thin">
                  Program <HighlightedText weight={700}>Brief</HighlightedText>
                </h1>
                {type && (
                  <span className="text-[10px] sm:text-xs px-2.5 sm:px-3 py-1 bg-white rounded-full border border-gray-200 flex items-center gap-1.5">
                    <span
                      className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full ${getStatusColor()}`}
                    ></span>
                    {type}
                  </span>
                )}
              </div>

              <p className="mt-3 sm:mt-4 text-[14px] sm:text-[15px] lg:text-[16px] leading-6 sm:leading-7 font-light max-w-full lg:max-w-[500px]">
                {brief}
              </p>

              {/* Center of Excellence & Domains */}
              {centerOfExcellence && (
                <div className="mt-3 sm:mt-4">
                  <span className="text-[10px] sm:text-xs font-semibold text-gray-600">
                    Center of Excellence:
                  </span>
                  <span className="ml-2 text-[10px] sm:text-xs text-primary font-medium">
                    {centerOfExcellence}
                  </span>
                </div>
              )}

              {domain && domain.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1.5 sm:gap-2">
                  {domain.map((d, idx) => (
                    <span
                      key={idx}
                      className="text-[9px] sm:text-[10px] px-2 py-1 bg-white rounded-full border border-gray-200 capitalize"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Floating Banner Image with Animation - Hidden on small screens, visible on md+ */}
            <motion.div
              className="hidden xl:block rounded-2xl overflow-hidden flex-shrink-0 mx-auto lg:mx-0"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                boxShadow:
                  "0 20px 40px rgba(0, 0, 0, 0.15), 0 10px 20px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src={`/ProgramsDashboard/Card-Image/${cardImage}`}
                className="w-[280px] h-[190px] sm:w-[340px] sm:h-[230px] object-cover"
                alt={`${name} program banner`}
              />
            </motion.div>
          </div>

          {/* Partner Logos - Always visible */}
          <div className="absolute flex gap-2 sm:gap-4 left-4 sm:left-8 bottom-0 p-2">
            {Array.from({ length: 3 }, (_, idx) => (
              <img
                key={idx}
                src={`/ProgramBrief/logos/image ${62 + idx}.png`}
                alt={`partner logo ${idx + 1}`}
                className="h-6 sm:h-8 w-auto"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Program Timeline - Responsive */}
      {(startDate || endDate || deadline) && (
        <div className="mt-4 sm:mt-6 bg-white border border-gray-200 rounded-xl p-3 sm:p-4 flex flex-wrap gap-3 sm:gap-6 items-center text-[10px] sm:text-xs shadow-sm">
          {startDate && (
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Calendar size={16} />
              <span className="font-medium text-gray-600">Start:</span>
              <span className="text-gray-800">{formatDate(startDate)}</span>
            </div>
          )}
          {endDate && (
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Calendar size={16} />
              <span className="font-medium text-gray-600">End:</span>
              <span className="text-gray-800">{formatDate(endDate)}</span>
            </div>
          )}
          {deadline && type === "Active" && (
            <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 bg-red-50 rounded-lg">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-red-500 sm:w-[14px] sm:h-[14px]"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg> */}
              <Clock size={18} className="text-red-600" />
              <span className="font-semibold text-red-600">Deadline:</span>
              <span className="text-red-700 font-medium">
                {formatDate(deadline)}
              </span>
            </div>
          )}
        </div>
      )}

      {/* Grid Layout Section - Fully Responsive */}
      <div className="grid grid-cols-1 lg:grid-cols-[300px_auto] xl:grid-cols-[350px_auto_auto_auto] gap-6 sm:gap-10 lg:gap-20 mt-8 sm:mt-10 lg:mt-12">
        {/* The Process */}
        <div className="lg:row-span-3 flex flex-col">
          <div className="text-[28px] sm:text-[32px] lg:text-[40px] font-thin text-black mb-6 sm:mb-8">
            The{" "}
            <HighlightedText size="inherit" weight={700}>
              Process
            </HighlightedText>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col items-center justify-center space-y-2 border-1 rounded-2xl py-6 sm:py-8 w-full">
              {process && process.length > 0 ? (
                process.map((content, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col justify-center items-center space-y-2"
                  >
                    <div className="flex relative">
                      <div
                        className={`w-[110px] sm:w-[130px] text-[16px] sm:text-[18px] lg:text-[20px] absolute capitalize flex flex-wrap ${
                          idx % 2 === 0
                            ? "left-6 sm:left-8 justify-start"
                            : "right-6 sm:right-8 justify-end"
                        }`}
                      >
                        {content.step.split(" ").map((word, wordIdx) => {
                          if (wordIdx === 0) {
                            return (
                              <span key={wordIdx} className="inline-block mr-1">
                                <HighlightedText weight={600}>
                                  {word + " "}
                                </HighlightedText>
                              </span>
                            );
                          }
                          return (
                            <span key={wordIdx} className="inline-block mr-1">
                              {word + " "}
                            </span>
                          );
                        })}
                      </div>
                      <div className="w-7 h-7 sm:w-8 sm:h-8 -mx-2 rounded-full bg-white border-2 sm:border-3 border-primary flex justify-center items-center">
                        <div className="w-[18px] h-[18px] sm:w-[21px] sm:h-[21px] rounded-full bg-secondary-gray"></div>
                      </div>
                    </div>
                    {idx < process.length - 1 && (
                      <div className="h-12 sm:h-16 border-dashed border-l-2 border-[rgba(31,31,31,0.30)]"></div>
                    )}
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-sm">
                  Process details coming soon
                </p>
              )}
            </div>
          </div>
        </div>

        <OurOfferings offerings={offerings} />
        <EligibilityCriteria eligibility={eligibility} />
        <FAQ faqData={faq} />
      </div>
    </div>
  );
}

export default ProgramOverview;
