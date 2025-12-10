import React, { useEffect } from "react";
import HighlightedText from "../components/Utility Components/HighlightedText";
import TeamSections from "../components/OurTeams/TeamSections";
import {
  ourLeadership,
  staffOfDomain,
  staffOfOperation,
} from "../data/OurTeamsData";
import { useSearchParams } from "react-router";
import { NewPageLayout } from "./../components/Utility Components/NewPageLayout";

function OurTeam() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (window.location.hash) {
      const el = document.getElementById(window.location);
      
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [window.location]);
  return (
    <NewPageLayout
      heading={
        <>
          {" "}
          The Power <HighlightedText weight={800}>Brains</HighlightedText>.
        </>
      }
      description={
        "Visionary leaders guiding SIIC’s mission to empower startups and innovators."
      }
    >
      {/* Section First */}
      <TeamSections
        heading={"Our Leadership"}
        TeamData={ourLeadership}
        filter={false}
      ></TeamSections>
      {/* Staff of Domains */}
      <TeamSections
        heading={"Staff of Domains"}
        TeamData={staffOfDomain}
      ></TeamSections>
      {/* Staff of Operations */}
      <TeamSections
        heading={"Staff of Operations"}
        TeamData={staffOfOperation}
      ></TeamSections>
    </NewPageLayout>
  );
}

export default OurTeam;
