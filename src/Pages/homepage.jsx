import React from "react";
import { useSelector } from "react-redux";
import Fixedbanner from "../Components/FixedBanner/fixed-banner.component";
import HeroSection from "../Components/heroSection/HeroSection";
import LandingAbout from "../Components/LandingAbout/LandingAbout";
import LandingPartners from "../Components/LandingPartners/LandingPartners";
import EventSection from "../Components/Main content/events.component";
import MainContent from "../Components/Main content/main-content.coponent";
import NepalArea from "../Components/NepalArea/NepalArea";
import EventCarousel from "../Components/Owl/owlcarousel.component";
import MainSlider from "../Components/Slider/main-slider.component";
import "./homepage.styles.scss";
import { server } from "../utils/fetch";

export default function HomePage() {
  const partnerBg = useSelector((state) => state.landingStore.partnerBg);

  return (
    <div className="home">
      {/* <MainSlider /> */}
      <HeroSection />
      <MainContent />
      <LandingAbout />
      <EventCarousel />
      {partnerBg && partnerBg.image ? (
        <div
          className="landing-outer-partner"
          style={{
            background: `url(${server}/${partnerBg.image})`,
          }}
        >
          <LandingPartners />
        </div>
      ) : null}
      <NepalArea />
      <Fixedbanner />
    </div>
  );
}
