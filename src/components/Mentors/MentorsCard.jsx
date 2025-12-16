import { useMemo, useState } from "react";
import { mentorsData } from "../../data/MentorsData.js";

// Skeleton Loading Component
const ImageSkeleton = () => (
  <div className="w-full h-full bg-gray-200 animate-pulse rounded-2xl">
    <div className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
  </div>
);

// Memoized MentorCard component
const MentorCard = ({ mentor }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleLinkedInClick = () => {
    window.open(mentor.linkedin, "_blank", "noopener,noreferrer");
  };

  const fullName = useMemo(() => {
    const prefix =
      mentor.gender === "male"
        ? "Mr "
        : mentor.gender === "female"
        ? "Ms "
        : "";
    return prefix + mentor.name;
  }, [mentor.gender, mentor.name]);

  const imageAlt = useMemo(
    () => mentor.name.toLowerCase().replace(/\s+/g, "-"),
    [mentor.name]
  );

  return (
    <article className="bg-secondary-gray/31 pl-20 p-4 text-xs relative mt-4 mb-19 container max-h-[195px] group ml-20 rounded-2xl max-w-[21.875rem]">
      {/* Image Container with Fixed Dimensions and Skeleton */}
      <div className="absolute -left-18 top-10 transition-transform transform duration-500">
        <div className="relative w-[140px] h-[180px] rounded-2xl  ">
          {/* Skeleton Loader */}
          {!imageLoaded && <ImageSkeleton />}

          {/* Actual Image */}
          <img
            className={`w-full h-full object-cover transition-opacity rounded-2xl duration-300 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            src={mentor.image}
            alt={imageAlt}
            loading="lazy"
            width="140"
            height="180"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageLoaded(true)}
          />

          {/* Decorative Square Border - Always Visible */}
          <div
            className="h-[95px] w-[95px] -left-4 z-50 -bottom-4 border-l-5 border-b-5 absolute border-primary pointer-events-none"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Content Section */}
      <div>
        {/* Header Section */}
        <header>
          <div className="flex justify-between items-start">
            <div className="text-sm flex-1">
              <h2 className="font-semibold text-base text-primary-highlight">
                {fullName}
              </h2>
              <div className="text-[10px] font-medium mt-1">
                <p className="uppercase">{mentor.position}</p>
                <p className="text-gray-400">{mentor.company}</p>
              </div>
            </div>

            {/* LinkedIn Button */}
            <button
              onClick={handleLinkedInClick}
              className="flex gap-3 items-center cursor-pointer hover:opacity-80 transition-opacity"
              aria-label={`Connect with ${mentor.name} on LinkedIn`}
            >
              <div
                className="border-l-2 rounded-4xl border-secondary-blue w-0 min-h-[30px]"
                aria-hidden="true"
              />
              <img
                src="/Mentors/icons/wave.svg"
                className="transition-transform ease-in-out transform duration-500 group-hover:animate-wave"
                alt=""
                width="24"
                height="24"
              />
            </button>
          </div>
        </header>

        {/* Strengths Section */}
        <section className="mt-5">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">
            Strengths
          </h3>
          <ul className="space-y-2">
            <li className="list-disc ml-4 text-[12px] text-gray-600">
              {mentor.strengths}
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
};

// Memoize the component to prevent unnecessary re-renders
const MemoizedMentorCard = ({ mentor }) => <MentorCard mentor={mentor} />;

// Main container component
function MentorsSection({ domain = "All", search = "" }) {
  // Memoize filtered and sorted mentors
  const filteredMentors = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return mentorsData
      .filter((mentor) => {
        const matchesDomain =
          domain === "All" || mentor.domain.includes(domain);
        const matchesSearch = mentor.name
          .toLowerCase()
          .includes(normalizedSearch);
        return matchesDomain && matchesSearch;
      })
      .sort((a, b) => a.id - b.id); // <--- Added sort logic here
  }, [domain, search]);

  const isEmpty = filteredMentors.length === 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-15 justify-items-center p-8 h-auto sm:h-[750px]">
      {isEmpty ? (
        <div className="flex items-center justify-center h-[200px] text-gray-400 font-semibold text-4xl w-full col-span-2 capitalize bg-white">
          <p role="status">No mentors available with {domain} domain</p>
        </div>
      ) : (
        filteredMentors.map((mentor) => (
          <MemoizedMentorCard key={mentor.id} mentor={mentor} />
        ))
      )}
    </div>
  );
}

export default MentorsSection;
