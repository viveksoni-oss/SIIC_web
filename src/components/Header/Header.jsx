import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronDown, ChevronRight, Search } from "lucide-react";
import SepratorLine from "./../Utility Components/SepratorLine";
import { Link, useNavigate } from "react-router";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [nestedDropdownOpen, setNestedDropdownOpen] = useState(null);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const navigate = useNavigate();

  // Preload logo on component mount
  useEffect(() => {
    const preloadLogo = () => {
      const img = new Image();
      img.onload = () => setLogoLoaded(true);
      img.onerror = () => {
        console.error("Failed to preload header logo");
        setLogoLoaded(true); // Still proceed
      };
      img.src = "/logo_header.png";
    };

    preloadLogo();
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (item) => {
    setDropdownOpen(dropdownOpen === item ? null : item);
    setNestedDropdownOpen(null);
  };

  // Fixed underline variants - the issue was with the animation structure
  const underlineVariants = {
    initial: {
      scaleX: 0,
      originX: 0,
    },
    hover: {
      scaleX: 1,
      originX: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  // Dropdown variants
  const dropdownVariants = {
    closed: { opacity: 0, y: -10, transition: { duration: 0.2 } },
    open: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  // Navigation items (keeping your existing structure)
  const navItems = [
    {
      name: "What we Offer",
      hasDropdown: true,
      dropdownItems: [
        {
          heading: "Programs",
          linkAddress: "/programs",
        },
        {
          heading: "Facilities",
          linkAddress: "facilities",
          children: [
            { heading: "Lab", linkAddress: "lab" },
            { heading: "Office Space", linkAddress: "office" },
            {
              heading: "Branding",
              linkAddress: "branding",
            },
            {
              heading: "Manage Portfolio",
              linkAddress: "manage-portfolios",
            },
          ],
        },
        { heading: "Partners", linkAddress: "partners" },
        { heading: "Mentors", linkAddress: "mentors" },
        { heading: "Co-founder", linkAddress: "cofounders" },
        { heading: "Patents", linkAddress: "patent" },
      ],
    },
    {
      name: "Start ups",
      hasDropdown: false,
      linkAddress: "startups",
    },
    {
      name: "Join Us",
      hasDropdown: true,
      dropdownItems: [
        { heading: "As a Mentor", linkAddress: "mentor" },
        { heading: "As an Investor", linkAddress: "investor" },
        { heading: "Careers @ SIIC", linkAddress: "careers" },
      ],
    },
    {
      name: "News & Events",
      hasDropdown: true,
      dropdownItems: [
        { heading: "Upcoming Events", linkAddress: "upcoming-events" },
        { heading: "Flash News", linkAddress: "flash-news" },
      ],
    },
  ];

  // Animation variants
  const menuVariants = {
    closed: {
      x: "100%",
      transition: { type: "spring", stiffness: 400, damping: 40 },
    },
    open: {
      x: 0,
      transition: { type: "spring", stiffness: 400, damping: 40 },
    },
  };

  const backdropVariants = {
    closed: { opacity: 0, transition: { delay: 0.1, duration: 0.3 } },
    open: { opacity: 0.5, transition: { duration: 0.3 } },
  };

  const menuItemVariants = {
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
    open: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.1 } },
  };

  const containerVariants = {
    closed: { transition: { staggerChildren: 0.1, staggerDirection: -1 } },
    open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  // Handle dropdown item click
  const handleDropdownClick = (linkAddress) => {
    if (linkAddress) {
      navigate(linkAddress);
      setDropdownOpen(null);
      setNestedDropdownOpen(null);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Main Header */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="min-h-[70px] bg-[#f7f7f7] p-4 flex justify-between items-center relative"
      >
        {/* Optimized Logo */}
        <Link to="/">
          <div className="relative h-16 md:h-18 lg:h-20 flex items-center">
            {/* Loading skeleton */}
            {!logoLoaded && (
              <div className="w-24 h-16 md:w-28 md:h-18 lg:w-32 lg:h-20 bg-gray-200 animate-pulse rounded" />
            )}

            {/* Optimized logo image */}
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
              className={`h-16 md:h-18 lg:h-20 object-contain transition-opacity duration-300 ${
                logoLoaded ? "opacity-100" : "opacity-0"
              }`}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              onLoad={() => setLogoLoaded(true)}
              onError={() => {
                console.error("Failed to load header logo");
                setLogoLoaded(true);
              }}
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="hidden lg:flex items-center gap-6 xl:gap-9"
        >
          <div className="flex items-center gap-6 xl:gap-8 text-sm xl:text-base font-medium">
            {navItems.map((item, index) => (
              <div key={item.name} className="relative group">
                <motion.div
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                  className="relative"
                  onMouseEnter={() =>
                    item.hasDropdown && setDropdownOpen(item.name)
                  }
                  onMouseLeave={() => {
                    setDropdownOpen(null);
                    setNestedDropdownOpen(null);
                  }}
                >
                  {item.hasDropdown ? (
                    <motion.div
                      className="flex cursor-pointer items-center gap-1 py-2 transition-colors relative"
                      whileHover="hover"
                      initial="initial"
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          dropdownOpen === item.name ? "rotate-180" : ""
                        }`}
                      />
                      {/* Fixed underline animation */}
                      <motion.div
                        className="absolute bottom-0 left-0 h-1 rounded-full bg-[#ff8a40] w-full"
                        variants={underlineVariants}
                      />
                    </motion.div>
                  ) : (
                    <Link to={item.linkAddress} className="block">
                      <motion.div
                        className="flex cursor-pointer items-center gap-1 py-2 transition-colors relative"
                        whileHover="hover"
                        initial="initial"
                      >
                        <span>{item.name}</span>
                        {/* Fixed underline animation */}
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
                        className="absolute top-full left-0 w-48 bg-white rounded-lg shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] border border-gray-200 px-2 py-2 z-50"
                      >
                        {item.dropdownItems?.map((dropdownItem, idx) => (
                          <div
                            key={dropdownItem.heading}
                            className="relative"
                            onMouseEnter={() =>
                              dropdownItem.children &&
                              setNestedDropdownOpen(dropdownItem.heading)
                            }
                            onMouseLeave={() =>
                              !dropdownItem.children &&
                              setNestedDropdownOpen(null)
                            }
                          >
                            <motion.div
                              onClick={() =>
                                handleDropdownClick(dropdownItem.linkAddress)
                              }
                              whileHover={{
                                backgroundColor: "#fff5f0",
                                x: dropdownItem.children
                                  ? [0, 6, 4, 0]
                                  : [0, 4, 2, 0],
                                transition: {
                                  x: {
                                    duration: 0.35,
                                    times: [0, 0.4, 0.7, 1.0],
                                    ease: "easeInOut",
                                  },
                                  backgroundColor: { duration: 0.2 },
                                },
                              }}
                              className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:text-[#ff8a40] transition-colors cursor-pointer"
                            >
                              <span>{dropdownItem.heading}</span>
                              {dropdownItem.children && (
                                <motion.div
                                  animate={{
                                    x:
                                      nestedDropdownOpen ===
                                      dropdownItem.heading
                                        ? [0, 2, 0]
                                        : 0,
                                  }}
                                  transition={{ duration: 0.3 }}
                                  className="flex items-center"
                                >
                                  <ChevronRight className="w-4 h-4" />
                                  {nestedDropdownOpen ===
                                    dropdownItem.heading && (
                                    <motion.div
                                      initial={{ opacity: 0, x: -2 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      className="ml-1"
                                    ></motion.div>
                                  )}
                                </motion.div>
                              )}
                            </motion.div>

                            {/* Nested Dropdown */}
                            <AnimatePresence>
                              {dropdownItem.children &&
                                nestedDropdownOpen === dropdownItem.heading && (
                                  <motion.div
                                    initial={{ opacity: 0, x: -10, y: -10 }}
                                    animate={{ opacity: 1, x: 0, y: 0 }}
                                    exit={{ opacity: 0, x: -10, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute left-full top-0 ml-1 w-48 bg-white rounded-lg shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] border border-gray-200 py-2 z-60"
                                  >
                                    {dropdownItem.children.map((childItem) => (
                                      <motion.div
                                        key={childItem.heading}
                                        onClick={() =>
                                          handleDropdownClick(
                                            childItem.linkAddress
                                          )
                                        }
                                        whileHover={{
                                          backgroundColor: "#fff5f0",
                                          x: [0, 4, 2, 0],
                                          transition: {
                                            x: {
                                              duration: 0.35,
                                              times: [0, 0.4, 0.7, 1.0],
                                            },
                                            backgroundColor: { duration: 0.2 },
                                          },
                                        }}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:text-[#ff8a40] transition-colors cursor-pointer"
                                      >
                                        {childItem.heading}
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
            ))}
          </div>

          <div className="text-gray-400 mx-2 hidden xl:block">
            <SepratorLine />
          </div>

          {/* Desktop Search */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.3 }}
            className="relative hidden xl:block"
          >
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              placeholder="Search"
              className="px-3 py-2 pr-10 rounded-md border text-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff8a40] focus:border-transparent w-33 h-6"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </motion.div>
        </motion.nav>

        {/* Medium Screen Navigation - Apply same underline fix */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="hidden md:flex lg:hidden items-center gap-4"
        >
          <div className="flex items-center gap-4 text-sm font-medium">
            {navItems.map((item, index) => (
              <div key={item.name} className="relative group">
                <motion.div
                  className="relative"
                  onMouseEnter={() =>
                    item.hasDropdown && setDropdownOpen(item.name)
                  }
                  onMouseLeave={() => {
                    setDropdownOpen(null);
                    setNestedDropdownOpen(null);
                  }}
                >
                  {item.hasDropdown ? (
                    <motion.div
                      className="flex items-center gap-1 py-2 transition-colors relative cursor-pointer"
                      whileHover="hover"
                      initial="initial"
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-3 h-3 transition-transform duration-200 ${
                          dropdownOpen === item.name ? "rotate-180" : ""
                        }`}
                      />
                      <motion.div
                        className="absolute bottom-0 left-0 h-5 bg-[#ff8a40] w-full"
                        variants={underlineVariants}
                      />
                    </motion.div>
                  ) : (
                    <Link to={item.linkAddress} className="block">
                      <motion.div
                        className="flex items-center gap-1 py-2 transition-colors relative"
                        whileHover="hover"
                        initial="initial"
                      >
                        <span>{item.name}</span>
                        <motion.div
                          className="absolute bottom-0 left-0 h-0.5 bg-[#ff8a40] w-full"
                          variants={underlineVariants}
                        />
                      </motion.div>
                    </Link>
                  )}

                  {/* Dropdown Menu for MD screens - keeping your existing code */}
                  <AnimatePresence>
                    {item.hasDropdown && dropdownOpen === item.name && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="absolute top-full left-0 mt-2 w-44 bg-white rounded-lg shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] border border-gray-200 py-2 z-50"
                      >
                        {item.dropdownItems?.map((dropdownItem) => (
                          <motion.div
                            key={dropdownItem.heading}
                            onClick={() =>
                              handleDropdownClick(dropdownItem.linkAddress)
                            }
                            whileHover={{ backgroundColor: "#fff5f0", x: 4 }}
                            className="flex items-center justify-between px-3 py-2 text-xs text-gray-700 hover:text-[#ff8a40] transition-colors cursor-pointer"
                          >
                            <span>{dropdownItem.heading}</span>
                            {dropdownItem.children && (
                              <ChevronRight className="w-3 h-3" />
                            )}
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Search Icon for MD screens */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full hover:bg-gray-200 transition-colors"
          >
            <Search className="w-5 h-5 text-gray-700" />
          </motion.button>
        </motion.nav>

        {/* Animated Hamburger Button - keeping your existing code */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleMobileMenu}
          className="md:hidden relative p-2 rounded-full hover:bg-gray-200 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#ff8a40]"
          aria-label="Toggle mobile menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <motion.span
              animate={{
                rotate: isMobileMenuOpen ? 45 : 0,
                y: isMobileMenuOpen ? 6 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="block w-5 h-0.5 bg-gray-700 mb-1"
            />
            <motion.span
              animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
              transition={{ duration: 0.3 }}
              className="block w-5 h-0.5 bg-gray-700 mb-1"
            />
            <motion.span
              animate={{
                rotate: isMobileMenuOpen ? -45 : 0,
                y: isMobileMenuOpen ? -6 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="block w-5 h-0.5 bg-gray-700"
            />
          </div>
        </motion.button>
      </motion.div>

      {/* Mobile Menu - keeping all your existing mobile menu code */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              variants={backdropVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden fixed inset-0 bg-black z-40"
              onClick={toggleMobileMenu}
            />

            {/* Mobile Menu */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-50 shadow-xl"
            >
              {/* Mobile Menu Header */}
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="flex justify-between items-center p-4 border-b"
              >
                <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleMobileMenu}
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
                  <motion.div key={item.name} variants={menuItemVariants}>
                    <div
                      className="flex items-center justify-between py-3 text-gray-800 border-b border-gray-100 cursor-pointer"
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

                    {/* Mobile Dropdown */}
                    <AnimatePresence>
                      {item.hasDropdown && dropdownOpen === item.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pl-4 overflow-hidden"
                        >
                          {item.dropdownItems?.map((dropdownItem) => (
                            <motion.div
                              key={dropdownItem.heading}
                              onClick={() =>
                                handleDropdownClick(dropdownItem.linkAddress)
                              }
                              whileHover={{ x: 4 }}
                              className="flex items-center justify-between py-2 text-sm text-gray-600 hover:text-[#ff8a40] transition-colors cursor-pointer"
                            >
                              <span>{dropdownItem.heading}</span>
                              {dropdownItem.children && (
                                <ChevronRight className="w-3 h-3" />
                              )}
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
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
    </>
  );
}

export default Header;
