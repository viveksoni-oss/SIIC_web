import React from "react";
import SocialLink from "./SocialLink";
import NewsLetterForm from "./NewsLetterForm";
import QuickLinks from "./QuickLinks";

function Footer({ footerRef }) {
  return (
    <div
      id="footer"
      ref={footerRef}
      className=" bg-[#09181D] -mt-20  -z-10 relative text-[14px] lg:text-base px-8 xl:px-16 pb-5 pt-30 w-full  text-white grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-[auto_auto_auto]  "
    >
      <QuickLinks />
      <NewsLetterForm />
      <SocialLink></SocialLink>
    </div>
  );
}

export default Footer;
