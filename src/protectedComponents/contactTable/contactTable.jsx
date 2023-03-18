import { message, Table } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingContactStarts } from "../../store/contactReducer/contactStore.actions";
import { server } from "../../utils/fetch";
import ContactData from "../contactData/contactData";
import DataInputModal from "../dataInputmodal/DataInputModal";

import "./styles.css";

const ContactTable = () => {
  let url = `${server}/contact`;
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.contactStore.contact);
  const [contactEditModalVisible, setContactEditModalVisible] = useState(false);
  const [selectedContact, setSelectedContact] = useState({});
  const tableItemEdit = (record) => {
    setSelectedContact(contact.find((data) => data.id == record.id));
    setContactEditModalVisible(true);
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
        message.success("Fund Raiser Deleted!");
      })
      .catch((error) => {
        message.error("Fund Raiser Deletion Failed!");
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
      title: "Subject",
      dataIndex: "subject",
      key: "subject",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    
   
    {
      title: "View",
      key: "view",
      render: (text, record) => (
        <button className="table-button" onClick={() => tableItemEdit(record)}>
          View
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
      <Table dataSource={contact} columns={columns} />
      <DataInputModal
        setDataModalVisible={setContactEditModalVisible}
        dataModalVisible={contactEditModalVisible}
      >
        <ContactData updateData={selectedContact} url={url} method="PUT" />
      </DataInputModal>
    </div>
  );
};

export default ContactTable;
