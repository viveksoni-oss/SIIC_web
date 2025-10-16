import React from "react";
import PageLayout from "../components/PageLayout";
import ManageProtfioliosBanner from "./../components/banners/ManageProtfioliosBanner";
import PortfolioManagerDescription from "../components/ManagePortfolios/PortfolioManagerDescription";
import CardArrow from "./../components/Utility Components/CardArrow";
import { teamData } from "../data/ManagePortfolios";
import ArrowBg from "./../components/Utility Components/ArrowBg";
import HighlightedText from "./../components/Utility Components/HighlightedText";

function ManagePortfolios() {
  return (
    <PageLayout banner={<ManageProtfioliosBanner />} bodyStyle={"-mt-60 p-8"}>
      <PortfolioManagerDescription></PortfolioManagerDescription>
      <h1 className="text-[40px] font-extralight text-[#1f1f1f] capitalize mb-6 ml-20 mt-8">
        People obsessed with your{" "}
        <HighlightedText weight={600}>Growth</HighlightedText>
      </h1>
      <div className="md:px-20 relative">
        <div className="min-h-screen mx-auto rounded-2xl border-1 border-black/20 p-8 pb-2 2xl:p-30 2xl:pb-12 space-y-15 sm:space-y-0 flex flex-wrap justify-center items-center sm:grid sm:grid-cols-1 sm:justify-items-center sm:gap-20 sm:gap-y-15 xl:grid-cols-2">
          {teamData.map((data, idx) => (
            <CardArrow key={idx} data={data}></CardArrow>
          ))}
        </div>
        {teamData.length % 2 == 1 && (
          <div className="absolute right-17 -bottom-4 xl:block  hidden overflow-hidden  rotate-180 ">
            <ArrowBg size={"200"} color={"#6c3231"}></ArrowBg>
          </div>
        )}
      </div>
    </PageLayout>
  );
}

export default ManagePortfolios;
