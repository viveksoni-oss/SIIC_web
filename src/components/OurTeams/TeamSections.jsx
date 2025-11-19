import React, { useState } from "react";
import HighlightedText from "../Utility Components/HighlightedText";
import CardArrow from "../Utility Components/CardArrow";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import NewTeamCard from "../Utility Components/NewTeamCard";
// Utility: Define a hierarchy order for roles
const getSortOrder = (role) => {
  const hierarchy = [
    "Professor In-Charge",
    "Chief Executive Officer",
    "Chief Operating Officer",
    "Chief Finance Officer",
    "Senior VP",
    "VP",
    "General Manager",
    "Head",
    "Senior Manager",
    "Manager",
    "Deputy Manager",
    "Assistant Vice President",
    "Assistant General Manager",
    "Assistant Manager",
    "Project Engineer",
    "Compliance Manager",
    "Domain Specialist",
    "Technical Head",
    "Operations Executive",
    "Operations Associate",
    "Executive",
    "YPP Fellow",
    "Associate",
    "Analyst",
  ];

  for (let i = 0; i < hierarchy.length; i++) {
    if (role.toLowerCase().includes(hierarchy[i].toLowerCase())) return i;
  }
  return hierarchy.length; // unknown role at end
};
function TeamSections({ heading, TeamData, filter = true }) {
  // Extract unique domains
  const allDomains = Array.from(
    new Set(TeamData.map((member) => member.domain))
  ).sort();
  allDomains.unshift("All");

  const [selectedDomain, setSelectedDomain] = useState("All");

  const filtered = TeamData.filter(
    (member) => selectedDomain === "All" || member.domain === selectedDomain
  );

  filtered.sort((a, b) => getSortOrder(a.role) - getSortOrder(b.role));

  let words = heading.split(" ");
  const last_word = words[words.length - 1];
  words = words.slice(0, words.length - 1);

  return (
    <div>
      {/* Heading + filter bar as a flex row on desktop */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between px-4 xl:px-18 mt-8.5">
        <h1
          id={`${heading.toLowerCase().split(" ").join("-")}`}
          className="text-[36px] md:text-[40px] font-thin capitalize"
        >
          {words.join(" ")}{" "}
          <HighlightedText weight={700}>{last_word}</HighlightedText>
        </h1>
        {/* Filter Bar -- now beside heading on desktop, below on mobile */}
        {filter && (
          <div className="flex items-center mt-5 md:mt-0">
            <label className="font-semibold mr-3 text-lg">
              Filter by <HighlightedText>domain</HighlightedText>:
            </label>
            <Select value={selectedDomain} onValueChange={setSelectedDomain}>
              <SelectTrigger className="w-[160px] md:w-[200px]">
                <SelectValue placeholder="Select a domain" />
              </SelectTrigger>
              <SelectGroup>
                <SelectContent>
                  {allDomains.map((domain) => (
                    <SelectItem key={domain} value={domain}>
                      {domain}
                    </SelectItem>
                  ))}
                </SelectContent>
              </SelectGroup>
            </Select>
          </div>
        )}
      </div>
      <div className="px-4 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 gap-y-10 rounded-2xl items-center justify-items-center relative">
        {filtered.map((data) => (
          <NewTeamCard key={data.id} arrowColor={"#6c3231"} data={data} />
        ))}
        {filtered.length % 3 === 1 && (
          <div className="absolute -right-5 -bottom-5 xl:block hidden overflow-hidden">
            <img src="/Polygon 5.svg" alt="rounded 222 triangle" />
          </div>
        )}
      </div>
    </div>
  );
}

export default TeamSections;
