import { message, Table } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingDonationStarts } from "../../store/getInvolvedReducer/getInvolvedStore.actions";
import { fetchingArticleStarts } from "../../store/resourceReducer/resourceStore.actions";
import { server } from "../../utils/fetch";
import ArticleData from "../articleData/articleData";
import DataInputModal from "../dataInputmodal/DataInputModal";
import DonationData from "../donationData/donationData";
import "./styles.css";

const DonationTable = () => {
  let url = `${server}/donation`;
  const dispatch = useDispatch();
  const donation = useSelector((state) => state.getInvolvedStore.donation);
  const [donationEditModalVisible, setDonationEditModalVisible] =
    useState(false);
  const [selectedDonation, setSelectedDonation] = useState({});
  const tableItemEdit = (record) => {
    setSelectedDonation(donation.find((data) => data.id == record.id));
    setDonationEditModalVisible(true);
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
        dispatch(fetchingDonationStarts());
        message.success("Volunteer Deleted!");
      })
      .catch((error) => {
        message.error("Volunteer Deletion Failed!");
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
      title: "Image",
      dataIndex: "image",
      key: "image",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
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
      <Table dataSource={donation} columns={columns} />
      <DataInputModal
        setDataModalVisible={setDonationEditModalVisible}
        dataModalVisible={donationEditModalVisible}
      >
        <DonationData updateData={selectedDonation} url={url} method="PUT" />
      </DataInputModal>
    </div>
  );
};

export default DonationTable;
