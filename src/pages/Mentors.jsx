import React from "react";
import MentorsBanner from "../components/banners/MentorsBanner";
import PageLayout from "../components/PageLayout";
import MentorsSection from "./../components/Mentors/MentorsCard";

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

  return (
    <PageLayout bodyStyle={"-mt-60 z-40 p-8"} banner={<MentorsBanner />}>
      <div className="mt-20 grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6">
        <aside className="border-2 border-secondary-gray/50 rounded-2xl h-fit py-6">
          <div className="px-3 mb-5 text-lg font-semibold text-[#1f1f1f]/80">
            Domain
          </div>
          <div className="flex gap-3 flex-wrap p-3">
            {categoriesOfMentors.map((category, index) => (
              <button
                key={index}
                className="py-1 px-2 bg-[#f1f1f1]/95 text-[#1f1f1f] text-xs rounded-full hover:bg-primary-highlight hover:text-white transition-colors "
              >
                {category}
              </button>
            ))}
          </div>
        </aside>

        <main className="min-w-0">
          <MentorsSection />
        </main>
      </div>
    </PageLayout>
  );
}

export default Mentors;
