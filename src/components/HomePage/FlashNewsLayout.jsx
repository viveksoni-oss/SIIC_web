import React, { useRef } from "react";
import FlashNewsCard from "./FlashNewsCard";
import HighlightedText from "./../Utility Components/HighlightedText";
import Autoplay from "embla-carousel-autoplay";
// Import Carousel from shadcn
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"; // adjust import path per your setup
import SectionHeading from "../Utility Components/SectionHeading";

const newsDetails = [
  {
    title:
      "Startup Incubation and (SIIC) at IIT-K - signed a Memorandum of Understanding (MoU) with the NMexus Centre in April 2025 to support Indian startups entering the U.S. market",
    imageLink: "News/Homepage/FlashNewsCard3.png",
    externalLink:
      "https://www.kanpurwants.com/trending-now/nmexus-siic-iit-kanpur-collaborate-to-introduce-indian-startups-to-the-us-market",
    PostedAt: "",
  },
  {
    title:
      "IIT Kanpur & Pernod Ricard Launch Advaya: Pioneering Plastic Circularity for Sustainable Startups",
    imageLink: "News/Homepage/FlashNewsCard2.png",
    externalLink:
      "http://timesofindia.indiatimes.com/articleshow/125282454.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst",
    PostedAt: "",
  },
  {
    title:
      "FUEL 2025- IIT Kanpur's SIIC Innovation Hub in Noida, reinforced SIIC's mission of accelerating innovation from lab to market. ",
    imageLink: "News/Homepage/FlashNewsCard1.png",
    externalLink:
      "https://timesofindia.indiatimes.com/city/lucknow/up-playing-a-pivotal-role-in-indias-growth-story/articleshow/123874787.cms",
    PostedAt: "",
  },
];

function FlashNewsLayout() {
  const autoplay = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));
  return (
    <div className="px-4 md:px-16 -mb-25 md:mb-0">
      <SectionHeading>
        Flash <HighlightedText weight={800}>News</HighlightedText>{" "}
      </SectionHeading>
      {/* MOBILE: Carousel only for screens <md */}
      <div className="block md:hidden">
        <Carousel
          className={"overflow-visible"}
          opts={{ loop: true }}
          plugins={[autoplay.current]}
          onMouseEnter={() => autoplay.current.stop()}
          onMouseLeave={() => autoplay.current.play()}
        >
          <CarouselContent>
            {newsDetails.map((newsDetail, idx) => (
              <CarouselItem key={idx} className="">
                <FlashNewsCard newsDetail={newsDetail} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center items-center gap-8 mt-4">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
      {/* DESKTOP/TABLET: Standard flex layout */}
      <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-3 gap-8 w-full justify-items-center">
        {newsDetails.map((newsDetail, idx) => (
          <div
            key={idx}
            className="w-full min-w-0 max-w-full flex justify-center"
          >
            <FlashNewsCard newsDetail={newsDetail} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlashNewsLayout;
