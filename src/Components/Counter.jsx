import React, { useEffect, useState } from "react";

const Counter = ({ end, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const incrementTime = 30;
    const totalSteps = Math.ceil(duration / incrementTime);
    const step = Math.ceil(end / totalSteps);

    const counter = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(start);
    }, incrementTime);
  }, [end]);

  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-[#FF6E9B]">{count}+</div>
      <div className="text-sm text-gray-700 mt-1">{label}</div>
    </div>
  );
};

export default Counter;
