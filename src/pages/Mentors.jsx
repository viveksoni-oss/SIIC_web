import React, { useState } from "react";
import MentorsBanner from "../components/banners/MentorsBanner";
import PageLayout from "../components/PageLayout";
import MentorsSection from "./../components/Mentors/MentorsCard";
import MentorDomain from "../components/Mentors/MentorDomain";

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
    "IDF / Digital Governance / Digital Marketing",
    "Manufacturing",
    "Oil & Gas",
    "SAAS",
    "Medical & Health technologies",
    "SDG",
    "Planning",
    "Product Management",
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
  const inputStyle =
    "px-4 py-2 bg-white min-w-80 border-primary rounded-lg text-base font-[500] focus:outline-none focus:ring-3 focus:ring-primary-highlight focus:ring-offset-0 transition-all duration-300 text-black z-60 border-1 border-primary-highlight";
  return (
    <PageLayout bodyStyle={"-mt-60 z-40 p-8"} banner={<MentorsBanner />}>
      <div>
        <input
          className={inputStyle}
          placeholder="Search mentor"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="mt-20 grid grid-cols-1 xl:grid-cols-[320px_1fr] gap-6">
        <MentorDomain
          categoriesOfMentors={categoriesOfMentors}
          setDomain={setDomain}
          domain={domain}
        ></MentorDomain>
        <main className="min-w-0">
          <MentorsSection domain={domain} search={search} />
        </main>
      </div>
    </PageLayout>
  );
}

export default Mentors;
