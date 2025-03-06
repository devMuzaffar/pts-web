"use client";
import {
  Landing,
  About,
  FeatureCards,
  ToppersList,
  Statistics,
  CountryMap,
  OurBooks,
  Quote,
  Blogs,
  Testimonial,
  FAQ,
} from "./components/index";
import SiteLayout from "./SiteLayout";

const MainSections = () => {
  return (
    <div>
      <Landing />
      <About />
      <FeatureCards />
      <ToppersList />
      <Statistics />
      <CountryMap />
      <OurBooks />
      <Quote />
      <Testimonial />
      <Blogs />
      <FAQ />
    </div>
  );
};

export default function Home() {
  return (
      <SiteLayout>
        <MainSections />
      </SiteLayout>
  );
}
