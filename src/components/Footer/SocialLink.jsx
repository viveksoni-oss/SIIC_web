import React, { useState } from "react";
import Linkedin from "../IconComponents/Linkedin";

function SocialLink() {
  const [hovered, setHovered] = useState(null);

  const socialLinkList = [
    {
      title: "facebook",
      icon: "/Icons/facebook.svg",
      hoverIcon: "/Icons/hover-icons/facebook-hover.svg",
      link: "https://www.facebook.com/IncubatorIITK",
    },
    {
      title: "linkedIn",
      icon: "Icons/linkedIn.svg",
      hoverIcon: "Icons/hover-icons/linkedIn-hover.svg",
      link: "https://www.linkedin.com/company/incubatoriitk",
    },
    {
      title: "instagram",
      icon: "/Icons/instagram.svg",
      hoverIcon: "/Icons/hover-icons/instagram-hover.svg",
      link: "https://www.instagram.com/incubatoriitk/",
    },
    {
      title: "twitter",
      icon: "/Icons/twitter.svg",
      hoverIcon: "/Icons/hover-icons/twitter-hover.svg",
      link: "https://x.com/incubatorIITK",
    },
    {
      title: "youtube",
      icon: "/Icons/youtube.svg",
      hoverIcon: "/Icons/hover-icons/youtube-hover.svg",
      link: "https://www.youtube.com/@IncubatorIITK",
    },
  ];

  return (
    <div className="flex flex-row lg:flex-col items-center lg:ml-auto gap-6 lg:justify-evenly justify-center md:-ml-11 ml-0 object-fill">
      {socialLinkList.map((socialLink) => {
        return (
          <a
            key={socialLink.title}
            href={socialLink.link}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHovered(socialLink.title)}
            onMouseLeave={() => setHovered(null)}
            className="cursor-pointer" // Added for better UX
          >
            <img
              className="duration-300 transition-colors w-8 h-8"
              src={
                hovered === socialLink.title
                  ? socialLink.hoverIcon
                  : socialLink.icon
              }
              alt={`${socialLink.title} icon`}
            />
          </a>
        );
      })}
    </div>
  );
}

export default SocialLink;
