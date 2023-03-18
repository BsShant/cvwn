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
import EsewaCred from "../../protectedComponents/EsewaCred/EsewaCred";
import Khalti from "../../protectedComponents/KhaltiCred/KhaltiCred";
import BankCred from "../../protectedComponents/BankCred/BankCred";
import DonationInfoData from "../../protectedComponents/donationInfoData/DonationInfoData";
import DonationInfoTable from "../../protectedComponents/donationInfoTable/DonationInfoTable";
const GetInvolvedPage = () => {
  const articleRef = useNav("GetInvolved");
  const [announcementModalVisible, setAnnouncementModalVisible] =
    useState(false);

  const [DonateModalVisible, setDonateModalVisible] = useState(false);
  const [DonationInfoModalVisible, setDonationInfoModalVisible] = useState(false);

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

          {/* <VolunteerHero /> */}

          <DonateHero />

          {/* <EsewaCred />
          <Khalti />
          <BankCred /> */}
          <div className="admin-inner-section">
            <div className="admin-sub-heading">Donation Info</div>
            <button
              className="choose-button"
              onClick={() => setDonationInfoModalVisible(true)}
            >
              Add Donation Info
            </button>
            <DataInputModal
              setDataModalVisible={setDonationInfoModalVisible}
              dataModalVisible={DonationInfoModalVisible}
              view={true}
            >
              <DonationInfoData
                view={true}
                url={`${server}/donationInfo`}
                method="POST"
              />
            </DataInputModal>
            <DonationInfoTable />
          </div>

          <div className="admin-inner-section">
            <div className="admin-sub-heading">Donation</div>

            <DataInputModal
              setDataModalVisible={setDonateModalVisible}
              dataModalVisible={DonateModalVisible}
              view={true}
            >
              <DonationData
                view={true}
                url={`${server}/donation`}
                method="POST"
              />
            </DataInputModal>
            <DonationTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolvedPage;
