import React, { useState } from "react";
import DataInputModal from "../../protectedComponents/dataInputmodal/DataInputModal";
import { useNav } from "../../protectedComponents/UseNav/UseNav";

import { server } from "../../utils/fetch";
import "./styles.css";
import EventData from "../../protectedComponents/eventData/eventData";
import EventTable from "../../protectedComponents/eventTable/eventTable";
import RequestData from "../../protectedComponents/requestData/requestData";
import RequestTable from "../../protectedComponents/requestTable/requestTable";
import EventMediaData from "../../protectedComponents/eventMediaData/eventMediaData";
import EventMediaTable from "../../protectedComponents/eventMediaTable/eventMediaTable";
const EventPage = () => {
  const eventRef = useNav('Event');

  const [eventModalVisible, setEventModalVisible] = useState(false);
  const [requestModalVisible, setRequestModalVisible] = useState(false);

  return (
    <div ref={eventRef} id="EventContainer">
      <div className="container">
        <div className="admin-product-inner-section">
          <div className="admin-header">Event Page</div>
          <div className="admin-inner-section">
          <div className="admin-sub-heading">Events</div>

            <button
              className="choose-button"
              onClick={() => setEventModalVisible(true)}
            >
              Add Event
            </button>
            <DataInputModal
              setDataModalVisible={setEventModalVisible}
              dataModalVisible={eventModalVisible}
            >
              <EventData url={`${server}/event`} method="POST" />
            </DataInputModal>
            <EventTable />
          </div>
          <div className="admin-inner-section">
          <div className="admin-sub-heading">Event Media</div>
            <EventMediaTable media />
          </div>
          <div className="admin-inner-section">
          <div className="admin-sub-heading">Event Requests</div>
            <button
              className="choose-button"
              onClick={() => setRequestModalVisible(true)}
            >
              Add Request
            </button>
            <DataInputModal
              setDataModalVisible={setRequestModalVisible}
              dataModalVisible={requestModalVisible}
            >
              <RequestData url={`${server}/request`} method="POST" />
            </DataInputModal>
            <RequestTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
