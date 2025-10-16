import React, { useEffect, useRef, useState } from "react";
import PageLayout from "../components/PageLayout";
import PartnerBanner from "../components/banners/PartnerBanner";
import SearchBar from "./../components/Utility Components/SearchBar";
import HighlightedText from "./../components/Utility Components/HighlightedText";
import { PartnersData } from "./../data/PartnersData";

function PartnerLogos({ imgLink, title }) {
  return (
    <div className="h-60 w-60 border border-black/20 rounded-2xl overflow-hidden flex justify-center items-center">
      <img src={`${imgLink}.png`} alt={`${title}`} />
    </div>
  );
}
function Partners() {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(PartnersData);

  useEffect(() => {
    const result = PartnersData.filter((data) =>
      data.name.toLowerCase().includes(search.trim().toLowerCase())
    );
    const timeout = setTimeout(() => {
      setFilteredData(result);
    }, 200); // 1 second debounce

    return () => clearTimeout(timeout); // Clean up previous timeout
  }, [search]);
  return (
    <PageLayout bodyStyle={"-mt-60 z-40 "} banner={<PartnerBanner />}>
      <div className="p-16 pr-8 flex flex-col gap-10 z-40">
        <div className="flex justify-end mr-2">
          <SearchBar
            search={search}
            setSearch={setSearch}
            placeholder={"Search for Partner"}
          ></SearchBar>
        </div>

        <h1 className="text-5xl font-thin ">
          <HighlightedText size={"48px"} weight={600}>
            Our
          </HighlightedText>{" "}
          Partners
        </h1>
        <div className="overflow-y-auto  h-[600px] w-full  items-center justify-start flex gap-10 flex-wrap">
          {filteredData.length > 0 ? (
            filteredData.map((partner, idx) => {
              return (
                <PartnerLogos
                  key={partner.id + idx}
                  imgLink={partner.img}
                  title={partner.name}
                />
              );
            })
          ) : (
            <div className="w-full flex justify-center items-start">
              <div className="font-extrabold text-gray-500/20 text-3xl">
                We don't have {`"${search}"`} as Partner
              </div>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
}

export default Partners;
