import HighlightedText from "./../Utility Components/HighlightedText";
import CarouselLayout from "./CarouselLayout";

function OurPride() {
  return (
    <div className="flex justify-between items-center mt-40 mb-35">
      <div>
        <CarouselLayout />
      </div>
      <div className="flex justify-center items-center bg-white self-end">
        <div className="bg-[#F5F5F5] rounded-l-2xl px-12 py-10 flex flex-col items-start gap-8 w-[420px] shadow">
          <h1 className="text-[42px] font-extralight leading-snug">
            Our{" "}
            <HighlightedText size="42px" weight={800}>
              Pride
            </HighlightedText>
          </h1>
          <p className="text-base text-[#292929] leading-relaxed">
            Real journeys of passion,
            <br />
            persistence, and innovation — from
            <br />
            bold ideas to breakthrough
            <br />
            startups that made it happen.
          </p>
          <button className="border-3 hover:bg-primary-highlight hover:font-semibold hover:text-white border-primary-highlight text-[#292929] px-6 py-2 rounded-full transition font-normal text-base mt-2">
            Know more
          </button>
        </div>
      </div>
    </div>
  );
}

export default OurPride;
