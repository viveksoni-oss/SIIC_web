// Header/HamburgerButton.jsx
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

function HamburgerButton({ isOpen, onClick }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="lg:hidden relative p-2 rounded-full hover:bg-gray-200 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#ff8a40]"
      aria-label="Toggle mobile menu"
    >
      <Menu />
    </motion.button>
  );
}

export default HamburgerButton;
