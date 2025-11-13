import React from "react";
import HighlightedText from "../Utility Components/HighlightedText";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { PastEventCard } from "./../../pages/UpcomingEvents";

const dummyEvents = Array.from({ length: 10 }, (_, i) => ({
  title: `Event ${i + 1}`,
  date: `2023-0${(i % 12) + 1}-22`,
  description: `Description for event ${i + 1}.`,
}));

function PastEventsCarousel() {
  return (
    <section className="mt-12 grid grid-cols-[380px_1fr] justify-items-end  gap-15 relative w-full max-w-screen-xl mx-auto items-start">
      {/* Text section remains unchanged */}
      <div className="max-w-[380px] flex-shrink-0 mb-10 md:mb-0">
        <h1 className="text-[40px] font-thin">
          A Look Back at our Impactful{" "}
          <HighlightedText weight={700}>Moments</HighlightedText>
        </h1>
        <h3 className="text-[#1f1f1f] font-medium text-[20px] opacity-75 mt-4">
          Relive the milestones that shaped our journey of innovation and
          impact.
        </h3>
        <p className="mt-6 text-[#1f1f1f] opacity-75">
          Our past events showcase the vibrant spirit of collaboration,
          creativity, and growth. Each gathering brought together brilliant
          minds to share ideas, build connections.
          <br />
          <br />
          From insightful talks to hands-on workshops, these moments highlight
          our ongoing commitment to innovation and community-building. Take a
          look back and celebrate the progress we've made together.
        </p>
      </div>

      {/* Carousel section */}
      <Carousel opts={{ loop: true }} className="flex-1 w-full max-w-[900px]  ">
        <CarouselContent className="-ml-1">
          {dummyEvents.map((event, idx) => (
            <CarouselItem
              key={idx}
              className="pl-1 md:basis-1/2 lg:basis-1/3 flex"
            >
              <PastEventCard event={event} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="rounded-full border-2 border-primary-highlight bg-white text-primary-highlight hover:bg-primary-highlight hover:text-white transition-all" />
        <CarouselNext className="rounded-full border-2 border-primary-highlight bg-white text-primary-highlight hover:bg-primary-highlight hover:text-white transition-all" />
      </Carousel>
    </section>
  );
}

export default PastEventsCarousel;
