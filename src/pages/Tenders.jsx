import React from "react";
import BannerTemplate from "@/components/banners/BannerTemplate";
import PageLayout from "@/components/PageLayout";
import HighlightedText from "@/components/Utility Components/HighlightedText";
import { Document, Page, pdfjs } from "react-pdf";
import { Clock, Download, Eye } from "lucide-react";

// IMPORT PDFs FROM ASSETS
import DSO from "@/assets/Tender/DSO.pdf";
import BenchtopVector from "@/assets/Tender/benchtop_vector.pdf";
import ChannelDc from "@/assets/Tender/channelDc.pdf";
import TenderVectorSignal from "@/assets/Tender/TenderVectorsSignal.pdf";
import Tender181224 from "@/assets/Tender/181224.pdf";
import TenderMain from "@/assets/Tender/tender.pdf";
import AmendmentTender from "@/assets/Tender/AmendmentTender.pdf";
import SectionHeading from "@/components/Utility Components/SectionHeading";

// ============================================================
// PDF WORKER
// ============================================================
if (typeof window !== "undefined") {
  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
}

// ============================================================
// DATA (now using imported asset URLs)
// ============================================================
const tenderList = [
  {
    id: 1,
    title: "Real Time DSO/AIML/DJAC Building/IIT/FIRST/DP/17-11-2025",
    lastDate: "27th November 2025 before 5:00 pm",
    pdf: DSO,
    isAmendment: true,
  },
  {
    id: 2,
    title: "Benchtop Vector/AIML/DJAC Building/IIT/FIRST/DP/17-11-2025",
    lastDate: "3rd December 2025 before 5:00 pm",
    pdf: BenchtopVector,
    isAmendment: true,
  },
  {
    id: 3,
    title: "4 Channel DC/AIML/DJAC Building/IIT/FIRST/DP/17-11-2025",
    lastDate: "3rd December 2025 by 5:00 pm",
    pdf: ChannelDc,
    isAmendment: true,
  },
  {
    id: 4,
    title: "Vector Signal Generato/AIML/DJAC Building/IIT/FIRST/DP/ 17-11-2025",
    lastDate: "3rd December 2025 before 5:00 pm",
    pdf: TenderVectorSignal,
    isAmendment: true,
  },
  {
    id: 5,
    title: "Equipment/ DJAC Building/IIT/FIRST/DP/18-12-2024",
    lastDate: "21st December 2024 before 5:00 pm",
    pdf: Tender181224,
    isAmendment: false,
  },
  {
    id: 6,
    title: "FIRST Innovation Hub-1/IIT/FIRST/AB/19-01-2022",
    lastDate: "31st January 2021 by 5:00 pm",
    pdf: TenderMain,
    isAmendment: false,
  },
];

// ============================================================
// MAIN PAGE
// ============================================================
function Tenders() {
  return (
    <PageLayout
      banner={
        <BannerTemplate
          heading={"Our"}
          description={"SIIC handles crore-scale tenders in record time."}
          highlightedText="Tenders"
        />
      }
      bodyStyle="-mt-80 px-28 py-20"
    >
      {/* PAGE HEADING */}
      <div className="w-full  px-4">
        <SectionHeading>
          Open <HighlightedText>Tenders</HighlightedText>
        </SectionHeading>
      </div>

      <div className="flex flex-wrap gap-8 justify-center py-4 px-4">
        {tenderList.map((item) => (
          <TenderCard key={item.id} {...item} />
        ))}
      </div>
    </PageLayout>
  );
}

// ============================================================
// CARD
// ============================================================
function TenderCard({ title, lastDate, pdf, isAmendment }) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasError, setHasError] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="m-4 h-auto w-[360px] rounded-xl shadow-md group bg-white border border-gray-200 flex flex-col transition-all hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* PDF PREVIEW */}
      <div className="h-[210px] w-full overflow-hidden rounded-t-xl bg-gray-100 relative border-b border-gray-100">
        {!hasError ? (
          <Document
            file={pdf}
            onLoadSuccess={() => setIsLoading(false)}
            onLoadError={(error) => {
              console.error("PDF Error:", error);
              setHasError(true);
              setIsLoading(false);
            }}
            loading={
              <div className="flex h-full w-full items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-highlight" />
              </div>
            }
            error={null}
            className="w-full h-full flex justify-center bg-gray-50"
          >
            <Page
              pageNumber={1}
              width={360}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              loading={
                <div className="flex h-full w-full items-center justify-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary-highlight" />
                </div>
              }
              className="transition-transform duration-500 group-hover:scale-105 origin-top"
            />
          </Document>
        ) : (
          <div className="flex flex-col items-center justify-center h-full bg-gray-100 text-gray-400">
            <svg
              className="w-12 h-12 mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span className="text-xs">Preview Not Available</span>
          </div>
        )}

        {/* Click overlay */}
        <a />
        <div className="absolute inset-0 group-hover:bg-black/50 filter  transition-all duration-500 ease-in-out flex justify-center items-center  group-hover:backdrop-blur-xs h-full w-full z-15">
          {isHovered && (
            <a
              className="flex justify-center items-center text-white flex-col"
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View PDF"
            >
              {" "}
              <Eye className="hover:scale-110 transition-all " />
              <h1 className="font-semibold">Click for Preview</h1>
            </a>
          )}
        </div>
        {/* Amendment tag */}
        {isAmendment && (
          <a
            className="absolute top-3 right-3 z-20 rounded-full bg-amber-500 text-white text-[11px] font-semibold px-3 py-1 shadow-sm"
            href={AmendmentTender}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Amendment PDF"
          >
            **Amendment
          </a>
        )}
      </div>

      {/* BODY */}
      <div className="flex-1 p-6 flex flex-col gap-6">
        <h1 className="text-xl font-semibold text-gray-800 line-clamp-3 leading-tight">
          {title}
        </h1>

        <div className="flex items-center gap-1">
          <Clock
            size={15}
            strokeWidth={3}
            className="text-xs text-primary-highlight"
          />
          <p className="text-xs font-bold text-primary-highlight">{lastDate}</p>
        </div>

        <a
          href={pdf}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto duration-300 ease-in-out w-full rounded-lg bg-primary hover:tracking-widest hover:bg-primary-highlight text-white font-semibold text-center py-2.5 transition-all active:scale-95 flex items-center justify-center gap-2"
        >
          <Download size={18} />
          Download PDF
        </a>
      </div>
    </div>
  );
}

export default Tenders;
