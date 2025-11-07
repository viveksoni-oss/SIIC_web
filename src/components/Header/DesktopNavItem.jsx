// Header/DesktopNavItem.jsx
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import { ChevronDown, ChevronRight } from "lucide-react";
import { underlineVariants, dropdownVariants } from "./animations";

function DesktopNavItem({
  item,
  index,
  isActive,
  dropdownOpen,
  nestedDropdownOpen,
  setDropdownOpen,
  setNestedDropdownOpen,
  handleDropdownClick,
}) {
  const handleMouseEnter = () => {
    if (item.hasDropdown) {
      setDropdownOpen(item.name);
    }
  };

  const handleMouseLeave = () => {
    setDropdownOpen(null);
    setNestedDropdownOpen(null);
  };

  return (
    <div
      className="relative group h-full flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
        className="relative h-full flex items-center"
      >
        {item.hasDropdown ? (
          <motion.div
            className="flex cursor-pointer items-center gap-1 py-2 transition-colors relative h-full"
            whileHover="hover"
            initial="initial"
          >
            <span>{item.name}</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                dropdownOpen === item.name ? "rotate-180" : ""
              }`}
            />
            <motion.div
              className="absolute bottom-0 left-0 h-1 rounded-full bg-[#ff8a40] w-full"
              variants={underlineVariants}
            />
          </motion.div>
        ) : (
          <Link to={item.linkAddress} className=" h-full flex items-center">
            <motion.div
              className="flex cursor-pointer items-center gap-1 py-2 transition-colors relative"
              whileHover="hover"
              initial="initial"
              animate={isActive ? "active" : "initial"}
            >
              <span>{item.name}</span>
              <motion.div
                className="absolute bottom-0 left-0 h-1 rounded-full bg-[#ff8a40] w-full"
                variants={underlineVariants}
              />
            </motion.div>
          </Link>
        )}

        {/* Main Dropdown Menu */}
        <AnimatePresence>
          {item.hasDropdown && dropdownOpen === item.name && (
            <motion.div
              variants={dropdownVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] border border-gray-200 px-2 py-2 z-50"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {item.dropdownItems?.map((dropdownItem) => (
                <div
                  key={dropdownItem.heading}
                  className="relative"
                  onMouseEnter={() =>
                    dropdownItem.children &&
                    setNestedDropdownOpen(dropdownItem.heading)
                  }
                  onMouseLeave={() =>
                    !dropdownItem.children && setNestedDropdownOpen(null)
                  }
                >
                  <motion.div
                    onClick={() =>
                      !dropdownItem.children &&
                      handleDropdownClick(dropdownItem.linkAddress)
                    }
                    whileHover={{
                      scale: 1.02,
                      backgroundColor: "#fff5f0",
                      transition: {
                        scale: { duration: 0.2 },
                        backgroundColor: { duration: 0.2 },
                      },
                    }}
                    className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:text-[#ff8a40] transition-colors cursor-pointer rounded-md"
                  >
                    <span className="font-medium">{dropdownItem.heading}</span>
                    {dropdownItem.children && (
                      <motion.div
                        animate={{
                          x:
                            nestedDropdownOpen === dropdownItem.heading ? 2 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </motion.div>
                    )}
                  </motion.div>

                  {/* Nested Dropdown */}
                  <AnimatePresence>
                    {dropdownItem.children &&
                      nestedDropdownOpen === dropdownItem.heading && (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-full top-0 ml-1 w-48 bg-white rounded-lg shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] border border-gray-200 py-2 z-60"
                          onMouseEnter={() =>
                            setNestedDropdownOpen(dropdownItem.heading)
                          }
                        >
                          {dropdownItem.children.map((childItem) => (
                            <motion.div
                              key={childItem.heading}
                              onClick={() =>
                                handleDropdownClick(childItem.linkAddress)
                              }
                              whileHover={{
                                scale: 1.02,
                                backgroundColor: "#fff5f0",
                                transition: {
                                  scale: { duration: 0.2 },
                                  backgroundColor: { duration: 0.2 },
                                },
                              }}
                              className="block px-4 py-2 text-sm text-gray-700 hover:text-[#ff8a40] transition-colors cursor-pointer rounded-md mx-2"
                            >
                              <span className="font-medium">
                                {childItem.heading}
                              </span>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default DesktopNavItem;
