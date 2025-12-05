import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import AnimatedButton from "../../Utility Components/AnimatedButton";
import AnimatedLogo from "../../LogoAnimation/Logo";
import HighlightedText from "../../Utility Components/HighlightedText";
import useIsMobile from "@/Hooks/useIsMobile";

// Extract animation variants for cleaner code
const containerVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.4 },
  },
};

const descriptionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.6 },
  },
};

const ctaVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.8 },
  },
};

const buttonHoverEffect = {
  scale: 1.05,
  transition: { duration: 0.3 },
};

function ContentSection({ isHovered, setIsHovered }) {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const handleProgramsClick = () => navigate("/programs");

  return (
    <motion.div
      className="-mt-9 text-justify flex min-h-[400px] max-w-full flex-col gap-3 p-6 pt-16 sm:max-w-3xl sm:min-h-[450px] sm:gap-4 sm:px-10 sm:pt-20 md:h-[500px] md:max-w-full md:px-16 md:pt-15 lg:px-12 xl:max-w-xl 2xl:max-w-2xl 2xl:px-20 2xl:pt-24"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {isMobile ? (
        <div className="-ml-1 mt-10 h-[6px] w-[80px] bg-white" />
      ) : (
        <AnimatedLogo setIsHovered={setIsHovered} isHovered={isHovered} />
      )}

      <div>
        <motion.h1
          className="w-full text-5xl text-left font-medium capitalize leading-tight sm:text-5xl md:text-5xl lg:text-6xl 2xl:text-6xl"
          variants={headingVariants}
        >
          We incubate <HighlightedText>your</HighlightedText> innovations
        </motion.h1>

        <motion.p
          className="mt-2 py-2 text-sm font-normal sm:mt-2.5 sm:py-4 sm:text-base"
          variants={descriptionVariants}
        >
          From bold ideas to real-world impact, we’re here to support you at
          every stage.
        </motion.p>
      </div>

      <motion.div
        className="mt-3 flex justify-start gap-4 text-sm font-semibold sm:mt-5 sm:gap-6 sm:text-base md:gap-8 lg:gap-11"
        variants={ctaVariants}
      >
        <motion.button
          whileHover={buttonHoverEffect}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center"
          aria-label="Incubate with SIIC"
        >
          <span className="flex max-h-[46px] items-center justify-center rounded-full border-2 border-white px-[12px] py-[10px] transition-colors hover:bg-white hover:text-primary sm:px-[30px] sm:py-[14px]">
            Incubate with us
          </span>
        </motion.button>

        <motion.div
          onClick={handleProgramsClick}
          whileHover={buttonHoverEffect}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center"
        >
          <AnimatedButton>Active programs</AnimatedButton>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default ContentSection;
