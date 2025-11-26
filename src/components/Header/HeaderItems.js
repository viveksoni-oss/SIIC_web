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
        ],
      },
      { heading: "Partners", linkAddress: "/partners" },
      { heading: "Mentors", linkAddress: "/mentors" },
      { heading: "Patents", linkAddress: "/patents" },
    ],
  },
  {
    name: "Start ups",
    hasDropdown: false,
    linkAddress: "/startups",
  },
  {
    name: "CoE",
    hasDropdown: true,
    linkAddress: "/",
    dropdownItems: [
      {
        isExternal: "true",
        heading: "AIIDE-CoE",
        linkAddress: "https://www.aiidecoe.com/",
      },
      {
        isExternal: "true",
        heading: "Drone-CoE",
        linkAddress: "https://dronecoe.siicincubator.com/",
      },
      {
        isExternal: "true",
        heading: "DST-NIDHI MedTech",
        linkAddress: "https://medtechcoe.siicincubator.com/",
      },
      {
        isExternal: "true",
        heading: "5g-6g CoE",
        linkAddress: "https://5g6gcoe.siicincubator.com/",
      },
    ],
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
