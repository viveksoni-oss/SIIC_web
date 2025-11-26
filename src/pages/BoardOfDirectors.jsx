import { NewPageLayout } from "@/components/Utility Components/NewPageLayout";
import HighlightedText from "./../components/Utility Components/HighlightedText";
import { DirectorData } from "./../data/DirectorsData";
import NewTeamCard from "@/components/Utility Components/NewTeamCard";

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
      <h1 className="text-2xl sm:text-3xl lg:text-5xl  font-thin ml-0 sm:ml-18 mt-8.5 mb-4">
        Our <HighlightedText weight={700}>Directors</HighlightedText>
      </h1>

      <div className="px-0 sm:px-12 2xl:px-44">
        <div className="px-4 sm:px-8 xl:px-12 py-8 sm:py-12 xl:py-16 grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-10 xl:gap-22 xl:gap-y-10 xl:border relative xl:border-black/10 xl:rounded-2xl items-center justify-items-center">
          {DirectorData.map((data, index) => (
            <NewTeamCard key={index} data={data} imageF={true}></NewTeamCard>
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
