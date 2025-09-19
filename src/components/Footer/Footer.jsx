import React from "react";
import SocialLink from "./SocialLink";
import NewsLetterForm from "./NewsLetterForm";
import QuickLinks from "./QuickLinks";

function Footer() {
  return (
    <div className=" bg-[#09181D] absolute -translate-y-40 -z-10  px-16 pb-10 pt-30 w-full h-auto gap-10 text-white grid  md:grid-cols-2 lg:grid-cols-3  ">
      <QuickLinks />
      <NewsLetterForm />
      <SocialLink></SocialLink>
    </div>
  );
}

export default Footer;
