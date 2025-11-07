import React from "react";
import PageLayout from "./../components/PageLayout";
import BannerTemplate from "../components/banners/BannerTemplate";
import HighlightedText from "./../components/Utility Components/HighlightedText";
import CounterBox from "../components/Utility Components/CounterBox";
import TrustedWords from "./../components/WhoWeAre/TrustedWords";
import ServiceCard from "../components/Branding/ServiceCard";
import { YOUR_GAINS } from "./../data/YourGainsData";
import ListIcon from "./../components/IconComponents/ListIcon";

function PageOverview() {
  const stats = [
    { count: "150K", label: "SQ.FT Space" },
    { count: "24/7", label: "Access" },
    { count: "2", label: "Locations" },
  ];
  return (
    <section className="grid grid-cols-2">
      <img src="JoinAsMentor/MentorHero.png" alt="" srcset="" />
      <div>
        <h1>Why Support SIIC ? </h1>
        <h3>
          Creating an impact through channeling support to new generation
          innovators.
        </h3>
        <p>
          Startup Incubation and Innovation Centre, IIT Kanpur, established in
          2000, is one of India’s oldest business and technology incubators
          promoting startups and social enterprises specialising in
          manufacturing.
        </p>
        <div className="grid grid-cols-3 gap-4 lg:gap-6 pt-6">
          {stats.map((stat, index) => (
            <CounterBox key={index} count={stat.count} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
function HowToBeMentor() {
  return <div>

  </div>;
}
function WhoCanBeMentors() {
  return (
    <div>
      <h1 className="font-thin text-[40px] ">
        Who Can Be <HighlightedText>Mentor</HighlightedText>
      </h1>
      <div className="space-y-3 mt-8">
        {Array.from({ length: 5 }, (_, idx) => {
          return (
            <div className="flex gap-4 border border-secondary-gray  text-[18px] rounded-lg py-2 px-4 justify-start items-center">
              <ListIcon size={22}></ListIcon>
              <span className="text-secondary-blue font-bold">
                Lorem, ipsum dolor:
              </span>
              <div className="text-[#1f1f1f] -ml-2 ">
                {" "}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
                ducimus.
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
function YourGains() {
  return (
    <section>
      <h1 className="text-[40px] font-thin">
        Know your <HighlightedText weight={700}>Gains</HighlightedText>
      </h1>
      <div className="grid grid-cols-4 mt-10 px-8 gap-8 justify-items-center ">
        {YOUR_GAINS.map((data) => (
          <ServiceCard data={data}></ServiceCard>
        ))}
      </div>
    </section>
  );
}
function JoinAsMentor() {
  const Heading = (
    <>
      {" "}
      Mould the
      <HighlightedText>Future</HighlightedText>.
    </>
  );
  const Description =
    "Guide SIIC startups, sharing expertise to shape impactful, scalable innovations.";
  return (
    <PageLayout
      bodyStyle="-mt-60 px-16"
      banner={<BannerTemplate Heading={Heading} Description={Description} />}
    >
      <PageOverview />
      <YourGains />
      <WhoCanBeMentors />
      <TrustedWords />
    </PageLayout>
  );
}

export default JoinAsMentor;
