import { useState } from "react";
import LabBanner from "../components/banners/LabBanner";
import PageLayout from "./../components/PageLayout";
import HighlightedText from "./../components/Utility Components/HighlightedText";
import SectionHeading from "./../components/Utility Components/SectionHeading";

function Lab() {
  const labImages = [
    "/Labs/lab.png",
    "/Labs/lab.png",
    "/Labs/lab.png",
    "/Labs/lab.png",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () =>
    setCurrentIndex((prev) => (prev === labImages.length - 1 ? 0 : prev + 1));
  const goToPrevious = () =>
    setCurrentIndex((prev) => (prev === 0 ? labImages.length - 1 : prev - 1));

  return (
    // Adjusted bodyStyle: Removed fixed height, kept negative margin for overlap
    <PageLayout
      bodyStyle="-mt-50 relative !min-h-[500px] z-20 pb-20 flex justify-center items-center"
      banner={<LabBanner />}
    >
      {/* THE WHITE CARD CONTAINER */}
      <div className="bg-white rounded-[40px] p-6 md:p-12 mx-auto w-[90%] md:w-[95%] flex flex-col md:flex-row gap-10 items-center justify-between ">
        {/* LEFT: Carousel Section */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative h-[280px] md:h-[400px] w-full overflow-hidden rounded-3xl group">
            {/* Previous Button (Hidden on mobile, visible on hover/desktop) */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg z-10 transition-all opacity-0 group-hover:opacity-100"
            >
              <svg
                className="w-5 h-5 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Image */}
            <img
              src={labImages[currentIndex]}
              alt={`Lab View ${currentIndex + 1}`}
              className="w-full h-full object-cover transition-transform duration-500"
            />

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg z-10 transition-all opacity-0 group-hover:opacity-100"
            >
              <svg
                className="w-5 h-5 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Pagination Dots (Outside image as per design style) */}
          <div className="flex justify-center gap-2 mt-4">
            {labImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "w-8 bg-orange-500"
                    : "w-2.5 bg-gray-300 hover:bg-orange-200"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT: Content Section */}
        <div className="w-full md:w-1/2 space-y-6">
          <div>
            <SectionHeading>
              More on our <HighlightedText>labs...</HighlightedText>
            </SectionHeading>
            <p className="mt-2 text-lg font-medium text-gray-800">
              Want to use a facility? Unlock SIIC's advanced lab resources.
            </p>
          </div>

          <div className="text-gray-600 text-justify leading-relaxed space-y-4">
            <p>
              SIIC offers cutting-edge lab infrastructure that empowers
              innovators to prototype, test, and refine their ideas efficiently.
              Startups get hands-on access to state-of-the-art equipment, expert
              technical support, and dedicated workspaces designed to accelerate
              product development.
            </p>
            <p className="font-medium text-gray-800 border-l-4 border-orange-500 pl-4 mt-8">
              All infrastructure access requests are processed through your
              assigned Portfolio Manager, ensuring smooth coordination and
              optimal resource utilization.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Lab;
