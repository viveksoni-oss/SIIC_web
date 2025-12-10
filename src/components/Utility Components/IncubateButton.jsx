import { INCUBATE_WITH_US } from "@/data/Links";
import React from "react";

function IncubateButton() {
  return (
    <a
      href={INCUBATE_WITH_US}
      target="_blank"
      rel="noreferrer"
      className=" px-4 py-1.5 bg-primary text-white text-sm rounded-2xl -ml-4 hover:bg-primary-highlight hover:font-semibold transition-colors duration-300 w-[130px]"
    >
      Incubate Now
    </a>
  );
}

export default IncubateButton;
