import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect } from "react";

function Counter({ number, title, prefix = "", suffix = "" }) {
  const ref = useRef(null);
  const countRef = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  // Convert to number and handle edge cases
  const targetNumber = Number(number) || 0;

  useEffect(() => {
    if (!isInView) return;

    const node = countRef.current;
    if (!node) return;

    // Animate from 0 up to the target number
    const controls = animate(number/1.1, targetNumber, {
      duration: 0.5,
      ease: "easeOut",
      onUpdate(value) {
        // Check if the target number has decimals
        const hasDecimals = targetNumber % 1 !== 0;

        let formattedValue;
        if (hasDecimals) {
          // Show decimals if target number has decimals
          formattedValue = value.toFixed(2);
        } else {
          // Show whole number if target is integer
          formattedValue = Math.round(value).toString();
        }

        node.textContent = `${prefix}${formattedValue}${suffix}`;
      },
    });

    return () => controls.stop();
  }, [isInView, targetNumber, prefix, suffix]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col gap-2 justify-center items-center"
      initial={{ opacity: 0, y: 0 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        ref={countRef}
        className="text-5xl text-[#2D415C] font-bold"
        initial={{ scale: 0.5 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.8, ease: "backOut" }}
      >
        {`${prefix}0${suffix}`}
      </motion.div>
      <motion.div
        className="text-lg font-[400] capitalize text-[#1F1F1F]"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {title}
      </motion.div>
    </motion.div>
  );
}

export default Counter;
