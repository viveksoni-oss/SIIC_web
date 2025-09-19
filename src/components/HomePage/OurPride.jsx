import HighlightedText from "./../Utility Components/HighlightedText";
import CarouselLayout from "./CarouselLayout";

function OurPride() {
  return (
    <div className="flex justify-between mt-40 mb-35">
      <CarouselLayout></CarouselLayout>
      <div className="flex justify-center items-center  bg-white self-end">
        <div className="bg-[#F5F5F5] rounded-2xl px-12 py-10 flex flex-col items-start gap-8 w-[420px] shadow">
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
          <button className="border border-[#FF914D] text-[#292929] px-6 py-2 rounded-full transition hover:bg-[#FF914D]/10 font-normal text-base mt-2">
            Know more
          </button>
        </div>
      </div>
    </div>
  );
}

export default OurPride;
