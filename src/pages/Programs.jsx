import { toast, ToastContainer } from "react-toastify";
import PageLayout from "../components/PageLayout";
import ProgramsBanner from "../components/banners/ProgramsBanner";
import ProgramCard from "./../components/ProgramsComponents/ProgramCard";
import HighlightedText from "./../components/Utility Components/HighlightedText";
import { useEffect } from "react";
import { useSearchParams } from "react-router";
import { getProgramsByType } from "./../Util/HelperFunctions";
import BannerTemplate from "@/components/banners/BannerTemplate";
import SectionHeading from "@/components/Utility Components/SectionHeading";

function Programs() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Filter programs by type (with auto status update)
  const activePrograms = getProgramsByType("Active");
  const upcomingPrograms = getProgramsByType("Upcoming");
  const pastPrograms = getProgramsByType("Past");

  useEffect(() => {
    // Show toast if redirected from invalid program
    if (searchParams.get("notFound") === "true") {
      toast.error(`Oops! Program not found`, {
        position: "bottom-right",
        autoClose: 2000,
      });
      // Remove the query param after showing toast
      const newParams = new URLSearchParams(searchParams);
      newParams.delete("notFound");
      setSearchParams(newParams, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  // Component to render program section
  const ProgramSection = ({ title, programs, highlightText }) => {
    if (programs.length === 0) {
      return null;
    }
    return (
      <div className="flex flex-col justify-center items-center sm:justify-normal sm:justify-items-normal gap-6 mb-10">
          <SectionHeading className="self-start">
            <HighlightedText>{highlightText}</HighlightedText> {title}
          </SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-6 ">
          {programs.map((program) => (
            <ProgramCard key={program.id} data={program} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <PageLayout
      bodyStyle={"px-8 py-9  lg:py-18 lg:px-16 -mt-60 "}
      banner={
        <BannerTemplate
          heading="Programs that power"
          highlightedText="your"
          headingSuffix="innovations."
          description="We connect startups to government and CSR initiatives that accelerate entrepreneurial growth"
          maxWidth="605"
        />
      }
    >
      <div className=" min-h-[1200px]">
        {/* Active Programs */}
        <ProgramSection
          title="Programs"
          programs={activePrograms}
          highlightText="Active"
        />

        {/* Upcoming Programs */}
        <ProgramSection
          title="Programs"
          programs={upcomingPrograms}
          highlightText="Upcoming"
        />

        {/* Past Programs */}
        <ProgramSection
          title="Programs"
          programs={pastPrograms}
          highlightText="Past"
        />

        {/* Fallback message if no programs exist */}
        {activePrograms.length === 0 &&
          upcomingPrograms.length === 0 &&
          pastPrograms.length === 0 && (
            <div className="text-center text-gray-500 text-xl py-20">
              No programs available at the moment.
            </div>
          )}
      </div>
    </PageLayout>
  );
}

export default Programs;
