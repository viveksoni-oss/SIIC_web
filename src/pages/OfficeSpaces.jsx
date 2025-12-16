import React from "react";
import { MapPin } from "lucide-react";
import PageLayout from "../components/PageLayout";
import OfficeSpacesBanner from "../components/banners/OfficeSpacesBanner";
import LetUsKnow from "./../components/Utility Components/LetUsKnow";
import CounterBox from "./../components/Utility Components/CounterBox";
import SectionHeading from "./../components/Utility Components/SectionHeading";
import HighlightedText from "@/components/Utility Components/HighlightedText";
import BannerTemplate from "@/components/banners/BannerTemplate";

// Extracted LocationCard component to separate file recommended
const LocationCard = ({
  icon,
  locationTitle,
  locationDescription,
  address,
}) => {
  return (
    <article className="flex-1 flex flex-col items-center bg-white border border-gray-200 rounded-2xl p-6 lg:p-8 hover:shadow-xl transition-all duration-300 hover:border-secondary-blue/50 hover:-translate-y-1">
      {/* Icon Container */}
      <div className="w-16 h-16 bg-secondary-blue rounded-xl flex items-center justify-center mb-5 shadow-md">
        <div className="text-white" aria-hidden="true">
          {icon}
        </div>
      </div>

      {/* Location Title */}
      <h3 className="text-xl lg:text-2xl font-bold text-primary-highlight mb-3 text-center">
        {locationTitle}
      </h3>

      {/* Location Description */}
      <p className="text-sm lg:text-base text-secondary-blue leading-relaxed mb-4 text-center">
        {locationDescription}
      </p>

      {/* Address */}
      <div className="pt-4 mt-auto border-t border-gray-200 w-full">
        <p className="text-sm lg:text-base text-secondary-blue text-center">
          <span className="font-semibold text-primary-highlight">Address</span>:{" "}
          {address}
        </p>
      </div>
    </article>
  );
};

// Facility list item component
const FacilityItem = ({ facility }) => (
  <li className="flex items-center p-2  rounded-lg hover:bg-primary/5 transition-colors duration-200">
    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center  rounded-full">
      <img
        src="/Icons/list-icon.svg"
        alt=""
        className="w-4 h-4"
        loading="lazy"
      />
    </div>
    <span className="text-xs lg:text-base font-medium text-gray-800">
      {facility}
    </span>
  </li>
);

// Section wrapper component for consistent styling
const Section = ({ children, className = "", background = false }) => (
  <section
    className={`${
      background ? "bg-gradient-to-b from-gray-50 to-white" : ""
    } pt-16 lg:py-20 ${className}`}
  >
    <div className="mx-auto px-6 lg:px-12">{children}</div>
  </section>
);

// Section header component
const SectionHeader = ({ title, subtitle, titleAccent, centered = false }) => (
  <div
    className={`${centered ? " mb-12 lg:mb-16" : "mb-8 lg:mb-12"} space-y-4`}
  >
    <SectionHeading>
      {title} <HighlightedText>{titleAccent}</HighlightedText>
    </SectionHeading>

    {subtitle && (
      <p
        className={` ml-2 text-base lg:text-lg text-gray-700 text-justify leading-relaxed ${
          centered ? "max-w-3xl mx-auto" : ""
        }`}
      >
        {subtitle}
      </p>
    )}
  </div>
);

