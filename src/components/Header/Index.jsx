// Header/index.jsx
import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { navItems } from "./HeaderItems";
import { checkActiveLink, preloadImage } from "./utils";
import Logo from "./Logo";
import HamburgerButton from "./HamburgerButton";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";
import SIICLogo from "@/assets/Logos/logo_header.png";
function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [nestedDropdownOpen, setNestedDropdownOpen] = useState(null);
  const [mobileNestedOpen, setMobileNestedOpen] = useState(null);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Preload logo on component mount
  useEffect(() => {
    preloadImage(
      SIICLogo,
      () => setLogoLoaded(true),
      () => {
        console.error("Failed to preload header logo");
        setLogoLoaded(true);
      }
    );
  }, []);

  const isHomePage = location.pathname === "/";

  // Memoized callbacks
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
    setDropdownOpen(null);
    setMobileNestedOpen(null);
  }, []);

  const toggleDropdown = useCallback((item) => {
    setDropdownOpen((prev) => (prev === item ? null : item));
    setNestedDropdownOpen(null);
  }, []);

  const toggleMobileNested = useCallback((item) => {
    setMobileNestedOpen((prev) => (prev === item ? null : item));
  }, []);

  const isActiveLink = useCallback(
    (linkAddress) => checkActiveLink(location.pathname, linkAddress),
    [location.pathname]
  );

  const handleDropdownClick = useCallback(
    (linkAddress, isExternal = false) => {
      if (isExternal) {
        window.open(linkAddress, "_blank"); // Open external link in new tab
      } else {
        navigate(linkAddress); // Internal link using react-router
      }
      setDropdownOpen(null);
      setNestedDropdownOpen(null);
      setMobileNestedOpen(null);
      setIsMobileMenuOpen(false);
    },
    [navigate]
  );

  return (
    <>
      {/* Main Header */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="max-h-[100px] bg-[#f7f7f7] p-4 lg:-ml-10 shadow-md flex justify-between items-center relative z-50"
      >
        <Logo
          logoLoaded={logoLoaded}
          onLogoLoad={() => setLogoLoaded(true)}
          onLogoError={() => {
            console.error("Failed to load header logo");
            setLogoLoaded(true);
          }}
        />

        <DesktopNavigation
          navItems={navItems}
          isHomePage={isHomePage}
          dropdownOpen={dropdownOpen}
          nestedDropdownOpen={nestedDropdownOpen}
          setDropdownOpen={setDropdownOpen}
          setNestedDropdownOpen={setNestedDropdownOpen}
          handleDropdownClick={handleDropdownClick}
          isActiveLink={isActiveLink}
        />

        <HamburgerButton isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
      </motion.div>

      <MobileNavigation
        isOpen={isMobileMenuOpen}
        toggleMenu={toggleMobileMenu}
        navItems={navItems}
        dropdownOpen={dropdownOpen}
        mobileNestedOpen={mobileNestedOpen}
        toggleDropdown={toggleDropdown}
        toggleMobileNested={toggleMobileNested}
        handleDropdownClick={handleDropdownClick}
        isActiveLink={isActiveLink}
      />
    </>
  );
}

export default Header;
