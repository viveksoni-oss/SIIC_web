// Header/MobileNavItem.jsx
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { menuItemVariants } from "./animations";

const isExternalLink = (url = "") => /^https?:\/\//i.test(url);

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

  const isTopActive = !item.hasDropdown && isActiveLink(item.linkAddress);
  const isTopExternal = !item.hasDropdown && isExternalLink(item.linkAddress);

  return (
    <motion.div variants={menuItemVariants}>
      {/* Top-level item */}
      {item.hasDropdown ? (
        <div
          className={`flex items-center justify-between py-3 text-gray-800 border-b border-gray-100 cursor-pointer ${
            isTopActive ? "text-[#ff8a40] font-semibold" : ""
          }`}
          onClick={() => toggleDropdown(item.name)}
        >
          <span className="hover:text-[#ff8a40] transition-colors">
            {item.name}
          </span>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              dropdownOpen === item.name ? "rotate-180" : ""
            }`}
          />
        </div>
      ) : isTopExternal ? (
        <a
          href={item.linkAddress}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-between py-3 text-gray-800 border-b border-gray-100 cursor-pointer ${
            isTopActive ? "text-[#ff8a40] font-semibold" : ""
          }`}
        >
          <span className="hover:text-[#ff8a40] transition-colors">
            {item.name}
          </span>
        </a>
      ) : (
        <div
          className={`flex items-center justify-between py-3 text-gray-800 border-b border-gray-100 cursor-pointer ${
            isTopActive ? "text-[#ff8a40] font-semibold" : ""
          }`}
          onClick={() => handleDropdownClick(item.linkAddress)}
        >
          <span className="hover:text-[#ff8a40] transition-colors">
            {item.name}
          </span>
        </div>
      )}

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
              const isDropdownExternal = isExternalLink(
                dropdownItem.linkAddress
              );

              return (
                <div key={dropdownItem.heading}>
                  {/* Dropdown item row */}
                  {dropdownItem.children ? (
                    <motion.div
                      onClick={() => toggleMobileNested(dropdownItem.heading)}
                      whileHover={{ x: 4 }}
                      className={`flex items-center justify-between py-2 text-sm text-gray-600 hover:text-[#ff8a40] transition-colors cursor-pointer ${
                        isDropdownActive ? "text-[#ff8a40] font-semibold" : ""
                      }`}
                    >
                      <span>{dropdownItem.heading}</span>
                      <ChevronDown
                        className={`w-3 h-3 transition-transform duration-200 ${
                          mobileNestedOpen === dropdownItem.heading
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </motion.div>
                  ) : isDropdownExternal ? (
                    <motion.a
                      href={dropdownItem.linkAddress}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 4 }}
                      className={`flex items-center justify-between py-2 text-sm text-gray-600 hover:text-[#ff8a40] transition-colors cursor-pointer ${
                        isDropdownActive ? "text-[#ff8a40] font-semibold" : ""
                      }`}
                    >
                      <span>{dropdownItem.heading}</span>
                    </motion.a>
                  ) : (
                    <motion.div
                      onClick={() =>
                        handleDropdownClick(dropdownItem.linkAddress)
                      }
                      whileHover={{ x: 4 }}
                      className={`flex items-center justify-between py-2 text-sm text-gray-600 hover:text-[#ff8a40] transition-colors cursor-pointer ${
                        isDropdownActive ? "text-[#ff8a40] font-semibold" : ""
                      }`}
                    >
                      <span>{dropdownItem.heading}</span>
                    </motion.div>
                  )}

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
                            const isChildExternal = isExternalLink(
                              childItem.linkAddress
                            );

                            return isChildExternal ? (
                              <motion.a
                                key={childItem.heading}
                                href={childItem.linkAddress}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ x: 4 }}
                                className={`py-2 text-xs text-gray-500 hover:text-[#ff8a40] transition-colors cursor-pointer ${
                                  isChildActive
                                    ? "text-[#ff8a40] font-semibold"
                                    : ""
                                }`}
                              >
                                {childItem.heading}
                              </motion.a>
                            ) : (
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
