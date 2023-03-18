import React, { useRef, useState } from "react";
import "./styles.css";
import { useNav } from "../../protectedComponents/UseNav/UseNav";
import LandingDonate from "../../protectedComponents/LandingDonate/LandingDonate";
import LandingHero from "../../protectedComponents/LandingHero/LandingHero";
import LandingAbout from "../../protectedComponents/aboutSection/AboutSection";
import PartnerData from "../../protectedComponents/partnersData/partnersData";
import DataInputModal from "../../protectedComponents/dataInputmodal/DataInputModal";
import PartnerTable from "../../protectedComponents/partnerTable/partnerTable";
import { server } from "../../utils/fetch";
import MembersData from "../../protectedComponents/membersData/membersData";
import MembersTable from "../../protectedComponents/membersTable/membersTable";
import HeroSliderData from "../../protectedComponents/heroSliderData/heroSLiderData";
import LandingPartnerBg from "../../protectedComponents/LandingPartnerBg/LandingPartnerBg";
const LandingPage = () => {
  const landingRef = useNav("Landing");
  const [PartnerModalVisible, setPartnerModalVisible] = useState(false);
  const [MemberModalVisible, setMemberModalVisible] = useState(false);
  const [heroModalVisible, setHeroModalVisible] = useState(false);

  return (
    <div ref={landingRef} id="LandingContainer">
      <div className="container">
        <div className="admin-landing-inner-section">
          <div className="admin-header">Landing Page Section</div>
          <div className="admin-inner-section">
            <div className="admin-sub-heading">Update Hero Slider</div>
            <button
              className="choose-button"
              onClick={() => setHeroModalVisible(true)}
            >
              Update SLider
            </button>
            <DataInputModal
              setDataModalVisible={setHeroModalVisible}
              dataModalVisible={heroModalVisible}
            >
              <HeroSliderData
                // setDataModalVisible={setHeroModalVisible}
                url={`${server}/landingSlider`}
                method="PUT"
              />
            </DataInputModal>
          </div>
          <LandingHero />
          <LandingAbout />
          <LandingDonate />
        </div>
        <LandingPartnerBg />
        <div className="admin-inner-section">
          <div className="admin-sub-heading">Partner</div>
          <button
            className="choose-button"
            onClick={() => setPartnerModalVisible(true)}
          >
            Add Partner
          </button>
          <DataInputModal
            setDataModalVisible={setPartnerModalVisible}
            dataModalVisible={PartnerModalVisible}
          >
            <PartnerData url={`${server}/partner`} method="POST" />
          </DataInputModal>
          <PartnerTable />
        </div>

        <div className="admin-inner-section">
          <div className="admin-sub-heading">Member</div>
          {/* <button
            className="choose-button"
            onClick={() => setMemberModalVisible(true)}
          >
            Add Member
          </button> */}
          <DataInputModal
            setDataModalVisible={setMemberModalVisible}
            dataModalVisible={MemberModalVisible}
          >
            <MembersData url={`${server}/member`} method="POST" />
          </DataInputModal>
          <MembersTable />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
