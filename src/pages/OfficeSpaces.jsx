import React from "react";
import { MapPin } from "lucide-react";
import PageLayout from "../components/PageLayout";
import OfficeSpacesBanner from "../components/banners/OfficeSpacesBanner";
import LetUsKnow from "./../components/Utility Components/LetUsKnow";
import CounterBox from "./../components/Utility Components/CounterBox";

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

// Feature list item component
const FeatureItem = ({ children }) => (
  <li className="flex items-start gap-3">
    <svg
      className="w-6 h-6 text-primary flex-shrink-0 mt-0.5"
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
    <span className="text-gray-700">{children}</span>
  </li>
);

// Facility list item component
const FacilityItem = ({ facility }) => (
  <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors duration-200">
    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary/10 rounded-full">
      <img
        src="/Icons/list-icon.svg"
        alt=""
        className="w-5 h-5"
        loading="lazy"
      />
    </div>
    <span className="text-sm lg:text-base font-medium text-gray-800">
      {facility}
    </span>
  </li>
);

// Section wrapper component for consistent styling
const Section = ({ children, className = "", background = false }) => (
  <section
    className={`${
      background ? "bg-gradient-to-b from-gray-50 to-white" : ""
    } py-16 lg:py-24 ${className}`}
  >
    <div className="container mx-auto px-6 lg:px-12">{children}</div>
  </section>
);

// Section header component
const SectionHeader = ({ title, subtitle, titleAccent, centered = false }) => (
  <div
    className={`${
      centered ? "text-center mb-12 lg:mb-16" : "mb-8 lg:mb-12"
    } space-y-4`}
  >
    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-highlight leading-tight">
      {title}{" "}
      {titleAccent && <span className="text-primary">{titleAccent}</span>}
    </h2>
    {subtitle && (
      <p
        className={`text-base lg:text-lg text-gray-700 leading-relaxed ${
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
    "High-Speed WiFi",
    "Meeting Rooms",
    "Private Cabins",
    "Pantry & Cafeteria",
    "24/7 Security",
    "Power Backup",
    "Parking Space",
    "Event Space",
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
      src: "OfficeSpace/office2.svg",
      alt: "Collaborative workspace area",
      className: "col-span-2 h-64 lg:h-80",
    },
    {
      src: "OfficeSpace/office3.svg",
      alt: "Private meeting room",
      className: "h-48 lg:h-56",
    },
    {
      src: "OfficeSpace/office4.svg",
      alt: "Modern office amenities",
      className: "h-48 lg:h-56",
    },
  ];

  return (
    <PageLayout banner={<OfficeSpacesBanner />} bodyStyle="-mt-60">
      {/* Hero Section */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Hero Image */}
          <div className="order-2 lg:order-1">
            <img
              src="OfficeSpace/office1.svg"
              alt="Modern co-working office space"
              className="w-full h-auto rounded-2xl shadow-lg"
              loading="eager"
            />
          </div>

          {/* Hero Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-highlight leading-tight">
              Your Workspace, <br />
              <span className="text-primary">Reimagined</span>
            </h1>

            <h2 className="text-xl lg:text-2xl font-semibold text-secondary">
              Branding Support to Tell Your Story
            </h2>

            <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
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
              subtitle="Experience world-class amenities designed to fuel productivity and collaboration. From private meeting rooms to open collaborative spaces, we provide everything your team needs to thrive and scale."
            />

            <ul className="space-y-3 pt-4">
              {features.map((feature, index) => (
                <FeatureItem key={index}>{feature}</FeatureItem>
              ))}
            </ul>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={
                  image.className.includes("col-span-2") ? "col-span-2" : ""
                }
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full ${image.className} object-cover rounded-2xl shadow-md`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Facilities Section */}
      <Section>
        <SectionHeader
          title="Facilities at a"
          titleAccent="Glance"
          subtitle="Explore the tools, spaces, and resources that empower startups to innovate and scale faster."
          centered
        />

        <div className="border-2 border-primary-highlight rounded-3xl p-6 lg:p-12 bg-gradient-to-br from-white to-gray-50/50">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Facilities List */}
            <div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                {facilities.map((facility, index) => (
                  <FacilityItem key={index} facility={facility} />
                ))}
              </ul>
            </div>

            {/* Facilities Image */}
            <div className="order-first lg:order-last">
              <img
                src="OfficeSpace/office5.svg"
                alt="Office facilities overview"
                className="w-full h-auto rounded-2xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Locations Section */}
      <Section>
        <SectionHeader
          title="Where Innovation Finds a"
          titleAccent="Home"
          subtitle="Visit our world-class facilities designed to nurture your startup journey."
          centered
        />

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

      {/* Call to Action */}
      <LetUsKnow />
    </PageLayout>
  );
}

export default OfficeSpaces;
