import BannerTemplate from "@/components/banners/BannerTemplate";
import PageLayout from "@/components/PageLayout";
import HighlightedText from "@/components/Utility Components/HighlightedText";
import React from "react";

// DUMMY DATA
const tenderList = [
  {
    id: 1,
    image: "Tender_RealTime_DSO.png",
    title: "Real Time DSO/AIML/DJAC Building/IIT/FIRST/DP/17-11-2025",
    lastDate: "27th November 2025 before 5:00 pm",
    pdf: "/Tender/DSO.pdf",
  },
  {
    id: 2,
    image: "Tender_RealTime_DSO.png",
    title: "AI Based Water Quality Monitoring/ENV/DP/19-11-2025",
    lastDate: "5th December 2025 before 6:00 pm",
    pdf: "/Tender/DSO.pdf",
  },
  {
    id: 2,
    image: "Tender_RealTime_DSO.png",
    title: "AI Based Water Quality Monitoring/ENV/DP/19-11-2025",
    lastDate: "5th December 2025 before 6:00 pm",
    pdf: "/Tender/DSO.pdf",
  },
  {
    id: 2,
    image: "Tender_RealTime_DSO.png",
    title: "AI Based Water Quality Monitoring/ENV/DP/19-11-2025",
    lastDate: "5th December 2025 before 6:00 pm",
    pdf: "/Tender/ENV.pdf",
  },
  {
    id: 2,
    image: "Tender_RealTime_DSO.png",
    title: "AI Based Water Quality Monitoring/ENV/DP/19-11-2025",
    lastDate: "5th December 2025 before 6:00 pm",
    pdf: "/Tender/ENV.pdf",
  },
  // Add more tenders if you want
];

function Tenders() {
  const Heading = (
    <>
      Our <HighlightedText>Tender</HighlightedText>
    </>
  );

  return (
    <PageLayout
      banner={<BannerTemplate Heading={Heading} Description={""} />}
      bodyStyle="-mt-80"
    >
      <div className="flex flex-wrap gap-8 justify-center py-8">
        {tenderList.map((item) => (
          <TenderCard
            key={item.id}
            image={item.image}
            title={item.title}
            lastDate={item.lastDate}
            pdf={item.pdf}
          />
        ))}
      </div>
    </PageLayout>
  );
}

// More reusable, stylized card component
function TenderCard({ image, title, lastDate, pdf }) {
  return (
    <div className="m-4 h-auto w-[360px] rounded-xl shadow group bg-white border border-gray-200 flex flex-col transition hover:shadow-lg">
      <div className="overflow-hidden rounded-t-xl">
        <img
          className="h-[210px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={`/Tender/${image}`}
          alt={title}
        />
      </div>
      <div className="flex-1 p-6 flex flex-col gap-2">
        <h1 className="text-lg font-semibold text-gray-700">{title}</h1>
        <p className="text-sm font-medium text-primary-highlight">
          *Last date to apply: {lastDate}
        </p>
        <a
          href={pdf}
          download
          className="mt-4 rounded-2xl inline-block  hover:bg-primary-highlight px-4 py-2 text-white font-semibold text-center transition bg-primary hover:scale-105"
        >
          Read More & Download
        </a>
      </div>
    </div>
  );
}

export default Tenders;
