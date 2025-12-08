import { NewPageLayout } from "@/components/Utility Components/NewPageLayout";
import MissionAndVision from "../components/WhoWeAre/MissionAndVision";
import HighlightedText from "./../components/Utility Components/HighlightedText";
import ImageCollage from "./../components/WhoWeAre/ImageCollage";
import OurPeople from "./../components/WhoWeAre/OurPeople";
import OurUps from "./../components/WhoWeAre/OurUps";
import TrustedWords from "./../components/WhoWeAre/TrustedWords";

function WhoWeAre() {
  return (
    <NewPageLayout
      heading={
        <>
          We are your{" "}
          <HighlightedText weight={800}> Partners</HighlightedText> in Innovation
        </>
      }
      description={
        <>
          At SIIC, we work alongside you to build solutions that matter
        </>
      }
    >
      <div className="flex flex-col justify-center w-full  items-center lg:flex-row mt-20 ">
        <ImageCollage></ImageCollage>
        <div>
          <h1 className="text-[40px] font-thin mb-1">
            Know us <HighlightedText weight={700}>Better</HighlightedText>
          </h1>
          <div className="text-[20px] font-medium text-[#1f1f1f] opacity-75 mb-4">
            At SIIC, we work alongside you to build <br />solutions that matter.
          </div>
          <p className="text-[#1f1f1f] opacity-75 lg:max-w-[386px] content-end lg:ml-8">
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
    </NewPageLayout>
  );
}

export default WhoWeAre;
