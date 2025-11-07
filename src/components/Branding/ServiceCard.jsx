import React from "react";

function ServiceCard({ data }) {
  const { ServiceImg, name, description } = data;
  return (
    <div className="w-[305px] h-[250px] rounded-2xl bg-secondary-gray/20 flex flex-col justify-center items-center gap-4 p-6">
      <img src={`/Branding/Icons/${ServiceImg}.svg`}></img>
      <h3 className="text-secondary-blue font-bold text-[18px]">{name}</h3>
      <p className="opacity-65 text-[#1f1f1f] text-center text-[14px] line-clamp-3  ">
        {description}
      </p>
    </div>
  );
}

export default ServiceCard;
