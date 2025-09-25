import PageLayout from "../components/PageLayout";
import ProgramsBanner from "../components/banners/ProgramsBanner";
import ProgramCard from "./../components/ProgramsComponents/ProgramCard";
import HighlightedText from "./../components/Utility Components/HighlightedText";

function Programs() {
  const programsData = [
    // Active Programs
    {
      id: "udaan-2025",
      title: "Udaan Startup Accelerator",
      imgLink: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500&h=500",
      startDate: "2025-06-15",
      endDate: "2025-12-15",
      DirectApplyLink: "https://apply.siic.com/udaan-2025",
      type: "Active",
      domain: ["technology", "healthcare", "AI"],
      centerOfExcellence: "AI & Data Science",
    },
    {
      id: "fintech-hub-2025",
      title: "FinTech Innovation Hub",
      imgLink: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=500",
      startDate: "2025-07-01",
      endDate: "2026-01-15",
      DirectApplyLink: "https://apply.siic.com/fintech-hub",
      type: "Active",
      domain: ["fintech", "blockchain", "payments"],
      centerOfExcellence: "Financial Innovation",
    },
    {
      id: "healthtech-2025",
      title: "HealthTech Pioneerd",
      imgLink: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=500",
      startDate: "2025-08-15",
      endDate: "2026-02-15",
      DirectApplyLink: "https://apply.siic.com/healthtech-2025",
      type: "Active",
      domain: ["healthcare", "medtech", "biotech"],
      centerOfExcellence: "Healthcare Innovation",
    },

    // Upcoming Programs
    {
      id: "cleantech-2025",
      title: "CleanTech Solutions",
      imgLink: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500&h=500",
      startDate: "2025-10-01",
      endDate: "2026-04-01",
      DirectApplyLink: "https://apply.siic.com/cleantech-2025",
      type: "Upcoming",
      domain: ["cleantech", "sustainability", "renewable energy"],
      centerOfExcellence: "Environmental Solutions",
    },
    {
      id: "agritech-2025",
      title: "AgriTech Revolution",
      imgLink: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=500&h=500",
      startDate: "2025-11-15",
      endDate: "2026-05-15",
      DirectApplyLink: "https://apply.siic.com/agritech-2025",
      type: "Upcoming",
      domain: ["agriculture", "technology", "IoT"],
      centerOfExcellence: "Agricultural Innovation",
    },
    {
      id: "edtech-2026",
      title: "EdTech Transformation",
      imgLink: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=500",
      startDate: "2026-01-10",
      endDate: "2026-07-10",
      DirectApplyLink: "https://apply.siic.com/edtech-2026",
      type: "Upcoming",
      domain: ["education", "technology", "e-learning"],
      centerOfExcellence: "Education Innovation",
    },
    {
      id: "mobility-2026",
      title: "Smart Mobility Initiative",
      imgLink: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
      startDate: "2026-02-01",
      endDate: "2026-08-01",
      DirectApplyLink: "https://apply.siic.com/mobility-2026",
      type: "Upcoming",
      domain: ["mobility", "transportation", "smart city"],
      centerOfExcellence: "Urban Innovation",
    },
    {
      id: "cybersecurity-2026",
      title: "CyberSecurity Excellence",
      imgLink: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
      startDate: "2026-03-15",
      endDate: "2026-09-15",
      DirectApplyLink: "https://apply.siic.com/cybersecurity-2026",
      type: "Upcoming",
      domain: ["cybersecurity", "technology", "data protection"],
      centerOfExcellence: "Security Innovation",
    },

    // Past Programs
    {
      id: "innovation-2024",
      title: "Innovation Challenge 2024",
      imgLink: "https://images.unsplash.com/photo-1552664730-d307ca884978",
      startDate: "2024-03-01",
      endDate: "2024-06-01",
      DirectApplyLink: "",
      type: "Past",
      domain: ["innovation", "technology", "entrepreneurship"],
      centerOfExcellence: "Innovation Hub",
    },
    {
      id: "ai-bootcamp-2024",
      title: "AI Bootcamp 2024",
      imgLink: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      startDate: "2024-01-15",
      endDate: "2024-04-15",
      DirectApplyLink: "",
      type: "Past",
      domain: ["AI", "machine learning", "data science"],
      centerOfExcellence: "AI & Data Science",
    },
    {
      id: "startup-weekend-2024",
      title: "Startup Weekend 2024",
      imgLink: "https://images.unsplash.com/photo-1515187029135-18ee286d815b",
      startDate: "2024-05-10",
      endDate: "2024-05-12",
      DirectApplyLink: "",
      type: "Past",
      domain: ["entrepreneurship", "networking", "innovation"],
      centerOfExcellence: "Startup Hub",
    },
    {
      id: "blockchain-summit-2024",
      title: "Blockchain Summit 2024",
      imgLink: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0",
      startDate: "2024-02-20",
      endDate: "2024-02-22",
      DirectApplyLink: "",
      type: "Past",
      domain: ["blockchain", "cryptocurrency", "web3"],
      centerOfExcellence: "Blockchain Innovation",
    },
    {
      id: "women-entrepreneurs-2024",
      title: "Women Entrepreneurs Program",
      imgLink: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
      startDate: "2024-04-05",
      endDate: "2024-07-05",
      DirectApplyLink: "",
      type: "Past",
      domain: ["entrepreneurship", "women empowerment", "leadership"],
      centerOfExcellence: "Diversity & Inclusion",
    },
    {
      id: "iot-workshop-2024",
      title: "IoT Workshop Series",
      imgLink: "https://images.unsplash.com/photo-1518709268805-4e9042af2176",
      startDate: "2024-06-01",
      endDate: "2024-08-30",
      DirectApplyLink: "",
      type: "Past",
      domain: ["IoT", "sensors", "connected devices"],
      centerOfExcellence: "IoT Innovation",
    },
  ];
  // Filter programs by type
  const activePrograms = programsData.filter(
    (program) => program.type === "Active"
  );
  const upcomingPrograms = programsData.filter(
    (program) => program.type === "Upcoming"
  );
  const pastPrograms = programsData.filter(
    (program) => program.type === "Past"
  );

  // Component to render program section
  const ProgramSection = ({ title, programs, highlightText }) => {
    if (programs.length === 0) {
      return null; // Don't render section if no programs
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6 xl:gap-10 2xl:gap-8 justify-center items-center">
          {programs.map((program) => (
            <ProgramCard key={program.id} data={program} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <PageLayout bodyStyle={"-translate-y-60"} banner={<ProgramsBanner />}>
      <div className="p-16 mb-10">
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
        {programsData.length === 0 && (
          <div className="text-center text-gray-500 text-xl py-20">
            No programs available at the moment.
          </div>
        )}
      </div>
    </PageLayout>
  );
}

export default Programs;
