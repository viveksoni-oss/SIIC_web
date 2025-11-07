// Header/Logo.jsx
import { motion } from "framer-motion";
import { Link } from "react-router";

function Logo({ logoLoaded, onLogoLoad, onLogoError }) {
  return (
    <Link to="/" aria-label="Go to home page">
      <div className="relative h-16 md:h-18 lg:h-20 flex items-center">
        {!logoLoaded && (
          <div className="w-24 h-16 md:w-28 md:h-18 lg:w-32 lg:h-20 bg-gray-200 animate-pulse rounded" />
        )}

        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: logoLoaded ? 1 : 0,
            scale: logoLoaded ? 1 : 0.8,
          }}
          transition={{
            duration: logoLoaded ? 0.5 : 0,
            delay: logoLoaded ? 0.2 : 0,
          }}
          src="/logo_header.png"
          alt="SIIC IITK logo"
          className={`h-16 md:h-18 lg:h-[70px] lg:w-[320px] object-contain transition-opacity duration-300 ${
            logoLoaded ? "opacity-100" : "opacity-0"
          }`}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          onLoad={onLogoLoad}
          onError={onLogoError}
        />
      </div>
    </Link>
  );
}

export default Logo;
