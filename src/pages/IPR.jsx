import PageLayout from "@/components/PageLayout";
import React from "react";
import BannerTemplate from "./../components/banners/BannerTemplate";
import HighlightedText from "./../components/Utility Components/HighlightedText";
import SectionHeading from "./../components/Utility Components/SectionHeading";
import { Gift, Pin } from "lucide-react";
import { Link } from "react-router";

function IPR() {
  const List = [
    {
      icon: <Gift/>,
      Title: "List Of IPR",
      link: "",
    },
    // {
    //   icon: "",
    //   Title: "List Of IPR",
    //   link: "",
    // },
    // {
    //   icon: "",
    //   Title: "List Of IPR",
    //   link: "",
    // },
    // {
    //   icon: "",
    //   Title: "List Of IPR",
    //   link: "",
    // },
  ];
  return (
    <PageLayout
      banner={
        <BannerTemplate
          Heading={
            <>
              IPR <HighlightedText>Cell</HighlightedText>
            </>
          }
          Description=""
        />
      }
      bodyStyle="-mt-90 p-16"
    >
      <section className="">
        <div className="container mx-auto px-6 lg:px-12 ">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Hero Image */}
            <div className="order-2 lg:order-1">
              <img
                src="OfficeSpace/office1.svg"
                alt="Modern co-working office space"
                className="w-full  h-auto rounded-2xl shadow-lg"
                loading="eager"
              />
            </div>

            {/* Hero Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <SectionHeading>
                Your Workspace, <HighlightedText> Reimagined</HighlightedText>
              </SectionHeading>
              <h2 className="text-md lg:text-xl font-semibold text-[#1f1f1f]/80">
                Branding Support to Tell Your Story
              </h2>

              <p className="text-base lg:text-md text-gray-700 leading-relaxed text-justify max-w-xl">
                Our 150,000 SQ.FT co-working spaces at IIT Kanpur and Noida
                offer 24/7 access to flexible workstations, high-speed internet,
                meeting rooms, ergonomic furniture, startup accommodation, and
                on-site support for seamless work and growth.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-20 px-6 container lg:px-12">
        <div className="px-10 grid grid-cols-3">
          {List.map((obj) => {
            return (
              <div className="flex flex-col gap-2 p-12 border-1">
                <div className=" text-primary-highlight">{obj.icon}</div>
                <Link
                  to={obj.link}
                  className="bg-primary inline-block p-4 rounded-full text-center text-white"
                >
                  {obj.Title}
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </PageLayout>
  );
}

export default IPR;
