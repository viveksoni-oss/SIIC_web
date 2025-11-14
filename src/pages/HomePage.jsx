import PageLayout from "../components/PageLayout";
import HomeBanner from "../components/banners/HomeBanner";
import BookMark from "./../components/Utility Components/BookMark";
import HomePagePara from "../components/HomePage/HomePagePara";
import CounterLayout from "../components/HomePage/CounterLayout";
import KnowYourJourney from "../components/HomePage/KnowYourJourney";
import FlashNewsLayout from "../components/HomePage/FlashNewsLayout";
import LetUsKnow from "./../components/Utility Components/LetUsKnow";
import MarqueeContainer from "../components/HomePage/MarqueeContainer";
import OurPride from "../components/HomePage/OurPride";
import UpcomingEvents from "../components/HomePage/UpcomingEvents";
import useIsMobile from "@/Hooks/useIsMobile";

function HomePage() {
  const isMobile = useIsMobile();
  return (
    <PageLayout
      banner={<HomeBanner />}
      bodyStyle="relative"
      bannerLink={"HomePage_banner.png"}
    >
      <BookMark></BookMark>
      <HomePagePara />
      <CounterLayout />
      <KnowYourJourney />
      {!isMobile ? <UpcomingEvents /> : null}

      <FlashNewsLayout />
      <OurPride></OurPride>
      <MarqueeContainer />
      {/* <LetUsKnow></LetUsKnow> */}
    </PageLayout>
  );
}

export default HomePage;
