import { useState } from "react";
import LabBanner from "../components/banners/LabBanner";
import PageLayout from "./../components/PageLayout";
import HighlightedText from "./../components/Utility Components/HighlightedText";

function Lab() {
  const labImages = [
    "/Labs/lab.png",
    "/Labs/lab.png",
    "/Labs/lab.png",
    "/Labs/lab.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === labImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? labImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <PageLayout bodyStyle="-mt-60 py-16" banner={<LabBanner />}>
      <div className="flex gap-8 px-8">
        {/* Carousel Container */}
        <div className="relative w-1/2 flex items-center justify-center">
          <button
            onClick={goToPrevious}
            className="absolute left-4 z-30 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition"
            aria-label="Previous image"
          >
            <svg
              className="w-6 h-6"
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
            className="w-full h-auto rounded-lg shadow-md"
          />

          <button
            onClick={goToNext}
            className="absolute right-4 z-30 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition"
            aria-label="Next image"
          >
            <svg
              className="w-6 h-6"
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
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {labImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition ${
                  index === currentIndex ? "bg-red-500 w-8" : "bg-red-500/50"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="w-1/2">
          <h1 className="text-4xl font-bold mb-4">
            More on Our <HighlightedText>Labs</HighlightedText>
            ....
          </h1>
          <p className="mb-4 text-lg font-semibold">
            Want to use a facility? Unlock SIIC's advanced lab resources.
          </p>
          <p className="text-gray-700 leading-relaxed">
            SIIC offers cutting-edge lab infrastructure that empowers innovators
            to prototype, test, and refine their ideas efficiently. Startups get
            hands-on access to state-of-the-art equipment, expert technical
            support, and dedicated workspaces designed to accelerate product
            development. All infrastructure access requests are processed
            through your assigned Portfolio Manager, ensuring smooth
            coordination and optimal resource utilisation.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}

export default Lab;
