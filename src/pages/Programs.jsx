import PageLayout from "../components/PageLayout";
import ProgramsBanner from "../components/banners/ProgramsBanner";
import ProgramCard from "./../components/ProgramsComponents/ProgramCard";

function Programs() {
  return (
    <PageLayout banner={<ProgramsBanner />}>
      <div className="p-16">

      <ProgramCard></ProgramCard>
      </div>
    </PageLayout>
  );
}

export default Programs;
