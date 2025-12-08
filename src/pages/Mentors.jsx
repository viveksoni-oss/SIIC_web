import React, { useState } from "react";
import MentorsBanner from "../components/banners/MentorsBanner";
import PageLayout from "../components/PageLayout";
import MentorsSection from "./../components/Mentors/MentorsCard";
import Domain from "../components/Utility Components/Domain";
import SearchBar from "./../components/Utility Components/SearchBar";
import BannerTemplate from "@/components/banners/BannerTemplate";

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
      // banner={<MentorsBanner />}
      banner={
        <BannerTemplate
          heading="Mentors Shaping Tomorrow’s "
          highlightedText="Innovators"
          maxWidth="700"
          description={
            <>
              SIIC mentors help accelerate ideas into meaningful <br />{" "}
              high-growth ventures.
            </>
          }
        ></BannerTemplate>
      }
    >
      {/* Search Bar Container */}
      <div className="flex justify-end mb-6 mr-4">
        <SearchBar
          placeholder={"Search for Mentor"}
          search={search}
          setSearch={setSearch}
        ></SearchBar>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 gap-10 sm:gap-0 lg:grid-cols-[320px_1fr] xl:grid-cols-[280px_1fr] 2xl:grid-cols-[320px_1fr] ">
        <Domain
          categories={categoriesOfMentors}
          setDomain={setDomain}
          domain={domain}
        />
        <main className="  sm:overflow-y-auto">
          <MentorsSection domain={domain} search={search} />
        </main>
      </div>
    </PageLayout>
  );
}

export default Mentors;
