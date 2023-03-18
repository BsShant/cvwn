import { message, Table } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingEventStarts } from "../../store/eventReducer/eventStore.actions";
import { server } from "../../utils/fetch";
import DataInputModal from "../dataInputmodal/DataInputModal";
import EventData from "../eventData/eventData";
import EventMediaData from "../eventMediaData/eventMediaData";
import "./styles.css";

const EventMediaTable = () => {
  let url = `${server}/event/eventMedia`;
  const dispatch = useDispatch();
  const event = useSelector((state) => state.eventStore.event).filter(
    (eve) => eve.status != "upcoming"
  );
  const [eventEditModalVisible, setEventEditModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState({});
  const tableItemEdit = (record) => {
    setSelectedEvent(event.find((data) => data.id == record.id));
    setEventEditModalVisible(true);
  };
  
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text, record) => (
        <div className="category-table-name">{text}</div>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Edit",
      key: "edit",
      render: (text, record) => (
        <button className="table-button" onClick={() => tableItemEdit(record)}>
          Edit
        </button>
      ),
      responsive: ["lg"],
    },
  ];
  return (
    <div>
      <Table dataSource={event} columns={columns} />
      <DataInputModal
        setDataModalVisible={setEventEditModalVisible}
        dataModalVisible={eventEditModalVisible}
      >
        <EventMediaData updateData={selectedEvent} url={url} method="PUT" />
      </DataInputModal>
    </div>
  );
};

export default EventMediaTable;
