import React, { useState, useEffect } from "react";
import PageLayout from "./../components/PageLayout";
import StartupsBanner from "../components/banners/StartupBanner";
import StartupCard from "../components/Startups/StartupCard";
import HighlightedText from "./../components/Utility Components/HighlightedText";
import SearchBar from "./../components/Utility Components/SearchBar";
import { startupData } from "./../data/StartupData";

import { fetchStartupsFromSheet } from "@/Util/fetchStartupsFromSheet.js";

function Startups() {
  const [search, setSearch] = useState("");
  const [mergedData, setMergedData] = useState(startupData);

  useEffect(() => {
    async function load() {
      try {
        const rows = await fetchStartupsFromSheet();
        console.log(rows)
        // Merge by index: row 0 -> startupData[0], etc.
        const updated = startupData.map((startup, index) => {
          const row = rows[index];
          if (!row) return startup;

          return {
            ...startup,
            title: row.title || startup.title,
            shortDescription: row.shortDescription || startup.shortDescription,
          };
        });

        setMergedData(updated);
      } catch (e) {
        console.error("Error loading startups from sheet:", e);
        setMergedData(startupData); // fallback
      }
    }

    load();
  }, []);

  const filteredData = mergedData.filter(
    (startup) =>
      startup.title.toLowerCase().includes(search.toLowerCase()) ||
      (startup.shortDescription &&
        startup.shortDescription.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <PageLayout bodyStyle={"-mt-60 z-40 p-16"} banner={<StartupsBanner />}>
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
          <div className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-6 p-8 xl:justify-items-start justify-items-center grid-cols-1 2xl:grid-cols-5 h-[600px] overflow-y-auto 2xl:gap-12 2xl:gap-y-15 pt-6 2xl:justify-items-center ">
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
