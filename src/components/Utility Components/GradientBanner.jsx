import React, { useState, useEffect } from "react";

function GradientBanner({ children, cls = "", bannerLink }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState("");

  // Determine the image source
  const imageSrc = bannerLink || "/Hero_banner.jpg";

  useEffect(() => {
    // Preload the image
    const preloadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
      });
    };

    const loadImage = async () => {
      try {
        await preloadImage(imageSrc);
        setCurrentSrc(imageSrc);
        setImageLoaded(true);
      } catch (error) {
        console.error("Failed to preload banner image:", error);
        // Still set the image source even if preload fails
        setCurrentSrc(imageSrc);
        setImageLoaded(true);
      }
    };

    loadImage();
  }, [imageSrc]);

  return (
    <div className="relative">
      {/* Loading skeleton */}
      {!imageLoaded && (
        <div
          className={`w-full h-[500px] bg-gradient-to-r from-primary to-primary-highlight animate-pulse ${cls}`}
        />
      )}

      {/* Optimized image */}
      <img
        src={currentSrc}
        alt="banner img"
        className={`w-full h-[600px] z-20 object-cover transition-opacity duration-500 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        } ${cls}`}
        loading="eager" // Load immediately for hero images
        fetchPriority="high" // High priority loading
        decoding="async" // Async decoding for better performance
        onLoad={() => setImageLoaded(true)}
        onError={() => {
          console.error("Failed to load banner image");
          setImageLoaded(true); // Still show content even if image fails
        }}
      />

      {/* Content overlay */}
      <div
        className={`absolute inset-0 z-20 text-2xl h-full w-full text-white transition-opacity duration-300 ${
          imageLoaded ? "opacity-100" : "opacity-75"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default GradientBanner;
