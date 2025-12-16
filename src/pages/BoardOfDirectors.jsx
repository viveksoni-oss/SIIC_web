import { NewPageLayout } from "@/components/Utility Components/NewPageLayout";
import HighlightedText from "./../components/Utility Components/HighlightedText";
import { DirectorData } from "./../data/DirectorsData";
import NewTeamCard from "@/components/Utility Components/NewTeamCard";
import SectionHeading from "@/components/Utility Components/SectionHeading";

function BoardOfDirectors() {
  return (
    <NewPageLayout
      heading={
        <>
          {" "}
          The Power <HighlightedText weight={800}>Brains</HighlightedText>.
        </>
      }
      description={` Visionary leaders guiding SIIC's mission to empower startups and innovators.`}
    >
      <SectionHeading className="py-10 px-15">
        Our <HighlightedText>Directors</HighlightedText>
      </SectionHeading>
      <div className="px-0 sm:px-12 2xl:px-44">
        <div className="px-4 sm:px-8 xl:px-12 py-8 sm:py-12 xl:py-16 grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-10 xl:gap-22 xl:gap-y-10 xl:border relative xl:border-black/10 xl:rounded-2xl items-center justify-items-center">
          {DirectorData.map((data, index) => (
            <NewTeamCard key={index} data={data} height={0}></NewTeamCard>
          ))}
          {DirectorData.length % 2 == 1 && (
            <div className="absolute -right-5 -bottom-5 xl:block hidden overflow-hidden">
              <img src="/Polygon 5.svg" alt="" />
            </div>
          )}
        </div>
      </div>
    </NewPageLayout>
  );
}

export default BoardOfDirectors;
