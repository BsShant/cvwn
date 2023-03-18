import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HeroSlider from "../heroSlider/HeroSlider";
// import ParticlesComponent from "../Particle/Particle";
import "./styles.scss";
import Tilt from "react-tilt";
import NepalSvg from "../NepalSvg/NepalSvg";
const HeroSection = () => {
  const landingHero = useSelector((state) => state.landingStore.landingHero);
  return (
    <div className="landing-page-hero">
      {/* <ParticlesComponent /> */}
      {/* <div className="container"> */}
      <div className="landing-page-inner-container">
        <div
          className="container"
          style={
            {
              // position: "relative",
              // width: "100%",
              // margin: "auto",
              // padding: 0,
            }
          }
        >
          <div
            className="hero-text-con"
            style={{
              position: "absolute",
              zIndex: 3,
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
          <div className="hero-section-text">
              <Tilt className="Tilt" options={{ max: 25 }} style={{}}>
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
        </div>
        <div
          className="row"
          style={{
            width: "100%",
            margin: "auto",
            padding: 0,
          }}
        >
          <div className="col-lg-12" style={{ padding: "0px" }}>
            <div className="hero-section-image">
              <HeroSlider />
              {/* <NepalSvg /> */}
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
