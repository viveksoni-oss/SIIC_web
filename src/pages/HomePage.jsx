import React from "react";
import GradientBanner from "./../components/Utility Components/GradientBanner";
import PageLayout from "../components/PageLayout";
import HomeBanner from "./banners/HomeBanner";

function HomePage() {
  return (
    <PageLayout banner={<HomeBanner />}>
      <div className="text-4xl">vivek</div>
    </PageLayout>
  );
}

export default HomePage;
