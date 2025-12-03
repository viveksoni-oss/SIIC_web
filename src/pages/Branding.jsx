import { motion } from "framer-motion";
import PageLayout from "../components/PageLayout";
import BrandingBanner from "../components/banners/BrandingBanner";
import LetUsKnow from "./../components/Utility Components/LetUsKnow";
import ServiceCard from "./../components/Branding/ServiceCard";
import HighlightedText from "./../components/Utility Components/HighlightedText";
import { SERVICES_DATA } from "./../data/ServicesData";
import BannerTemplate from "@/components/banners/BannerTemplate";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

// Hero Section Component
function BrandingHero() {
  return (
    <motion.section
      initial="initial"
      animate="animate"
      variants={fadeInUp}
      className="pt-10 pb-16 md:pb-20"
    >
      <div className="flex flex-col xl:flex-row xl:items-start items-center justify-start gap-8 xl:gap-20 2xl:gap-40 px-4 xl:px-16">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="shrink-0 w-full xl:w-auto max-w-md xl:max-w-lg"
        >
          <img
            src="Branding/Branding.png"
            alt="SIIC Branding Services"
            className="w-full h-auto rounded-lg shadow-md"
            loading="eager"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1 space-y-6"
        >
          <h1 className="text-3xl sm:text-4xl xl:text-[40px] 2xl:text-5xl font-extralight leading-tight">
            Build your brand with{" "}
            <HighlightedText weight={700}>SIIC</HighlightedText>
          </h1>

          <p className="text-lg sm:text-xl xl:text-[20px] font-medium text-[#1f1f1f]/75 max-w-[455px]">
            Professional branding support for incubated startups, designed to
            stand out.
          </p>

          <div className="text-base xl:text-[16px] text-[#1f1f1f]/75 space-y-4 max-w-[600px] text-justify">
            <p>
              At SIIC, we help startups craft strong, memorable brands. From
              logo design to website creation, we offer creative solutions that
              communicate your vision clearly and leave a lasting impression on
              audiences.
            </p>

            <p>
              Our services include social media management, press relations,
              event branding, and content development—ensuring your startup
              looks professional and stands out. With expert support and
              storytelling guidance, SIIC empowers you to build a brand that
              grows with your venture and attracts meaningful attention.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

// Services Header Component
function ServicesHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="px-4 xl:px-8 space-y-4 mb-12"
    >
      <h2 className="text-3xl sm:text-4xl xl:text-[40px] font-thin">
        Services We <HighlightedText weight={700}>Offer</HighlightedText>
      </h2>
      <p className="font-medium text-[#1f1f1f]/75 text-lg sm:text-xl xl:text-[20px] max-w-4xl">
        Explore the tools, spaces, and resources that empower startups to
        innovate and scale faster.
      </p>
    </motion.div>
  );
}

// Services Grid Component
function ServicesGrid() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      className="px-4 xl:px-8 pb-1"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
        {SERVICES_DATA.map((service, index) => (
          <motion.div
            key={service.id}
            variants={cardVariants}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ServiceCard data={service} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// Main Branding Component
function Branding() {
  return (
    <PageLayout
      bodyStyle="-mt-60 z-40 relative"
      banner={
        <BannerTemplate
          heading="Branding Support to tell"
          highlightedText="your"
          headingSuffix="Story."
          description=" SIIC connects innovators to find their co-founders, accelerating
            ventures through shared expertise."
        />
      }
    >
      {/* Hero Section */}
      <BrandingHero />

      {/* Services Section */}
      <section className="pt-8 px-8 pb-30">
        <ServicesHeader />
        <ServicesGrid />
      </section>

      {/* Contact Section */}
      {/* <LetUsKnow /> */}
    </PageLayout>
  );
}

export default Branding;
