import React, { useEffect, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

const formatNumberWithCommas = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const StatsCount = ({ end, label }) => {
  const count = useMotionValue(0);
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    const controls = animate(count, end, {
      duration: 2,
      ease: "easeOut",
      onUpdate(value) {
        setDisplayCount(Math.floor(value));
      },
    });

    return () => controls.stop();
  }, [count, end]);

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="flex flex-col items-center justify-center cursor-default select-none"
    >
      <motion.span
        style={{ fontSize: "2.5rem", fontWeight: "700", color: "#dc1957" }}
      >
        {formatNumberWithCommas(displayCount)}+
      </motion.span>
      <span className="mt-2 text-gray-700 text-center font-medium text-sm md:text-base">
        {label}
      </span>
    </motion.div>
  );
};

export default StatsCount;
