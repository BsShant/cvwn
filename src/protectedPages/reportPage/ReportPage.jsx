import React, { useState } from "react";
import DataInputModal from "../../protectedComponents/dataInputmodal/DataInputModal";
import { useNav } from "../../protectedComponents/UseNav/UseNav";

import { server } from "../../utils/fetch";
import "./styles.css";
import EventData from "../../protectedComponents/eventData/eventData";
import EventTable from "../../protectedComponents/eventTable/eventTable";
import ReportData from "../../protectedComponents/reportData/reportData";
import ReportTable from "../../protectedComponents/reportTable/reportTable";
const ReportPage = () => {
  const eventRef = useNav("Event");

  const [ReportModalVisible, setReportModalVisible] = useState(false);

  return (
    <div ref={eventRef} id="EventContainer">
      <div className="container">
        <div className="admin-product-inner-section">
          <div className="admin-header">Annual Report Page</div>
          <div className="admin-inner-section">
            <button
              className="choose-button"
              onClick={() => setReportModalVisible(true)}
            >
              Add Event
            </button>
            <DataInputModal
              setDataModalVisible={setReportModalVisible}
              dataModalVisible={ReportModalVisible}
            >
              <ReportData url={`${server}/annualReport`} method="POST" />
            </DataInputModal>
            <ReportTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
