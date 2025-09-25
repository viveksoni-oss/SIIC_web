import { useParams } from "react-router";
import HighlightedText from "./../components/Utility Components/HighlightedText";
import { MoveRight, SquareArrowOutUpRight } from "lucide-react";

function OurOfferings() {
  const CardDetails = [
    {
      imgLink: "/ProgramsDashboard/Vector.png",
      alt: "icons what ever change later",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo nihil porro beatae magnam suscipit asperiores corporis eum dolores soluta repudiandae!",
    },
    {
      imgLink: "/ProgramsDashboard/Vector-1.png",
      alt: "icons what ever change later",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo nihil porro beatae magnam suscipit asperiores corporis eum dolores soluta repudiandae!",
    },
    {
      imgLink: "/ProgramsDashboard/Vector-2.png",
      alt: "icons what ever change later",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo nihil porro beatae magnam suscipit asperiores corporis eum dolores soluta repudiandae!",
    },
  ];
  return (
    <div className="col-span-3 p-6 space-x-8">
      <h1 className="text-[40px] font-thin ">
        Our
        <HighlightedText size={"40px"} weight={700}>
          Offerings{" "}
        </HighlightedText>
      </h1>

      <div className="flex justify-center items-end gap-[70px] flex-wrap">
        {CardDetails.map((data) => (
          <div className="w-60 h-50 bg-secondary-gray/30 rounded-2xl p-5 flex justify-center items-center flex-col gap-6">
            <img src={data.imgLink} alt={data.alt} />
            <p className="text-xs text-center line-clamp-2">{data.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
function EligibilityCriteria() {
  return (
    <div className="col-span-3 ">
      <h1 className="text-[40px] font-thin  ">
        <HighlightedText size={"40px"} weight={700}>
          Eligibility{" "}
        </HighlightedText>
        Criteria
      </h1>
    </div>
  );
}
function FAQ() {
  return (
    <div className="col-span-3 ">
      <h1 className="text-[40px] font-thin ">
        Frequently Asked
        <HighlightedText size={"40px"} weight={700}>
          Questions
        </HighlightedText>
      </h1>
    </div>
  );
}
function ProgramOverview() {
  const { id } = useParams();
  console.log(id);
  const list = [
    "heading 1 is good ",
    "heading 2",
    "heading 3",
    "heading 4",
    "heading 4",
  ];
  return (
    <div className="min-h-screen rounded-2xl mb-15 bg-white p-12">
      <div className="flex gap-10">
        <div className="relative flex-1 min-w-[350px] min-h-[320px] rounded-2xl overflow-hidden">
          <img
            src="/ProgramsDashboard/gradient.svg"
            alt="gradient"
            style={{}}
            className="backdrop-blur-3xl absolute inset-0"
          />
          <img
            src="/ProgramsDashboard/noise.svg"
            alt="gradient"
            style={{}}
            className="backdrop-blur-3xl absolute inset-0"
          />
          <div className="absolute inset-0 px-7.5 py-5.5 flex flex-col justify-between">
            <div className="text-white flex flex-col gap-2">
              <h1 className="text-5xl font-bold capitalize">UDAAN</h1>
              <p className="text-[12px] leading-[-2%] max-w-[211px]">
                UAV / UAS / DRONE Acceleration and Networking Program
              </p>
            </div>
            <button className="border-2 text-[12px] flex border-white justify-between group duration-300 ease-in-out text-white rounded-2xl max-w-[200px] px-4 py-1">
              <span>Apply now</span>{" "}
              <MoveRight className="text-white group-hover:-rotate-45 duration:300 ease-in-out " />
              {/* <img
                src="/Icons/buttonArrow.svg"
                className="text-white hover:-rotate-45 "
                alt="arrow-icon"
              /> */}
            </button>
          </div>
        </div>

        <div className="bg-secondary-gray/30 flex-1/2 w-full min-h-[307px] rounded-2xl overflow-hidden">
          <SquareArrowOutUpRight />
        </div>
      </div>

      {/* Grid Layout Section - Fixed */}
      <div
        className="grid grid-cols-4   gap-8 mt-12"
        style={{ gridTemplateRows: "repeat(3, 1fr)", minHeight: "600px" }}
      >
        {/* The Process - Spans full height (all 3 rows) */}
        <div className="row-span-3 col-span-1 flex flex-col">
          <div className="text-[40px] font-thin text-black mb-8">
            The{" "}
            <HighlightedText size="40px" weight={700}>
              Process
            </HighlightedText>
          </div>
          <div className="flex flex-col justify-center items-center ">
            {/* Process Steps */}
            <div className="flex flex-col items-center justify-center space-y-2 border-1 rounded-2xl py-6 px-15 w-full">
              {list.map((content, idx) => (
                <>
                  <div className="flex flex-col justify-center items-center space-y-2">
                    <div className="flex  relative">
                      <div
                        className={`w-[120px] text-lg absolute  ${
                          idx % 2 == 0
                            ? "text-red-300 left-10"
                            : "text-pink-300 right-2"
                        }`}
                      >
                        {content}
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white border-2 border-primary flex justify-center items-center">
                        <div className="w-6 h-6 rounded-full bg-secondary-gray"></div>
                      </div>
                    </div>
                  </div>
                  {idx < list.length - 1 && ( // Only show line if not the last item
                    <div className="h-16 border-dashed border-l-2 border-[rgba(31,31,31,0.30)]"></div>
                  )}
                </>
              ))}
            </div>
          </div>
        </div>

        {/* Our Offerings - Row 1, Column 2 */}
        <OurOfferings></OurOfferings>

        {/* Program Benefits - Row 2, Column 2 */}
        <EligibilityCriteria></EligibilityCriteria>

        {/* Success Stories - Row 3, Column 2 */}
        <FAQ />
      </div>
    </div>
  );
}

export default ProgramOverview;
