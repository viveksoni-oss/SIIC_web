import React, { useState } from "react";
import PageLayout from "./../components/PageLayout";
import UpcomingEventsBanner from "../components/banners/UpcomingEventsBanner";
import HighlightedText from "./../components/Utility Components/HighlightedText";
import ExternalLink from "./../components/IconComponents/ExternalLink";
import { Calendar, MapPin } from "lucide-react";
import { events } from "./../data/UpcomingEventsData";
import PastEventsCarousel from "./../components/UpcomingEvents/PastEventsCarousel";

const Separator = () => (
  <svg
    width="1"
    height="20"
    viewBox="0 0 1 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line
      x1="0.5"
      y1="0.5"
      x2="0.5"
      y2="19.5"
      stroke="#1F1F1F"
      strokeOpacity="0.2"
      strokeLinecap="round"
    />
  </svg>
);

function EventCard({
  image,
  title,
  description,
  location,
  dateRange,
  year,
  link,
  maxDescriptionLength = 120,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const shouldTruncate = description.length > maxDescriptionLength;
  const displayDescription =
    !isExpanded && shouldTruncate
      ? `${description.slice(0, maxDescriptionLength)}...`
      : description;

  return (
    <article
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="max-h-[600px] rounded-[25px] overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-500 border border-secondary-gray/60 p-4 group"
    >
      {/* Image Section */}
      <div className="relative w-full max-h-[400px] overflow-hidden rounded-[15px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-fill group-hover:scale-105 duration-700 transition-transform ease-out will-change-transform"
        />
      </div>

      {/* Content Section */}
      <div className="pt-4 px-3 bg-white">
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-900 mb-3">{title}</h2>

        {/* Description with Read More */}
        <p className="text-sm opacity-80 text-[#1f1f1f] leading-relaxed mb-4 line-clamp-1">
          {displayDescription}
          {shouldTruncate && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="ml-2 text-primary hover:text-primary-hover font-medium underline focus:outline-none"
            >
              {isExpanded ? "Show less" : "Read more"}
            </button>
          )}
        </p>

        {/* Footer: Location/Date + External Link */}
        <div className="flex gap-6">
          <div className="flex flex-1 items-center justify-between pt-1 border-t border-gray-200">
            {/* Location and Date Info */}
            <div className="flex items-center gap-4 px-2 group-hover:gap-8 transition-all duration-500 ease-in-out text-sm text-gray-600">
              {location && (
                <span className="flex items-center gap-2 group-hover:gap-4 transition-all duration-700">
                  {location}
                  <Separator />
                </span>
              )}
              {dateRange && (
                <span className="font-medium flex items-center gap-2 group-hover:gap-4 transition-all duration-700">
                  {dateRange}
                  <Separator />
                </span>
              )}
              {year && <span className="font-medium">{year}</span>}
            </div>
          </div>
          <a
            href={link}
            className="-translate-y-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink isHovered={isHovered} />
          </a>
        </div>
      </div>
    </article>
  );
}

// ArrowRight icon with color transition
function ArrowRight({ isHovered = false }) {
  return (
    <svg
      width="11"
      height="9"
      viewBox="0 0 11 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.104 9L9.888 4.232L9.904 5.032L5.104 0.504H6.384L10.496 4.328V4.952L6.384 9H5.104ZM0.8 5.128V4.216H9.68V5.128H0.8Z"
        fill={isHovered ? "#ff8a40" : "#1F1F1F"}
      />
    </svg>
  );
}

// Animated underline styles for "Go to Website"
const underlineStyles = {
  width: "100%",
  height: "3px",
  position: "absolute",
  left: 0,
  bottom: "-2px",
  background: "#ff8a40", // Alternatively use your primary color
  transformOrigin: "left",
  transition: "transform 0.4s cubic-bezier(.4,.2,.2,1)",
};

// PastEventCard with animated underline
export function PastEventCard() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <article className=" shrink-0 border border-secondary-gray/80 hover:border-transparent hover:bg-secondary-gray/20 rounded-2xl min-h-[500px] max-w-[265px] flex flex-col justify-between items-start p-4 group transition-all duration-300">
      <div className="space-y-4">
        <div className="overflow-hidden rounded-[12px]">
          <img
            src="UpcomingEvents/PastEvents/PastEvent1.png"
            className="group-hover:scale-105 transition-transform duration-700"
            alt="Past Event"
            style={{ willChange: "transform" }}
          />
        </div>
        <h2 className="font-medium align-middle">
          ASEAN - Indian Scale Hub Program 2025
        </h2>
        <div className="p-2 flex justify-between relative text-[#1f1f1f]/80 text-[10px]">
          <div className="absolute h-[1px] w-full bg-[#1f1f1f]/25 top-0 left-0" />
          <div className="flex gap-1 items-center">
            <MapPin className="text-primary-highlight" size={15} />
            <p>Bali, Indonesia </p>
          </div>
          <div className="flex gap-1 items-center">
            <Calendar className="text-primary-highlight" size={15} />
            <p>3-4 July, 2025</p>
          </div>
        </div>
      </div>

      <a
        href="https://example.com/pastevent"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex gap-2 justify-between items-center cursor-pointer select-none group relative mt-4"
        style={{ position: "relative" }}
      >
        <span className="relative inline-block text-primary font-medium">
          Go to Website
          <span
            style={{
              ...underlineStyles,
              transform: isHovered ? "scaleX(1)" : "scaleX(0)",
            }}
          />
        </span>
        <span
          className={`${
            isHovered ? "-rotate-45" : ""
          } transition-transform duration-300 ease-in-out`}
        >
          <ArrowRight isHovered={isHovered} />
        </span>
      </a>
    </article>
  );
}

function UpcomingEvents() {
  // Sample events data - replace with your actual data/API
  const numCards = 10;
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <PageLayout bodyStyle="-mt-60 p-16" banner={<UpcomingEventsBanner />}>
      <section>
        <h1 className="text-[42px] font-thin mb-8">
          Upcoming <HighlightedText weight={700}>Events</HighlightedText>
        </h1>
        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
          {events.map((event) => (
            <EventCard
              key={event.id}
              image={event.image}
              title={event.title}
              description={event.description}
              location={event.location}
              dateRange={event.dateRange}
              year={event.year}
              link={event.link}
              maxDescriptionLength={120}
            />
          ))}
        </div>
      </section>
      <PastEventsCarousel></PastEventsCarousel>
    </PageLayout>
  );
}

export default UpcomingEvents;
