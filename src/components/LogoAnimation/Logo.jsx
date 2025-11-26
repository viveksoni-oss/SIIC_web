import { motion } from "framer-motion";

function AnimatedLogo({ isHovered, setIsHovered }) {
  const barVariants = {
    initial: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeInOut" }, // Control speed when reverting
    },
    hover: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.2, ease: "easeOut" }, // Speed when hovering
    },
  };

  const curveVariants = {
    initial: {
      opacity: 0,
      scaleY: 0.15,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }, // Same speed as growing
    },
    hover: {
      opacity: 1,
      scaleY: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.5, // Speed of curve growing
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      className="relative w-[200px] h-[80px] flex  cursor-pointer"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="absolute inset-0">
        {/* Rectangle Bar */}
        <motion.div
          className="w-[5.5rem] h-[0.4375rem] bg-white absolute left-0 -bottom-4"
          variants={barVariants}
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
        />

        {/* Curves Container */}
        <div className="absolute flex -bottom-4 left-0 -space-x-9 items-end">
          {/* Curve 1 */}
          <motion.div
            variants={curveVariants}
            initial="initial"
            animate={isHovered ? "hover" : "initial"}
            style={{ transformOrigin: "bottom center" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="68"
              height="60"
              viewBox="0 0 68 57"
              fill="none"
            >
              <path
                d="M0 54.7326V55.2326C1.5 56.0659 7.7 57.2325 20.5 55.2326C36.5 52.7327 48.5 32.2324 49.5 29.7324C50.5 27.2324 59 13.7326 60 11.7326C61 9.73259 72 -1.76741 66 0.232587C61.2 1.83259 54.3333 11.8993 51.5 16.7326C50.3333 18.3993 46.3 24.5326 39.5 35.7326C31 49.7326 19.5 50.7326 16 51.2326C13.2 51.6326 4.16667 53.7326 0 54.7326Z"
                fill="white"
              />
            </svg>
          </motion.div>

          {/* Curve 2 */}
          <motion.div
            variants={curveVariants}
            initial="initial"
            animate={isHovered ? "hover" : "initial"}
            style={{ transformOrigin: "bottom center" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="55"
              viewBox="0 0 42 55"
              fill="none"
            >
              <path
                d="M0.1946 53.5C-0.0711044 53.8671 -0.0585529 54.086 0.1946 54.5C0.1946 54.5 3.11903 54.1036 5.69238 53C9.19017 51.5 13.3633 46.5 16.1967 43C18.03 39.3333 23.7924 28 28.1924 20C32.5924 12 38.6924 6.5 41.6946 1.5C41.8613 1 41.7946 0 40.1946 0C38.5946 0 32.8591 7.66667 30.1924 11.5C26.5257 17.6667 18.4946 31.6 15.6946 38C12.8946 44.4 4.1946 51 0.1946 53.5Z"
                fill="white"
              />
            </svg>
          </motion.div>

          {/* Curve 3 */}
          <motion.div
            variants={curveVariants}
            className="ml-1"
            initial="initial"
            animate={isHovered ? "hover" : "initial"}
            style={{ transformOrigin: "bottom center" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="39"
              height="55"
              viewBox="0 0 39 55"
              fill="none"
            >
              <path
                d="M7.52035 47.103C5.35264 49.9768 2.13464 52.6294 0.451605 53.6335C-0.0533048 53.8408 -0.558215 54.3899 1.46143 54.928C4.4909 55.3318 10.9538 54.2317 12.5695 46.601C13.0744 43.5888 15.094 38.0713 16.91 34.5572C18.0637 32.3245 22.418 24.0146 24.4586 20.5005C26.091 17.6891 28.8619 13.9742 29.7364 12.4681C31.756 9.45595 34.4557 6.63828 35.1562 5.94178C36.0318 5.07115 37.4192 3.51514 37.8149 2.92488L38.8248 1.41881C39.1353 0.95568 38.9668 0.580514 38.8248 0.419555C38.4953 0.0461271 38.3199 -0.0822494 37.31 0.0514298C36.8955 0.106304 36.1319 0.675956 35.7953 0.920961C35.4587 1.25564 34.1796 2.62784 31.756 5.43918C28.7266 8.95335 27.2118 11.2401 24.4586 15.9817L18.6284 26.0222C18.2918 27.0863 16.4329 30.0045 14.5166 34.5566C11.5596 41.5807 10.5498 43.0868 7.52035 47.103Z"
                fill="white"
              />
            </svg>
          </motion.div>

          {/* Curve 4 */}
          <motion.div
            className="ml-[13px]"
            variants={curveVariants}
            initial="initial"
            animate={isHovered ? "hover" : "initial"}
            style={{ transformOrigin: "bottom center" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="53"
              viewBox="0 0 35 53"
              fill="none"
            >
              <path
                d="M5 39.126C9.50008 19.626 22.6667 5.95976 29.5001 0.626431C30.3001 -0.173569 29.5001 -0.040236 29.0001 0.126431C19.0001 3.62643 14.0001 15.1264 9.50008 21.6264C5.90008 26.8264 2.33342 36.4598 1.00008 40.6264C0.200084 49.4264 4.50025 52.2931 7.00025 52.6264H34.5001V51.6264C8.5 51.6264 5.5 48.626 5 39.126Z"
                fill="white"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default AnimatedLogo;
