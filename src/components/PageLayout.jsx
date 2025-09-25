import GradientBanner from "./Utility Components/GradientBanner";

function PageLayout({ children, banner, bodyStyle, bannerLink }) {
  return (
    <div className=" min-h-screen relative ">
      <GradientBanner bannerLink={bannerLink}>{banner}</GradientBanner>
      <div
        className={
          bodyStyle +
          " min-h-screen bg-white  -translate-y-30 z-10 rounded-[30px]"
        }
      >
        {children}
      </div>
    </div>
  );
}

export default PageLayout;
