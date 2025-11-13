import React from "react";
import PageLayout from "../components/PageLayout";
import BannerTemplate from "../components/banners/BannerTemplate";
import { Button } from "@/components/ui/button";
import SectionHeading from "./../components/Utility Components/SectionHeading";
import HighlightedText from "./../components/Utility Components/HighlightedText";
import ImageCollage from "./../components/WhoWeAre/ImageCollage";

function FlashNews() {
  return (
    <PageLayout
      bodyStyle="-mt-60 p-16"
      banner={<BannerTemplate></BannerTemplate>}
    >
      <div className="flex flex-col gap-10 ">
        <HeadLinesSection />
        <PastNewsSection />
        <ProgressMeasure></ProgressMeasure>
      </div>
    </PageLayout>
  );
}
function HeadLinesSection() {
  return (
    <section>
      <SectionHeading>
        {" "}
        Where Innovation Makes <HighlightedText>Headlines</HighlightedText>
      </SectionHeading>
      <div className="grid grid-cols-3 ">
        <div className="max-w-[850px] col-span-2 border-8">main card</div>
        <div className="">
          <div className="w-[420px] border-1">second card</div>
          <div className="w-[420px] border-1">third card</div>
        </div>
      </div>
    </section>
  );
}
function PastNewsSection() {
  return (
    <section>
      <SectionHeading>
        Innovation through the <HighlightedText>Years</HighlightedText>
      </SectionHeading>
      <div>
        <div className="max-w-[330px]">
          <h3>Dive into our past news to see how ideas evolved into action.</h3>
          <p>
            SIIC recently celebrated major milestones, including successful
            accelerator graduations, funding rounds, and startup launches, while
            expanding global reach through events, partnerships, and media
            recognition. SIIC news highlights include awards, pilot projects,
            satellite initiatives, and notable invitations, showcasing
            consistent growth, industry impact, and investor confidence.
          </p>
        </div>
        <div className=" overflow-y-scroll flex flex-col gap-8">
          {Array.from({ length: 10 }, (_, idx) => {
            return (
              <div className="border-1 px-4 py-2 ">
                <img
                  src="UpcomingEvents/PastEvents/PastEvent1.png"
                  className="max-w-[200px] max-h-[120px]"
                  alt="gd"
                  width={200}
                  height={120}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
function ProgressMeasure() {
  return <>hello</>;
}
export default FlashNews;
