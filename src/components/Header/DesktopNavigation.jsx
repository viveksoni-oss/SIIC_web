// Header/DesktopNavigation.jsx
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import DesktopNavItem from "./DesktopNavItem";
import SepratorLine from "./../Utility Components/SepratorLine";
import IncubateButton from "../Utility Components/IncubateButton";

function DesktopNavigation({
  navItems,
  isHomePage,
  dropdownOpen,
  nestedDropdownOpen,
  setDropdownOpen,
  setNestedDropdownOpen,
  handleDropdownClick,
  isActiveLink,
}) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="hidden lg:flex items-stretch gap-6 xl:gap-9 h-full"
    >
      <div className="flex items-stretch gap-6 xl:gap-8 text-sm xl:text-base font-medium h-full">
        {navItems.map((item, index) => {
          if (isHomePage && item.name === "Home") {
            return null;
          }

          const isActive = !item.hasDropdown && isActiveLink(item.linkAddress);

          return (
            <DesktopNavItem
              key={item.name}
              item={item}
              index={index}
              isActive={isActive}
              dropdownOpen={dropdownOpen}
              nestedDropdownOpen={nestedDropdownOpen}
              setDropdownOpen={setDropdownOpen}
              setNestedDropdownOpen={setNestedDropdownOpen}
              handleDropdownClick={handleDropdownClick}
            />
          );
        })}
      </div>

      <div className="text-gray-400 mx-2 hidden xl:flex items-center">
        <SepratorLine />
      </div>

      {/* Desktop Search */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.3 }}
        className="relative hidden xl:flex items-center"
      >
        {isHomePage ? (
          <>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              placeholder="Search"
              className="px-3 py-2 pr-10 rounded-md border text-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff8a40] focus:border-transparent w-33 h-6"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </>
        ) : (
          <IncubateButton />
        )}
      </motion.div>
    </motion.nav>
  );
}

export default DesktopNavigation;
