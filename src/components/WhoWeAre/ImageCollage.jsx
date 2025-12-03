import React from "react";

function ImageCollage() {
  return (
    <div className=" flex justify-center items-center xl:mx-22 w-full md:w-1/2 my-20  scale-65 xl:scale-100 relative ">
      <div className="relative">
        <div className="bg-secondary-gray/30 rounded-2xl relative w-[250px] h-[250px]">
          <div className="h-[80px] w-[80px] border-t-4 border-r-4 border-primary-highlight absolute -right-10 -top-10"></div>
        </div>

        <div className="absolute inset-0 -left-65 -top-25 ">
          <div className="relative ">
            <img
              src="/WhoWeAre/Rectangle 24022.png"
              alt="SIIC building"
              className="absolute  inset-0 h-auto w-auto max-w-none max-h-none"
            />
            <div className="h-[135px] w-[135px] border-b-6   border-l-6 border-primary-highlight absolute  -bottom-92 -left-12"></div>
          </div>
        </div>

        <img
          src="/WhoWeAre/Rectangle 24027.png"
          alt="Team Pic"
          className="absolute -right-40 -bottom-3"
        />
      </div>{" "}
    </div>
  );
}

export default ImageCollage;
