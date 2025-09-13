import PageLayout from "../components/PageLayout";
import HomeBanner from "../components/banners/HomeBanner";
import BookMark from "./../components/Utility Components/BookMark";
import HomePagePara from "../components/HomePage/HomePagePara";
import Counter from "../components/HomePage/Counter";
import CounterLayout from "../components/HomePage/CounterLayout";
import KnowYourJourney from "../components/HomePage/KnowYourJourney";
import FlashNewsCard from "../components/HomePage/FlashNewsCard";
import FlashNewsLayout from "../components/HomePage/FlashNewsLayout";
import LetUsKnow from "./../components/LetUsKnow";

function HomePage() {
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
      <FlashNewsLayout />
      <LetUsKnow></LetUsKnow>
    </PageLayout>
  );
}

export default HomePage;
