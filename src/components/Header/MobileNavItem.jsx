// Header/MobileNavItem.jsx
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { menuItemVariants } from "./animations";

function MobileNavItem({
  item,
  dropdownOpen,
  mobileNestedOpen,
  toggleDropdown,
  toggleMobileNested,
  handleDropdownClick,
  isActiveLink,
}) {
  if (item.name === "Home") {
    return null;
  }

  const isActive = !item.hasDropdown && isActiveLink(item.linkAddress);

  return (
    <motion.div variants={menuItemVariants}>
      <div
        className={`flex items-center justify-between py-3 text-gray-800 border-b border-gray-100 cursor-pointer ${
          isActive ? "text-[#ff8a40] font-semibold" : ""
        }`}
        onClick={() => {
          if (item.hasDropdown) {
            toggleDropdown(item.name);
          } else {
            handleDropdownClick(item.linkAddress);
          }
        }}
      >
        <span className="hover:text-[#ff8a40] transition-colors">
          {item.name}
        </span>
        {item.hasDropdown && (
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              dropdownOpen === item.name ? "rotate-180" : ""
            }`}
          />
        )}
      </div>

      {/* Mobile Dropdown with Nested Support */}
      <AnimatePresence>
        {item.hasDropdown && dropdownOpen === item.name && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="pl-4 overflow-hidden"
          >
            {item.dropdownItems?.map((dropdownItem) => {
              const isDropdownActive = isActiveLink(dropdownItem.linkAddress);

              return (
                <div key={dropdownItem.heading}>
                  <motion.div
                    onClick={() => {
                      if (dropdownItem.children) {
                        toggleMobileNested(dropdownItem.heading);
                      } else {
                        handleDropdownClick(dropdownItem.linkAddress);
                      }
                    }}
                    whileHover={{ x: 4 }}
                    className={`flex items-center justify-between py-2 text-sm text-gray-600 hover:text-[#ff8a40] transition-colors cursor-pointer ${
                      isDropdownActive ? "text-[#ff8a40] font-semibold" : ""
                    }`}
                  >
                    <span>{dropdownItem.heading}</span>
                    {dropdownItem.children && (
                      <ChevronDown
                        className={`w-3 h-3 transition-transform duration-200 ${
                          mobileNestedOpen === dropdownItem.heading
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    )}
                  </motion.div>

                  {/* Nested Children in Mobile */}
                  <AnimatePresence>
                    {dropdownItem.children &&
                      mobileNestedOpen === dropdownItem.heading && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pl-4 overflow-hidden"
                        >
                          {dropdownItem.children.map((childItem) => {
                            const isChildActive = isActiveLink(
                              childItem.linkAddress
                            );

                            return (
                              <motion.div
                                key={childItem.heading}
                                onClick={() =>
                                  handleDropdownClick(childItem.linkAddress)
                                }
                                whileHover={{ x: 4 }}
                                className={`py-2 text-xs text-gray-500 hover:text-[#ff8a40] transition-colors cursor-pointer ${
                                  isChildActive
                                    ? "text-[#ff8a40] font-semibold"
                                    : ""
                                }`}
                              >
                                {childItem.heading}
                              </motion.div>
                            );
                          })}
                        </motion.div>
                      )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default MobileNavItem;
