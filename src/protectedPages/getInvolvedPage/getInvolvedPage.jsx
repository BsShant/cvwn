import React, { useState } from "react";
import DataInputModal from "../../protectedComponents/dataInputmodal/DataInputModal";
import { useNav } from "../../protectedComponents/UseNav/UseNav";

import { server } from "../../utils/fetch";
import "./styles.css";
import AnnouncementData from "../../protectedComponents/announcementData/announcementData";
import AnnouncementTable from "../../protectedComponents/announcementTable/announcementTable";
import DonationData from "../../protectedComponents/donationData/donationData";
import DonationTable from "../../protectedComponents/donationTable/donationTable";
import VolunteerTable from "../../protectedComponents/volunteerTable/volunteerTable";
import VolunteerData from "../../protectedComponents/volunteerData/volunteerData";
import VolunteerHero from "../../protectedComponents/VolunteerHero/VolunteerHero";
import DonateHero from "../../protectedComponents/DonateHero/DonateHero";
const GetInvolvedPage = () => {
  const articleRef = useNav("GetInvolved");
  const [announcementModalVisible, setAnnouncementModalVisible] =
    useState(false);

  const [VolunteerModalVisible, setVolunteerModalVisible] = useState(false);
  const [DonateModalVisible, setDonateModalVisible] = useState(false);

  return (
    <div ref={articleRef} id="GetInvolvedContainer">
      <div className="container">
        <div className="admin-product-inner-section">
          <div className="admin-header">Get Involved Page</div>
          <div className="admin-inner-section">
            <div className="admin-sub-heading">Announcement</div>
            <button
              className="choose-button"
              onClick={() => setAnnouncementModalVisible(true)}
            >
              Add Announcement
            </button>
            <DataInputModal
              setDataModalVisible={setAnnouncementModalVisible}
              dataModalVisible={announcementModalVisible}
            >
              <AnnouncementData url={`${server}/announcement`} method="POST" />
            </DataInputModal>
            <AnnouncementTable />
          </div>

          <div className="admin-inner-section">
            <div className="admin-sub-heading">Volunteer</div>
            <button
              className="choose-button"
              onClick={() => setVolunteerModalVisible(true)}
            >
              Add Volunteer
            </button>
            <DataInputModal
              setDataModalVisible={setVolunteerModalVisible}
              dataModalVisible={VolunteerModalVisible}
            >
              <VolunteerData url={`${server}/volunteer`} method="POST" />
            </DataInputModal>
            <VolunteerTable />
          </div>
          <VolunteerHero />

          <div className="admin-inner-section">
            <div className="admin-sub-heading">Donation</div>
            <button
              className="choose-button"
              onClick={() => setDonateModalVisible(true)}
            >
              Add Donation
            </button>
            <DataInputModal
              setDataModalVisible={setDonateModalVisible}
              dataModalVisible={DonateModalVisible}
            >
              <DonationData url={`${server}/donation`} method="POST" />
            </DataInputModal>
            <DonationTable />
          </div>

          <DonateHero />
        </div>
      </div>
    </div>
  );
};

export default GetInvolvedPage;
