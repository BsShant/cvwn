import React, { useState } from "react";
import DataInputModal from "../../protectedComponents/dataInputmodal/DataInputModal";
import { useNav } from "../../protectedComponents/UseNav/UseNav";

import { server } from "../../utils/fetch";
import "./styles.css";
import EventData from "../../protectedComponents/eventData/eventData";
import EventTable from "../../protectedComponents/eventTable/eventTable";
const CaseStudyPage = () => {
  const eventRef = useNav('Event');

  const [CaseModalVisible, setCaseModalVisible] = useState(false);

  return (
    <div ref={eventRef} id="EventContainer">
      <div className="container">
        <div className="admin-product-inner-section">
          <div className="admin-header">Case Study Page</div>
          <div className="admin-inner-section">
            <button
              className="choose-button"
              onClick={() => setCaseModalVisible(true)}
            >
              Add Event
            </button>
            <DataInputModal
              setDataModalVisible={setCaseModalVisible}
              dataModalVisible={CaseModalVisible}
            >
              <EventData url={`${server}/caseStudy`} method="POST" />
            </DataInputModal>
            <EventTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPage;
