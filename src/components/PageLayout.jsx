import { ToastContainer } from "react-toastify";
import GradientBanner from "./Utility Components/GradientBanner";

function PageLayout({ children, banner, bodyStyle = "", bannerLink }) {
  return (
    <div className="w-full min-h-screen ">
      <GradientBanner bannerLink={bannerLink}>{banner}</GradientBanner>

      <div
        className={`
          min-h-screen relative bg-white -mt-23 rounded-2xl sm:rounded-3xl lg:rounded-[30px]
          ${bodyStyle}
        `}
      >
        <main className="w-full mx-auto">{children}</main>
        <ToastContainer autoClose={2000} />
      </div>
    </div>
  );
}

export default PageLayout;
