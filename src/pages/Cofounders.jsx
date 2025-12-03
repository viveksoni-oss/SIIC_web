import React, { useEffect, useState } from "react";
import PageLayout from "../components/PageLayout";
import { X } from "lucide-react";
import CofounderBanner from "./../components/banners/CofounderBanner";
import CofounderSection from "../components/Cofounder/CofounderCard";
import Domain from "../components/Utility Components/Domain";
import SearchBar from "./../components/Utility Components/SearchBar";
function Cofounders() {
  const categoriesOfCofounders = [
    "All",
    "AI/ML",
    "Cleantech",
    "Biotech",
    "Defence & Aerospace",
    "Foodtech",
    "IOT/Electronics",
    "Broadcasting",
  ];

  const [domain, setDomain] = useState("All");
  const [search, setSearch] = useState("");
  const inputStyle =
    "px-4 py-2 bg-white w-full sm:w-80 border-primary rounded-lg text-base font-[500] focus:outline-none focus:ring-2 focus:ring-primary-highlight transition-all duration-300 text-black border border-primary-highlight";

  return (
    <PageLayout
      bodyStyle={"-mt-60 z-40 p-8"}
      banner={
        <BannerTemplate
          heading="Co-founders to Ach"
          highlightedText=""
          headingSuffix=""
          description=""
        />
      }
    >
      {/* Search Bar Container */}
      <SearchBar
        search={search}
        setSearch={setSearch}
        placeholder={"Search for Co-Founder"}
      ></SearchBar>
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-[320px_1fr] gap-6">
        <Domain
          categories={categoriesOfCofounders}
          setDomain={setDomain}
          domain={domain}
        />
        <main className="min-w-0">
          <CofounderSection domain={domain} search={search} />
        </main>
      </div>
    </PageLayout>
  );
}

export default Cofounders;
