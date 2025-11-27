import React, { useState } from "react";

function SocialLink() {
  const [hovered, setHovered] = useState("");
  const socialLinkList = [
    {
      title: "facebook",
      icon: "/Icons/facebook.svg",
      hoverIcon: "/Icons/hover-icons/facebook-hover.svg",
    },
    {
      title: "linkedIn",
      icon: "Icons/linkedIn.svg",
      hoverIcon: "Icons/hover-icons/linkedIn-hover.svg",
    },
    {
      title: "instagram",
      icon: "/Icons/instagram.svg",
      hoverIcon: "/Icons/hover-icons/instagram-hover.svg",
    },
    {
      title: "twitter",
      icon: "/Icons/twitter.svg",
      hoverIcon: "/Icons/hover-icons/twitter-hover.svg",
    },
    {
      title: "youtube",
      icon: "/Icons/youtube.svg",
      hoverIcon: "/Icons/hover-icons/youtube-hover.svg",
    },
  ];
  return (
    <div className="flex flex-row lg:flex-col items-center lg:ml-auto gap-6 lg:justify-evenly justify-center md:-ml-11 ml-0 object-fill">
      {socialLinkList.map((socialLink) => {
        return (
          <img
            className="duration-300 transition-colors w-8 h-8  "
            onMouseEnter={() => setHovered(socialLink.title)}
            onMouseLeave={() => setHovered(null)}
            src={
              hovered && hovered == socialLink.title
                ? socialLink.hoverIcon
                : socialLink.icon
            }
            alt={`${socialLink.title} icon`}
          />
        );
      })}
    </div>
  );
}

export default SocialLink;
