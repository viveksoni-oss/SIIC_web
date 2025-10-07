import React from "react";
import Counter from "./Counter";

function CounterLayout() {
  const details = [
    { title: "startup incubated", count: "483", suffix: "+", prefix: "" },
    { title: "job created", count: "8000", suffix: "+", prefix: "" },
    { title: "startup influenced", count: "595", suffix: "+", prefix: "" },
    { title: "combined value", count: "71.13", prefix: "₹ ", suffix: " B" },
  ];

  return (
    <div
      className="
      grid grid-cols-2 md:flex md:flex-row
      justify-center items-center 
      gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20
      px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-12 lg:py-12
      mt-6 sm:mt-10 md:mt-16 lg:mt-20 xl:mt-25
      hover:bg-[#f4f4f4] 
      transition-colors duration-300
      max-w-7xl mx-auto
    "
    >
      {details.map((item, index) => (
        <Counter
          number={item.count}
          key={index}
          suffix={item.suffix}
          prefix={item.prefix}
          title={item.title}
        />
      ))}
    </div>
  );
}

export default CounterLayout;
