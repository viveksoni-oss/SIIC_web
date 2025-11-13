import PageLayout from "./../components/PageLayout";
import BannerTemplate from "./../components/banners/BannerTemplate";
import InfoImageMetricsSection from "../components/JoinAs/InfoImageMetricsSection";
import SectionHeading from "./../components/Utility Components/SectionHeading";
import HighlightedText from "./../components/Utility Components/HighlightedText";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";

// Career Path Card (PathwayCard)
function CareerPathCard({ count, title, description }) {
  return (
    <div className="max-w-[640px] border border-primary-highlight/20 py-12 px-6 sm:px-16 text-center flex flex-col gap-6 justify-center items-center rounded-2xl">
      <div className="text-2xl py-2 px-5 border-3 border-secondary rounded-md bg-secondary text-white font-bold inline-block">
        {count}
      </div>
      <div className="font-bold text-secondary text-lg">{title}</div>
      <p className="text-sm text-[#1f1f1f] opacity-65 -mt-4">{description}</p>
    </div>
  );
}

// Pathways Section
function CareerPathways() {
  return (
    <section className="mt-20">
      <SectionHeading className="mb-10">
        Know your <HighlightedText>Pathways</HighlightedText>
      </SectionHeading>
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <CareerPathCard
          title="Work At SIIC"
          count={1}
          description={`
            Kickstart or elevate your career at SIIC, working alongside disruptive
            startups, industry leaders, and mentors, while gaining real-world
            experience, networking, and contributing to India's dynamic
            entrepreneurial growth story.
          `}
        />
        <CareerPathCard
          title="Young Professional Program"
          count={2}
          description={`
            YPP at SIIC offers fresh graduates hands-on experience, interdisciplinary exposure, and skill-building opportunities to shape them into tomorrow’s innovation leaders and startup ecosystem enablers.
          `}
        />
      </div>
    </section>
  );
}

// Job Listing Pill (JobPill)
function JobListing() {
  return (
    <div className="group/arrow flex my-1 font-semibold text-[#1f1f1f] justify-between items-center text-sm sm:text-xs capitalize bg-white shadow-[0_1px_4px_0_#0000000D] hover:shadow-md rounded-full px-4 sm:px-6 py-2 transition-all duration-500 ease-in-out">
      <span>
        Assistant Manager (Med Tech / Bio Tech), Job Code : AM-MED-BIO
      </span>
      <div className="flex w-2/7 justify-between items-center">
        <div className="flex justify-center items-center gap-1 text-[#1f1f1f] opacity-60 group-hover/arrow:opacity-100 transition-all duration-500 ease-in-out group-hover/arrow:text-black">
          view job description
          <ArrowRight
            size={16}
            className="group-hover/arrow:-rotate-45 transition-all duration-500 ease-in-out group-hover/arrow:text-primary-highlight group-hover/arrow:scale-110"
          />
        </div>
        <button className="border-2 text-[#1f1f1f] font-normal group-hover/arrow:font-medium border-primary-highlight transition-all duration-500 ease-in-out rounded-full px-3 sm:px-4 py-1 hover:text-white hover:bg-primary-highlight">
          Apply now
        </button>
      </div>
    </div>
  );
}

// Work With Us Section
function WorkOpportunities() {
  return (
    <section className="bg-secondary-gray/40 min-h-screen rounded-2xl p-8 mt-20">
      <SectionHeading>
        Work with <HighlightedText>Us</HighlightedText>...
      </SectionHeading>
      <h3 className="text-lg font-medium text-[#1f1f1f]/75 ">
        Find the one that suits you the best
      </h3>
      <div className="flex flex-col gap-2 mt-4">
        {Array.from({ length: 10 }, (_, id) => (
          <JobListing key={id} />
        ))}
      </div>
    </section>
  );
}

// Young Professional Program Card
function YPPProfileCard() {
  return (
    <div>
      <div className="relative w-[170px] h-[330px] bg-secondary-gray/30 group/card rounded-2xl flex flex-col justify-between overflow-hidden">
        <div className="absolute group-hover/card:bg-primary-highlight/90 h-full w-full group-hover/card:animate-bar z-0 rounded-2xl bottom-0"></div>
        <div className=" opacity-0 flex flex-col justify-center text-center  items-center z-40 mt-14 px-4 gap-3 group-hover/card:-translate-y-2  group-hover/card:opacity-100 text-white transition-all duration-500 ease-in-out">
          <h1 className="text-[20px] font-semibold leading-6">Rishabh pandy</h1>
          <p className="font-extrabold text-xs opacity-75">
            YPP Batch : 2025-26
          </p>
        </div>
        <img
          src="/Careers/Ypp-1.png"
          alt=""
          className="group-hover/card:scale-120 group-hover/card:-translate-y-4 z-40 transition-all duration-500 ease-in-out"
        />
      </div>
    </div>
  );
}

