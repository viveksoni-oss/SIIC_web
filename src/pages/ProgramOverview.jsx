import { ArrowRight, Clock, SquareArrowOutUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import HighlightedText from "./../components/Utility Components/HighlightedText";
import FAQ from "../components/ProgramsComponents/FAQ";
import { programsData as programs } from "../data/ProgramsData";
import EligibilityCriteria from "./../components/ProgramsComponents/EligibilityCriteria";
import OurOfferings from "../components/ProgramsComponents/OurOfferings";
import { cn } from "@/lib/utils";

// Program Title/Brief section (LEFT PANE)
const ProgramTitleContainer = ({
  isHovered,
  setIsHovered,
  title,
  applyLink,
  name,
  cardImage,
  deadline,
  formatDate,
}) => (
  <div className="relative w-full min-h-[290px] sm:min-h-[320px] rounded-2xl overflow-hidden flex flex-col justify-between">
    {/* BG image & overlay */}
    <div className="absolute inset-0">
      <img
        src={`/ProgramsDashboard/Card-Image/${cardImage}`}
        alt={name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/60 to-secondary/50"></div>
    </div>
    <img
      src="/ProgramsDashboard/noise.svg"
      alt="noise gradient"
      className="backdrop-blur-sm absolute inset-0 opacity-20"
    />
    <div className="absolute inset-0 px-5 py-4 sm:px-7.5 sm:py-5.5 flex flex-col justify-between z-10">
      <div className="text-white flex flex-col gap-2">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold capitalize break-words">
          {name}
        </h1>
        <p className="text-[11px] sm:text-[12px] max-w-full">{title}</p>
        {/* Deadline badge with blurred background, left side only */}
        {deadline && (
          <span className="text-[9px] sm:text-[11px] px-2.5 sm:px-3 py-1 flex items-center gap-1 font-semibold rounded-lg backdrop-blur-xl  text-white bg-primary shadow mt-2 w-fit">
            <Clock size={12} className="text-white" />
            Deadline: {formatDate(deadline)}
          </span>
        )}
      </div>
      {applyLink && (
        <button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className=" max-h-7.5 border-2 text-[11px] sm:text-[12px] flex items-center border-white group duration-300 ease-in-out text-white rounded-2xl w-full max-w-[220px] sm:max-w-[240px] px-3 sm:px-4 py-1 hover:bg-white hover:text-black hover:font-semibold transition-all  justify-between"
          onClick={() => window.open(applyLink, "_blank")}
        >
          <span>Apply now</span>
          <ArrowRight
            size={isHovered ? 22 : 15}
            className={cn(
              "transition-all duration-300 ease-in-out",
              isHovered ? "-rotate-45" : "rotate-0"
            )}
          />
        </button>
      )}
    </div>
  </div>
);

// Main program overview layout
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

  if (!currentProgramData) return null;

  const {
    logos,
    name,
    title,
    brief,
    cardImage,
    applyLink,
    process,
    offerings,
    eligibility,
    faq,
    type,
    deadline,
    domain,
    centerOfExcellence,
  } = currentProgramData;

  const formatDate = (dateString) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  // Limit program brief to 250 words
  const programBriefShort =
    brief.split(" ").slice(0, 250).join(" ") +
    (brief.split(" ").length > 250 ? "..." : "");

  // Status dot color helper for right section only
  const getStatusColor = (type) => {
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
      {/* HERO SECTION (GRID) */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-10">
        {/* LEFT: ProgramTitleContainer */}
        <ProgramTitleContainer
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          name={name}
          title={title}
          applyLink={applyLink}
          cardImage={cardImage}
          deadline={deadline}
          formatDate={formatDate}
        />

        {/* RIGHT: Brief + Status + Icons (images) */}
        <div className="bg-secondary-gray/30 lg:col-span-3 w-full min-h-[280px] sm:min-h-[307px] rounded-2xl overflow-visible relative p-5 sm:p-7.5 flex flex-col">
          <div className="flex-1 flex flex-col">
            <div className="flex  items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-thin">
                Program <HighlightedText weight={700}>Brief</HighlightedText>
              </h1>
              {/* Active/Upcoming/Past status only on right! */}
              {type && (
                <span className="text-[10px] sm:text-xs px-2.5 sm:px-3 py-1 bg-white rounded-full border border-gray-200 flex items-center gap-1.5">
                  <span
                    className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full ${getStatusColor(
                      type
                    )}`}
                  ></span>
                  {type}
                </span>
              )}
            </div>
            {/* Brief full width */}
            <p className="mt-3 sm:mt-4 text-[14px] sm:text-[15px] lg:text-[16px] leading-6 sm:leading-7 font-light w-full">
              {programBriefShort}
            </p>
            {centerOfExcellence && (
              <div className="mt-3 sm:mt-4 text-[10px] sm:text-xs font-semibold text-gray-600">
                Center of Excellence:
                <span className="ml-2 text-primary font-medium">
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
            {/* Partner icons/images (flex row, always at bottom, your custom IMAGES) */}
            {logos && (
              <div className="w-full flex gap-2 sm:gap-4 justify-start items-center pt-3 -mb-1 sm:-mb-5 mt-8">
                {logos.map((logo) => (
                  <img
                    src={`/ProgramBrief/logos/${logo}.png`}
                    alt={"partner" + logo}
                    className="h-6 sm:h-8 w-auto"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* GRID: Stack below */}
      <div className="grid grid-cols-1 lg:grid-cols-[300px_auto] xl:grid-cols-[350px_auto_auto_auto] gap-6 sm:gap-10 lg:gap-20 mt-8 sm:mt-10 lg:mt-12 ">
        <div className="lg:row-span-3 flex  flex-col">
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
