import React, { useState } from "react";
import PageLayout from "../components/PageLayout";

import PartnerBanner from "../components/banners/PartnerBanner";
import SearchBar from "./../components/Utility Components/SearchBar";
import HighlightedText from "./../components/Utility Components/HighlightedText";
import { PartnersData } from "./../data/PartnersData";

function PartnerLogos({ imgLink, title }) {
  return (
    <div className="h-60 w-60 border border-black/20 rounded-2xl flex justify-center items-center">
      <img src={`${imgLink}.png`} alt={`${title}`} />
    </div>
  );
}
function Partners() {
  const [search, setSearch] = useState("");
  const SearchedData = PartnersData.filter((data) =>
    data.name.toLowerCase().includes(search.trim().toLowerCase())
  );
  return (
    <PageLayout bodyStyle={"-mt-60 z-40 p-8"} banner={<PartnerBanner />}>
      <div className="p-18 flex flex-col gap-10 z-40">
        <SearchBar
          search={search}
          setSearch={setSearch}
          placeholder={"Search for Partner"}
        ></SearchBar>

        <h1 className="text-5xl font-thin ">
          <HighlightedText size={"48px"} weight={600}>
            Our
          </HighlightedText>{" "}
          Partners
        </h1>
        <div className="overflow-y-scroll max-h-[600px] w-full p-10 items-center justify-center flex gap-10 flex-wrap">
          {SearchedData.length > 0 ? (
            SearchedData.map((partner) => {
              return (
                <PartnerLogos imgLink={partner.img} title={partner.name} />
              );
            })
          ) : (
            <div>Result not found</div>
          )}
        </div>
      </div>
    </PageLayout>
  );
}

export default Partners;
