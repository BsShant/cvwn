import React, { useRef, useState } from "react";
import "./styles.css";
import { useNav } from "../../protectedComponents/UseNav/UseNav";
import LandingDonate from "../../protectedComponents/LandingDonate/LandingDonate";
import LandingHero from "../../protectedComponents/LandingHero/LandingHero";
import LandingAbout from "../../protectedComponents/aboutSection/AboutSection";
import SettingEmail from "../../protectedComponents/SettingEmail/SettingEmail";
import SettingPassword from "../../protectedComponents/SettingPassword/SettingPassword";
import SettingUserName from "../../protectedComponents/SettingUserName/SettingUserName";
const SettingPage = () => {
  return (
    <div>
      <div className="container">
        <div className="admin-landing-inner-section">
          <div className="admin-header">Setting Page Section</div>
          <SettingEmail />
          <SettingPassword />
          <SettingUserName />
        </div>
      </div>
    </div>
  );
};

export default SettingPage;
