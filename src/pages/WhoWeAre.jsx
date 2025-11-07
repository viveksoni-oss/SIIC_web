import MissionAndVision from "../components/WhoWeAre/MissionAndVision";
import HighlightedText from "./../components/Utility Components/HighlightedText";
import ImageCollage from "./../components/WhoWeAre/ImageCollage";
import OurPeople from "./../components/WhoWeAre/OurPeople";
import OurUps from "./../components/WhoWeAre/OurUps";
import TrustedWords from "./../components/WhoWeAre/TrustedWords";

function WhoWeAre() {
  return (
    <div className="min-h-screen  -mb-20 bg-white relative rounded-b-2xl px-16 py-8 pb-16">
      {/* Gradient top bar */}
      <div className="relative mx-auto bg-white   h-[203px] rounded-2xl overflow-hidden  flex justify-start items-center  ">
        {/* Blurred backdrop */}
        <div className="backdrop-blur-xl absolute z-20 w-full h-full"></div>
        {/* Background image */}
        <img
          src="/knowUsGradient.svg"
          className="absolute z-10 object-cover w-full h-full"
          alt=""
        />
        <div className="relative z-30  text-white p-8">
          <h2 className="text-[56px] font-medium mb-6">
            {" "}
            We are your
            <HighlightedText weight={800}> Well Wishers</HighlightedText>.
          </h2>
          {/* Add BoardOfDirectors content/components here */}
          <p>
            At SIIC, we accelerate innovations, transforming visions <br /> into
            thriving ventures.
          </p>
        </div>
      </div>

      <div className="flex mt-20 ">
        <ImageCollage></ImageCollage>
        <div>
          <h1 className="text-[40px] font-thin mb-1">
            Know us <HighlightedText weight={700}>Better</HighlightedText>
          </h1>
          <div className="text-[20px] font-medium text-[#1f1f1f] opacity-75 mb-4">
            We empower Innovation and entrepreneurship <br /> for a better
            tomorrow.
          </div>
          <p className="text-[#1f1f1f] opacity-75 max-w-[386px] content-end ml-8">
            Established in 2000, SIIC IIT Kanpur is one of India’s oldest tech
            incubators, supporting over 200 startups across diverse sectors. Now
            operating under the Foundation for Research & Innovation in Science
            & Technology (FIRST), SIIC fosters innovation-driven
            entrepreneurship by connecting startups with mentors, academia, and
            industry.
          </p>
        </div>
      </div>

      <MissionAndVision />
      {/* OUR UPS */}
      <OurUps></OurUps>

      {/* Our People  */}
      <OurPeople></OurPeople>

      {/* TrustedWords */}
      <TrustedWords />
    </div>
  );
}

export default WhoWeAre;
