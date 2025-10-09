import React, { useState } from "react";
import PageLayout from "./../components/PageLayout";
import StartupsBanner from "../components/banners/StartupBanner";
import StartupCard from "../components/Startups/StartupCard";
import HighlightedText from "./../components/Utility Components/HighlightedText";
import SearchBar from "./../components/Utility Components/SearchBar";

function Startups() {
  const [search, setSearch] = useState("");
  const details = { src: "/Startups/image-" };
  return (
    <PageLayout
      bodyStyle={"-mt-60 z-40 p-8 flex flex-col gap-16"}
      banner={<StartupsBanner />}
    >
      <div className="self-end">
        <SearchBar
          search={search}
          setSearch={setSearch}
          placeholder={"Search for our Startups"}
        />
      </div>
      <h1 className="text-5xl font-thin text-[#1f1f1f] ">
        <HighlightedText weight={800}>Our</HighlightedText> Startups
      </h1>
      <div className="grid grid-cols-5 h-[600px] overflow-y-auto gap-8 pt-6 justify-items-center">
        {Array.from({ length: 32 }, (_, idx) => {
          return (
            <StartupCard
              src={"Startups/startup-" + (idx % 8) + ".png"}
            ></StartupCard>
          );
        })}
      </div>
    </PageLayout>
  );
}

export default Startups;
