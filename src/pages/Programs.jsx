import { toast, ToastContainer } from "react-toastify";
import PageLayout from "../components/PageLayout";
import ProgramsBanner from "../components/banners/ProgramsBanner";
import ProgramCard from "./../components/ProgramsComponents/ProgramCard";
import HighlightedText from "./../components/Utility Components/HighlightedText";
import { useEffect } from "react";
import { useSearchParams } from "react-router";
import { getProgramsByType } from "./../Util/HelperFunctions";
import BannerTemplate from "@/components/banners/BannerTemplate";

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
      <div className="flex flex-col gap-6 mb-10">
        <div className="text-[40px] font-thin">
          <div>
            <HighlightedText size="40px" weight={700}>
              {highlightText}
            </HighlightedText>{" "}
            {title}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-6 xl:gap-20 2xl:gap-8 lg:gap-10 justify-center items-center">
          {programs.map((program) => (
            <ProgramCard key={program.id} data={program} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <PageLayout
      bodyStyle={"-mt-60 "}
      banner={
        <BannerTemplate
          heading="Programs to Support"
 highlightedText="your"
headingSuffix="innovations."
        />
      }
    >
      <div className="p-16 min-h-[1200px]">
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
