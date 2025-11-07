// Header/animations.js
export const underlineVariants = {
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
  active: {
    scaleX: 1,
    originX: 0,
  },
};

export const dropdownVariants = {
  closed: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    transition: { duration: 0.2 },
  },
  open: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export const menuVariants = {
  closed: {
    x: "100%",
    transition: { type: "spring", stiffness: 400, damping: 40 },
  },
  open: {
    x: 0,
    transition: { type: "spring", stiffness: 400, damping: 40 },
  },
};

export const backdropVariants = {
  closed: { opacity: 0, transition: { delay: 0.1, duration: 0.3 } },
  open: { opacity: 0.5, transition: { duration: 0.3 } },
};

export const menuItemVariants = {
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  open: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.1 } },
};

export const containerVariants = {
  closed: { transition: { staggerChildren: 0.1, staggerDirection: -1 } },
  open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
