import HighlightedText from "./../Utility Components/HighlightedText";
import CarouselLayout from "./CarouselLayout";

function OurPride() {
  return (
    <div>
      <CarouselLayout></CarouselLayout>
      <div>
        <h1>
          Our <HighlightedText>Pride</HighlightedText>
        </h1>
        <p>
          Real journeys of passion, persistence, and innovation — from bold
          ideas to breakthrough startups that made it happen.
        </p>
        <button>Know more</button>
      </div>
    </div>
  );
}

export default OurPride;
