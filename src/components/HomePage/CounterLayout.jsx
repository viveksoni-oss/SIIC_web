import React from "react";
import Counter from "./Counter";

function CounterLayout() {
  const details = [
    { title: "startup incubated", count: "500", suffix: "+", prefix: "" },
    { title: "job created", count: "11000", suffix: "+", prefix: "" },
    { title: "startup influenced", count: "800", suffix: "+", prefix: "" },
    { title: "combined value", count: "12", prefix: "₹ ", suffix: " B" },
  ];

  return (
    <div
      className="
      
      grid grid-cols-2 gap-12 sm:gap-0 md:flex md:flex-row
      justify-between items-center 
 2xl:px-26 
      px-4 py-6 sm:px-4 sm:py-8 md:px-8 md:py-10 lg:px-12 lg:py-12
      mt-6 sm:mt-10 md:mt-16 lg:mt-20 xl:mt-25
      hover:bg-[#f4f4f4] 
      transition-colors duration-300
       w-full 
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
