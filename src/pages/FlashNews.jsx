import React from "react";
import PageLayout from "../components/PageLayout";
import BannerTemplate from "../components/banners/BannerTemplate";
import SectionHeading from "./../components/Utility Components/SectionHeading";
import HighlightedText from "./../components/Utility Components/HighlightedText";
import { ArrowRight, Calendar1, DownloadIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

// -------------- Data Arrays ---------------

const headlineNews = [
  {
    id: 1,
    img: "UpcomingEvents/PastEvents/PastEvent2.png",
    title: "IIT-K Startup to Receive Major CSR Boost in Agri-Tech",
    date: "13 June 2025",
    articleUrl: "#",
    description: "IIT Kanpur Startup in Aerospace, Defence & Agri-Tech...",
  },
  {
    id: 2,
    img: "UpcomingEvents/PastEvents/PastEvent2.png",
    title: "Demo Day - SIIC hosts 9th accelerator at Partner Fest",
    date: "15 June 2025",
    articleUrl: "#",
    description: "",
  },
  {
    id: 3,
    img: "UpcomingEvents/PastEvents/PastEvent3.png",
    title: "SIIC IIT Kanpur partners with US Center for startups",
    date: "18 June 2025",
    articleUrl: "#",
    description: "",
  },
];

const pastNews = [
  ...Array.from({ length: 7 }, (_, idx) => ({
    id: idx + 4,
    img: `UpcomingEvents/PastEvents/PastEvent${idx + 4}.png`,
    title: `Past News Headline #${idx + 4}`,
    date: `0${idx + 1} Feb, 2025`,
    articleUrl: "#",
    description: "Event summary goes here.",
  })),
];

const newsletterCards = [
  {
    idx: 1,
    date: "14/11/25",
    text: "SIIC IIT Kanpur & MP-IDSA bring together experts for Drones & Autonomous Systems.",
  },
  { idx: 2, date: "07/10/25", text: "New tech initiatives at SIIC in 2025." },
  {
    idx: 3,
    date: "03/09/25",
    text: "Incubated startup raises Series A funding.",
  },
  { idx: 4, date: "22/08/25", text: "SIIC's annual report released." },
  {
    idx: 5,
    date: "28/06/25",
    text: "Progress update for SIIC & new research labs.",
  },
];

// -------------- Card Components --------------

export function MainNewsCard({ img, title, date, articleUrl, description }) {
  return (
    <div className="bg-white rounded-xl shadow-lg flex flex-col items-start p-4 pr-8 min-h-[220px] flex-1">
      <img
        src={img}
        alt="headline"
        className="rounded-lg w-[820px] h-[400px] object-cover mb-3"
      />
      <h3 className="font-bold text-lg mb-2 leading-tight">{title}</h3>
      {description && (
        <p className="mb-2 text-[#444] text-[15px]">{description}</p>
      )}
      <div className="flex justify-between items-center w-full mt-2">
        <a
          href={articleUrl}
          className="bg-orange-500 text-white rounded px-3 py-1 font-semibold text-sm shadow"
          style={{ minWidth: 120 }}
        >
          See Full Article
        </a>
        <span className="text-[#716f6f] text-[14px]">{date}</span>
      </div>
    </div>
  );
}

export function SecondaryNewsCard({ img, title, date, articleUrl }) {
  return (
    <div className="bg-white rounded-lg shadow p-2 px-4 flex flex-col  min-w-[225px] max-w-[500px]">
      <div className=" p-2 flex flex-row gap-6">
        <img
          src={img}
          alt="secondary"
          className="w-[180px] h-[200px] object-cover rounded"
        />
        <div className="flex flex-col gap-8 mt-4">
          <h4 className="text-[18px] font-semibold text-[#1f1f1f]/80  leading-tight">
            {title}
          </h4>
          <div className="border-t border-[#1f1f1f]/20  w-[200px]"></div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-1 text-xs text-[#1f1f1f]/50 px-4">
        <a className="flex gap-1">
          See Full Article <ArrowRight size={14}></ArrowRight>
        </a>
        <div href={articleUrl} className="flex gap-1 ">
          <Calendar size={14} className="text-primary-highlight"></Calendar>
          {date}
        </div>
      </div>
    </div>
  );
}

import { Calendar } from "lucide-react";

export function PastNewsCard({ img, title, date, articleUrl, description }) {
  return (
    <div className="bg-white rounded-lg shadow min-w-[310px] flex flex-row items-center gap-3 p-2">
      <img
        src={"News/pastnews.png"}
        alt="past"
        className="w-[200px] h-[120px] object-cover rounded"
      />
      <div className="flex flex-col gap-4 flex-1">
        <h5 className="text-[13px] font-semibold mb-1">{title}</h5>
        <div className="border-b border-[#DED6C9] my-1" />
        <p className="text-xs text-[#444] mb-2">{description}</p>
        <div className="flex justify-between items-center text-[11px] text-[#1f1f1f]/50 mt-1">
          <button className="underline text-orange-500 font-semibold">
            See Full Article
          </button>
          <span className="flex items-center gap-1">
            <Calendar size={14} className="text-orange-500" />
            <span style={{ fontWeight: 600 }}>{date}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export function NewsLetterCard({ idx = 1, date = "11/11/11", text }) {
  return (
    <section className="p-3 max-w-[300px] max-h-[520px] border border-[#1f1f1f]/10 rounded-xl bg-white shadow">
      <img
        src={"News/Newsletter/image-" + (idx % 4) + ".png"}
        alt="newsletter"
        className="rounded  object-cover mb-2"
      />
      <div className="flex flex-col gap-2">
        <p className="text-[13px] font-medium">{text}</p>
        <div className="flex justify-between items-center mt-1 text-[10px] text-[#1f1f1f]/50">
          <span>{date}</span>
          <DownloadIcon size={16} />
        </div>
      </div>
    </section>
  );
}

// ----------------- Page Sections -----------------

function HeadLinesSection() {
  return (
    <section>
      <SectionHeading>
        Where Innovation Makes <HighlightedText>Headlines</HighlightedText>
      </SectionHeading>
      <div className="flex flex-col xl:flex-row gap-10 justify-between mt-3">
        <MainNewsCard {...headlineNews[0]} />
        <div className="flex flex-col gap-4 justify-between ml-2">
          <SecondaryNewsCard {...headlineNews[1]} />
          <SecondaryNewsCard {...headlineNews[2]} />
        </div>
      </div>
    </section>
  );
}

function PastNewsSection() {
  return (
    <section>
      <div className="grid grid-cols-[380px_1fr] gap-20">
        <div>
          <SectionHeading>
            Innovation through the <HighlightedText>Years</HighlightedText>
          </SectionHeading>
          <h3 className="mb-2 text-[18px]">
            Dive into our past news to see how ideas evolved into action.
          </h3>
          <p className="text-[16px] text-[#333]">
            SIIC recently celebrated major milestones, including successful
            accelerator graduations, funding rounds, and startup launches, while
            expanding global reach through events, partnerships, and media
            recognition. SIIC news highlights include awards, pilot projects,
            satellite initiatives, and notable invitations, showcasing
            consistent growth, industry impact, and investor confidence.
          </p>
        </div>
        <div className="overflow-x-auto">
          <div className="flex flex-col gap-6 pb-2  max-h-[400px] p-4">
            {pastNews.map((card) => (
              <PastNewsCard key={card.id} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function NewsLetter() {
  return (
    <section>
      <SectionHeading>
        Progress you can <HighlightedText>Measure</HighlightedText>
      </SectionHeading>
      <div className="pt-6">
        <Carousel className="w-full max-w-[1400px] mx-auto">
          <CarouselContent>
            {newsletterCards.map((card, idx) => (
              <CarouselItem
                key={idx}
                className="basis-1/4 pt-3 flex justify-center"
              >
                <NewsLetterCard
                  idx={card.idx}
                  date={card.date}
                  text={card.text}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

// ----------------- Main Component -----------------

function FlashNews() {
  const heading = (
    <>
      Know what we are <HighlightedText>Newly Brewing.</HighlightedText>
    </>
  );
  const description =
    "Discover SIIC’s latest initiatives, shaping innovations for tomorrow’s industries.";
  return (
    <PageLayout
      bodyStyle="py-8 px-2 md:p-16 -mt-70"
      banner={<BannerTemplate Heading={heading} Description={description} />}
    >
      <div className="flex flex-col gap-10 ">
        <HeadLinesSection />
        <PastNewsSection />
        <NewsLetter />
      </div>
    </PageLayout>
  );
}

export default FlashNews;
