import PageLayout from "./../components/PageLayout";
import JoinAsInvestorBanner from "../components/banners/JoinAsInvestorBanner";
import HighlightedText from "../components/Utility Components/HighlightedText";
import InfoImageMetricsSection from "../components/JoinAs/InfoImageMetricsSection";
import { YourGains } from "./JoinAsMentor";
import SectionHeading from "./../components/Utility Components/SectionHeading";
import StepsCard from "../components/JoinAs/StepsCard";
import { InvestorsData } from "./../data/InvestorsData";
import Marquee from "react-fast-marquee";
import CarouselLayout from "../components/HomePage/CarouselLayout";

function MakeItHappen() {
  const stepsData = [
    {
      title: "Submit EOI",
      description:
        "Express interest online to begin the mentor onboarding process officially.",
    },
    { title: "Review", description: "SIIC team reviews application." },
    { title: "Onboarding", description: "Complete onboarding process." },
    { title: "Start Mentoring", description: "Begin your mentorship journey." },
    { title: "Periodic Feedback", description: "Share your inputs regularly." },
    {
      title: "Advanced Opportunities",
      description: "Explore advanced mentoring roles.",
    },
  ];
  return (
    <section>
      <SectionHeading>
        How we make it <HighlightedText>Happen</HighlightedText>
      </SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {stepsData.map((step, idx) => (
          <StepsCard
            key={idx}
            step={idx + 1}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </section>
  );
}

function OurInvertors() {
  return (
    <div>
      <SectionHeading>
        Our Pool of <HighlightedText>Investors</HighlightedText>
      </SectionHeading>
      <div className="my-16 mt-9">
        <Marquee
          speed={100}
          gradient={true}
          gradientColor={"white"}
          gradientWidth={200}
          direction="left"
        >
          {InvestorsData.map((item, index) => (
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

function OurVentures() {
  return (
    <div className="  mt-40 mb-35 lg:mr-12 -mx-16">
      <div className="flex flex-col xl:flex-row  items-center justify-between  gap-30 xl:gap-8">
        <div className=" shrink-0 md:w-2/3 w-full  xl:w-1/3 md:self-start   2xl:w-[450px]">
          <div className="bg-[#F5F5F5]  mx-2 lg:mx-0 md:rounded-r-2xl px-12 py-10 flex flex-col items-start gap-8 shadow">
            <SectionHeading>
              Our Successful{" "}
              <HighlightedText size="42px" weight={800}>
                Ventures
              </HighlightedText>
            </SectionHeading>

            <p className="text-base text-[#292929] leading-relaxed">
              Explore SIIC-incubated startups delivering disruptive, scalable
              innovations with strong growth potential, offering attractive
              opportunities for impactful, high-return investments worldwide.
            </p>
            <button className="border-3 w-[130px] h-[40px] hover:bg-primary-highlight hover:font-semibold hover:text-white border-primary-highlight text-[#292929]  rounded-full transition font-normal text-base mt-2">
              Know more
            </button>
          </div>
        </div>
        <div className="2xl:ml-30 xl:ml-10">
          <CarouselLayout />
        </div>
      </div>
    </div>
  );
}
function JoinAsInvestor() {
  const imageSrc = "JoinAsInvestor/page-overview.png";
  const imageAlt = "Join as Investor";
  const heading = (
    <>
      Why Support <HighlightedText> SIIC</HighlightedText> ?{" "}
    </>
  );
  const description =
    "Creating an impact through channeling support to new generation innovators.";
  const text =
    "Startup Incubation and Innovation Centre, IIT Kanpur, established in 2000, is one of India’s oldest business and technology incubators promoting startups and social enterprises specialising in manufacturing.";

  return (
    <PageLayout bodyStyle="-mt-50 p-16" banner={<JoinAsInvestorBanner />}>
      <InfoImageMetricsSection
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        heading={heading}
        description={description}
        text={text}
      ></InfoImageMetricsSection>
      <YourGains></YourGains>
      <MakeItHappen></MakeItHappen>

      <OurVentures></OurVentures>
      <OurInvertors></OurInvertors>
    </PageLayout>
  );
}

export default JoinAsInvestor;
