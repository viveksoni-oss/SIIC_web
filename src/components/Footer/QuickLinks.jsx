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
    {
      linkTitle: "Google",
      link: "https://www.google.com",
      isExternalLink: true,
    },
  ];
  return (
    <div className="flex flex-col gap-4 lg:w-lg lg:col-auto">
      <h3 className="text-base font-bold">Quick Link:</h3>

      <div className="flex gap-4 text-[#9ca3a5]">
        {LinksList.map((link) => {
          if (link.isExternalLink) {
            return (
              <a
                target="_blank"
                className={`underline underline-offset-6`}
                href={link.link}
              >
                {link.linkTitle}
              </a>
            );
          } else {
            return (
              <Link
                className={`underline underline-offset-6  ${
                  pathname == link.link ? "text-primary-highlight" : null
                }`}
                to={link.link}
              >
                {link.linkTitle}
              </Link>
            );
          }
        })}
      </div>

      <div className="mt-14 text-[#9ca3a5] font-medium flex flex-col justify-center gap-8">
        <div className="flex gap-4">
          <img src="/Icons/location-pin.svg" alt="location-pin-icon" />
          <div>
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
