import React, { useState, useRef, useEffect } from "react";
import HighlightedText from "../Utility Components/HighlightedText";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import NewTeamCard from "../Utility Components/NewTeamCard";

// Utility: Define a hierarchy order for roles
const getSortOrder = (role) => {
  const hierarchy = [
    "Professor In-Charge (Incubation & Innovation)",
    "Chief Executive Officer",
    "Chief Operating Officer",
    "Chief Finance Officer",
    "Senior VP",
    "VP",
    "General Manager",
    "Assistant Vice President",
    "Head",
    "Senior Manager",
    "Manager",
    "Deputy Manager",
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

  const normalized = role.toLowerCase().trim();
  for (let i = 0; i < hierarchy.length; i++) {
    if (normalized === hierarchy[i].toLowerCase()) return i; // exact match
  }
  return hierarchy.length; // unknown role at end
};

function TeamSections({ heading, TeamData }) {
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

  // Scroll / gradient logic
  const scrollRef = useRef(null);
  const [showTopFade, setShowTopFade] = useState(false);
  const [showBottomFade, setShowBottomFade] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const updateShadows = () => {
      const { scrollTop, scrollHeight, clientHeight } = el;
      const isScrollable = scrollHeight > clientHeight + 1; // small epsilon
      if (!isScrollable) {
        setShowTopFade(false);
        setShowBottomFade(false);
        return;
      }

      setShowTopFade(scrollTop > 0);
      setShowBottomFade(scrollTop + clientHeight < scrollHeight - 1);
    };

    // Initial check (in case content already overflows)
    updateShadows();

    el.addEventListener("scroll", updateShadows);
    window.addEventListener("resize", updateShadows);

    return () => {
      el.removeEventListener("scroll", updateShadows);
      window.removeEventListener("resize", updateShadows);
    };
  }, [filtered.length]); // re-run when list size changes

  return (
    <div className="mt-8.5 px-4 md:px-8 lg:px-16">
      {/* Heading + filter bar as a flex row on desktop */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1
          id={`${heading.toLowerCase().split(" ").join("-")}`}
          className="text-[32px] md:text-[40px] font-thin capitalize tracking-tight"
        >
          {words.join(" ")}{" "}
          <HighlightedText weight={700}>{last_word}</HighlightedText>
        </h1>

        {/* Filter Bar */}
        {
          <div className="flex items-center flex-wrap gap-3">
            <label className="font-semibold text-lg">
              Filter by <HighlightedText>domain</HighlightedText>:
            </label>
            <Select value={selectedDomain} onValueChange={setSelectedDomain}>
              <SelectTrigger className="w-[180px] md:w-[220px]">
                <SelectValue placeholder="Select a domain" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {allDomains.map((domain) => (
                    <SelectItem key={domain} value={domain}>
                      {domain}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        }
      </div>

      {/* Card wrapper with conditional gradient overlays and inner scroll area */}
      <div className="mt-10 mx-auto max-w-8xl">
        <div className="relative rounded-3xl border border-slate-200 shadow-lg sm:px-1 md:px-2">
          {/* Top gradient overlay (only when scrollable & not at top) */}
          {showTopFade && (
            <div className="pointer-events-none absolute inset-x-0 top-0 h-10 md:h-20 rounded-t-3xl bg-gradient-to-b from-gray-100 via-white/10 to-transparent z-20" />
          )}

          {/* Bottom gradient overlay (only when scrollable & not at bottom) */}
          {showBottomFade && (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 md:h-20 rounded-b-3xl bg-gradient-to-t from-gray-100 via-white/10  to-transparent z-20" />
          )}

          {/* Scrollable content inside */}
          <div
            ref={scrollRef}
            className="max-h-[600px] sm:max-h-[1178px] overflow-y-auto overflow-x-clip"
          >
            <div className="relative py-8 md:py-10">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10 items-start justify-items-center">
                {filtered.map((data) => (
                  <NewTeamCard key={data.id} data={data} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamSections;
