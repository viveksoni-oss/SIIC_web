import HighlightedText from "./../Utility Components/HighlightedText";
import CarouselLayout from "./CarouselLayout";

function OurPride() {
  return (
    <div className=" mx-auto mt-40 mb-35 ">
      <div className="flex flex-col xl:flex-row items-center justify-between gap-16 xl:gap-8">
        {/* Left side - Carousel */}
        <div className="flex-0 px-4">
          <CarouselLayout />
        </div>

        {/* Right side - Our Pride */}
        <div className="flex-1 md:w-2/3 w-full md:self-end xl:1/2 xl:w-[200px]  2xl:w-[450px]">
          <div className="bg-[#F5F5F5]  mx-2 lg:mx-0 md:rounded-l-2xl px-12 py-10 flex flex-col items-start gap-8 shadow">
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
    </div>
  );
}

export default OurPride;
