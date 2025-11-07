import Marquee from "react-fast-marquee";
import HighlightedText from "../Utility Components/HighlightedText";
import { PartnersData } from "../../data/PartnersData";

function MarqueeContainer() {
  return (
    <div>
      <h1 className="text-center text-5xl font-[200]">
        Our{" "}
        <HighlightedText size="48px" weight={800}>
          Partners
        </HighlightedText>
      </h1>
      <div className="my-16 mt-9">
        <Marquee
          speed={100}
          gradient={true}
          gradientColor={"white"}
          gradientWidth={200}
          direction="left"
        >
          {PartnersData.map((item, index) => (
            <img
              key={item.id}
              className="mx-4 text-white px-6 w-[240px] h-[150px] md:h-full md:w-full rounded-full font-semibold"
              src={`${item.img}.png`}
              alt={item.name}
              loading="lazy"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default MarqueeContainer;
