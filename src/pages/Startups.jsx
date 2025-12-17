import React, { useState } from "react";
import PageLayout from "./../components/PageLayout";
import StartupsBanner from "../components/banners/StartupBanner";
import StartupCard from "../components/Startups/StartupCard";
import HighlightedText from "./../components/Utility Components/HighlightedText";
import SearchBar from "./../components/Utility Components/SearchBar";
import { startupData } from "./../data/StartupData";
import BannerTemplate from "@/components/banners/BannerTemplate";

function Startups() {
  const [search, setSearch] = useState("");

  // Filter by title/description/etc
  const filteredData = startupData.filter(
    (startup) =>
      startup.title.toLowerCase().includes(search.toLowerCase()) ||
      (startup.shortDescription &&
        startup.shortDescription.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <PageLayout bodyStyle={"-mt-60 z-40 p-16  "} banner={<BannerTemplate heading="Startup" highlightedText="We" headingSuffix="incubated"
     description="Showcasing startups nurtured at SIIC, now thriving across diverse industries." />}>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-10 md:flex-row justify-between">
          <h1 className="text-5xl font-thin order-2 md:order-none text-[#1f1f1f] ">
            <HighlightedText weight={800}>Our</HighlightedText> Startups
          </h1>
          <SearchBar
            search={search}
            setSearch={setSearch}
            placeholder={"Search for our Startups"}
          />
        </div>

        <div>
          <div className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-6 p-8 xl:justify-items-start justify-items-center grid-cols-1 2xl:grid-cols-5 h-[600px] overflow-y-auto 2xl:gap-8 pt-6 2xl:justify-items-center ">
            {filteredData.map((startup) => (
              <StartupCard key={startup.id} data={startup} />
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Startups;
