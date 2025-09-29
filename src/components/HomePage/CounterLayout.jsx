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
    <div className="flex container flex-row justify-center items-center gap-42 p-8 hover:bg-[#f4f4f4] duration-300 mt-25 ">
      {details.map((item) => (
        <Counter
          number={item.count}
          key={item}
          suffix={item.suffix}
          prefix={item.prefix}
          title={item.title}
        ></Counter>
      ))}
    </div>
  );
}

export default CounterLayout;
