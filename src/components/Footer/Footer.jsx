import React from "react";
import SocialLink from "./SocialLink";
import NewsLetterForm from "./NewsLetterForm";
import QuickLinks from "./QuickLinks";

function Footer() {
  return (
    <div className=" bg-[#09181D] -mt-20  z-20  px-16 pb-5 pt-30 w-full  text-white grid  md:grid-cols-2 lg:grid-cols-[auto_300px_auto]  ">
      <QuickLinks />
      <NewsLetterForm />
      <SocialLink></SocialLink>
    </div>
  );
}

export default Footer;
