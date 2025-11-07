export const navItems = [
  {
    name: "Home",
    hasDropdown: false,
    linkAddress: "/",
  },
  {
    name: "What we Offer",
    hasDropdown: true,
    dropdownItems: [
      {
        heading: "Programs",
        linkAddress: "/programs",
      },
      {
        heading: "Facilities",
        linkAddress: "/facilities",
        children: [
          { heading: "Lab", linkAddress: "/lab" },
          { heading: "Office Space", linkAddress: "/office-spaces" },
          { heading: "Branding", linkAddress: "/branding" },
          {
            heading: "Manage Portfolio",
            linkAddress: "/manage-portfolios",
          },
        ],
      },
      { heading: "Partners", linkAddress: "/partners" },
      { heading: "Mentors", linkAddress: "/mentors" },
      { heading: "Co-founder", linkAddress: "/cofounders" },
      { heading: "Patents", linkAddress: "/patents" },
    ],
  },
  {
    name: "Start ups",
    hasDropdown: false,
    linkAddress: "/startups",
  },
  {
    name: "Join Us",
    hasDropdown: true,
    dropdownItems: [
      { heading: "As a Mentor", linkAddress: "/join-as-mentor" },
      { heading: "As an Investor", linkAddress: "/join-as-investor" },
      { heading: "Careers @ SIIC", linkAddress: "/careers" },
    ],
  },
  {
    name: "News & Events",
    hasDropdown: true,
    dropdownItems: [
      { heading: "Upcoming Events", linkAddress: "/upcoming-events" },
      { heading: "Flash News", linkAddress: "/flash-news" },
    ],
  },
];
