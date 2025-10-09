import React from "react";
import { Link, useLocation, useParams } from "react-router";

function QuickLinks() {
  const location = useLocation();
  const pathname = location.pathname;
  const LinksList = [
    {
      linkTitle: "Who We Are",
      link: "/who-we-are",
      isExternalLink: false,
    },
    {
      linkTitle: "Board of Directors",
      link: "/board-of-directors",
      isExternalLink: false,
    },
    {
      linkTitle: "Our Team",
      link: "/our-team",
      isExternalLink: false,
    },
  ];
  return (
    <div className="flex flex-col gap-4 grow-1 ">
      <h3 className="text-base font-bold">Quick Link:</h3>

      <div className="flex gap-4 text-[#9ca3a5]">
        {LinksList.map((link) => {
          if (link.isExternalLink) {
            return (
              <a
                key={link.linkTitle}
                target="_blank"
                className={`underline underline-offset-6 hover:text-primary-highlight `}
                href={link.link}
              >
                {link.linkTitle}
              </a>
            );
          } else {
            return (
              <Link
                key={link.linkTitle}
                className={`relative transition-color duration-300 hover:text-primary-highlight group/link  ${
                  pathname == link.link ? "text-primary-highlight " : null
                }`}
                to={link.link}
              >
                {link.linkTitle}
                <span
                  className={`absolute left-0 -bottom-0.5 w-full group-hover/link:-bottom-[2px] bg-[#9ca3a5] group-hover/link:bg-white h-[1px] `}
                ></span>
              </Link>
            );
          }
        })}
      </div>

      <div className="mt-14 text-[#9ca3a5] font-medium flex flex-col justify-center gap-8">
        <div className="flex gap-4">
          <img src="/Icons/location-pin.svg" alt="location-pin-icon" />
          <div className="w-[480px]">
            Indian Institute of Technology Kanpur, Kalyanpur, Kanpur Nagar,
            Uttar Pradesh-208016, India
          </div>
        </div>
        <div className="flex gap-4">
          <img src="/Icons/mail.svg" alt="mail-icon" />
          <a href="mailto:siic@iitk.ac.in">siic@iitk.ac.in</a>
        </div>{" "}
      </div>
    </div>
  );
}

export default QuickLinks;
