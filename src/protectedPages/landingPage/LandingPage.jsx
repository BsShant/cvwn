import React, { useRef, useState } from "react";
import "./styles.css";
import { useNav } from "../../protectedComponents/UseNav/UseNav";
import LandingDonate from "../../protectedComponents/LandingDonate/LandingDonate";
import LandingHero from "../../protectedComponents/LandingHero/LandingHero";
import LandingAbout from "../../protectedComponents/aboutSection/AboutSection";
const LandingPage = () => {
  const landingRef = useNav("Landing");

  return (
    <div ref={landingRef} id="LandingContainer">
      <div className="container">
        <div className="admin-landing-inner-section">
          <div className="admin-header">Landing Page Section</div>
          <LandingHero />
          <LandingAbout />
          <LandingDonate />
          {/* <LandingService /> */}
          {/* <div className="admin-inner-section">
            <div className="admin-sub-heading">Team Section</div>
            <button
              className="choose-button"
              onClick={() => setTeamDataModalVisible(true)}
            >
              Add Team
            </button>
            <DataInputModal
              setDataModalVisible={setTeamDataModalVisible}
              dataModalVisible={teamDataModalVisible}
            >
              <TeamData url={`${server}/team`} method="POST" />
            </DataInputModal>
            <TeamTable />
          </div>

          <div className="admin-inner-section">
            <div className="admin-sub-heading">Testimonial Section</div>
            <button
              className="choose-button"
              onClick={() => setTestimonialDataModalVisible(true)}
            >
              Add Testimonial
            </button>
            <DataInputModal
              setDataModalVisible={setTestimonialDataModalVisible}
              dataModalVisible={testimonialDataModalVisible}
            >
              <TestimonialData url={`${server}/testimonial`} method="POST" />
            </DataInputModal>
            <TestimonialTable />
  </div>*/}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
