import React from "react";
import GradientBanner from "./Utility Components/GradientBanner";
import { Outlet } from "react-router";

function PageLayout({ children }) {
  return (
    <div className=" min-h-screen relative">
      <GradientBanner heading="vivek"></GradientBanner>
      <div className="min-h-screen bg-white -translate-y-32 rounded-[30px]">
        {children}
      </div>
    </div>
  );
}

export default PageLayout;
