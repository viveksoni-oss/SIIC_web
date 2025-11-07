// Header/MobileNavigation.jsx
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import MobileNavItem from "./MobileNavItem";
import {
  menuVariants,
  backdropVariants,
  containerVariants,
  menuItemVariants,
} from "./animations";

function MobileNavigation({
  isOpen,
  toggleMenu,
  navItems,
  dropdownOpen,
  mobileNestedOpen,
  toggleDropdown,
  toggleMobileNested,
  handleDropdownClick,
  isActiveLink,
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="lg:hidden fixed inset-0 bg-black z-40"
            onClick={toggleMenu}
          />

          {/* Mobile Menu */}
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-50 shadow-xl overflow-y-auto"
          >
            {/* Mobile Menu Header */}
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="flex justify-between items-center p-4 border-b sticky top-0 bg-white z-10"
            >
              <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleMenu}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close mobile menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>
            </motion.div>

            {/* Mobile Menu Items */}
            <motion.nav
              variants={containerVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col p-4"
            >
              {navItems.map((item) => (
                <MobileNavItem
                  key={item.name}
                  item={item}
                  dropdownOpen={dropdownOpen}
                  mobileNestedOpen={mobileNestedOpen}
                  toggleDropdown={toggleDropdown}
                  toggleMobileNested={toggleMobileNested}
                  handleDropdownClick={handleDropdownClick}
                  isActiveLink={isActiveLink}
                />
              ))}

              {/* Mobile Search */}
              <motion.div
                variants={menuItemVariants}
                className="mt-4 pt-4 border-t border-gray-200"
              >
                <label
                  htmlFor="mobile-search"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Search
                </label>
                <div className="relative">
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    id="mobile-search"
                    type="text"
                    placeholder="Search..."
                    className="w-full px-4 py-2 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff8a40] focus:border-transparent"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </motion.div>
            </motion.nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default MobileNavigation;
