import React from "react";

function GradientBanner({ children }) {
  return (
    <div className="relative">
      <img src="/Hero_banner.jpg" alt="banner img" className="w-full h-auto " />

      {/* content will go here */}
      <div className="absolute inset-0 z-40 text-2xl h-full w-full text-white">
        {children}
      </div>
    </div>
  );
}

export default GradientBanner;
