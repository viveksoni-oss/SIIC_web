import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect } from "react";

function Counter({ number, title, prefix = "", suffix = "" }) {
  const ref = useRef(null);
  const countRef = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const targetNumber = Number(number) || 0;

  useEffect(() => {
    if (!isInView) return;

    const node = countRef.current;
    if (!node) return;

    const controls = animate(number / 2, targetNumber, {
      duration: 0.7,
      ease: "easeOut",
      onUpdate(value) {
        const hasDecimals = targetNumber % 1 !== 0;
        let formattedValue;
        if (hasDecimals) {
          formattedValue = value.toFixed(2);
        } else {
          formattedValue = Math.round(value);
        }
        node.textContent = `${prefix}${formattedValue}${suffix}`;
      },
    });

    return () => controls.stop();
  }, [isInView, targetNumber, prefix, suffix, number]);

  return (
    <motion.div
      ref={ref}
      className="
        flex flex-col 
        gap-1 sm:gap-2 md:gap-3
        justify-center items-center
        min-w-[120px] sm:min-w-[140px] md:min-w-[160px] lg:min-w-[180px]
        px-3 sm:px-4 md:px-6
        py-2 sm:py-3
      "
      initial={{ opacity: 0, y: 0 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        ref={countRef}
        className="
          text-4xl lg:text-5xl xl:text-5xl
          text-[#2D415C] 
          font-bold
          
          text-center
          
        "
        transition={{ duration: 0.8, ease: "backOut" }}
      >
        {`${prefix}0${suffix}`}
      </motion.div>
      <motion.div
        className="
          text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl
          font-[400] 
          capitalize 
          text-[#1F1F1F]
          text-center
          leading-snug
          max-w-[150px] sm:max-w-[180px] md:max-w-[200px]
        "
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
