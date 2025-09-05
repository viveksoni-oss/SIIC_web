import React from "react";

function GradientBanner({
  heading = "We incubate your innovations",
  description = "From crazy concepts to real impact — we’re with you at every step of the startup journey.",
}) {
  return (
    <div className="relative">
      <img src="/Hero_banner.jpg" alt="banner img" className="w-full h-auto" />

      {/* content will go here */}
      <div className="absolute inset-0 text-2xl h-full w-full text-white">
        <h1>{heading}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default GradientBanner;
