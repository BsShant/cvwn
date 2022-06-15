import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HeroSlider from "../heroSlider/HeroSlider";
import ParticlesComponent from "../Particle/Particle";
import "./styles.scss";
import Tilt from "react-tilt";
const HeroSection = () => {
  const landingHero = useSelector((state) => state.landingStore.landingHero);
  return (
    <div className="landing-page-hero">
      <ParticlesComponent />
      <div className="container">
        <div className="landing-page-inner-container">
          <div className="row" style={{ position: "relative" }}>
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="hero-section-text">
                <Tilt
                  className="Tilt"
                  options={{ max: 25 }}
                  style={{  }}
                >
                  <div className="heroheading">
                    {landingHero ? landingHero.heading : ""}
                  </div>
                </Tilt>
                <div className="herosubHeading">
                  {landingHero ? landingHero.subHeading : ""}
                </div>
                <Link className="main-btnn" to="/about">
                  About Us
                </Link>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="hero-section-image">
                <HeroSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
