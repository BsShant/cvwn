import { message, Table } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingEventStarts } from "../../store/eventReducer/eventStore.actions";
import { server } from "../../utils/fetch";
import DataInputModal from "../dataInputmodal/DataInputModal";
import EventData from "../eventData/eventData";
import "./styles.css";

const EventTable = () => {
  let url = `${server}/event`;
  const dispatch = useDispatch();
  const event = useSelector((state) => state.eventStore.event);
  const [eventEditModalVisible, setEventEditModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState({});
  const tableItemEdit = (record) => {
    setSelectedEvent(event.find((data) => data.id == record.id));
    setEventEditModalVisible(true);
  };
  const tableItemDelete = (record) => {
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: record.id }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchingEventStarts());
        message.success("Event Deleted!");
      })
      .catch((error) => {
        message.error("Event Deletion Failed!");
      });
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
      title: "Image",
      dataIndex: "image",
      key: "image",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
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
    {
      title: "Delete",
      key: "delete",
      render: (text, record) => (
        <button
          className="table-button"
          onClick={() => tableItemDelete(record)}
        >
          Delete
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
        <EventData updateData={selectedEvent} url={url} method="PUT" />
      </DataInputModal>
    </div>
  );
};

export default EventTable;
