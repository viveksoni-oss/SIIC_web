import React from "react";

function FlashNewsCard() {
  return (
    <div className="border-black/10 border-2  rounded-[10px] max-w-[416px] flex flex-col mx-auto items-center justify-center p-4 gap-5">
      <img
        src="/FlashNewsCard1.png"
        alt="flash-news-card-1-image"
        className=""
      />
      <h3 className=" font-[500] text-base line-clamp-2">
        IIT Kanpur Startup in Aerospace, Defence & Agri-Tech to Receive $3.5 M
        CSR Boost.
      </h3>
      <div className="flex flex-row justify-end  w-full">
        {/* <p className="text-sm">2 hr ago</p> */}
        <img src="Icons/external-link.svg" alt="external-link-icon" />
      </div>
    </div>
  );
}

export default FlashNewsCard;
