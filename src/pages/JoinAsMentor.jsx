import PageLayout from "./../components/PageLayout";

import HighlightedText from "./../components/Utility Components/HighlightedText";
import CounterBox from "../components/Utility Components/CounterBox";
import TrustedWords from "./../components/WhoWeAre/TrustedWords";
import ServiceCard from "../components/Branding/ServiceCard";
import { YOUR_GAINS } from "./../data/YourGainsData";
import ListIcon from "./../components/IconComponents/ListIcon";
import JoinAsMentorBanner from "../components/banners/JoinAsMentorBanner";
import SectionHeading from "./../components/Utility Components/SectionHeading";
import InfoImageMetricsSection from "../components/JoinAs/InfoImageMetricsSection";
import StepsCard from "../components/JoinAs/StepsCard";
import BannerTemplate from "@/components/banners/BannerTemplate";

function HowToBeMentor() {
  // Example steps, you would replace this with real steps and props
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
    { title: "Community Events", description: "Participate in SIIC events." },
    {
      title: "Recognition",
      description: "Get recognized for your contributions.",
    },
  ];
  return (
    <section className="py-10">
      <SectionHeading>
        How To be <HighlightedText>Mentor</HighlightedText>
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

function WhoCanBeMentors() {
  // Example items, replace with real qualifications
  const mentorTypes = [
    {
      title: "Business Expert",
      desc: "Extensive background in growing successful ventures.",
    },
    {
      title: "Academic",
      desc: "Faculty or researcher with deep domain expertise.",
    },
    { title: "Investor", desc: "Angel, VC, or institutional investors." },
    { title: "Entrepreneur", desc: "Founder of innovative startups." },
    {
      title: "Corporate Leader",
      desc: "CXOs and senior management in large organizations.",
    },
  ];
  return (
    <section className="py-10">
      <SectionHeading>
        Who Can Be <HighlightedText>Mentor</HighlightedText>
      </SectionHeading>
      <div className="space-y-5 mt-8">
        {mentorTypes.map((item, idx) => (
          <div
            key={idx}
            className="flex gap-4 border border-secondary-gray text-[18px] rounded-xl py-4 px-6 items-center shadow hover:shadow-md transition"
          >
            <ListIcon size={28} />
            <span className="text-secondary-blue font-bold">{item.title}</span>
            <span className="text-gray-700 ml-2">{item.desc}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function YourGains() {
  return (
    <section className="py-10">
      <SectionHeading>
        Your Role as a <HighlightedText weight={700}> Mentor</HighlightedText>
      </SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 justify-items-center">
        {YOUR_GAINS.map((data, idx) => (
          <ServiceCard key={idx} data={data} />
        ))}
      </div>
    </section>
  );
}

function JoinAsMentor() {
  const imageSrc = "JoinAsInvestor/page-overview.png";
  const imageAlt = "Join as Investor";
  const heading = (
    <>
     Lead With Your <HighlightedText> Expertise</HighlightedText> ?{" "}
    </>
  );
  const description =
    "Mentorship is the cornerstone of SIIC’s startup ecosystem. ";
  const text =
    "At SIIC, mentors play a defining role in helping startups refine their vision, overcome technical and strategic challenges, and scale solutions that matter to India and the world. By sharing your expertise and perspective, you empower founders to move faster, build stronger, and create lasting impact. Join us and help shape tomorrow’s breakthrough ventures.";

  return (
    <PageLayout bodyStyle="p-8 md:p-16 -mt-60" 
    banner={
    <BannerTemplate 
    heading="Become a Mentor at"
    highlightedText="SIIC"
    description="At SIIC, mentors help accelerate ideas into meaningful, high-growth ventures."
    >

    </BannerTemplate>}>
      <InfoImageMetricsSection
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        heading={heading}
        description={description}
        text={text}
      />
      <YourGains />
      <WhoCanBeMentors />
      <HowToBeMentor />
      <TrustedWords />
    </PageLayout>
  );
}

export default JoinAsMentor;