// What We Look For In YPP
function YPPQualities() {
  return (
    <div className="max-w-[175px] flex flex-col text-center justify-center items-center border border-primary-highlight rounded-2xl px-2 py-4 ">
      <div className="text-primary-highlight text-2xl font-medium">01</div>
      <div className="text-[#1f1f1f]">
        Proven Aptitude for Quick creative Thinking.
      </div>
    </div>
  );
}

// Dropdown About YPP
function YPPDropdown() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`flex flex-col gap-5 bg-secondary-gray/40 pt-4 mx-0 sm:-mx-10 -my-8 mt-10 p-8 transition-transform duration-700 ease-in-out ${
        !open ? "h-20" : "h-auto"
      }`}
    >
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <SectionHeading>
            Eligibility <HighlightedText>Criteria</HighlightedText>
          </SectionHeading>
          <div className="text-[#1f1f1f] opacity-80 max-w-[450px] wrap-anywhere mx-3 sm:mx-25">
            <div>
              <span className="font-semibold">Educational Qualification:</span>{" "}
              Graduate in Engineering, Biotechnology, Life Sciences, Management,
              Business Administration, Development Studies, Social Work,
              Economics, Commerce, or other relevant streams.
            </div>
            <div className="mt-2">
              <span className="font-semibold">Work Experience:</span> Up to 2
              years of professional Experience.
            </div>
          </div>
          <div className="w-[280px] sm:w-[600px] ml-5 sm:ml-15">
            <img src="/Careers/SEO.png" alt="YPP" />
          </div>
        </div>
        <div>
          <SectionHeading className="flex gap-12 justify-between">
            <div>
              What we look in <HighlightedText>YPP?</HighlightedText>
            </div>
            <button
              className={`${
                open ? "rotate-180" : ""
              } transition-transform duration-700 ease-in-out`}
              onClick={() => setOpen((prev) => !prev)}
            >
              <ChevronDown />
            </button>
          </SectionHeading>
          <div className="max-w-[500px] grid grid-cols-1 sm:grid-cols-2 gap-8">
            {Array.from({ length: 4 }, (_, idx) => (
              <YPPQualities key={idx} />
            ))}
          </div>
        </div>
      </div>
      <WantToJoinSection />
    </div>
  );
}
const WantToJoinSection = () => (
  <section className="space-y-2">
    <SectionHeading>
      Want to <HighlightedText>Join Us?</HighlightedText>
    </SectionHeading>
    <div className="flex flex-col gap-2">

    {Array.from({ length: 3 }, (_, idx) => (
      <JobListing key={idx} />
    ))}
    </div>
  </section>
);

// YPP Section
function YoungProfessionalProgram() {
  return (
    <div className="mt-20 border border-[#1f1f1f]/20 rounded-2xl px-3 sm:px-10 py-8 overflow-hidden transition-transform duration-700 ease-in-out">
      <SectionHeading>
        Young Professional <HighlightedText>Program</HighlightedText>
      </SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-6">
        <div className="flex gap-4">
          {Array.from({ length: 3 }, (_, idx) => (
            <YPPProfileCard key={idx} />
          ))}
        </div>
        <div className="flex flex-col gap-10 max-w-[480px]">
          <h2 className="text-[20px] font-medium text-[#1f1f1f] opacity-75">
            The Young Professionals Program (YPP) is an entry-point for an
            exciting journey at SIIC IIT Kanpur. Every year the incubator
            onboards a cohort of dynamic, fresh graduates with an aim to make
            them the leaders of tomorrow.
          </h2>
          <p>
            A YPP is exposed to the ongoing programs allowing the young talent
            to assess their abilities, help them nurture interdisciplinary
            skills, experiment with their capabilities, and craft their talent
            to emerge as competent professionals.
          </p>
        </div>
      </div>
      <YPPDropdown />
    </div>
  );
}

// Page Export
function Careers() {
  const imageSrc = "JoinAsInvestor/page-overview.png";
  const imageAlt = "Join as Investor";
  const heading = (
    <>
      Why Support <HighlightedText> SIIC</HighlightedText> ?
    </>
  );

  const stats = [
    { label: "Active mentors", count: "500+" },
    { label: "Active mentors", count: "500+" },
    { label: "Active mentors", count: "500+" },
  ];

  const description =
    "Creating an impact through channeling support to new generation innovators.";
  const text =
    "Startup Incubation and Innovation Centre, IIT Kanpur, established in 2000, is one of India’s oldest business and technology incubators promoting startups and social enterprises specialising in manufacturing.";

  return (
    <PageLayout bodyStyle="-mt-60 p-8 sm:p-16" banner={<BannerTemplate />}>
      <InfoImageMetricsSection
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        stats={stats}
        heading={heading}
        description={description}
        text={text}
      />
      <CareerPathways />
      <YoungProfessionalProgram />
      <WorkOpportunities />
    </PageLayout>
  );
}

export default Careers;
