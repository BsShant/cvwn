import { message, Table } from "antd";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingContactStarts } from "../../store/contactReducer/contactStore.actions";
import { fetchSubscriber } from "../../utils/api-calls/subscriberCalls";
import { server } from "../../utils/fetch";
import ContactData from "../contactData/contactData";
import DataInputModal from "../dataInputmodal/DataInputModal";
import SubscriberData from "../subscriberData/subscriberData";

import "./styles.css";

const SubscriberTable = () => {
  const [subscribers, setSubscribers] = useState([]);
  const fetchData = async () => {
    const newSubs = await fetchSubscriber();
    setSubscribers(newSubs);
  };
  useEffect(() => {
    fetchData()
  }, []);
  let url = `${server}/subscriber`;
  const dispatch = useDispatch();
  // const contact = useSelector((state) => state.contactStore.contact);
  const [subscriberEditModalVisible, setSubscriberEditModalVisible] =
    useState(false);
  const [selectedSubscriber, setSelectedSubscriber] = useState({});
  const tableItemEdit = (record) => {
    setSelectedSubscriber(subscribers.find((data) => data.id == record.id));
    setSubscriberEditModalVisible(true);
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
        dispatch(fetchingContactStarts());
        console.log("Deleteing Subscriber Success");
        message.success("Subscriber Deleted!");
      })
      .catch((error) => {
        console.log("Deleteing Subscriber Failed: ", error);
        message.error("SubscriberDeletion Failed!");
      });
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div className="category-table-name">{text}</div>
      ),
    },

    {
      title: "Email",
      dataIndex: "email",
      key: "email",
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
      <Table dataSource={subscribers} columns={columns} />
      <DataInputModal
        setDataModalVisible={setSubscriberEditModalVisible}
        dataModalVisible={subscriberEditModalVisible}
      >
        <SubscriberData
          updateData={selectedSubscriber}
          url={url}
          method="PUT"
        />
      </DataInputModal>
    </div>
  );
};

export default SubscriberTable;
