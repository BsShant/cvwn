import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./styles.scss";
const LandingAbout = () => {
  const landingAbout = useSelector((state) => state.landingStore.landingAbout);

  return (
    <div className="landing-about-section">
      <div className="container">
        <div className="landing-about-inner-section">
          <div className="landing-about-us-text">
            <div className="landing-about-heading">
              {landingAbout ? landingAbout.title : ""}
            </div>
            <div className="about-us-detail">
              {landingAbout ? landingAbout.detail : ""}
            </div>
            <div className="about-us-button-container">
              <Link className="main-btnn" to="/about">
                About Us
              </Link>
            </div>
          </div>
          {/* <div className="landing-about-us-image"></div> */}
        </div>
      </div>
    </div>
  );
};

export default LandingAbout;
