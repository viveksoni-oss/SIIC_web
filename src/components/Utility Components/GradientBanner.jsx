import React from "react";

function GradientBanner({ children, cls = "", bannerLink }) {
  return (
    <div className="relative">
      <img
        src={bannerLink ? bannerLink : "/Hero_banner.jpg"}
        alt="banner img"
        className={`w-full h-[600px] z-20 ${cls}`}
      />

      {/* content will go here */}
      <div className="absolute inset-0 z-40 text-2xl h-full w-full text-white">
        {children}
      </div>
    </div>
  );
}

export default GradientBanner;
