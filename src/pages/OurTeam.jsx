import React from "react";
import HighlightedText from "../components/Utility Components/HighlightedText";
import { DirectorData } from "../data/DirectorsData";
import CardArrow from "../components/Utility Components/CardArrow";
import TeamSections from "../components/OurTeams/TeamSections";
import {
  ourLeadership,
  staffOfDomain,
  staffOfOperation,
} from "../data/OurTeamsData";
import { mentorsData } from "./../data/MentorsData";

function OurTeam() {
  return (
    <div className="min-h-screen  -mb-20 bg-white relative rounded-b-2xl px-16 py-8 pb-16">
      {/* Gradient top bar */}
      <div className="relative mx-auto bg-white   h-[203px] rounded-2xl overflow-hidden  flex justify-start items-center  ">
        {/* Blurred backdrop */}
        <div className="backdrop-blur-xl absolute z-20 w-full h-full"></div>
        {/* Background image */}
        <img
          src="/knowUsGradient.svg"
          className="absolute z-10 object-cover w-full h-full"
          alt=""
        />
        <div className="relative z-30  text-white p-8">
          <h2 className="text-[56px] font-medium mb-6">
            {" "}
            The Power <HighlightedText weight={800}>Brains</HighlightedText>.
          </h2>
          {/* Add BoardOfDirectors content/components here */}
          <p>
            Visionary leaders guiding SIIC’s mission to empower <br />
            startups and innovators.
          </p>
        </div>
      </div>
      {/* Section First */}
      <TeamSections
        heading={"Our Leadership"}
        TeamData={ourLeadership}
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
    </div>
  );
}

export default OurTeam;
