import GradientBanner from "./Utility Components/GradientBanner";

function PageLayout({ children, banner, bodyStyle, bannerLink }) {
  return (
    <div className="">
      <GradientBanner bannerLink={bannerLink}>{banner}</GradientBanner>
      <div
        className={
          bodyStyle +
          " min-h-screen relative   bg-white -mt-30 z-10 rounded-[30px]"
        }
      >
        {children}
      </div>
    </div>
  );
}

export default PageLayout;