function OfficeSpaces() {
  // Data constants
  const stats = [
    { count: "150K", label: "SQ.FT Space" },
    { count: "24/7", label: "Access" },
    { count: "2", label: "Locations" },
  ];

  const features = [
    "High-speed fiber internet & IT infrastructure",
    "Fully equipped meeting & conference rooms",
    "Premium ergonomic furniture & workstations",
  ];

  const facilities = [
    "High-speed internet and printing for seamless daily operations.",
    "Meeting and conference rooms for productive team collaborations.",
    "Access to shared labs and prototyping facilities (at IIT Kanpur).",
    "Cafeteria and breakout zones for relaxation and informal talks.",
    "secure access and power backup for uninterrupted workflow.",
    "Event spaces for workshops, seminars, and networking events.",
  ];

  const locations = [
    {
      id: 1,
      icon: <MapPin size={32} />,
      title: "SIIC, IIT Kanpur",
      description:
        "Our flagship innovation hub at IIT Kanpur with state-of-the-art facilities and mentorship programs.",
      address:
        "Startup Incubation and Innovation Centre, IIT Kanpur, Kanpur, UP 208016",
    },
    {
      id: 2,
      icon: <MapPin size={32} />,
      title: "Noida Office",
      description:
        "Modern workspace in the heart of NCR with excellent connectivity and collaborative environment.",
      address: "Sector 62, Noida, Uttar Pradesh 201301",
    },
  ];

  const galleryImages = [
    {
      src: "OfficeSpace/office3.png",
      alt: "Collaborative workspace area",
    },
    {
      src: "OfficeSpace/office2.png",
      alt: "Private meeting room",
    },
    {
      src: "OfficeSpace/office4.png",
      alt: "Modern office amenities",
    },
  ];

  return (
    <PageLayout
      banner={
        <BannerTemplate
          maxWidth="700"
          heading="Create Workspace To Build"
          highlightedText="Your"
          headingSuffix="Vision"
          description="A purpose-built space for focus, collaboration, and seamless innovation.
"
        />
      }
      bodyStyle="-mt-60"
    >
      {/* Hero Section */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12  items-center">
          {/* Hero Image */}
          <div className="order-2 lg:order-1">
            <img
              src="OfficeSpace/office1.png"
              alt="Modern co-working office space"
              className="w-full  h-full rounded-2xl shadow-lg"
              loading="eager"
            />
          </div>

          {/* Hero Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <SectionHeading>
              Your Workspace, <HighlightedText> Reimagined</HighlightedText>
            </SectionHeading>

            <p className="text-base lg:text-md text-gray-700 leading-relaxed text-justify max-w-xl">
              Our 150,000 SQ.FT co-working spaces at IIT Kanpur and Noida offer
              24/7 access to flexible workstations, high-speed internet, meeting
              rooms, ergonomic furniture, startup accommodation, and on-site
              support for seamless work and growth.
            </p>

            {/* Stats Counter */}
            <div className="grid grid-cols-3 gap-4 lg:gap-6 pt-6">
              {stats.map((stat, index) => (
                <CounterBox key={index} count={stat.count} label={stat.label} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Features Section */}
      <Section background>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Features Content */}
          <div className="space-y-6">
            <SectionHeader
              title="Designed for"
              titleAccent="Innovation & Growth"
              subtitle={
                <p>
                  At SIIC, our co-working spaces are more than shared offices -
                  they’re hubs of opportunity. With access to mentorship,
                  funding, networking events, and a community of innovators, we
                  provide the ideal environment for startups to thrive.
                  <br /> <br /> Whether you're in Kanpur or Noida, our spaces
                  offer flexible setups, modern amenities, seamless connectivity
                  to the SIIC ecosystem, room to grow, and a culture of
                  collaboration.
                </p>
              }
              centered={true}
            />
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-3 gap-4 lg:gap-6 mt-0 xl:mt-4">
            {galleryImages.map((image, index) => (
              <div key={index}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-70 h-60 object-cover  rounded-2xl shadow-md`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Facilities Section */}
      <Section className="-mt-20">
        <SectionHeader
          title="Facilities at a"
          titleAccent="Glance"
          subtitle="Explore the tools, spaces, and resources that empower startups to innovate and scale faster."
        />

        <div className="border-2 border-primary-highlight/50 rounded-3xl p-6 lg:p-12 bg-gradient-to-br from-white to-gray-50/50">
          <div className="grid gap-8 lg:gap-12 items-center">
            {/* Facilities List */}
            <div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-1">
                {facilities.map((facility, index) => (
                  <FacilityItem key={index} facility={facility} />
                ))}
              </ul>
            </div>

            {/* Facilities Image */}
            <div className="order-first lg:order-last p-4">
              <img
                src="OfficeSpace/office5.png"
                alt="Office facilities overview"
                className="w-full h-auto rounded-2xl "
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Locations Section */}
      <Section className="-mt-20">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {locations.map((location) => (
            <LocationCard
              key={location.id}
              icon={location.icon}
              locationTitle={location.title}
              locationDescription={location.description}
              address={location.address}
            />
          ))}
        </div>
      </Section>
    </PageLayout>
  );
}

export default OfficeSpaces;
