import React from "react";

function StartupCard({ src }) {
  return (
    <div className="text-white  rounded-md overflow-hidden group inline-flex w-[240px] h-[270px] hover:-translate-y-4 transition-all duration-600   ease-in-out  flex-col ">
      <img
        src={src}
        className="border-1 group-hover:border-transparent border-white"
        alt={src}
      />
      <div className="bg-secondary rounded-b-md flex flex-col gap-1 px-3 py-2 pb-2.5 group-hover:text-black group-hover:bg-white transition-all duration-300 border-2 border-transparent group-hover:border-2 box-border group-hover:border-primary-highlight group-hover:shadow-[0px_3px_3px_0px_rgba(0,0,0,0.20)] ">
        <h1 className="text-sm font-bold">Title</h1>
        <p className="text-[10px]">Lorem ipsum dolor, sit amet consectetur</p>
      </div>
    </div>
  );
}

export default StartupCard;
