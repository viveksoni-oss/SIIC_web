import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SepratorLine from "./../Utility Components/SepratorLine";
import { Link } from "react-router";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Animation variants
  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const backdropVariants = {
    closed: {
      opacity: 0,
      transition: {
        delay: 0.1,
        duration: 0.3,
      },
    },
    open: {
      opacity: 0.5,
      transition: {
        duration: 0.3,
      },
    },
  };

  const menuItemVariants = {
    closed: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.1,
      },
    },
  };

  const containerVariants = {
    closed: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
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
        {/* Logo with entrance animation */}
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          src="/logo_header.png"
          alt="SIIC IITK logo"
          className="h-16 md:h-18 lg:h-20 "
        />

        {/* Desktop Navigation with staggered animation */}
        <motion.nav
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="hidden md:flex lg:flex items-center gap-6 xl:gap-9"
        >
          <div className="flex items-center gap-6 xl:gap-8 text-sm xl:text-base font-medium">
            {["What we Offer", "Start ups", "Join Us", "News & Events"].map(
              (item, index) => (
                <Link
                  key={item}
                  to={`/${item}`}
                  whileHover={{ scale: 1.05, color: "#2563eb" }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                  className="hover:text-blue-600 transition-colors"
                >
                  {item}
                </Link>
              )
            )}
          </div>

          <div className="text-gray-400 mx-2 hidden xl:block">
            <SepratorLine></SepratorLine>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.3 }}
            className="relative  hidden xl:block"
          >
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              placeholder="Search"
              className="px-3 py-2 pr-10 rounded-md border text-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-33 h-6"
            />
            <svg
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </motion.div>
        </motion.nav>

        {/* Tablet Navigation
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="hidden md:flex lg:hidden items-center gap-4"
        >
          <div className="flex items-center gap-4 text-sm font-medium">
            {["Offers", "Startups", "Join", "News"].map((item, index) => (
              <Link
                key={item}
                to="/Offers"
                whileHover={{ scale: 1.05, color: "#2563eb" }}
                whileTap={{ scale: 0.95 }}
                className="hover:text-blue-600 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </motion.nav> */}

        {/* Animated Hamburger Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleMobileMenu}
          className="md:hidden relative p-2 rounded-full hover:bg-gray-200 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Toggle mobile menu"
        >
          {/* Animated Hamburger Lines */}
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
              animate={{
                opacity: isMobileMenuOpen ? 0 : 1,
              }}
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

      {/* Mobile Menu with AnimatePresence for exit animations */}
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

              {/* Mobile Menu Items with staggered animation */}
              <motion.nav
                variants={containerVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="flex flex-col p-4"
              >
                {["What we Offer", "Start ups", "Join Us", "News & Events"].map(
                  (item, index) => (
                    <motion.a
                      key={item}
                      variants={menuItemVariants}
                      whileHover={{ x: 10, color: "#2563eb" }}
                      whileTap={{ scale: 0.95 }}
                      href="#"
                      className="py-3 text-gray-800 hover:text-blue-600 border-b border-gray-100 transition-colors"
                    >
                      {item}
                    </motion.a>
                  )
                )}

                {/* Mobile Search with animation */}
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
                      className="w-full px-4 py-2 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <svg
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
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
