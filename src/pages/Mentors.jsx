import React, { useState } from "react";
import MentorsBanner from "../components/banners/MentorsBanner";
import PageLayout from "../components/PageLayout";
import MentorsSection from "./../components/Mentors/MentorsCard";
import Domain from "../components/Utility Components/Domain";
import SearchBar from "./../components/Utility Components/SearchBar";

function Mentors() {
  const categoriesOfMentors = [
    "All",
    "AI / ML",
    "Cleantech",
    "Chemicals & Petrochemicals Industry",
    "Business Development",
    "Deeptech",
    "Commercialization",
    "ConsumerTech",
    "Corporate Governance & Ethics",
    "Cybersecurity",
    "Energy",
    "Finance",
    "Defence and Aerospace",
    "Fintech",
    "Fund Raising",
    "GTM",
    "Foodtech",
    "Healthcare",
    "IOT",
    "IT/Software",
    "Kinematics of Mechanisms",
    "IP",
    "life sciences",
    "General Management",
    "IDF ",
    "Manufacturing",
    "Oil & Gas",
    "SAAS",
    "Medical & Health technologies",
    "SDG",
    "Planning",
    "P. Management",
    "Public Policy",
    "Risk Management",
    "Social Tech",
    "Sustainability",
    "Strategy",
    "Textile",
    "Telecom",
    "Retail",
    "Service",
    "IPO",
    "Cross Border Collaborations",
    "Investment",
  ];
  const [domain, setDomain] = useState("All");
  const [search, setSearch] = useState("");

  return (
    <PageLayout
      bodyStyle={"-mt-60 z-40 p-6 lg:pr-0 2xl:p-6"}
      banner={<MentorsBanner />}
    >
      {/* Search Bar Container */}
      <div className="flex justify-end mb-6">
        <SearchBar
          placeholder={"Search for Mentor"}
          search={search}
          setSearch={setSearch}
        ></SearchBar>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] 2xl:grid-cols-[320px_1fr] ">
        <Domain
          categories={categoriesOfMentors}
          setDomain={setDomain}
          domain={domain}
        />
        <main className="min-w-0 overflow-y-auto">
          <MentorsSection domain={domain} search={search} />
        </main>
      </div>
    </PageLayout>
  );
}

export default Mentors;
