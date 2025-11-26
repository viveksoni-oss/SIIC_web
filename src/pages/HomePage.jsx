import { useRef, useEffect, useState } from "react";
import PageLayout from "../components/PageLayout";
import HomeBanner from "../components/banners/HomeBanner/HomeBanner";
import HomePagePara from "../components/HomePage/HomePagePara";
import CounterLayout from "../components/HomePage/CounterLayout";
import KnowYourJourney from "../components/HomePage/KnowYourJourney";
import FlashNewsLayout from "../components/HomePage/FlashNewsLayout";
import MarqueeContainer from "../components/HomePage/MarqueeContainer";
import OurPride from "../components/HomePage/OurPride";
import UpcomingEvents from "../components/HomePage/UpcomingEvents";
import useIsMobile from "@/Hooks/useIsMobile";
import { ChevronsDown } from "lucide-react";
import UpcomingEventsMobile from "./../components/HomePage/UpcomingEventMobile";

function HomePage() {
  const isMobile = useIsMobile();

  // refs
  const heroRef = useRef(null);
  const homeParaRef = useRef(null);
  const counterRef = useRef(null);
  const journeyRef = useRef(null);
  const eventsRef = useRef(null);
  const flashRef = useRef(null);
  const prideRef = useRef(null);
  const marqueeRef = useRef(null);
  const footerRef = useRef(null);

  const sections = [
    homeParaRef, // 0
    journeyRef, // 1
    eventsRef, // 2
    flashRef, // 3
    prideRef, // 4
    marqueeRef, // 5
  ];

  const [goTopMode, setGoTopMode] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lastScrolledIndex, setLastScrolledIndex] = useState(0);
  const [arrowAbsolute, setArrowAbsolute] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // ---------- Arrow Switch Logic -----------
      if (footerRef.current) {
        const footerRect = footerRef.current.getBoundingClientRect();
        // If the top of the footer is at or above the window's bottom, pin arrow above footer
        if (footerRect.top <= window.innerHeight) {
          setArrowAbsolute(true);
        } else {
          setArrowAbsolute(false);
        }
      }
      // ---------- Section Active Logic ----------
      let closest = 0;
      let minDist = Infinity;
      const viewportHeight = window.innerHeight;
      for (let i = 0; i < sections.length; i++) {
        const ref = sections[i];
        if (ref && ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const distance = Math.abs(rect.top);
          if (
            rect.top >= 0 &&
            rect.top < viewportHeight / 2 &&
            distance < minDist
          ) {
            minDist = distance;
            closest = i;
          }
        }
      }
      setActiveIndex(closest);
      setGoTopMode(closest === sections.length - 1);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections.length]);

  const handleArrowClick = () => {
    if (!goTopMode) {
      let nextIndex = Math.max(activeIndex, lastScrolledIndex) + 1;
      if (nextIndex < sections.length) {
        const targetRef = sections[nextIndex];
        if (targetRef?.current) {
          targetRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
        setLastScrolledIndex(nextIndex);
        if (nextIndex === sections.length - 1) setGoTopMode(true);
      }
    } else {
      if (heroRef.current) {
        heroRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setGoTopMode(false);
      setLastScrolledIndex(0);
    }
  };

  return (
    <div ref={heroRef} className="relative">
      <PageLayout
        banner={<HomeBanner />}
        bodyStyle="relative  pb-5 "
        bannerLink={"HomePage_banner.png"}
      >
        <DownArrow
          flipped={goTopMode}
          onClick={handleArrowClick}
          arrowAbsolute={arrowAbsolute}
          footerRef={footerRef}
        />
        <div ref={homeParaRef}>
          <HomePagePara />
        </div>
        <div ref={counterRef}>
          <CounterLayout />
        </div>
        <div ref={journeyRef}>
          <KnowYourJourney />
        </div>
        <div ref={eventsRef}>
          {!isMobile ? <UpcomingEvents /> : <UpcomingEventsMobile />}
        </div>
        <div ref={flashRef}>
          <FlashNewsLayout />
        </div>
        <div ref={prideRef}>
          <OurPride />
        </div>
        <div ref={marqueeRef}>
          <MarqueeContainer />
        </div>
        {/* Place footerRef here! */}
        <footer ref={footerRef} id="site-footer">
          {/* Footer Content */}
        </footer>
      </PageLayout>
    </div>
  );
}

// DownArrow with correct prop handling
export function DownArrow({ flipped, onClick, arrowAbsolute, footerRef }) {
  // arrowAbsolute: if true absolute, else fixed
  return (
    <div
      onClick={onClick}
      className={`${
        arrowAbsolute ? "absolute" : "fixed"
      } bottom-5 right-6 px-1 py-2 rounded-full cursor-pointer`}
      style={{
        zIndex: 80,
        // If absolute, lock it above the footer by placing it at the bottom of the last section container
        ...(arrowAbsolute && footerRef && footerRef.current
          ? { left: "unset", right: "1.5rem" }
          : {}),
      }}
    >
      <ChevronsDown
        size={30}
        className={`animate-bounce transition-transform duration-300 text-primary-highlight ${
          flipped ? "rotate-180 -translate-y-1" : " translate-y-1"
        }`}
      />
    </div>
  );
}

export default HomePage;
