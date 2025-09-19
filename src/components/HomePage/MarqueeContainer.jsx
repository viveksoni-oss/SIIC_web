import Marquee from "react-fast-marquee";
import HighlightedText from "../Utility Components/HighlightedText";

function MarqueeContainer() {
  const items = [
    "/Marquee/image1.svg",
    "/Marquee/image2.svg",
    "/Marquee/image3.svg",
    "/Marquee/image4.svg",
    "/Marquee/image5.svg",
    "/Marquee/image6.svg",
  ];
  return (
    <div>
      <h1 className="text-center text-5xl font-[200]">
        Our{" "}
        <HighlightedText size="48px" weight={800}>
          Partners
        </HighlightedText>
      </h1>
      <div className="border-[0.5px] my-16 mt-9 border-black/20">
        <Marquee
          speed={100}
          gradient={true}
          gradientColor={"white"}
          gradientWidth={100}
          direction="left"
        >
          {items.map((item, index) => (
            <img
              key={index}
              className="mx-4  text-white px-6  rounded-full font-semibold"
              src={item}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default MarqueeContainer;
