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
    <PageLayout bodyStyle="-mt-50 pt-25 h-[100px] " banner={<LabBanner />}>
      <div className="flex flex-col md:flex-row gap-8 px-2 md:px-8 items-center md:items-start">
        {/* Carousel Container */}
        <div className="relative w-full md:w-1/2 flex items-center justify-center h-[340px] md:h-[440px]">
          <button
            onClick={goToPrevious}
            className="absolute left-1 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-orange-50 rounded-full p-3 shadow-lg transition duration-150 border border-orange-200"
            aria-label="Previous image"
          >
            <svg
              className="w-6 h-6 text-orange-500"
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

          <img
            src={labImages[currentIndex]}
            alt={`Lab photo ${currentIndex + 1}`}
            className="w-[95%] h-[260px] md:h-[350px] object-cover rounded-xl shadow-md transition duration-200"
            style={{ background: "#f3f3f3" }}
          />

          <button
            onClick={goToNext}
            className="absolute right-1 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-orange-50 rounded-full p-3 shadow-lg transition duration-150 border border-orange-200"
            aria-label="Next image"
          >
            <svg
              className="w-6 h-6 text-orange-500"
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

          {/* Dots indicator */}
          <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 flex gap-3">
            {labImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to image ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-150 ${
                  currentIndex === idx
                    ? "bg-orange-500 w-8 shadow-md"
                    : "bg-orange-300 w-2"
                }`}
                style={{
                  outline: currentIndex === idx ? "2px solid #FF9933" : "none",
                }}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 px-2 md:px-6 ">
          <SectionHeading>
            More on Our <HighlightedText>Labs</HighlightedText>
          </SectionHeading>
          <p className="mb-4 text-lg font-semibold text-[#4c3929]">
            Want to use a facility? Unlock SIIC's advanced lab resources.
          </p>
          <p className="text-gray-700 leading-loose text-[16px]  ">
            SIIC offers cutting-edge lab infrastructure that empowers innovators
            to prototype, test, and refine their ideas efficiently. Startups get
            hands-on access to state-of-the-art equipment, expert technical
            support, and dedicated workspaces designed to accelerate product
            development.
            <br />
            All infrastructure access requests are processed through your
            assigned Portfolio Manager, ensuring smooth coordination and optimal
            resource utilisation.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}

export default Lab;
