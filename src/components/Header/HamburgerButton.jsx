// Header/HamburgerButton.jsx
import { motion } from "framer-motion";

function HamburgerButton({ isOpen, onClick }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="lg:hidden relative p-2 rounded-full hover:bg-gray-200 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#ff8a40]"
      aria-label="Toggle mobile menu"
    >
      <div className="w-6 h-6 flex flex-col justify-center items-center">
        <motion.span
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 6 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="block w-5 h-0.5 bg-gray-700 mb-1"
        />
        <motion.span
          animate={{ opacity: isOpen ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="block w-5 h-0.5 bg-gray-700 mb-1"
        />
        <motion.span
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? -6 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="block w-5 h-0.5 bg-gray-700"
        />
      </div>
    </motion.button>
  );
}

export default HamburgerButton;
