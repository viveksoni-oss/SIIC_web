import React from "react";
import BannerTemplate from "@/components/banners/BannerTemplate";
import PageLayout from "@/components/PageLayout";
import HighlightedText from "@/components/Utility Components/HighlightedText";

// ============================================================
// DYNAMIC IMPORT: Load react-pdf only on client side
// ============================================================
// This prevents SSR issues and ensures proper React context
import { Document, Page, pdfjs } from "react-pdf";
import { Clock, Download } from "lucide-react";

// Worker setup
if (typeof window !== "undefined") {
  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
}

// Tender data
const tenderList = [
  {
    id: 1,
    title: "Real Time DSO/AIML/DJAC Building/IIT/FIRST/DP/17-11-2025",
    lastDate: "27th November 2025 before 5:00 pm",
    pdf: "/Tender/DSO.pdf",
  },
  {
    id: 2,
    title: "AI Based Water Quality Monitoring/ENV/DP/19-11-2025",
    lastDate: "5th December 2025 before 6:00 pm",
    pdf: "/Tender/vectorSignal.pdf",
  },
  {
    id: 3,
    title: "AI Based Water Quality Monitoring/ENV/DP/19-11-2025",
    lastDate: "5th December 2025 before 6:00 pm",
    pdf: "/Tender/tender.pdf",
  },
];

// ============================================================
// MAIN COMPONENT
// ============================================================
function Tenders() {
  const Heading = (
    <>
      Our <HighlightedText>Tender</HighlightedText>
    </>
  );

  return (
    <PageLayout
      banner={<BannerTemplate heading={"Our"} description={"SIIC hands crore scale tenders in record time."}  highlightedText="Tenders"/>}
      bodyStyle="-mt-80"
    >
      <div className="flex flex-wrap gap-8 justify-center py-8 px-4">
        {tenderList.map((item) => (
          <TenderCard
            key={item.id}
            title={item.title}
            lastDate={item.lastDate}
            pdf={item.pdf}
          />
        ))}
      </div>
    </PageLayout>
  );
}

// ============================================================
// TENDER CARD WITH PDF PREVIEW
// ============================================================
function TenderCard({ title, lastDate, pdf }) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasError, setHasError] = React.useState(false);

  return (
    <div className="m-4 h-auto w-[360px] rounded-xl shadow-md group bg-white border border-gray-200 flex flex-col transition-all hover:shadow-xl">
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
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-highlight"></div>
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
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary-highlight"></div>
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

        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-10 bg-transparent"
          aria-label="View PDF"
        />
      </div>

      {/* CARD BODY */}
      <div className="flex-1 p-6 flex flex-col gap-6">
        <h1 className="text-xl font-semibold text-gray-800 line-clamp-3 leading-tight">
          {title}
        </h1>

        <div className="flex items-center gap-1 ">
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
          className="mt-auto w-full rounded-lg hover:bg-primary-highlight/120 bg-primary-highlight text-white font-semibold text-center py-2.5 transition-all active:scale-95 flex items-center justify-center gap-2"
        >
          <Download />
          Download PDF
        </a>
      </div>
    </div>
  );
}

export default Tenders;
